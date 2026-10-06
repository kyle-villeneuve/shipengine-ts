import { writeFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";

// The docs site serves the current spec; github.com/ShipEngine/shipengine-openapi is deprecated.
const SPEC_URL = "https://docs.shipstation.com/_spec/apis/@shipengine/openapi.json";
const OUTPUT = new URL("../src/definitions.ts", import.meta.url);

const HTTP_METHODS = [
  "get",
  "post",
  "put",
  "delete",
  "patch",
  "options",
  "head",
  "trace",
];

function dedupeOperationIds(spec) {
  const seen = new Map();
  const renames = [];

  for (const [pathKey, pathItem] of Object.entries(spec.paths ?? {})) {
    if (!pathItem) continue;
    for (const method of HTTP_METHODS) {
      const op = pathItem[method];
      if (!op?.operationId) continue;

      const original = op.operationId;
      if (!seen.has(original)) {
        seen.set(original, 1);
        continue;
      }

      const n = seen.get(original) + 1;
      seen.set(original, n);
      const renamed = `${original}_${n}`;
      op.operationId = renamed;
      renames.push({ from: original, to: renamed, where: `${method.toUpperCase()} ${pathKey}` });
    }
  }

  return renames;
}

// The spec marks a $ref as nullable, readOnly or partly required by adding a property-less
// member to its allOf, e.g. allOf: [{ $ref }, { type: "object", nullable: true }].
// openapi-typescript renders that member as Record<string, never> and intersects it in,
// which no value satisfies. Move such modifiers onto the parent schema instead.
const MODIFIER_KEYS = new Set(["type", "nullable", "readOnly", "writeOnly", "required", "description"]);

function hoistAllOfModifiers(node) {
  const hoisted = [];
  (function walk(x, where) {
    if (!x || typeof x !== "object") return;
    if (Array.isArray(x.allOf)) {
      const kept = [];
      for (const member of x.allOf) {
        const isModifier =
          member && !member.$ref && Object.keys(member).every((k) => MODIFIER_KEYS.has(k));
        if (!isModifier) {
          kept.push(member);
          continue;
        }
        if (member.nullable) x.nullable = true;
        if (member.readOnly) x.readOnly = true;
        if (member.writeOnly) x.writeOnly = true;
        if (member.required) x.required = [...new Set([...(x.required ?? []), ...member.required])];
        hoisted.push(where);
      }
      x.allOf = kept;
    }
    for (const [k, v] of Object.entries(x)) walk(v, `${where}/${k}`);
  })(node, "#");
  return hoisted;
}

const res = await fetch(SPEC_URL);
if (!res.ok) throw new Error(`Failed to fetch spec: ${res.status}`);
const spec = await res.json();

const renames = dedupeOperationIds(spec);
for (const where of hoistAllOfModifiers(spec)) {
  console.log(`hoisted allOf modifier at ${where}`);
}
for (const r of renames) {
  console.log(`renamed operationId ${r.from} -> ${r.to} (${r.where})`);
}

// A default is what the server applies when a field is omitted, so it must not make the field
// required in a request body.
const ast = await openapiTS(spec, { defaultNonNullable: false });
const code = astToString(ast);
await writeFile(OUTPUT, code);
console.log(`wrote ${OUTPUT.pathname}`);
