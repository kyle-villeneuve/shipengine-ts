import { writeFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";

const SPEC_URL =
  "https://raw.githubusercontent.com/ShipEngine/shipengine-openapi/master/openapi.json";
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

const res = await fetch(SPEC_URL);
if (!res.ok) throw new Error(`Failed to fetch spec: ${res.status}`);
const spec = await res.json();

const renames = dedupeOperationIds(spec);
for (const r of renames) {
  console.log(`renamed operationId ${r.from} -> ${r.to} (${r.where})`);
}

const ast = await openapiTS(spec);
const code = astToString(ast);
await writeFile(OUTPUT, code);
console.log(`wrote ${OUTPUT.pathname}`);
