export interface paths {
    "/v1/account/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account settings
         * @description List all account settings for the ShipEngine account
         */
        get: operations["list_account_settings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/account/settings/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account images
         * @description List all account images for the ShipEngine account
         */
        get: operations["list_account_images"];
        put?: never;
        /**
         * Create an account image
         * @description Create an Account Image
         */
        post: operations["create_account_image"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/account/settings/images/{label_image_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get account image by ID
         * @description Retrieve information for an account image.
         */
        get: operations["get_account_settings_images_by_id"];
        /**
         * Update account image by ID
         * @description Update information for an account image.
         */
        put: operations["update_account_settings_images_by_id"];
        post?: never;
        /**
         * Delete account image by ID
         * @description Delete Account Image By Id
         */
        delete: operations["delete_account_image_by_id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/addresses/recognize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Parse an address
         * @description The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.
         *
         *     Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.
         *
         *     > **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.
         */
        put: operations["parse_address"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/addresses/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Validate an address
         * @description Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
         *     ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.
         */
        post: operations["validate_address"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List batches
         * @description List Batches associated with your Shipengine account
         */
        get: operations["list_batches"];
        put?: never;
        /**
         * Create a batch
         * @description Create a Batch
         */
        post: operations["create_batch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches/external_batch_id/{external_batch_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 13553d7f-3c87-4771-bae1-c49bacef11cb */
                external_batch_id: string;
            };
            cookie?: never;
        };
        /**
         * Get batch by external ID
         * @description Get Batch By External ID
         */
        get: operations["get_batch_by_external_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches/{batch_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get batch by ID
         * @description Get Batch By ID
         */
        get: operations["get_batch_by_id"];
        /**
         * Update batch by ID
         * @description Update Batch By Id
         */
        put: operations["update_batch"];
        post?: never;
        /**
         * Delete batch by ID
         * @description Delete Batch By Id
         */
        delete: operations["delete_batch"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches/{batch_id}/add": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add to a batch
         * @description Add a Shipment or Rate to a Batch
         */
        post: operations["add_to_batch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches/{batch_id}/errors": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get batch errors
         * @description Error handling in batches are handled differently than in a single synchronous request.
         *     You must retrieve the status of your batch by getting a batch and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.
         */
        get: operations["list_batch_errors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches/{batch_id}/process/labels": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Process batch ID labels
         * @description Process Batch ID Labels
         */
        post: operations["process_batch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches/{batch_id}/remove": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove from batch
         * @description Remove a shipment or rate from a batch
         */
        post: operations["remove_from_batch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/batches/{batch_id}/user": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Assign user to a batch
         * @description Assign a user to a batch. Assigning a user replaces any existing assignment.
         */
        put: operations["assign_user_to_batch"];
        post?: never;
        /**
         * Unassign user from a batch
         * @description Remove the user assignment from a batch.
         */
        delete: operations["unassign_user_from_batch"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/carriers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List carriers
         * @description List all carriers that have been added to this account
         */
        get: operations["list_carriers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/carriers/{carrier_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get carrier by ID
         * @description Retrive carrier info by ID
         */
        get: operations["get_carrier_by_id"];
        put?: never;
        post?: never;
        /**
         * Disconnect carrier by ID
         * @description Disconnect a Carrier of the given ID from the account
         */
        delete: operations["disconnect_carrier_by_id"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/carriers/{carrier_id}/add_funds": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Add funds to carrier
         * @description Add Funds To A Carrier
         */
        put: operations["add_funds_to_carrier"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/carriers/{carrier_id}/options": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get carrier options
         * @description Get a list of the options available for the carrier
         */
        get: operations["get_carrier_options"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/carriers/{carrier_id}/packages": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * List carrier package types
         * @description List the package types associated with the carrier. This endpoint only returns carrier-provided package types, not custom package types.
         */
        get: operations["list_carrier_package_types"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/carriers/{carrier_id}/services": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * List carrier services
         * @description List the services associated with the carrier ID
         */
        get: operations["list_carrier_services"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/connections/carriers/{carrier_name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
                 * @example dhl_express
                 */
                carrier_name: components["schemas"]["carrier_name"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Connect a carrier account
         * @description Connect a carrier account
         */
        post: operations["connect_carrier"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/connections/carriers/{carrier_name}/{carrier_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
                 * @example dhl_express
                 */
                carrier_name: components["schemas"]["carrier_name"];
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Disconnect a carrier
         * @description Disconnect a carrier
         */
        delete: operations["disconnect_carrier"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/connections/carriers/{carrier_name}/{carrier_id}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The carrier name, such as `ups`, `fedex`, or `dhl_express`.
                 * @example dhl_express
                 */
                carrier_name: components["schemas"]["carrier_name_with_settings"];
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get carrier settings
         * @description Get carrier settings
         */
        get: operations["get_carrier_settings"];
        /**
         * Update carrier settings
         * @description Update carrier settings
         */
        put: operations["update_carrier_settings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/connections/insurance/shipsurance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Connect a shipsurance account
         * @deprecated
         * @description Connect a Shipsurance Account
         */
        post: operations["connect_insurer"];
        /**
         * Disconnect a shipsurance account
         * @deprecated
         * @description Disconnect a Shipsurance Account
         */
        delete: operations["disconnect_insurer"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/documents/combined_labels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Created combined label document
         * @description Download a combined label file
         */
        post: operations["create_combined_label_document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/downloads/{dir}/{subdir}/{filename}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                subdir: string;
                filename: string;
                dir: string;
            };
            cookie?: never;
        };
        /**
         * Download file
         * @description Get File
         */
        get: operations["download_file"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/environment/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List webhooks
         * @description List all webhooks currently enabled for the account.
         */
        get: operations["list_webhooks"];
        put?: never;
        /**
         * Create a webhook
         * @description Create a webhook for specific events in the environment.
         */
        post: operations["create_webhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/environment/webhooks/{webhook_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Webhook ID */
                webhook_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get webhook by ID
         * @description Retrieve individual webhook by an ID
         */
        get: operations["get_webhook_by_id"];
        /**
         * Update a webhook
         * @description Update the webhook url property
         */
        put: operations["update_webhook"];
        post?: never;
        /**
         * Delete webhook by ID
         * @description Delete a webhook
         */
        delete: operations["delete_webhook"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/provider_accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List freight provider accounts
         * @description Return the freight provider accounts connected to your account. Every freight request identifies the account it goes through with a `freight_provider_account_id`, so start here to find the ID to quote, book, and track with.
         *
         *     Only active connections are returned. An account with no freight provider connected receives an empty array.
         */
        get: operations["list_freight_provider_accounts"];
        put?: never;
        /**
         * Connect a freight provider account
         * @description Connect a freight account the seller already holds with the provider. Both connectable providers — `speedship` (WWEX) and `unishippers` — authenticate with an OAuth client ID / secret pair issued by the provider.
         *
         *     The credentials are verified against the provider before they are stored, so a `201` means the connection can be quoted against immediately.
         *
         *     A seller may hold one connection per provider. Connecting a provider that is already connected returns `409` with error code `freight_provider_already_connected` and the existing `freight_provider_account_id`. Use `PUT /v1/freight/provider_accounts/{freight_provider_account_id}/credentials` to rotate credentials on the existing connection. Use `DELETE /v1/freight/provider_accounts/{freight_provider_account_id}` to disconnect it.
         */
        post: operations["connect_freight_provider_account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/provider_accounts/{freight_provider_account_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight provider account to disconnect.
                 * @example se-4821
                 */
                freight_provider_account_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Disconnect a freight provider account
         * @description Disconnect a freight provider account, removing its stored credentials.
         *
         *     This is a soft delete: existing shipments and their tracking and documents are unaffected, but
         *     the account can no longer be quoted or booked against until it is reconnected via
         *     `POST /v1/freight/provider_accounts`.
         */
        delete: operations["disconnect_freight_provider_account"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/provider_accounts/{freight_provider_account_id}/credentials": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight provider account whose credentials to replace.
                 * @example se-4821
                 */
                freight_provider_account_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Update freight provider account credentials
         * @description Replace the credentials stored for a freight provider account — the mechanism for rotating a client secret without disconnecting.
         *
         *     The new credentials are verified against the provider before they replace the stored pair, so a failed verification leaves the existing connection working. The connection's nickname and account number are untouched.
         */
        put: operations["update_freight_provider_account_credentials"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/quotes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get freight quotes
         * @description Retrieve freight rate offers for a shipment. Each offer in the response is a bookable quote from a specific LTL carrier.
         *
         *     There are two ways to request quotes:
         *
         *     - **Inline.** Describe the shipment in the request: `ship_from`, `ship_to`, and `handling_units`.
         *     - **Linked to an existing shipment.** Provide `shipment_id`. The origin is taken from the shipment's ship-from warehouse and the destination from the order's ship-to address, so `ship_from` must be omitted, and `ship_to` may contain only `location_type`. `handling_units`, `accessorials`, and `insurance` are optional in this mode: when provided they are saved as the shipment's freight configuration, and when omitted the previously saved configuration is reused. A `ship_to.location_type` you send is saved the same way.
         *
         *     To book one of the returned offers, pass its `offer_id` to [Book a freight shipment](#operation/book_freight_shipment).
         *
         *     All dimensions are interpreted as inches and all weights as pounds.
         */
        post: operations["get_freight_quotes"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/shipments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List freight shipments
         * @description Return the freight shipments on your account, most recently created first. Results are paginated.
         */
        get: operations["list_freight_shipments"];
        put?: never;
        /**
         * Book a freight shipment
         * @description Book one of the offers returned by [Get freight quotes](#operation/get_freight_quotes). Booking dispatches the shipment with the LTL carrier and generates the shipment's documents, such as the Bill of Lading.
         *
         *     As with quoting, there are two ways to book:
         *
         *     - **Linked to an existing shipment.** Provide `shipment_id`. The shipment must already have a freight quote — call [Get freight quotes](#operation/get_freight_quotes) for it first. The origin, destination, and handling units all come from the shipment and its saved freight configuration, so `ship_from`, `ship_to`, and `handling_units` must be omitted.
         *     - **Inline.** Omit `shipment_id` and provide `ship_from`, `ship_to`, and `handling_units`. A shipment record is created for the booking and marked as shipped.
         *
         *     Pass the `offer_id` from the offer you are booking. The provider connection, carrier, and expiration are resolved server-side from the stored offer.
         */
        post: operations["book_freight_shipment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/shipments/{freight_shipment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight shipment.
                 * @example se-98765432
                 */
                freight_shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get freight shipment by ID
         * @description Retrieve a single freight shipment, including its current status, carrier reference numbers, and the documents generated for it.
         */
        get: operations["get_freight_shipment_by_id"];
        put?: never;
        post?: never;
        /**
         * Cancel a freight shipment
         * @description Cancel a booked freight shipment with the carrier. The response indicates whether the associated pickup was also cancelled.
         *
         *     Cancellation windows are set by the carrier. A shipment that has already been picked up usually cannot be cancelled, and the provider's rejection is returned as a `400 Bad Request`.
         */
        delete: operations["cancel_freight_shipment"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/shipments/{freight_shipment_id}/documents": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight shipment.
                 * @example se-98765432
                 */
                freight_shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * List freight shipment documents
         * @description List the documents available for a freight shipment, such as the Bill of Lading, pallet labels, and the proof of delivery. Documents become available as the shipment progresses: the Bill of Lading is generated at booking, while a proof of delivery only exists after delivery.
         *
         *     Each document's `url` is a path on the API host that returns the PDF, for example `https://api.shipengine.com/v1/downloads/...`.
         */
        get: operations["list_freight_shipment_documents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/shipments/{freight_shipment_id}/tracking": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight shipment.
                 * @example se-98765432
                 */
                freight_shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get freight shipment tracking
         * @description Retrieve the current tracking status and event history for a booked freight shipment directly from the carrier.
         *
         *     The shipment is tracked by its PRO number when one has been assigned, and by its BOL number otherwise. A shipment that has neither returns a `400 Bad Request` with error code `freight_tracking_not_available` — this is normal immediately after booking, before the carrier assigns a PRO number.
         */
        get: operations["get_freight_shipment_tracking"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/freight/tracking": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get freight tracking by number
         * @description Retrieve tracking for a freight shipment by its PRO or BOL number, whether or not the shipment was booked through ShipEngine. Use this when you have the carrier's reference number but no `freight_shipment_id` — for example, for a shipment booked outside the API.
         *
         *     `carrier_scac` is required as well as the number itself, because the freight provider needs the SCAC to resolve a tracking number.
         */
        get: operations["get_freight_tracking"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/insurance/shipsurance/add_funds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Add funds to insurance
         * @deprecated
         * @description You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
         *     and may want to add funds to insurance rather than keeping the account funded.
         */
        patch: operations["add_funds_to_insurance"];
        trace?: never;
    };
    "/v1/insurance/shipsurance/balance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get insurance funds balance
         * @deprecated
         * @description Retrieve the balance of your Shipsurance account.
         */
        get: operations["get_insurance_balance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List labels
         * @description This endpoint returns a list of labels that you've created. You can optionally filter the results as well as control their sort order and the number of results returned at a time.
         *
         *     By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`
         */
        get: operations["list_labels"];
        put?: never;
        /**
         * Purchase label
         * @description Purchase and print a label for shipment
         */
        post: operations["create_label"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/rates/{rate_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Rate ID */
                rate_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Purchase label with rate ID
         * @description When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used
         *     to generate a label without having to refill in the shipment information repeatedly.
         */
        post: operations["create_label_from_rate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/rate_shopper_id/{rate_shopper_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The rate selection strategy or custom rate shopper ID.
                 *
                 *     **Standard strategies:**
                 *     - `cheapest`: Lowest cost option
                 *     - `fastest`: Fastest option at the lowest price
                 *     - `best_value`: Lowest cost option arriving within 4 days
                 *
                 *     **Custom rate shopper:**
                 *     Pass a service collection GUID (e.g., `f47ac10b-58cc-4372-a567-0e02b2c3d479`)
                 *     to use a custom rate shopper configuration. The service collection must be
                 *     active and owned by the authenticated seller.
                 */
                rate_shopper_id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Purchase label with rate shopper
         * @description Purchase and print a shipping label using the Rate Shopper. The Rate
         *     Shopper automatically selects the optimal carrier and service from your
         *     wallet carriers based on the specified strategy or custom rate shopper
         *     configuration.
         *
         *     You can use a standard strategy (`cheapest`, `fastest`, `best_value`)
         *     or pass a custom rate shopper ID (service collection GUID) to use your
         *     own configured service collection for rate selection.
         *
         *     For more information about Rate Shopper strategies and use cases, see the rates
         *     documentation.
         */
        post: operations["create_label_from_rate_shopper"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/shipping_rules/{shipping_rule_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipping Rule ID */
                shipping_rule_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Purchase label with shipping rule
         * @description Purchase and print a shipping label using a Shipping Rule. The Shipping Rule automatically selects the optimal carrier and service based on the rule's configuration.
         *
         *     **Dynamic Ordering**: Service Group Rules can now use dynamic ordering (_Cheapest_ or _Fastest_) to automatically rank eligible services in real time based on live rate or transit data. This feature is currently available for US sellers with USA domestic carrier services only. For more details, see the [Configuring "Order Services By" guide](/apis/@shipengine/docs/shipping/shipping-rules-configuring-order-services-by.md).
         *
         *     The request body must NOT include `carrier_id`, `service_code`, or `shipping_rule_id` in the shipment object. If any of these fields are provided, the API will return a `400 Bad Request` error.
         */
        post: operations["create_label_from_shipping_rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/shipment/{shipment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Purchase label with shipment ID
         * @description Purchase a label using a shipment ID that has already been created with the desired address and
         *     package info.
         */
        post: operations["create_label_from_shipment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get label by ID
         * @description Retrieve information for individual labels.
         */
        get: operations["get_label_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/external_shipment_id/{external_shipment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 0bcb569d-1727-4ff9-ab49-b2fec0cee5ae */
                external_shipment_id: string;
            };
            cookie?: never;
        };
        /**
         * Get label by external shipment ID
         * @description Find a label by using the external shipment id that was used during label creation
         */
        get: operations["get_label_by_external_shipment_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}/return": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a return label
         * @description Create a return label for an existing outbound label. You can optionally specify a custom RMA (Return Merchandise Authorization) number. If no RMA number is provided, the system will auto-generate one.
         */
        post: operations["create_return_label"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}/track": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get label tracking information
         * @description Retrieve the label's tracking information
         */
        get: operations["get_tracking_log_from_label"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}/void": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Void a label by ID
         * @description Void a label by ID to get a refund.
         */
        put: operations["void_label"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}/cancel_refund": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel a label refund request
         * @description Cancel a scheduled refund request for a label. Only labels with refund status "request_scheduled" can be excluded from an upcoming refund request.
         */
        post: operations["cancel_label_refund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}/documents": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * List documents for a label
         * @description Retrieve the carrier documents registered against a label, including their processing status.
         */
        get: operations["list_label_documents"];
        put?: never;
        /**
         * Register a document for a label
         * @description Register a carrier document against a label. The response returns an `upload` target; upload the document file to that target, then call the send documents endpoint to transmit it to the carrier. Carrier information is resolved automatically from the label.
         */
        post: operations["register_label_document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}/documents/{document_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
                /**
                 * @description The unique identifier of the document.
                 * @example 7f3c1b2a-9d4e-4f5a-8c6b-2e1d0a9b8c7d
                 */
                document_id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete a label document
         * @description Delete a carrier document registered against a label. Documents that have already been sent to the carrier cannot be deleted.
         */
        delete: operations["delete_label_document"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/labels/{label_id}/documents/send": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send label documents
         * @description Transmit all uploaded documents for a label to the carrier. Documents must be uploaded to their `upload` target before they can be sent.
         */
        post: operations["send_label_documents"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/documents/{document_id}/download": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique identifier of the document.
                 * @example 7f3c1b2a-9d4e-4f5a-8c6b-2e1d0a9b8c7d
                 */
                document_id: string;
            };
            cookie?: never;
        };
        /**
         * Download a document
         * @description Download the file for a previously registered carrier document.
         */
        get: operations["download_document"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/mailing/netstamps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create netstamps
         * @description Create one or more NetStamps. Each shipment in the request produces an individual stamp with row/column positioning via `advanced_options.netstamps_options`.
         */
        post: operations["create_netstamps"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/mailing/mail_labels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create mailing labels
         * @description Create one or more mailing labels on a sheet layout. Use `mailing_options` to control which row and column to start printing from.
         */
        post: operations["create_mailing_labels"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/mailing/envelopes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create envelope
         * @description Create a single envelope shipment.
         */
        post: operations["create_envelope"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/manifests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List manifests
         * @description Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
         */
        get: operations["list_manifests"];
        put?: never;
        /**
         * Create manifest
         * @description Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
         *     rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.
         */
        post: operations["create_manifest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/manifests/{manifest_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Manifest Id */
                manifest_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get manifest by ID
         * @description Get Manifest By Id
         */
        get: operations["get_manifest_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/manifests/requests/{manifest_request_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Manifest Request Id */
                manifest_request_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get manifest request by ID
         * @description Get Manifest Request By Id
         */
        get: operations["get_manifest_request_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/packages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List custom package types
         * @description List the custom package types associated with the account
         */
        get: operations["list_package_types"];
        put?: never;
        /**
         * Create custom package type
         * @description Create a custom package type to better assist in getting accurate rate estimates
         */
        post: operations["create_package_type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/packages/{package_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Package ID */
                package_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get custom package type by ID
         * @description Get Custom Package Type by ID
         */
        get: operations["get_package_type_by_id"];
        /**
         * Update custom package type by ID
         * @description Update the custom package type object by ID
         */
        put: operations["update_package_type"];
        post?: never;
        /**
         * Delete a custom package by ID
         * @description Delete a custom package using the ID
         */
        delete: operations["delete_package_type"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/pickups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List scheduled pickups
         * @description List all pickups that have been scheduled for this carrier
         */
        get: operations["list_scheduled_pickups"];
        put?: never;
        /**
         * Schedule a pickup
         * @description Schedule a package pickup with a carrier
         */
        post: operations["schedule_pickup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/pickups/{pickup_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                pickup_id: components["schemas"]["pickup_resource_id"];
            };
            cookie?: never;
        };
        /**
         * Get pickup by ID
         * @description Get Pickup By ID
         */
        get: operations["get_pickup_by_id"];
        put?: never;
        post?: never;
        /**
         * Delete a scheduled pickup
         * @description Delete a previously-scheduled pickup by ID
         */
        delete: operations["delete_scheduled_pickup"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get shipping rates
         * @description It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
         *     so we provide functionality to show you all your options!
         */
        post: operations["calculate_rates"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rates/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get bulk rates
         * @description Get Bulk Shipment Rates
         */
        post: operations["compare_bulk_rates"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rates/estimate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Estimate rates
         * @description Get Rate Estimates
         */
        post: operations["estimate_rates"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rates/{rate_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Rate ID */
                rate_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get rate by ID
         * @description Retrieve a previously queried rate by its ID
         */
        get: operations["get_rate_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rate_shoppers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rate shoppers
         * @description Retrieve rate shoppers for the authenticated seller. By default this
         *     returns both the default rate shoppers (cheapest, fastest, best_value)
         *     and any custom rate shoppers. Use the `type` parameter to filter.
         */
        get: operations["list_rate_shoppers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/rate_shoppers/{rate_shopper_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The rate shopper identifier. Can be one of:
                 *
                 *     **Default rate shoppers (strategy name):**
                 *     - `cheapest`: Lowest cost option
                 *     - `fastest`: Fastest option at the lowest price
                 *     - `best_value`: Lowest cost option arriving within 4 days
                 *
                 *     **Custom rate shoppers:**
                 *     A UUID (e.g., `f47ac10b-58cc-4372-a567-0e02b2c3d479`) identifying
                 *     a seller-created rate shopper.
                 */
                rate_shopper_id: string;
            };
            cookie?: never;
        };
        /**
         * Get rate shopper by ID
         * @description Retrieve a single rate shopper by its identifier. Accepts both
         *     default strategy names (`cheapest`, `fastest`, `best_value`) and
         *     custom rate shopper UUIDs.
         */
        get: operations["get_rate_shopper_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/service_points/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List service points
         * @description List carrier service points by location
         */
        post: operations["service_points_list"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/service_points/{carrier_code}/{country_code}/{service_point_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier code
                 * @example stamps_com
                 */
                carrier_code: string;
                /**
                 * @description A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
                 * @example CA
                 */
                country_code: string;
                /** @example 614940 */
                service_point_id: string;
            };
            cookie?: never;
        };
        /**
         * Get service point by ID
         * @description Returns a carrier service point by using the service_point_id
         */
        get: operations["service_points_get_by_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List shipments
         * @description Get list of Shipments
         */
        get: operations["list_shipments"];
        put?: never;
        /**
         * Create shipments
         * @description Create one or multiple shipments.
         */
        post: operations["create_shipments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/external_shipment_id/{external_shipment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 0bcb569d-1727-4ff9-ab49-b2fec0cee5ae */
                external_shipment_id: string;
            };
            cookie?: never;
        };
        /**
         * Get shipment by external ID
         * @description Query Shipments created using your own custom ID convention using this endpint
         */
        get: operations["get_shipment_by_external_id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/recognize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Parse shipping info
         * @description The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.
         *
         *     Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.
         *
         *     > **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.
         */
        put: operations["parse_shipment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get shipment by ID
         * @description Get an individual shipment based on its ID
         */
        get: operations["get_shipment_by_id"];
        /**
         * Update shipment by ID
         * @description Update a shipment object based on its ID
         */
        put: operations["update_shipment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Cancel a shipment
         * @description Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first
         *     An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled
         *     would remove it from this process
         */
        put: operations["cancel_shipments"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/rates": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get shipment rates
         * @description Get Rates for the shipment information associated with the shipment ID
         */
        get: operations["list_shipment_rates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update shipments tags
         * @description Update Shipments Tags
         */
        put: operations["shipments_update_tags"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Assign user to shipments
         * @description Assigns a user to one or more shipments. You can assign a single user
         *     to up to 500 shipments at once.
         */
        post: operations["assign_user_to_shipments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/hold": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hold shipments
         * @description Holds one or more shipments until a given date. A shipment on hold has the
         *     `on_hold` status, and you can't purchase a label for it while it's on hold. On the
         *     `hold_until_date`, the shipment is released automatically and returns to the
         *     `pending` status. You can hold up to 500 shipments at once.
         *
         *     `hold_until_date` is a date-only value: any time component you send is ignored, and
         *     the date must be later than today.
         *
         *     Shipments that cannot be held — because they are not found, are cancelled, or have a
         *     purchased label — are reported in `errors`, and the remaining shipments are still held.
         *     If only some of the shipments were held, the response status is `207`. If none of them
         *     could be held, the response status is `404` when at least one shipment was not found,
         *     or `400` otherwise, and `shipment_ids` is empty.
         *
         *     To hold a single shipment, use [Hold a shipment](#operation/hold_shipment).
         */
        post: operations["hold_shipments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Restore shipments
         * @description Restores one or more shipments that are on hold. Each restored shipment returns to
         *     the `pending` status and its `hold_until_date` is cleared. You can restore up to
         *     500 shipments at once.
         *
         *     Shipments that cannot be restored — because they are not found or are not on hold —
         *     are reported in `errors`, and the remaining shipments are still restored. If only some
         *     of the shipments were restored, the response status is `207`. If none of them could be
         *     restored, the response status is `404` when at least one shipment was not found, or
         *     `400` otherwise, and `shipment_ids` is empty.
         *
         *     To restore a single shipment, use [Restore a shipment](#operation/restore_shipment).
         */
        post: operations["restore_shipments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/hold": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Hold a shipment
         * @description Holds a shipment until a given date. A shipment on hold has the `on_hold` status,
         *     and you can't purchase a label for it while it's on hold. On the `hold_until_date`,
         *     the shipment is released automatically and returns to the `pending` status. Holding
         *     a shipment that is already on hold replaces the existing `hold_until_date`.
         *
         *     A cancelled shipment or a shipment with a purchased label cannot be held and returns
         *     a `400` response.
         *
         *     `hold_until_date` is a date-only value: any time component you send is ignored, and
         *     the date must be later than today.
         *
         *     To hold up to 500 shipments in one request, use [Hold shipments](#operation/hold_shipments).
         */
        put: operations["hold_shipment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Restore a shipment
         * @description Restores a shipment that is on hold. The shipment returns to the `pending` status and
         *     its `hold_until_date` is cleared. No request body is required.
         *
         *     The shipment must currently be on hold. Restoring a shipment in any other status
         *     returns a `400` response.
         *
         *     To restore up to 500 shipments in one request, use [Restore shipments](#operation/restore_shipments).
         */
        put: operations["restore_shipment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/split": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Split a shipment
         * @description Move items from a shipment into one or more new shipments. Each entry in `shipments` creates one new
         *     shipment holding the items and quantities listed for it. Items and quantities that you don't list
         *     stay on the original shipment.
         *
         *     Each new shipment is based on the original shipment and stays linked to the same sales order, so
         *     the order source keeps getting shipment notifications after the split.
         *
         *     To split a shipment:
         *
         *     - It must have a `shipment_status` of `pending`, `awaiting_payment`, or `on_hold`.
         *     - It must be linked to a sales order. Check `sales_order_ids` on the shipment.
         *     - It can't come from a marketplace that supplies its own shipping labels.
         *     - All of the items you move must belong to the same sales order. To move items from more than one
         *       sales order, make one request for each sales order.
         *     - At least one item must stay on the original shipment.
         *
         *     Get the `item_id` values from the `items` array of the shipment, using
         *     [Get shipment by id](#operation/get_shipment_by_id).
         */
        post: operations["split_shipment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/merge": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Merge shipments
         * @description Merge one or more shipments into the shipment in the URL. The items from each shipment in
         *     `shipment_ids` move onto the shipment in the URL, and the shipments in `shipment_ids` are then
         *     deleted.
         *
         *     The shipment in the URL stays linked to its own sales orders and becomes linked to the sales orders
         *     of every shipment merged into it, so order sources keep getting shipment notifications. The merged
         *     shipments can belong to different sales orders.
         *
         *     To merge shipments:
         *
         *     - Every shipment, including the one in the URL, must have a `shipment_status` of `pending`,
         *       `awaiting_payment`, or `on_hold`.
         *     - Every shipment must be linked to a sales order. Check `sales_order_ids` on each shipment.
         *     - None of the shipments can come from a marketplace that supplies its own shipping labels.
         *
         *     If `shipment_ids` includes the shipment in the URL or lists a shipment more than once, the extra
         *     entries are ignored.
         */
        post: operations["merge_shipments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get shipment tags
         * @description Get Shipment tags based on its ID
         */
        get: operations["shipments_list_tags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/tags/{tag_name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
                tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add tag to shipment
         * @description Add a tag to the shipment object
         */
        post: operations["tag_shipment"];
        /**
         * Remove tag from shipment
         * @description Remove an existing tag from the Shipment object
         */
        delete: operations["untag_shipment"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/documents": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * List documents for a shipment
         * @description Retrieve the carrier documents registered against a shipment, including their processing status.
         */
        get: operations["list_shipment_documents"];
        put?: never;
        /**
         * Register a document for a shipment
         * @description Register a carrier document against a shipment. The response returns an `upload` target; upload the document file to that target so it can later be sent to the carrier.
         */
        post: operations["register_shipment_document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/documents/{document_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
                /**
                 * @description The unique identifier of the document.
                 * @example 7f3c1b2a-9d4e-4f5a-8c6b-2e1d0a9b8c7d
                 */
                document_id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete a shipment document
         * @description Delete a carrier document registered against a shipment. Documents that have already been sent to the carrier cannot be deleted.
         */
        delete: operations["delete_shipment_document"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/shipments/{shipment_id}/labels": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * List shipments and their document statuses
         * @description Retrieve each shipment associated with the given id, including its tracking number and registered carrier documents.
         */
        get: operations["list_shipment_label_documents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tags
         * @description Get a list of all tags associated with an account.
         */
        get: operations["list_tags"];
        put?: never;
        /**
         * Create a new tag
         * @description Create a new tag for customizing how you track your shipments.
         */
        post: operations["create_tag"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tags/{tag_name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new tag
         * @description Create a new tag for customizing how you track your shipments (deprecated - use POST /v1/tags instead)
         */
        post: operations["create_tag_by_name"];
        /**
         * Delete tag
         * @description Delete a tag that is no longer needed
         */
        delete: operations["delete_tag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tags/{tag_name}/{new_tag_name}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tag_name: components["schemas"]["tag_name"];
                new_tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Update tag name
         * @description Change a tag name while still keeping the relevant shipments attached to it
         */
        put: operations["rename_tag"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tokens/ephemeral": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get ephemeral token
         * @description This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.
         */
        post: operations["tokens_get_ephemeral_token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tracking": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tracking information
         * @description Retrieve package tracking information
         */
        get: operations["get_tracking_log"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tracking/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start tracking a package
         * @description Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
         *     and receive notifications via webhooks whenever the shipping status changes.
         */
        post: operations["start_tracking"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tracking/stop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop tracking a package
         * @description Unsubscribe from tracking updates for a package.
         */
        post: operations["stop_tracking"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/warehouses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List warehouses
         * @description Retrieve a list of warehouses associated with this account.
         */
        get: operations["list_warehouses"];
        put?: never;
        /**
         * Create warehouse
         * @description Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
         *     If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well
         */
        post: operations["create_warehouse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/warehouses/{warehouse_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Warehouse ID */
                warehouse_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        /**
         * Get warehouse by ID
         * @description Retrieve warehouse data based on the warehouse ID
         */
        get: operations["get_warehouse_by_id"];
        /**
         * Update warehouse by ID
         * @description Update Warehouse object information
         */
        put: operations["update_warehouse"];
        post?: never;
        /**
         * Delete warehouse by ID
         * @description Delete a warehouse by ID
         */
        delete: operations["delete_warehouse"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/warehouses/{warehouse_id}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Warehouse ID */
                warehouse_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Update warehouse settings
         * @description Update Warehouse settings object information
         */
        put: operations["update_warehouse_settings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/checkout_rates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List checkout rates configurations
         * @description Return a summary of every checkout rates configuration on your account. Each entry contains identifying fields only; use [Get a checkout rates configuration](#operation/get_checkout_rates_config) to retrieve an individual configuration's options and shared settings.
         */
        get: operations["list_checkout_rates_configs"];
        put?: never;
        /**
         * Create a checkout rates configuration
         * @description Create a checkout rates configuration together with its initial delivery options and shared settings. The configuration is returned with a generated `config_id` and, for each option, a generated `option_id`.
         *
         *     For `live_rate` and `local_delivery` options, each service's `carrier_id` and `service_code` are validated and resolved against the carriers connected to your account.
         */
        post: operations["create_checkout_rates_config"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/checkout_rates/{config_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
            };
            cookie?: never;
        };
        /**
         * Get a checkout rates configuration
         * @description Retrieve a single checkout rates configuration, including all of its delivery options and shared settings.
         */
        get: operations["get_checkout_rates_config"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/checkout_rates/{config_id}/options": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add a delivery option
         * @description Add a delivery option to an existing checkout rates configuration. Option names must be unique within a configuration; adding an option whose name already exists returns a `409 Conflict`.
         */
        post: operations["add_checkout_rates_option"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/checkout_rates/{config_id}/options/{option_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
                /** @description The unique identifier of the delivery option. */
                option_id: number;
            };
            cookie?: never;
        };
        /**
         * Get a delivery option
         * @description Retrieve a single delivery option belonging to a checkout rates configuration.
         */
        get: operations["get_checkout_rates_option"];
        /**
         * Update a delivery option
         * @description Replace the configuration of an existing delivery option. Option names must remain unique within a configuration; renaming an option to a name already in use returns a `409 Conflict`.
         */
        put: operations["update_checkout_rates_option"];
        post?: never;
        /**
         * Delete a delivery option
         * @description Marks a delivery option as inactive (`is_active: false`) instead of removing it; it still appears in the configuration.
         */
        delete: operations["delete_checkout_rates_option"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/checkout_rates/{config_id}/quotes": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration to quote against. */
                config_id: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Calculate checkout rates
         * @description Calculate the shipping rates a buyer should see at checkout for the given destination and cart, using the delivery options defined on the configuration. The response contains one rate per delivery option that produced a price, and each rate carries its own `quote_id` that can be retrieved later with [Get a checkout rate quote](#operation/get_checkout_rates_quote).
         */
        post: operations["calculate_checkout_rates"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/checkout_rates/quotes/{quote_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of a previously calculated rate quote. */
                quote_id: string;
            };
            cookie?: never;
        };
        /**
         * Get a checkout rate quote
         * @description Retrieve a previously calculated rate quote, including the destination it was calculated for and the rates that were returned.
         *
         *     > **Note:** Quotes are retained for a limited time. A request for an expired or unknown `quote_id` returns `404 Not Found`.
         */
        get: operations["get_checkout_rates_quote"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/delivery_predictions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Predict delivery dates
         * @description Predict delivery dates for one or more carrier and service combinations on a single lane, using ShipStation's delivery prediction model rather than the estimate quoted by the carrier.
         *
         *     The prediction stands on its own: this endpoint does not price the shipment, create a shipment or a label, and nothing it returns is stored. Send the origin and destination once and list every carrier and service combination you want predicted for that lane.
         *
         *     A requested combination comes back as an entry in `delivery_predictions` or as an entry in `warnings`, never both. A combination the model has no coverage for becomes a warning, so a response where nothing is supported is still a `200` with an empty `delivery_predictions` array. A combination the model returns nothing usable for is in neither array. Combinations are matched by `carrier_code` and `service_code` rather than by position, and are returned as the model reports them rather than echoed back.
         *
         *     There is no limit you need to manage on your side: a request with more combinations than the model accepts in one call is split across several calls automatically, and none are dropped.
         */
        post: operations["create_delivery_predictions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** get_account_settings_response_body */
        get_account_settings_response_body: components["schemas"]["list_account_settings_body"];
        /**
         * list_account_settings_body
         * @description An account settings list response body
         */
        list_account_settings_body: components["schemas"]["account_settings"];
        /**
         * account_settings
         * @description A ShipEngine account settings response body
         */
        account_settings: {
            default_label_layout?: components["schemas"]["default_label_layout"];
        };
        /**
         * default_label_layout
         * @description The possible default label layout values
         * @example 4x6
         * @enum {string}
         */
        default_label_layout: "4x6" | "Letter";
        /**
         * error_response_body
         * @description An error response body
         */
        error_response_body: {
            /**
             * @description A UUID that uniquely identifies the request id.
             *     This can be given to the support team to help debug non-trivial issues that may occur
             */
            request_id: components["schemas"]["uuid"];
            /** @description The errors associated with the failed API call */
            readonly errors: components["schemas"]["error"][];
        };
        /**
         * uuid
         * Format: uuid
         * @description A UUID (a.k.a. GUID) that uniquely identifies a resource
         * @example aa3d8e8e-462b-4476-9618-72db7f7b7009
         */
        uuid: string;
        /**
         * error
         * @description The error structure that gets returned with almost all failed API calls
         */
        error: {
            error_source: components["schemas"]["error_source"];
            error_type: components["schemas"]["error_type"];
            error_code: components["schemas"]["error_code"];
            /**
             * @description An error message associated with the failed API call
             * @example Body of request cannot be null.
             */
            readonly message: string;
            /** @description A string that uniquely identifies the carrier that generated the error. */
            readonly carrier_id?: components["schemas"]["se_id"];
            /** @description The name of the shipping carrier that generated the error, such as `fedex`, `dhl_express`, `stamps_com`, etc. */
            readonly carrier_code?: components["schemas"]["carrier_code"];
            /**
             * @description The name of the field that caused the error
             * @example shipment.ship_to.phone_number
             */
            readonly field_name?: string;
            /** @description The name of the carrier account that generated the error. */
            readonly carrier_name?: string;
            /** @description The carrier's own error code, such as `INVALID_PARAMETER_VALUE`. */
            readonly carrier_error_code?: string;
            /** @description The carrier's own error message. More specific than `message` when present. */
            readonly carrier_error_message?: string;
            /** @description The HTTP status the carrier's API answered with. */
            readonly carrier_response_code?: number;
            /** @description The carrier's id for the request, for its support. */
            readonly carrier_request_id?: string;
        };
        /**
         * error_source
         * @description The source of the error, as indicated by the name this informs us if the API call failed because of the
         *     carrier, the order source, or the ShipEngine API itself.
         * @example shipengine
         * @enum {string}
         */
        error_source: "carrier" | "order_source" | "shipengine";
        /**
         * error_type
         * @description The type of error
         * @example validation
         * @enum {string}
         */
        error_type: "account_status" | "business_rules" | "validation" | "security" | "system" | "integrations";
        /**
         * error_code
         * @description The error code specified for the failed API Call
         * @example invalid_field_value
         * @enum {string}
         */
        error_code: "auto_fund_not_supported" | "batch_cannot_be_modified" | "bring_your_own_label_not_supported" | "carrier_conflict" | "carrier_disconnected" | "carrier_not_connected" | "carrier_not_supported" | "confirmation_not_supported" | "default_warehouse_cannot_be_deleted" | "field_conflict" | "field_value_required" | "forbidden" | "identifier_conflict" | "identifiers_must_match" | "insufficient_funds" | "invalid_address" | "invalid_billing_plan" | "invalid_field_value" | "invalid_identifier" | "invalid_status" | "invalid_string_length" | "label_images_not_supported" | "meter_failure" | "multiple_sales_orders" | "order_source_not_active" | "rate_limit_exceeded" | "refresh_not_supported" | "request_body_required" | "return_label_not_supported" | "sales_order_link_required" | "settings_not_supported" | "subscription_inactive" | "terms_not_accepted" | "tracking_not_supported" | "trial_expired" | "unauthorized" | "unknown" | "unspecified" | "verification_failure" | "warehouse_conflict" | "webhook_event_type_conflict" | "customs_items_required" | "incompatible_paired_labels" | "invalid_charge_event" | "invalid_object" | "no_rates_returned" | "file_not_found" | "shipping_rule_not_found" | "service_not_determined" | "funding_source_registration_in_progress" | "insurance_failure" | "funding_source_missing_configuration" | "funding_source_error" | "freight_connection_inactive" | "freight_provider_id_required" | "freight_provider_already_connected" | "freight_shipment_not_found" | "freight_tracking_not_available" | "freight_tracking_not_found" | "freight_shipment_not_batchable";
        /**
         * se_id
         * @description A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc.
         * @example se-28529731
         */
        se_id: string;
        /**
         * carrier_code
         * @description A shipping carrier, such as `fedex`, `dhl_express`, `stamps_com`, etc.
         * @example dhl_express
         */
        carrier_code: string;
        /** list_account_settings_images_response_body */
        list_account_settings_images_response_body: components["schemas"]["list_account_images_response_body"];
        /**
         * list_account_images_response_body
         * @description A list account images response body
         */
        list_account_images_response_body: {
            /** @description Image List */
            readonly images: {
                /** @description A string that uniquely identifies the image. This ID is generated by ShipEngine when the image is uploaded. */
                readonly label_image_id?: components["schemas"]["image_id"];
                /**
                 * @description A human readable name for the image.
                 * @example My logo
                 */
                name?: string;
                /**
                 * @description Indicates whether this image is set as default.
                 * @example false
                 */
                is_default?: boolean;
                /** @description The file type of the image. */
                image_content_type?: "image/png" | "image/jpeg";
                /**
                 * @description A base64 encoded string representation of the image.
                 * @example iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg==
                 */
                image_data?: string;
                /** @description The date and time that the image was created in ShipEngine. */
                readonly created_at?: components["schemas"]["date_time"];
                /** @description The date and time that the image was modified in ShipEngine. */
                readonly modified_at?: components["schemas"]["date_time"];
            }[];
        } & components["schemas"]["paged_list_response_body"];
        /**
         * paged_list_response_body
         * @description Many ShipEngine endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results.
         */
        paged_list_response_body: {
            /**
             * @description The total number of items across all pages of results
             * @example 2750
             */
            total: number;
            /**
             * @description The current page number of results.  For example, if there are 80 results, and the page size is 25, then `page` could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.
             * @example 1
             */
            page: number;
            /**
             * @description The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then `pages` would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then `pages` will be zero.
             * @example 4
             */
            pages: number;
            links: components["schemas"]["pagination_link"];
        } & {
            [key: string]: unknown;
        };
        /**
         * pagination_link
         * @description Helpful links to other pages of results
         */
        pagination_link: {
            /** @description The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items. */
            first: components["schemas"]["link"];
            /** @description The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items. */
            last: components["schemas"]["link"];
            /** @description The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater. */
            prev: components["schemas"]["optional_link"];
            /** @description The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`. */
            next: components["schemas"]["optional_link"];
        };
        /**
         * link
         * @description A link to a related resource
         */
        link: WithRequired<components["schemas"]["optional_link"], "href">;
        /**
         * optional_link
         * @description A link to a related resource, or an empty object if there is no resource to link to
         */
        optional_link: {
            /** @description The URL of the linked resource, if any */
            href?: components["schemas"]["url"];
            /** @description The type of resource, or the type of relationship to the parent resource */
            type?: string;
        };
        /**
         * url
         * Format: url
         * @description A URL
         * @example https://example.com/resource
         */
        url: string;
        /**
         * create_account_settings_image_request_body
         * @description A ShipEngine account settings images request body
         */
        create_account_settings_image_request_body: WithRequired<components["schemas"]["account_settings_images"], "name" | "image_content_type" | "image_data">;
        /**
         * account_settings_images
         * @description A ShipEngine account images body
         */
        account_settings_images: {
            /** @description A string that uniquely identifies the image. This ID is generated by ShipEngine when the image is uploaded. */
            readonly label_image_id?: components["schemas"]["image_id"];
            /**
             * @description A human readable name for the image.
             * @example My logo
             */
            name?: string;
            /**
             * @description Indicates whether this image is set as default.
             * @example false
             */
            is_default?: boolean;
            /** @description The file type of the image. */
            image_content_type?: "image/png" | "image/jpeg";
            /**
             * @description A base64 encoded string representation of the image.
             * @example iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAiVJREFUSEu91j3IeVEcB/CvSTIoBrFSikEZMdjsjExeUspgUEp5SUpeshrIgEFJJmWwMZHJQGHDhJSXTPfpnH/8ebzd56HnN93u7ZzP/f1+55x7Ob1ejxEKheByufh0HI9HrFYrcKbTKUMu5HI5BALBx5zNZoPxeAySAGc2mzF8Pp/e+BR0Ash8u93uHyKVSnH54J2Mvs8zn8//I6RO70L3xt8g70CPXvAu8hvoWQUeIj+BXpX4KcIGegWQOV4izyA2AGvkHsQW+BFyCUkkEiwWC9Ybl1W5Ls8ZMoAABCIbmE3cINFoFMFgEEajEeVyGSKRCJ1OB3q9ns5nMpmQTCaxXq9/l8loNEKj0YDX66UACYvFQq9brRYcDgdUKhU9RD/SEwLm83lEIhGUSiX0+33E4/GrU5otRMs1mUyYbDYLu90OhUJBMzhlZbPZ4Pf7odFo4HQ6b1rABqJIvV5nttstLc0pSIn2+z0tTy6XQ6FQoI/a7TZ0Ot0V9gqiiMFgYKrVKm0yieVyCZ/PB6vVSpF0Ok2zJHEqIY/HYw1RxOfzMYlE4jwoEAhAJpPBbDZf9eBwOCCVSsHtdp9f6FJ6egorlUqmVqvRfjSbTXS7XXg8nptP8Svk0RF01ROtVguSUTgchlgsPpeOZBaLxTAcDlEsFpHJZPC9XM8yoshgMGBCoRBdQWTCU7hcLjohWb5kM6rValQqlfMKfLbbb77xf/K38hf/XV9ilOpnLqvnogAAAABJRU5ErkJggg==
             */
            image_data?: string;
            /** @description The date and time that the image was created in ShipEngine. */
            readonly created_at?: components["schemas"]["date_time"];
            /** @description The date and time that the image was modified in ShipEngine. */
            readonly modified_at?: components["schemas"]["date_time"];
        };
        /**
         * image_id
         * @description Used to identify an image resource.
         * @example img_DtBXupDBxREpHnwEXhTfgK
         */
        image_id: string;
        /**
         * date_time
         * Format: date-time
         * @description An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.
         * @example 2018-09-23T15:00:00.000Z
         */
        date_time: string;
        /**
         * get_account_settings_images_response_body
         * @description A get account images by id response body
         */
        get_account_settings_images_response_body: components["schemas"]["account_settings_images"];
        /** empty_response_body */
        empty_response_body: string;
        /**
         * update_account_settings_image_request_body
         * @description A ShipEngine account settings images request body
         */
        update_account_settings_image_request_body: WithRequired<components["schemas"]["account_settings_images"], "is_default">;
        /**
         * parse_address_request_body
         * @description The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.
         */
        parse_address_request_body: {
            /**
             * @description The unstructured text that contains address-related entities
             * @example Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.
             */
            text: string;
            /** @description You can optionally provide any already-known address values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines. */
            address?: components["schemas"]["partial_address"];
        };
        /**
         * partial_address
         * @description A complete or partial mailing address.
         */
        partial_address: {
            /**
             * @description The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
             * @example John Doe
             */
            name?: string;
            /**
             * @description The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
             * @example +1 204-253-9411 ext. 123
             */
            phone?: string;
            /**
             * @description Email for the address owner.
             * @example example@example.com
             */
            email?: string | null;
            /**
             * @description If this is a business address, then the company name should be specified here.
             * @example The Home Depot
             */
            company_name?: string | null;
            /**
             * @description The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
             * @example 1999 Bishop Grandin Blvd.
             */
            address_line1?: string;
            /**
             * @description The second line of the street address.  For some addresses, this line may not be needed.
             * @example Unit 408
             */
            address_line2?: string | null;
            /**
             * @description The third line of the street address.  For some addresses, this line may not be needed.
             * @example Building #7
             */
            address_line3?: string | null;
            /**
             * @description The name of the city or locality
             * @example Winnipeg
             */
            city_locality?: string;
            /**
             * @description The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
             * @example Manitoba
             */
            state_province?: string;
            postal_code?: components["schemas"]["postal_code"];
            /** @description The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) */
            country_code?: components["schemas"]["country_code"];
            /**
             * @description Indicates whether this is a residential address.
             * @default unknown
             * @example no
             */
            address_residential_indicator?: components["schemas"]["address_residential_indicator"];
        };
        /**
         * postal_code
         * @description postal code
         * @example 78756-3717
         */
        postal_code: string;
        /**
         * country_code
         * @description A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
         * @example CA
         */
        country_code: string;
        /**
         * address_residential_indicator
         * @description Indicates whether an address is residential.
         * @example no
         * @enum {string}
         */
        address_residential_indicator: "unknown" | "yes" | "no";
        /**
         * parse_address_response_body
         * @description The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
         */
        parse_address_response_body: {
            /**
             * Format: double
             * @description A confidence score between zero and one that indicates how certain the API is that it understood the text.
             */
            score: number;
            /**
             * @description The parsed address.  This address may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.
             *
             *     > **Note:** The address-recognition API does not currently perform any validation of the parsed address, so we recommend that you use the address-validation API to ensure that the address is correct.
             */
            address: components["schemas"]["partial_address"];
            /** @description All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, or an address line.  Each entity includes the original text and the parsed value. */
            entities: components["schemas"]["recognized_entity"][];
        };
        /**
         * recognized_entity
         * @description An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
         */
        recognized_entity: {
            /** @description The Entity type (e.g. "weight", "person", "address_line1", etc.) */
            type: string;
            /**
             * Format: double
             * @description A confidence score between zero and one that indicates how certain the API is that it correctly recognized this entity
             */
            score: number;
            /** @description The substring from the original text that was recognized as this entity */
            text: string;
            /** @description The index of the first character of this entity within the original text */
            start_index: number;
            /** @description The index of the last character of this entity within the original text */
            end_index: number;
            result?: components["schemas"]["normalized_entity"];
        };
        /**
         * normalized_entity
         * @description The normalized value of the entity.
         *
         *     Most entity results have a `value` field, which is the normalized value of the entity.  For example, if the substring "john doe" was recognized as a "person" entity, then the value might be normalized to have proper capitalization (e.g. "John Doe").  Or if the substring "ft worth" was recognized as a "city" entity, then the value might be normalized to "Fort Worth".
         *
         *     Some entities have other information in addition to, or instead of a `value`.  For example, a "dimensions" entity will have separate fields for `length`, `width`, `height`, and `unit`.
         */
        normalized_entity: {
            [key: string]: unknown;
        };
        /**
         * validate_address_request_body
         * @description An address validation request body
         */
        validate_address_request_body: components["schemas"]["address_to_validate"][];
        /**
         * address_to_validate
         * @description Any residential or business mailing address, anywhere in the world.
         */
        address_to_validate: WithRequired<components["schemas"]["partial_address"], "address_line1" | "city_locality" | "state_province" | "country_code">;
        /**
         * validate_address_response_body
         * @description An address validation response body
         */
        validate_address_response_body: components["schemas"]["address_validation_result"][];
        /**
         * address_validation_result
         * @description An address validation result
         */
        address_validation_result: {
            status: components["schemas"]["address_validation_status"];
            /** @description The original address that was sent for validation */
            original_address: components["schemas"]["address"];
            /** @description The matched address found by the Shipengine API */
            readonly matched_address: components["schemas"]["address"] | null;
            /**
             * @description The list of messages that were generated during the address validation request.
             * @default []
             */
            readonly messages: components["schemas"]["response_message"][];
        };
        /**
         * address_validation_status
         * @description The possible address validation status values
         * @example verified
         * @enum {string}
         */
        address_validation_status: "unverified" | "verified" | "warning" | "error";
        /**
         * address
         * @description Any residential or business mailing address, anywhere in the world.
         *
         *     > **Note:** Either `name` or `company_name` must be set. Both may be specified, if relevant.
         */
        address: WithRequired<components["schemas"]["partial_address"], "name" | "address_line1" | "city_locality" | "state_province" | "postal_code">;
        /**
         * response_message
         * @description A response message that displays when additional info is needed for an address validation request.
         */
        response_message: {
            readonly code: components["schemas"]["address_validation_code"];
            /**
             * @description Message explaining the address validation error
             * @example Invalid Postal Code
             */
            readonly message: string;
            readonly type: components["schemas"]["address_validation_message_type"];
            detail_code: components["schemas"]["address_validation_detail_code"] | null;
        };
        /**
         * address_validation_code
         * @description The error codes that can be returned by the address validation API
         * @enum {string}
         */
        address_validation_code: "a1000" | "a1001" | "a1002" | "a1003" | "a1004" | "a1005" | "a1006" | "a1007" | "a1008" | "r1000" | "r1001" | "r1002" | "r1003";
        /**
         * address_validation_message_type
         * @description The different types of messages that can be returned by the address validation API
         * @enum {string}
         */
        address_validation_message_type: "error" | "warning" | "info";
        /**
         * address_validation_detail_code
         * @description The detailed error codes that can be returned by the address validation API
         * @enum {string}
         */
        address_validation_detail_code: "unsupported_country" | "non_supported_country" | "minimum_postal_code_verification_failed" | "street_does_not_match_unique_street_name" | "multiple_directionals" | "multiple_matches" | "suite_not_valid" | "suite_missing" | "incompatible_paired_labels" | "invalid_house_number" | "missing_house_number" | "invalid_box_number" | "invalid_charge_event" | "missing_box_number" | "missing_cmra_or_private_mail_box_number" | "suite_has_no_secondaries" | "postal_code_changed_or_added" | "state_province_changed_or_added" | "city_locality_changed_or_added" | "urbanization_changed" | "street_name_spelling_changed_or_added" | "street_name_type_changed_or_added" | "street_direction_changed_or_added" | "suite_type_changed_or_added" | "suite_unit_number_changed_or_added" | "double_dependent_locality_changed_or_added" | "subadministrative_area_changed_or_added" | "subnational_area_changed_or_added" | "po_box_changed_or_added" | "premise_type_changed_or_added" | "house_number_changed" | "organization_changed_or_added" | "partially_verified_to_state_level" | "partially_verified_to_city_level" | "partially_verified_to_street_level" | "partially_verified_to_premise_level" | "verified_to_state_level" | "verified_to_city_level" | "verified_to_street_level" | "verified_to_premise_level" | "verified_to_suite_level" | "coded_to_street_lavel" | "coded_to_neighborhood_level" | "coded_to_community_level" | "coded_to_state_level" | "coded_to_rooftop_level" | "coded_to_rooftop_interpolation_level" | "name_max_length_exceeded" | "phone_max_length_exceeded" | "company_name_max_length_exceeded" | "line1_min_max_length" | "line2_max_length_exceeded" | "line3_max_length_exceeded" | "city_locality_max_length_exceeded" | "state_province_max_length_exceeded" | "invalid_postal_code" | "country_invalid_length" | "address_not_found";
        /**
         * batch_status
         * @description The possible batch status values
         * @enum {string}
         */
        batch_status: "open" | "queued" | "processing" | "completed" | "completed_with_errors" | "archived" | "notifying" | "invalid";
        /**
         * sort_dir
         * @description Controls the sort order of queries
         *
         *     |Value     |Description
         *     |:---------|:-----------------------------------------------------
         *     |`asc`     |Return results in ascending order
         *     |`desc`    |Return results in descending order
         * @enum {string}
         */
        sort_dir: "asc" | "desc";
        /**
         * batches_sort_by
         * @description The possible batches sort by values
         * @enum {string}
         */
        batches_sort_by: "ship_date" | "processed_at" | "created_at";
        /**
         * list_batches_response_body
         * @description A list batch response body
         */
        list_batches_response_body: {
            /** @description Batch List */
            readonly batches: components["schemas"]["batch"][];
            /**
             * Format: int64
             * @description The total number of batches the API call returned
             * @example 10
             */
            readonly total: number;
            /**
             * Format: int32
             * @description The page that is currently being read
             * @example 1
             */
            readonly page: number;
            /**
             * Format: int32
             * @description The total number of batch pages the API call returned
             * @example 10
             */
            readonly pages: number;
            readonly links: components["schemas"]["pagination_link"];
        };
        /**
         * batch
         * @description Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
         *     thousands of labels at a time.
         */
        batch: {
            /**
             * @description label layout
             * @default 4x6
             */
            readonly label_layout: components["schemas"]["label_layout"];
            /** @default pdf */
            readonly label_format: components["schemas"]["label_format"];
            /** @description A string that uniquely identifies the batch */
            readonly batch_id: components["schemas"]["se_id"];
            /** @description The batch number. */
            readonly batch_number: string;
            /** @description A string that uniquely identifies the external batch */
            readonly external_batch_id: string | null;
            /**
             * @description Custom notes you can add for each created batch
             * @default
             * @example Batch for morning shipment
             */
            readonly batch_notes: string | null;
            /**
             * Format: uuid
             * @description The ID of the user assigned to the batch, or `null` if no user is assigned.
             * @example a2df9fa5-b7ee-467f-be4e-9c660542c187
             */
            readonly assigned_user?: string | null;
            /** @description The date and time the batch was created in ShipEngine */
            readonly created_at: components["schemas"]["date_time"];
            /** @description The date and time the batch was processed in ShipEngine */
            readonly processed_at: components["schemas"]["date_time"] | null;
            /**
             * Format: int32
             * @description The number of errors that occurred while generating the batch
             * @example 2
             */
            readonly errors: number;
            /** @description The errors associated with the failed API call */
            readonly process_errors: components["schemas"]["error"][];
            /**
             * Format: int32
             * @description The number of warnings that occurred while generating the batch
             * @example 1
             */
            readonly warnings: number;
            /**
             * Format: int32
             * @description The number of labels generated in the batch
             * @example 1
             */
            readonly completed: number;
            /**
             * Format: int32
             * @description The number of forms for customs that are available for download
             * @example 3
             */
            readonly forms: number;
            /**
             * Format: int32
             * @description The total of errors, warnings, and completed properties
             * @example 2
             */
            readonly count: number;
            /** @description The batch shipments endpoint */
            batch_shipments_url: components["schemas"]["optional_link"];
            /** @description Link to batch labels query */
            batch_labels_url: components["schemas"]["optional_link"];
            /** @description Link to batch errors endpoint */
            readonly batch_errors_url: components["schemas"]["optional_link"];
            /** @description The label download for the batch */
            readonly label_download: components["schemas"]["label_download"];
            /** @description Link to download the packing slips for all shipments in the batch. Populated only when the batch was created or processed with `generate_packing_slips` set to `true`; otherwise an empty object. The file is available once the batch has been processed. */
            readonly packing_slip_download?: components["schemas"]["optional_link"];
            /** @description The form download for any customs that are needed */
            readonly form_download: components["schemas"]["optional_link"];
            /** @description The paperless details which may contain elements like `href`, `instructions` and `handoff_code`. */
            readonly paperless_download: components["schemas"]["paperless_download"];
            readonly status: components["schemas"]["batch_status"];
        };
        /**
         * label_layout
         * @description The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported. `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
         * @enum {string}
         */
        label_layout: "4x6" | "letter" | "A4" | "A6";
        /**
         * label_format
         * @description The possible file formats in which shipping labels can be downloaded. We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
         *
         *     |Label Format  | Supported Carriers
         *     |--------------|-----------------------------------
         *     |`pdf`         | All carriers
         *     |`png`         | `fedex` <br> `stamps_com` <br> `ups` <br> `usps`
         *     |`zpl`         | `access_worldwide` <br> `apc` <br> `asendia` <br> `dhl_global_mail` <br> `dhl_express` <br> `dhl_express_australia` <br> `dhl_express_canada` <br> `dhl_express_worldwide` <br> `dhl_express_uk` <br> `dpd` <br> `endicia` <br> `fedex` <br> `fedex_uk` <br> `firstmile` <br> `imex` <br> `newgistics` <br> `ontrac` <br> `stamps_com` <br> `ups` <br> `usps`
         * @enum {string}
         */
        label_format: "pdf" | "png" | "zpl";
        /**
         * label_download
         * @description Reference to the various downloadable file formats for the generated label
         */
        label_download: {
            /** @description The URL of the linked resource, if any */
            href?: components["schemas"]["url"];
            /** @description The URL for the pdf generated label */
            pdf?: components["schemas"]["url"];
            /** @description The URL for the png generated label */
            png?: components["schemas"]["url"];
            /** @description The URL for the zpl generated label */
            zpl?: components["schemas"]["url"];
        };
        /**
         * paperless_download
         * @description The paperless details which may contain elements like `href`, `instructions` and `handoff_code`.
         */
        paperless_download: {
            /** @description The URL of the linked resource, if any */
            href?: components["schemas"]["url"];
            /**
             * @description The instructions for the paperless download.
             * @default null
             */
            instructions?: string | null;
            /**
             * @description The handoff code for the paperless download.
             * @default null
             */
            handoff_code?: string | null;
        };
        /**
         * create_batch_request
         * @description A create batch request body
         */
        create_batch_request: {
            /** @description A string that uniquely identifies the external batch */
            external_batch_id?: components["schemas"]["se_id"];
            /**
             * @description Add custom messages for a particular batch
             * @example This is my batch
             */
            batch_notes?: string;
            /**
             * Format: uuid
             * @description Assign a user to the batch at creation time. The user must be an active member of your account.
             * @example a2df9fa5-b7ee-467f-be4e-9c660542c187
             */
            assigned_user?: string;
            /** @description Array of shipment IDs used in the batch */
            shipment_ids?: components["schemas"]["se_id"][];
            /** @description Array of rate IDs used in the batch */
            rate_ids?: components["schemas"]["se_id"][];
            /** @description The information used to process the batch */
            process_labels?: {
                /**
                 * @description When 'true', the batch will be enqueued for processing
                 * @example true
                 */
                create_batch_and_process_labels?: boolean;
                ship_date?: components["schemas"]["date_time"];
                /** @default 4x6 */
                label_layout?: components["schemas"]["label_layout"];
                /** @default pdf */
                label_format?: components["schemas"]["label_format"];
                /**
                 * @description The display format that the label should be shown in.
                 * @default label
                 */
                display_scheme?: components["schemas"]["display_scheme"];
                /**
                 * @description When `true`, a packing slip is generated for each shipment in the batch and placed in line with the labels in the `label_download` file. A separate download link for all packing slips in the batch is returned in `packing_slip_download`.
                 * @default false
                 * @example true
                 */
                generate_packing_slips?: boolean;
            };
        };
        /**
         * assign_user_to_batch_request_body
         * @description A request body for assigning a user to a batch
         */
        assign_user_to_batch_request_body: {
            /**
             * Format: uuid
             * @description The ID of the user to assign to the batch. The user must be an active member of your account.
             * @example a2df9fa5-b7ee-467f-be4e-9c660542c187
             */
            assigned_user: string;
        };
        /**
         * display_scheme
         * @description The display format that the label should be shown in.
         * @enum {string}
         */
        display_scheme: "label" | "paperless" | "label_and_paperless";
        /**
         * display_scheme_response
         * @description The display format produced for a shipment. This is the full set of values the API can return. The values accepted when *requesting* a label are documented on `display_scheme`.
         * @enum {string}
         */
        display_scheme_response: "label" | "qr_code" | "label_and_qr_code" | "paperless" | "label_and_paperless" | "no_box_no_label";
        /**
         * create_batch_response_body
         * @description A create batch response body
         */
        create_batch_response_body: components["schemas"]["batch"];
        /**
         * get_batch_by_external_id_response_body
         * @description A get batch by external id response body
         */
        get_batch_by_external_id_response_body: components["schemas"]["batch"];
        /**
         * get_batch_by_id_response_body
         * @description A get batch by id response body
         */
        get_batch_by_id_response_body: components["schemas"]["batch"];
        /**
         * add_to_batch_request_body
         * @description An add to batch request body
         */
        add_to_batch_request_body: components["schemas"]["modify_batch"];
        /**
         * modify_batch
         * @description A modify batch object
         */
        modify_batch: {
            /** @description The Shipment Ids to be modified on the batch */
            shipment_ids?: components["schemas"]["se_id"][];
            /** @description Array of Rate IDs to be modifed on the batch */
            rate_ids?: components["schemas"]["se_id"][];
        };
        /**
         * list_batch_errors_response_body
         * @description A batch errors response body
         */
        list_batch_errors_response_body: {
            /**
             * @description The errors currently associated with the batch
             * @default []
             */
            readonly errors: components["schemas"]["batch_response_error"][];
            readonly links: components["schemas"]["pagination_link"];
        };
        /**
         * batch_response_error
         * @description A batch response error
         */
        batch_response_error: {
            /**
             * @description Error message associated with the shipment.
             * @example Recipient address has not been verified.
             */
            readonly error?: string;
            /** @description A string that uniquely identifies the shipment */
            readonly shipment_id?: components["schemas"]["se_id"];
            /** @description An external shipment id associated with the shipment */
            readonly external_shipment_id?: string;
        };
        /**
         * process_batch_request_body
         * @description A process batch request body
         */
        process_batch_request_body: {
            /** @description The Ship date the batch is being processed for */
            ship_date?: components["schemas"]["date_time"];
            /** @default 4x6 */
            label_layout?: components["schemas"]["label_layout"];
            /** @default pdf */
            label_format?: components["schemas"]["label_format"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description When `true`, a packing slip is generated for each shipment in the batch and placed in line with the labels in the `label_download` file. A separate download link for all packing slips in the batch is returned in `packing_slip_download`.
             * @default false
             * @example true
             */
            generate_packing_slips?: boolean;
        };
        /**
         * remove_from_batch_request_body
         * @description A modify batch request body
         */
        remove_from_batch_request_body: components["schemas"]["modify_batch"];
        /** get_carriers_response_body */
        get_carriers_response_body: components["schemas"]["list_carriers_response_body"] & components["schemas"]["error_response_body"];
        /**
         * list_carriers_response_body
         * @description A carrier list response body
         */
        list_carriers_response_body: {
            /** @description The carrier response body */
            readonly carriers: components["schemas"]["carrier"][];
        } & components["schemas"]["paged_list_response_body"];
        /**
         * carrier
         * @description A carrier object that represents a provider such as UPS, USPS, DHL, etc
         *     that has been tied to the current account.
         */
        carrier: {
            /** @description A string that uniquely identifies the carrier. */
            readonly carrier_id?: components["schemas"]["se_id"];
            /** @description The shipping carrier who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc. */
            readonly carrier_code?: components["schemas"]["carrier_code"];
            /**
             * @description The account number that the carrier is connected to.
             * @example account_570827
             */
            readonly account_number?: string;
            /** @description Indicates whether the carrier requires funding to use its services */
            readonly requires_funded_amount?: boolean;
            /**
             * @description Current available balance
             * @example 3799.52
             */
            readonly balance?: number;
            /**
             * @description Nickname given to the account when initially setting up the carrier.
             * @example ShipEngine Account - Stamps.com
             */
            readonly nickname?: string;
            /**
             * @description Screen readable name
             * @example Stamps.com
             */
            readonly friendly_name?: string;
            /** @description Funding source ID for the carrier */
            readonly funding_source_id?: (string & components["schemas"]["se_id"]) | null;
            /** @description Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation */
            readonly primary?: boolean;
            /** @description Carrier supports multiple packages per shipment */
            readonly has_multi_package_supporting_services?: boolean;
            /** @description The carrier has services that support return shipments. */
            readonly allows_returns?: boolean;
            /** @description The carrier supports adding custom label messages to an order. */
            readonly supports_label_messages?: boolean;
            /** @description The carrier is disabled by the current ShipEngine account's billing plan. */
            readonly disabled_by_billing_plan?: boolean;
            /** @description A list of services that are offered by the carrier */
            readonly services?: components["schemas"]["service"][];
            /** @description A list of package types that are supported by the carrier */
            readonly packages?: components["schemas"]["package_type"][];
            /** @description A list of options that are available to that carrier */
            readonly options?: components["schemas"]["carrier_advanced_option"][];
            /**
             * @description The carrier provides rates for the shipment.
             * @example true
             */
            readonly send_rates?: boolean;
            /** @description The carrier supports user-managed rates for shipments. */
            readonly supports_user_managed_rates?: boolean;
            /**
             * @description The current connection status of the carrier. Indicates whether the carrier connection is pending approval or has been approved for use.
             * @enum {string}
             */
            readonly connection_status?: "pending_approval" | "approved";
        };
        /**
         * service
         * @description A service offered by the carrier
         */
        service: {
            /** @description A string that uniquely identifies the carrier */
            readonly carrier_id?: components["schemas"]["se_id"];
            carrier_code?: components["schemas"]["se_id"];
            /**
             * @description service code
             * @example usps_media_mail
             */
            readonly service_code?: string;
            /**
             * @description User friendly service name
             * @example USPS First Class Mail
             */
            readonly name?: string;
            /** @description Supports domestic shipping */
            readonly domestic?: boolean;
            /** @description Supports international shipping. */
            readonly international?: boolean;
            /** @description Carrier supports multiple packages per shipment */
            readonly is_multi_package_supported?: boolean;
            /** @description This service supports return shipments. */
            readonly is_return_supported?: boolean;
            /**
             * @description The service provides rates for the shipment.
             * @example true
             */
            readonly send_rates?: boolean;
        };
        /**
         * package_type
         * @description A package type (generic schema for mixed use).
         */
        package_type: {
            /** @description A string that uniquely identifies the package. */
            package_id?: components["schemas"]["se_id"];
            /**
             * @description A unique identifier for the package type.
             * @example package
             */
            package_code: string;
            /** @example laptop_box */
            name: string;
            /** @description The dimensions for the package. */
            dimensions?: components["schemas"]["dimensions"];
            /**
             * @description Provides a helpful description for the package.
             * @example Packaging for laptops
             */
            description?: string | null;
        };
        /**
         * package_type_request
         * @description A custom package type for API requests. Requires custom_ prefix for package_code.
         */
        package_type_request: {
            /** @description A string that uniquely identifies the package. */
            package_id?: components["schemas"]["se_id"];
            /**
             * @description A unique, user-defined identifier for the custom package type. Must start with "custom_".
             * @example custom_laptop_box
             */
            package_code: string;
            /** @example laptop_box */
            name: string;
            /** @description The custom dimensions for the package. */
            dimensions?: components["schemas"]["dimensions"];
            /**
             * @description Provides a helpful description for the custom package.
             * @example Packaging for laptops
             */
            description?: string | null;
        };
        /**
         * package_type_response
         * @description A custom package type from API responses. May include UI-created packages without custom_ prefix.
         */
        package_type_response: {
            /** @description A string that uniquely identifies the package. */
            package_id?: components["schemas"]["se_id"];
            /**
             * @description A unique identifier for the custom package type. API-created packages start with "custom_". UI-created packages may use other codes.
             * @example package
             */
            package_code: string;
            /** @example laptop_box */
            name: string;
            /** @description The custom dimensions for the package. */
            dimensions?: components["schemas"]["dimensions"];
            /**
             * @description Provides a helpful description for the custom package.
             * @example Packaging for laptops
             */
            description?: string | null;
        };
        /**
         * carrier_provided_package_type
         * @description A package type that a carrier provides for shipment. Unlike custom packages, carrier packages do not have a package_id.
         */
        carrier_provided_package_type: {
            /**
             * @description This field is always null for carrier-provided packages. Package IDs are only assigned to custom packages.
             * @example null
             */
            package_id?: string | null;
            package_code: components["schemas"]["package_code"];
            /** @example Small Flat Rate Box */
            name: string;
            /** @description The dimensions for the package. */
            dimensions?: components["schemas"]["dimensions"];
            /**
             * @description Provides a helpful description for the package.
             * @example USPS Small Flat Rate Box
             */
            description?: string | null;
        };
        /**
         * package_code
         * @description A package type, such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc. Use the code `package` for custom or unknown package types.
         * @example small_flat_rate_box
         */
        package_code: string;
        /**
         * dimensions
         * @description The dimensions of a package
         */
        dimensions: {
            /** @default inch */
            unit: components["schemas"]["dimension_unit"];
            /**
             * @description The length of the package, in the specified unit
             * @default 0
             */
            length: number;
            /**
             * @description The width of the package, in the specified unit
             * @default 0
             */
            width: number;
            /**
             * @description The height of the package, in the specified unit
             * @default 0
             */
            height: number;
        };
        /**
         * dimension_unit
         * @description The dimension units that are supported by ShipEngine.
         * @enum {string}
         */
        dimension_unit: "inch" | "centimeter";
        /**
         * carrier_advanced_option
         * @description Advanced options that are specific to the carrier
         */
        carrier_advanced_option: {
            /**
             * @description Name of advanced option
             * @example contains_alcohol
             */
            readonly name?: string;
            /**
             * @description Default value of option
             * @example false
             */
            readonly default_value?: string;
            /** @description Description of option */
            readonly description?: string;
        };
        /**
         * get_carrier_by_id_response_body
         * @description A get carrier by id response body
         */
        get_carrier_by_id_response_body: components["schemas"]["carrier"];
        /**
         * add_funds_to_carrier_request_body
         * @description An add funds to carrier request body
         */
        add_funds_to_carrier_request_body: components["schemas"]["monetary_value"];
        /**
         * monetary_value
         * @description A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
         */
        monetary_value: {
            currency: components["schemas"]["currency"];
            /** @description The monetary amount, in the specified currency. */
            amount: number;
        };
        /**
         * currency
         * @description The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html
         * @example USD
         */
        currency: string;
        /**
         * add_funds_to_carrier_response_body
         * @description The current balance of the requested carrier account
         */
        add_funds_to_carrier_response_body: {
            /** @description The current balance of the account */
            readonly balance: components["schemas"]["monetary_value"];
        };
        /**
         * get_carrier_options_response_body
         * @description A carrier list options response body
         */
        get_carrier_options_response_body: {
            /** @description AN array of carrier options */
            readonly options?: components["schemas"]["carrier_advanced_option"][];
        };
        /**
         * list_carrier_package_types_response_body
         * @description A list carrier package types response body
         */
        list_carrier_package_types_response_body: {
            /** @description An array of carrier-provided package types */
            readonly packages?: components["schemas"]["carrier_provided_package_type"][];
        };
        /**
         * list_carrier_services_response_body
         * @description A carrier list services response body
         */
        list_carrier_services_response_body: {
            /** @description An array of services associated with the carrier */
            readonly services?: components["schemas"]["service"][];
        };
        /**
         * carrier_name
         * @description The shipping carriers that are supported by ShipEngine
         * @enum {string}
         */
        carrier_name: "access_worldwide" | "amazon_buy_shipping" | "amazon_shipping_uk" | "apc" | "asendia" | "australia_post" | "canada_post" | "dhl_ecommerce" | "dhl_express" | "dhl_express_au" | "dhl_express_ca" | "dhl_express_uk" | "dpd" | "endicia" | "epg_shipping" | "fedex" | "fedex_uk" | "firstmile" | "imex" | "newgistics" | "ontrac" | "purolator_canada" | "royal_mail" | "seko" | "sendle" | "stamps_com" | "ups" | "lasership";
        /** connect_carrier_request_body */
        connect_carrier_request_body: components["schemas"]["connect_access_worldwide_request_body"] | components["schemas"]["connect_amazon_buy_shipping_request_body"] | components["schemas"]["connect_amazon_shipping_uk"] | components["schemas"]["connect_apc_request_body"] | components["schemas"]["connect_asendia_request_body"] | components["schemas"]["connect_australia_post_request_body"] | components["schemas"]["connect_canada_post_request_body"] | components["schemas"]["connect_dhl_ecommerce_request_body"] | components["schemas"]["connect_dhl_express_request_body"] | components["schemas"]["connect_dhl_express_au_request_body"] | components["schemas"]["connect_dhl_express_ca_request_body"] | components["schemas"]["connect_dhl_express_uk_request_body"] | components["schemas"]["connect_dpd_request_body"] | components["schemas"]["connect_endicia_request_body"] | components["schemas"]["connect_epg_shipping_request_body"] | components["schemas"]["connect_fedex_request_body"] | components["schemas"]["connect_fedex_uk_request_body"] | components["schemas"]["connect_firstmile_request_body"] | components["schemas"]["connect_imex_request_body"] | components["schemas"]["connect_lasership_request_body"] | components["schemas"]["connect_newgistics_request_body"] | components["schemas"]["connect_ontrac_request_body"] | components["schemas"]["connect_purolator_request_body"] | components["schemas"]["connect_royal_mail_request_body"] | components["schemas"]["connect_seko_request_body"] | components["schemas"]["connect_sendle_request_body"] | components["schemas"]["connect_stamps_request_body"] | components["schemas"]["connect_ups_request_body"];
        /**
         * connect_access_worldwide_request_body
         * @description An Access Worldwide account information request body
         */
        connect_access_worldwide_request_body: {
            /**
             * @description The nickname associated with the carrier connection
             * @example Stamps.com
             */
            nickname: string;
            /** @description Access Worldwide Username */
            username: string;
            /** @description Access Worldwide Password */
            password: string;
        };
        /**
         * connect_amazon_buy_shipping_request_body
         * @description An Amazon account information request body
         */
        connect_amazon_buy_shipping_request_body: {
            /**
             * @description Nickname to be associated with the account connection
             * @example Test Amazon Buy Shipping
             */
            nickname: string;
            merchant_seller_id: string;
            mws_auth_token: string;
            email: components["schemas"]["email"];
        };
        /**
         * email
         * Format: email
         * @description An email address.
         * @example john.doe@example.com
         */
        email: string;
        /**
         * connect_amazon_shipping_uk
         * @description An Amazon Shipping UK account information request body
         */
        connect_amazon_shipping_uk: {
            /**
             * @description The nickname associated with the carrier connection
             * @example Stamps.com
             */
            nickname: string;
            /** @description Amazon UK Shipping auth code. */
            auth_code: string;
        };
        /**
         * connect_apc_request_body
         * @description An APC account information request body
         */
        connect_apc_request_body: {
            /**
             * @description The nickname for the APC account
             * @example APC carrier account
             */
            nickname: string;
            /**
             * @description The username for the APC account
             * @example john_doe
             */
            username: string;
            /**
             * @description The password for the APC account
             * @example 12345
             */
            password: string;
        };
        /**
         * connect_asendia_request_body
         * @description An Asendia account information request body
         */
        connect_asendia_request_body: {
            /**
             * @description The nickname of the Asendia account
             * @example Asendia account
             */
            nickname: string;
            /** @description Asendia account number */
            account_number: string;
            /** @description Asendia username */
            username: string;
            /** @description Asendia password */
            password: string;
            /** @description Asendia api_key */
            api_key: string;
            /** @description Asendia processing location, one of: 'MIA', 'JFK', 'ORD', 'PHL', 'SFO', 'LAX', 'SLC', 'TOR', 'BUF', 'CAL' */
            processing_location: string;
            /** @description Asendia sub account number */
            sub_account_number?: string;
        };
        /**
         * connect_australia_post_request_body
         * @description An Australia Post account information request body
         */
        connect_australia_post_request_body: {
            /** @description Account number */
            account_number: string;
            /** @description API key */
            api_key: string;
            /** @description API secret */
            api_secret: string;
            /** @description Nickname */
            nickname: string;
        };
        /**
         * connect_canada_post_request_body
         * @description A Canada Post account information request body
         */
        connect_canada_post_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Canada Post Account API Key */
            api_key: string;
            /** @description Canada Post Account API Secret */
            api_secret: string;
            /** @description Canada Post Account Number */
            account_number: string;
            /** @description Canada Post Account Contract ID */
            contract_id: string;
        };
        /**
         * connect_dhl_ecommerce_request_body
         * @description A DHL Ecommerce account information request body
         */
        connect_dhl_ecommerce_request_body: {
            /** @description A nickname to help you identify this account */
            nickname: string;
            /** @description The client id */
            client_id: string;
            /** @description The account username */
            username: string;
            /** @description The account password */
            password: string;
            /** @description The pickup number */
            pickup_number: string;
            /** @description The distribution center */
            distribution_center: string;
            /** @description The DHL E-Commerce API key. This field is optional, but if not set you will not be able to get rates for this account. */
            api_key?: string;
            /** @description The DHL E-Commerce API secret. This field is optional, but if not set you will not be able to get rates for this account. */
            api_secret?: string;
            ancillary_endorsement?: components["schemas"]["ancillary_service_endorsement"];
            /**
             * @deprecated
             * @description Account number
             */
            account_number?: string;
            /**
             * @deprecated
             * @description FTP username
             */
            ftp_username?: string;
            /**
             * @deprecated
             * @description FTP password
             */
            ftp_password?: string;
            /** @description Sold To field */
            sold_to?: string;
            registration_id?: string;
            software_name?: string;
        };
        /**
         * ancillary_service_endorsement
         * @description [Ancillary service endorsements](https://pe.usps.com/text/qsg300/Q507.htm) are used by mailers to request an addressee's new address and to provide the carrier with instructions on how to handle packages that are undeliverable as addressed.
         *
         *     | Ancillary Service Endorsement  | Description
         *     |--------------------------------|-----------------------------------------------------
         *     | `none`                         | No ancillary service is requested. Depending on the carrier servive, the package may be forwarded, returned, or discarded.
         *     | `return_service_requested`     | The package is returned to the sender. If possible, notification of the new address is is included with the returned package.
         *     | `forwarding_service_requested` | Forward the package to the new address, if possible; otherwise, return it to the sender.
         *     | `address_service_requested`    | Forward the package to the new address, if possible; otherwise, return it to the sender. This is similar to `forwarding_service_requested`, but different restrictions and charges may apply.
         *     | `change_service_requested`     | The package is discarded. If possible, notification of the new address is sent to the sender.
         *     | `leave_if_no_response`         |
         * @example leave_if_no_response
         * @enum {string}
         */
        ancillary_service_endorsement: "none" | "return_service_requested" | "forwarding_service_requested" | "address_service_requested" | "change_service_requested" | "leave_if_no_response";
        /**
         * connect_dhl_express_request_body
         * @description A DHL express account information request body
         */
        connect_dhl_express_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Account number */
            account_number: string;
            /** @description Required if password is provided */
            site_id?: string;
            /** @description Required if site id is provided */
            password?: string;
            country_code?: components["schemas"]["country_code"];
        };
        /**
         * connect_dhl_express_au_request_body
         * @description A DHL Express AU account information request body
         */
        connect_dhl_express_au_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Account number */
            account_number: string;
        };
        /**
         * connect_dhl_express_ca_request_body
         * @description A DHL Express CA account information request body
         */
        connect_dhl_express_ca_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Account number */
            account_number: string;
        };
        /**
         * connect_dhl_express_uk_request_body
         * @description A DHL Express UK account information request body
         */
        connect_dhl_express_uk_request_body: {
            /** @description Account number */
            account_number: string;
            /** @description A string that uniquely identifies the site */
            site_id: components["schemas"]["se_id"];
            /** @description Password */
            password: string;
            /** @description Nickname */
            nickname: string;
        };
        /**
         * connect_dpd_request_body
         * @description A DPD account information request body
         */
        connect_dpd_request_body: {
            /** @description Account number */
            account_number: string;
            /** @description Password */
            password: string;
            /** @description Nickname */
            nickname: string;
        };
        /**
         * connect_endicia_request_body
         * @description An Endicia account information request body
         */
        connect_endicia_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Account */
            account: string;
            /** @description Passphrase */
            passphrase: string;
        };
        /**
         * connect_epg_shipping_request_body
         * @description An EPG (ePost Global) account information request body
         */
        connect_epg_shipping_request_body: {
            /**
             * @description Nickname
             * @example My Carrier Account
             */
            nickname: string;
            /**
             * @description Token
             * @example your_token
             */
            token: string;
        };
        /**
         * connect_fedex_request_body
         * @description A Fedex account information request body
         */
        connect_fedex_request_body: {
            /** @description Account number */
            account_number: string;
            /** @description Address */
            address1: string;
            /** @description Address */
            address2?: string;
            /** @description The city */
            city: string;
            /** @description The company */
            company?: string;
            /** @description Country code */
            country_code: string;
            /** @description The email address */
            email: components["schemas"]["email"];
            /** @description First name */
            first_name: string;
            /** @description Last name */
            last_name: string;
            /** @description Phone number */
            phone: string;
            /** @description Postal Code */
            postal_code: string;
            /** @description State */
            state: string;
            /** @description Nickname */
            nickname: string;
            /** @description Boolean signaling agreement to the Fedex End User License Agreement */
            agree_to_eula: boolean;
            /** @description Meter number */
            meter_number?: string;
        };
        /**
         * connect_fedex_uk_request_body
         * @description A Fedex UK account information request body
         */
        connect_fedex_uk_request_body: {
            /** @description Account number */
            account_number: string;
            /** @description Address */
            address1: string;
            /** @description Address */
            address2?: string;
            /** @description The city */
            city: string;
            /** @description The company */
            company?: string;
            /** @description Country code */
            country_code: string;
            /** @description The email address */
            email: components["schemas"]["email"];
            /** @description First name */
            first_name: string;
            /** @description Last name */
            last_name: string;
            /** @description Phone number */
            phone: string;
            /** @description Postal Code */
            postal_code: string;
            /** @description State */
            state: string;
            /** @description Nickname */
            nickname: string;
            /** @description Boolean signaling agreement to the Fedex End User License Agreement */
            agree_to_eula: boolean;
            /** @description Meter number */
            meter_number?: string;
        };
        /**
         * connect_firstmile_request_body
         * @description A First Mile account information request body
         */
        connect_firstmile_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description A string that uniquely identifies the mailer */
            mailer_id: components["schemas"]["se_id"];
            /** @description Profile name */
            profile_name?: string;
            /** @description Password */
            password: string;
        };
        /**
         * connect_imex_request_body
         * @description An Imex account information request body
         */
        connect_imex_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Username */
            username: string;
            /** @description Password */
            password: string;
        };
        /**
         * connect_lasership_request_body
         * @description A Lasership account information request body
         */
        connect_lasership_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Web Service ID (WSID) */
            web_services_id: string;
            /** @description Web Service Key (WSKey) */
            web_services_key: string;
            /** @description Customer Branch */
            customer_branch: string;
            /** @description Address */
            Address: string;
            /** @description Address2 */
            Address2?: string;
            /** @description PostalCode */
            PostalCode: string;
            /** @description City */
            City: string;
            /** @description State */
            State: string;
            /** @description Country */
            country?: string;
            /** @description Phone */
            Phone?: string;
            /** @description Email */
            Email?: string;
            /** @description Instructions */
            instructions?: string;
            /** @description Facility Code */
            facility_code?: string;
            /** @description Critical Pull Time (local time) */
            lasership_critical_pull_time: string;
            /** @description Critical Entry Time (local time) */
            lasership_critical_entry_time: string;
            /**
             * @description Declare piece attributes separately for every shipment, overrides individual attribute below.
             * @default false
             */
            declare_piece_attributes_separately_for_every_shipment?: boolean;
            /** @description Set this to true if your shipments will always contain Alcohol */
            AttrAlcohol?: boolean;
            /** @description Set this to true if your shipments will always contain DryIce */
            AttrDryIce?: boolean;
            /** @description Set this to true if your shipments will always contain Hazmat */
            AttrHazmat?: boolean;
            /** @description Set this to true if your shipments will always require Two Persons */
            AttrTwoPersons?: boolean;
            /** @description Set this to true if your shipments will always contain Explosives */
            AttrExplosive?: boolean;
            /** @description Set this to true if your shipments will always contain Controlled Substances */
            AttrControlledSubstance?: boolean;
            /** @description Set this to true if your shipments will always require Refrigeration */
            AttrRefrigerated?: boolean;
            /** @description Set this to true if your shipments will always be Perishable */
            AttrPerishable?: boolean;
            /** @description Set this to true if your shipments will always use "No Return To Sender" */
            AttrNoRTS?: boolean;
        };
        /**
         * connect_newgistics_request_body
         * @description A Newgistics account information request body
         */
        connect_newgistics_request_body: {
            /**
             * Format: int32
             * @description Merchant id
             */
            merchant_id?: number;
            /**
             * Format: int32
             * @description Mailer id
             */
            mailer_id?: number;
            /** @description Induction site */
            induction_site: string;
            /** @description Nickname */
            nickname: string;
        };
        /**
         * connect_ontrac_request_body
         * @description An Ontrac account information request body
         */
        connect_ontrac_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Account number */
            account_number: string;
            /** @description Password */
            password: string;
        };
        /**
         * connect_purolator_request_body
         * @description A Purolator account information request body
         */
        connect_purolator_request_body: {
            /** @description Account number */
            account_number: string;
            /** @description Activation key */
            activation_key: string;
            /** @description Nickname */
            nickname: string;
        };
        /**
         * connect_royal_mail_request_body
         * @description A Royal Mail account information request body
         */
        connect_royal_mail_request_body: {
            /** @description Account number */
            account_number: string;
            /** @description The oba email address */
            oba_email?: components["schemas"]["email"];
            /** @description Contact name */
            contact_name: string;
            /** @description The email address */
            email?: components["schemas"]["email"];
            /** @description Company name */
            company_name?: string;
            /** @description Street line1 */
            street_line1?: string;
            /** @description Street line2 */
            street_line2?: string;
            /** @description Street line3 */
            street_line3?: string;
            /** @description City */
            city: string;
            /** @description Postal code */
            postal_code: string;
            /** @description Phone */
            phone?: string;
            /** @description Nickname */
            nickname: string;
        };
        /**
         * connect_seko_request_body
         * @description A SEKO account information request body
         */
        connect_seko_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Seko Account Access Key */
            access_key: string;
        };
        /**
         * connect_sendle_request_body
         * @description A Sendle account information request body
         */
        connect_sendle_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description A string that uniquely identifies the sendle */
            sendle_id: components["schemas"]["se_id"];
            /** @description API key */
            api_key: string;
        };
        /**
         * connect_stamps_request_body
         * @description A Stamps account information request body
         */
        connect_stamps_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Username */
            username: string;
            /** @description Password */
            password: string;
        };
        /**
         * connect_ups_request_body
         * @description A UPS account information request body.  The location header from this call should be used to redirect to UPS for sign in.
         */
        connect_ups_request_body: {
            /** @description Nickname */
            nickname: string;
            /** @description Account number */
            account_number: string;
            /** @description Account Postal Code */
            account_postal_code: string;
            /** @description Account Country Code */
            account_country_code: string;
        };
        /**
         * connect_carrier_response_body
         * @description A connect account response body
         */
        connect_carrier_response_body: {
            /** @description A string that uniquely identifies the carrier */
            carrier_id: components["schemas"]["se_id"];
        };
        /**
         * carrier_name_with_settings
         * @description The shipping carriers for which ShipEngine supports carrier settings
         * @enum {string}
         */
        carrier_name_with_settings: "dhl_express" | "fedex" | "newgistics" | "ups";
        /** get_carrier_settings_response_body */
        get_carrier_settings_response_body: components["schemas"]["dhl_express_settings_response_body"] | components["schemas"]["fedex_settings_response_body"] | components["schemas"]["ups_settings_response_body"];
        /**
         * dhl_express_settings_response_body
         * @description A DHL Express response body
         */
        dhl_express_settings_response_body: components["schemas"]["dhl_express_account_settings"];
        /**
         * dhl_express_account_settings
         * @description A DHL Express account settings
         */
        dhl_express_account_settings: {
            /** @description Account nickname */
            nickname?: string;
            /** @description Indicates if the account number should be hidden on the archive documentation */
            should_hide_account_number_on_archive_doc?: boolean;
            /** @description Indicates if this is primary account */
            is_primary_account?: boolean;
        };
        /**
         * fedex_settings_response_body
         * @description A Fedex settings response body
         */
        fedex_settings_response_body: components["schemas"]["fedex_account_settings_request_body"];
        /**
         * fedex_account_settings_request_body
         * @description A Fedex account settings request body
         */
        fedex_account_settings_request_body: components["schemas"]["fedex_account_settings"];
        /**
         * fedex_account_settings
         * @description A Fedex account settings request body
         */
        fedex_account_settings: {
            /** @description Account nickname */
            nickname?: string;
            pickup_type?: components["schemas"]["fedex_pickup_type"];
            smart_post_hub?: components["schemas"]["smart_post_hub"];
            smart_post_endorsement?: components["schemas"]["ancillary_service_endorsement"];
            is_primary_account?: boolean;
            signature_image?: string;
            letterhead_image?: string;
        };
        /**
         * fedex_pickup_type
         * @description Tax identifier type for customs declaration
         *
         *     |Pickup Type               |Description
         *     |--------------------------|-----------------------------------------
         *     |`none`                    | Not specified
         *     |`regular_pickup`          | You already have a daily pickup scheduled with FedEx
         *     |`request_courier`         | You will call FedEx to request a courier
         *     |`drop_box`                | You will drop-off packages in a FedEx drop box
         *     |`business_service_center` | You will drop-off packages at an authorized FedEx business service center
         *     |`station`                 | You will drop-off the package at a FedEx Station
         * @example regular_pickup
         * @enum {string}
         */
        fedex_pickup_type: "none" | "regular_pickup" | "request_courier" | "drop_box" | "business_service_center" | "station";
        /**
         * smart_post_hub
         * @description The possible smart post hub values
         * @example groveport_oh
         * @enum {string}
         */
        smart_post_hub: "none" | "allentown_pa" | "atlanta_ga" | "baltimore_md" | "charlotte_nc" | "chino_ca" | "dallas_tx" | "denver_co" | "detroit_mi" | "edison_nj" | "grove_city_oh" | "groveport_oh" | "houston_tx" | "indianapolis_in" | "kansas_city_ks" | "los_angeles_ca" | "martinsburg_wv" | "memphis_tn" | "minneapolis_mn" | "new_berlin_wi" | "northborough_ma" | "orlando_fl" | "phoneix_az" | "pittsburgh_pa" | "reno_nv" | "sacramento_ca" | "salt_lake_city_ut" | "seattle_wa" | "st_louis_mo" | "windsor_ct" | "newark_ny" | "south_brunswick_nj" | "scranton_pa" | "wheeling_il" | "middletown_ct" | "portland_or";
        /**
         * ups_settings_response_body
         * @description A UPS settings response body
         */
        ups_settings_response_body: components["schemas"]["ups_account_settings"];
        /**
         * ups_account_settings
         * @description UPS account settings
         */
        ups_account_settings: {
            /** @description nickname */
            nickname?: string;
            /** @description Indicates if this is the primary UPS account */
            is_primary_account?: boolean;
            pickup_type?: components["schemas"]["ups_pickup_type"];
            /** @description The use carbon neutral shipping program */
            use_carbon_neutral_shipping_program?: boolean;
            /** @description The use ground freight pricing */
            use_ground_freight_pricing?: boolean;
            /** @description The use consolidation services */
            use_consolidation_services?: boolean;
            /** @description The use order number on mail innovations labels */
            use_order_number_on_mail_innovations_labels?: boolean;
            mail_innovations_endorsement?: components["schemas"]["ancillary_service_endorsement"];
            /** @description mail innovations cost center */
            mail_innovations_cost_center?: string;
            /** @description The use negotiated rates */
            use_negotiated_rates?: boolean;
            /** @description account postal code */
            account_postal_code?: string;
            /** @description The invoice */
            invoice?: components["schemas"]["ups_invoice"];
        };
        /**
         * ups_pickup_type
         * @description The possible ups pickup type values
         * @example daily_pickup
         * @enum {string}
         */
        ups_pickup_type: "daily_pickup" | "occasional_pickup" | "customer_counter";
        /**
         * ups_invoice
         * @description UPS invoice
         */
        ups_invoice: {
            /**
             * Format: date-time
             * @description invoice date
             */
            invoice_date?: string;
            /** @description invoice number */
            invoice_number?: string;
            /** @description A string that uniquely identifies the control */
            control_id?: components["schemas"]["se_id"];
            invoice_amount?: number;
            invoice_currency_code?: string;
        };
        /** update_carrier_settings_request_body */
        update_carrier_settings_request_body: components["schemas"]["update_dhl_express_settings_request_body"] | components["schemas"]["update_fedex_settings_request_body"] | components["schemas"]["update_newgistics_settings_request_body"] | components["schemas"]["update_ups_settings_request_body"] | components["schemas"]["update_amazon_buy_shipping_request_body"];
        /**
         * update_dhl_express_settings_request_body
         * @description An update dhl express settings request body
         */
        update_dhl_express_settings_request_body: components["schemas"]["dhl_express_account_settings"];
        /**
         * update_fedex_settings_request_body
         * @description An update Fedex settings request body
         */
        update_fedex_settings_request_body: components["schemas"]["fedex_account_settings"];
        /**
         * update_newgistics_settings_request_body
         * @description A newgistics account settings request body
         */
        update_newgistics_settings_request_body: {
            include_barcode_with_order_number?: boolean;
            receive_email_on_manifest_processing?: boolean;
        };
        /**
         * update_ups_settings_request_body
         * @description An update UPS settings request body
         */
        update_ups_settings_request_body: components["schemas"]["ups_account_settings"];
        /**
         * update_amazon_buy_shipping_request_body
         * @description An amazon buy shipping account settings request body
         */
        update_amazon_buy_shipping_request_body: {
            /** @description Email */
            email?: string;
        };
        /** disconnect_insurer_response_body */
        disconnect_insurer_response_body: Record<string, never>;
        /**
         * connect_insurer_request_body
         * @description A create shipsurance connection request body
         */
        connect_insurer_request_body: {
            email: components["schemas"]["email"];
            policy_id: string;
        };
        /** connect_insurer_response_body */
        connect_insurer_response_body: Record<string, never>;
        /**
         * create_combined_label_document_request_body
         * @description A create combined label document request body
         */
        create_combined_label_document_request_body: {
            /**
             * @description The list of up to 30 label ids to include in the combined label document.
             *     Note that to avoid response size limits, you should only expect to be able to combine 30 single page labels similar in size to that of USPS labels.
             */
            label_ids?: components["schemas"]["se_id"][];
            /**
             * @description The file format for the combined label document; note that currently only `"pdf"` is supported.
             * @enum {string}
             */
            label_format?: "pdf";
            /** @default inline */
            label_download_type?: components["schemas"]["label_download_type"];
        };
        /**
         * document_type
         * @description The type of carrier document being registered. Supported values vary by carrier. See the [Carrier Document Upload guide](/apis/@shipengine/docs/labels/carrier-document-upload.md) for the document types each carrier accepts.
         * @example usmca_commercial_invoice_certification_of_origin
         * @enum {string}
         */
        document_type: "commercial_invoice" | "certificate_of_origin" | "usmca_commercial_invoice_certification_of_origin" | "usmca_certification_of_origin" | "pro_forma_invoice" | "other" | "authorization_form" | "export_accompanying_document" | "export_license" | "import_permit" | "one_time_nafta" | "power_of_attorney" | "packing_list" | "sed_document" | "shippers_letter_of_instruction" | "declaration" | "section_232_customs_affidavit";
        /**
         * document_format
         * @description The file format of the document being uploaded.
         * @example PDF
         * @enum {string}
         */
        document_format: "PDF" | "PNG";
        /**
         * document_status_value
         * @description The processing status of a carrier document.
         *
         *     - `awaiting_upload` - The document has been registered and is waiting for the file to be uploaded to the provided upload target.
         *     - `processing` - The uploaded file is being processed.
         *     - `processing_claimed` - The document has been claimed for processing.
         *     - `invalid` - The document failed validation and cannot be used.
         *     - `uploaded` - The file has been uploaded successfully and is ready to be sent to the carrier.
         *     - `queued` - The document is queued to be sent to the carrier.
         *     - `sent` - The document has been transmitted to the carrier.
         *     - `failed` - Sending the document to the carrier failed.
         * @example awaiting_upload
         * @enum {string}
         */
        document_status_value: "awaiting_upload" | "processing" | "processing_claimed" | "invalid" | "uploaded" | "queued" | "sent" | "failed";
        /**
         * register_document_request_body
         * @description A request to register a carrier document against a shipment or label.
         */
        register_document_request_body: {
            /** @description The type of document being registered. */
            type: components["schemas"]["document_type"];
            /** @description The file format of the document. Defaults to `PDF` when omitted. */
            format?: components["schemas"]["document_format"];
            /**
             * @description The file name of the document, including its extension.
             * @example usmca-certification-of-origin.pdf
             */
            file_name: string;
        };
        /**
         * register_document_response_body
         * @description The result of registering a document. Use the returned `upload` target to upload the document file to Amazon S3 before sending it to the carrier.
         * @example {
         *       "document_id": "019eb24e-cd4e-7609-b740-c2324fe93272",
         *       "upload": {
         *         "url": "https://carrier-doc-upload.s3.amazonaws.com",
         *         "fields": {
         *           "Content-Type": "application/pdf",
         *           "key": "019eb24e-cd4e-7609-b740-c2324fe93272.pdf",
         *           "x-amz-meta-document-id": "019eb24e-cd4e-7609-b740-c2324fe93272",
         *           "x-amz-meta-seller-id": "8801990",
         *           "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
         *           "X-Amz-Credential": "ASIA.../20260610/us-east-1/s3/aws4_request",
         *           "X-Amz-Date": "20260610T161249Z",
         *           "Policy": "eyJleHBpcmF0aW9uIjoi...",
         *           "X-Amz-Signature": "b81189b9df29...",
         *           "X-Amz-Security-Token": "IQoJb3JpZ2lu..."
         *         }
         *       }
         *     }
         */
        register_document_response_body: {
            /**
             * @description The unique identifier assigned to the registered document.
             * @example 019eb24e-cd4e-7609-b740-c2324fe93272
             */
            document_id?: string;
            /** @description The pre-signed Amazon S3 target the document file must be uploaded to. */
            upload?: components["schemas"]["document_upload_target"];
        };
        /**
         * document_upload_target
         * @description A pre-signed Amazon S3 POST target describing where and how to upload a document file.
         */
        document_upload_target: {
            /**
             * Format: uri
             * @description The Amazon S3 endpoint to upload the document file to via an HTTP `POST` with `multipart/form-data`.
             * @example https://carrier-doc-upload.s3.amazonaws.com
             */
            url?: string;
            /** @description The S3 presigned-POST form fields. Include **every** field exactly as returned in the upload request, followed by a `file` part containing the document content. */
            fields?: {
                /**
                 * @description The MIME type of the document; matches the registered document format.
                 * @example application/pdf
                 */
                "Content-Type"?: string;
                /**
                 * @description The S3 object key the file will be stored under.
                 * @example 019eb24e-cd4e-7609-b740-c2324fe93272.pdf
                 */
                key?: string;
                /**
                 * @description S3 object metadata: the registered document's unique identifier.
                 * @example 019eb24e-cd4e-7609-b740-c2324fe93272
                 */
                "x-amz-meta-document-id"?: string;
                /**
                 * @description S3 object metadata: the seller's identifier.
                 * @example 8801990
                 */
                "x-amz-meta-seller-id"?: string;
                /**
                 * @description The AWS signing algorithm used for the pre-signed POST.
                 * @example AWS4-HMAC-SHA256
                 */
                "X-Amz-Algorithm"?: string;
                /**
                 * @description The AWS credential scope used to sign the upload.
                 * @example ASIA.../20260610/us-east-1/s3/aws4_request
                 */
                "X-Amz-Credential"?: string;
                /**
                 * @description The timestamp the signature was generated, in ISO 8601 basic format.
                 * @example 20260610T161249Z
                 */
                "X-Amz-Date"?: string;
                /**
                 * @description The base64-encoded S3 POST policy defining the conditions the upload must satisfy, such as the allowed key, content type, size, and expiration.
                 * @example eyJleHBpcmF0aW9uIjoi...
                 */
                Policy?: string;
                /**
                 * @description The signature authorizing the upload, derived from the policy and credentials.
                 * @example b81189b9df29...
                 */
                "X-Amz-Signature"?: string;
                /**
                 * @description The temporary AWS session token for the credentials.
                 * @example IQoJb3JpZ2lu...
                 */
                "X-Amz-Security-Token"?: string;
            } & {
                [key: string]: string;
            };
        };
        /**
         * document_status
         * @description The current state of a carrier document.
         */
        document_status: {
            /**
             * @description The unique identifier of the document.
             * @example 7f3c1b2a-9d4e-4f5a-8c6b-2e1d0a9b8c7d
             */
            document_id?: string;
            /** @description The type of the document. */
            type?: components["schemas"]["document_type"];
            /**
             * @description The file name of the document.
             * @example usmca-certification-of-origin.pdf
             */
            file_name?: string;
            /** @description The processing status of the document. */
            status?: components["schemas"]["document_status_value"];
            /**
             * @description A description of the error when the document is `invalid` or `failed`; otherwise `null`.
             * @example The uploaded file could not be read.
             */
            error?: string | null;
            /**
             * @description The carrier-assigned identifier for the document once it has been sent; otherwise `null`.
             * @example 1Z999AA10123456784
             */
            external_id?: string | null;
        };
        /**
         * list_documents_response_body
         * @description The list of documents registered against the shipment or label.
         */
        list_documents_response_body: components["schemas"]["document_status"][];
        /**
         * order_shipment
         * @description A shipment associated with the requested id, along with its registered documents.
         */
        order_shipment: {
            /**
             * @description The unique identifier of the shipment.
             * @example se-28529731
             */
            shipment_id?: string;
            /**
             * @description The tracking number of the shipment.
             * @example 1Z999AA10123456784
             */
            tracking_number?: string;
            /** @description The carrier documents registered against the shipment. */
            documents?: components["schemas"]["document_status"][];
        };
        /**
         * list_shipment_labels_response_body
         * @description The list of shipments associated with the requested id and their registered documents.
         */
        list_shipment_labels_response_body: components["schemas"]["order_shipment"][];
        /**
         * send_documents_response_body
         * @description The result of sending a label's documents to the carrier.
         */
        send_documents_response_body: {
            /**
             * @description The number of documents that were sent to the carrier.
             * @example 2
             */
            sent_count?: number;
            /** @description The identifiers of the documents that were sent. */
            document_ids?: string[];
        };
        /**
         * label_download_type
         * @description There are two different ways to download a label:
         *
         *     |Label Download Type | Description
         *     |--------------------|------------------------------
         *     |`url`               |You will receive a URL, which you can use to download the label in a separate request. The URL will remain valid for 90 days.
         *     |`inline`            |You will receive the Base64-encoded label as part of the response. No need for a second request to download the label.
         * @example url
         * @enum {string}
         */
        label_download_type: "url" | "inline";
        /**
         * create_combined_label_document_response_body.yaml
         * @description A create combined label document response body
         */
        "create_combined_label_document_response_body.yaml": {
            /** @description The download for the combined label document */
            readonly label_download?: components["schemas"]["label_download"];
        };
        /**
         * download_file_pdf_response_body
         * Format: binary
         */
        download_file_pdf_response_body: string;
        /**
         * download_file_png_response_body
         * Format: binary
         */
        download_file_png_response_body: string;
        /**
         * download_file_zpl_response_body
         * Format: binary
         */
        download_file_zpl_response_body: string;
        /**
         * list_webhooks_response_body
         * @description A webhook list response body
         */
        list_webhooks_response_body: components["schemas"]["webhook"][];
        /**
         * webhook
         * @description A webhook
         */
        webhook: {
            /** @description A string that uniquely identifies the webhook */
            readonly webhook_id?: components["schemas"]["se_id"];
            /**
             * @description The webhook payload listener URL that you intend to target for webhook dispatches
             * @example https://example.com/station/events
             */
            url?: components["schemas"]["url"];
            event?: components["schemas"]["webhook_event"];
            /** @description Array of custom webhook headers */
            headers?: components["schemas"]["webhook_header"][];
            /**
             * @description The name of the webhook
             * @example My Webhook
             */
            name?: string;
            /**
             * Format: int32
             * @description Store ID
             * @example 123456
             */
            store_id?: number;
        };
        /**
         * webhook_event
         * @description The possible webhook event values
         * @example batch
         * @enum {string}
         */
        webhook_event: "batch" | "carrier_connected" | "order_source_refresh_complete" | "rate" | "report_complete" | "sales_orders_imported" | "track" | "freight_track_event_v2";
        /**
         * webhook_header
         * @description Optional header to be specified in webhook
         */
        webhook_header: {
            key: components["schemas"]["key"];
            value: components["schemas"]["value"];
        };
        /**
         * key
         * @description Key/name of a header
         * @example custom-key
         */
        key: string;
        /**
         * value
         * @description Value of a header
         * @example custom-value
         */
        value: string;
        /**
         * create_webhook_request_body
         * @description A create webhook request body
         */
        create_webhook_request_body: {
            event: components["schemas"]["webhook_event"];
            /**
             * @description The webhook payload listener URL that you intend to target for webhook dispatches
             * @example https://example.com/station/events
             */
            url: components["schemas"]["url"];
            /** @description Array of custom webhook headers */
            headers?: components["schemas"]["webhook_header"][];
            /**
             * @description The name of the webhook
             * @example My New Webhook
             */
            name?: string;
            /**
             * Format: int32
             * @description Store ID
             * @example 123456
             */
            store_id?: number;
        };
        /**
         * create_webhook_response_body
         * @description A webhook response body
         */
        create_webhook_response_body: WithRequired<components["schemas"]["webhook"], "webhook_id" | "url" | "event">;
        /**
         * get_webhook_by_id_response_body
         * @description A get webhook id response body
         */
        get_webhook_by_id_response_body: WithRequired<components["schemas"]["webhook"], "webhook_id" | "url" | "event">;
        /**
         * update_webhook_request_body
         * @description An update webhook request body
         */
        update_webhook_request_body: {
            /**
             * @description The webhook payload listener URL that you intend to target for webhook dispatches
             * @example https://example.com/station/events
             */
            url?: components["schemas"]["url"];
            /** @description Array of custom webhook headers */
            headers?: components["schemas"]["webhook_header"][];
            /**
             * @description The name of the webhook
             * @example My Updated Webhook
             */
            name?: string;
            /**
             * Format: int32
             * @description Store ID
             * @example 123456
             */
            store_id?: number;
        };
        /**
         * add_funds_to_insurance_request_body
         * @description An add funds to insurance request body
         */
        add_funds_to_insurance_request_body: components["schemas"]["monetary_value"];
        /**
         * add_funds_to_insurance_response_body
         * @description Add funds to insurance response body
         */
        add_funds_to_insurance_response_body: components["schemas"]["monetary_value"];
        /**
         * get_insurance_balance_response_body
         * @description A get insurance balance response body
         */
        get_insurance_balance_response_body: components["schemas"]["monetary_value"];
        /**
         * label_status
         * @description The possible statuses that a shipping label can be in.
         *
         *     |Status       |Description
         *     |:------------|:-----------------------------------------------------
         *     |`processing` |When labels are created in a batch, it may take a few minutes for all of the labels in the batch to be created. During this period, they will be in `processing` status.
         *     |`completed`  |The label was successfully created
         *     |`error`      |The label could not be created due to an error, such as an invalid delivery address
         *     |`voided`     |The label has been voided
         * @enum {string}
         */
        label_status: "processing" | "completed" | "error" | "voided";
        /**
         * service_code
         * @description A carrier service, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.
         * @example usps_first_class_mail
         */
        service_code: string;
        /**
         * list_labels_response_body
         * @description A list label response body
         */
        list_labels_response_body: {
            /** @description The labels that matched the query criteria.  If no matching labels were found, then this array is empty; otherwise, it contains one page of results.  The last page of results may have fewer labels than the `page_size`. */
            labels: {
                /** @description A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created. */
                readonly label_id?: components["schemas"]["se_id"];
                readonly status?: components["schemas"]["label_status"];
                /** @description The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you create a label, or you can create your own shipment and then use it to print a label */
                readonly shipment_id?: components["schemas"]["se_id"];
                /** @description A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment. */
                readonly external_shipment_id?: string | null;
                /** @description ID that the Order Source assigned */
                readonly external_order_id?: string | null;
                /** @description The shipment information used to generate the label */
                shipment?: components["schemas"]["shipment"];
                /** @description The date that the package was (or will be) shipped. ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead. */
                readonly ship_date?: components["schemas"]["date"];
                /** @description The date and time that the label was created in ShipEngine. */
                readonly created_at?: components["schemas"]["date_time"];
                /** @description The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs. */
                readonly shipment_cost?: components["schemas"]["monetary_value"];
                /** @description The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost. */
                readonly insurance_cost?: components["schemas"]["monetary_value"];
                /** @description The total shipping cost for the specified comparison_rate_type. */
                readonly requested_comparison_amount?: components["schemas"]["monetary_value"];
                /**
                 * @description A list of rate details that are associated with shipping cost. This is useful for
                 *     displaying a breakdown of the rate to the user.
                 */
                readonly rate_details?: components["schemas"]["rate_detail"][];
                /**
                 * @description The tracking number for the package. Tracking number formats vary across carriers.
                 * @example 782758401696
                 */
                readonly tracking_number?: string;
                /** @description Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned. */
                is_return_label?: boolean;
                /** @description An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value. */
                rma_number?: string | null;
                /** @description Indicates whether this is an international shipment.  That is, the originating country and destination country are different. */
                readonly is_international?: boolean;
                /** @description If this label was created as part of a batch, then this is the unique ID of that batch. */
                readonly batch_id?: components["schemas"]["se_id"];
                /** @description The unique ID of the carrier account that was used to create this label */
                readonly carrier_id?: components["schemas"]["se_id"];
                /** @description The label charge event. */
                charge_event?: components["schemas"]["label_charge_event"];
                /**
                 * @description The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
                 *     required by some carriers.
                 */
                outbound_label_id?: components["schemas"]["se_id"];
                /** @description The carrier service used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc. */
                readonly service_code?: components["schemas"]["service_code"];
                /**
                 * @deprecated
                 * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
                 * @default false
                 */
                test_label?: boolean;
                /** @description The package type, such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type. */
                readonly package_code?: components["schemas"]["package_code"];
                /** @default validate_and_clean */
                validate_address?: components["schemas"]["validate_address"];
                /** @description Indicates whether the label has been voided */
                readonly voided?: boolean;
                /** @description The date and time that the label was voided, or `null` if the label has not been voided */
                readonly voided_at?: (string & components["schemas"]["date_time"]) | null;
                /** @default url */
                label_download_type?: components["schemas"]["label_download_type"];
                /**
                 * @description The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
                 * @default pdf
                 */
                label_format?: components["schemas"]["label_format"];
                /**
                 * @description The display format that the label should be shown in.
                 * @default label
                 */
                display_scheme?: components["schemas"]["display_scheme"];
                /**
                 * @description The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
                 * @default 4x6
                 */
                label_layout?: components["schemas"]["label_layout"];
                /** @description Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`. */
                readonly trackable?: boolean;
                /** @description The label image resource that was used to create a custom label image. */
                label_image_id?: (string & components["schemas"]["image_id"]) | null;
                /** @description The shipping carrier who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc. */
                readonly carrier_code?: components["schemas"]["carrier_code"];
                /** @description The current status of the package, such as `in_transit` or `delivered` */
                readonly tracking_status?: components["schemas"]["tracking_status"];
                /** @description The type of delivery confirmation for this shipment. Defaults to 'none' if not specified. */
                readonly confirmation?: components["schemas"]["delivery_confirmation"];
                readonly label_download?: components["schemas"]["label_download"];
                /** @description The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it. */
                readonly form_download?: components["schemas"]["link"] | null;
                /** @description The QR code download for the package */
                readonly qr_code_download?: components["schemas"]["optional_link"] | null;
                /** @description The paperless details which may contain elements like `href`, `instructions` and `handoff_code`. */
                readonly paperless_download?: components["schemas"]["paperless_download"] | null;
                /** @description The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission. */
                readonly insurance_claim?: components["schemas"]["link"] | null;
                /**
                 * @description The label's package(s).
                 *
                 *     > **Note:** Some carriers only allow one package per label. If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.
                 */
                readonly packages?: (components["schemas"]["label_package"] & components["schemas"]["alternative_identifiers"])[];
                /** @description Additional information some carriers may provide by which to identify a given label in their system. */
                readonly alternative_identifiers?: components["schemas"]["alternative_identifier"][] | null;
                /**
                 * @description The URL to track the package. This URL is provided by the carrier and is unique to the tracking number.
                 * @example https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234
                 */
                readonly tracking_url?: string | null;
                /** @description The recipient's mailing address */
                readonly ship_to?: components["schemas"]["shipping_address_to"];
                /** @description ShipStation's predicted delivery estimate for this label. This is the only delivery estimate in a label response; it is omitted when no prediction is available. */
                readonly delivery_prediction?: components["schemas"]["delivery_prediction"];
            }[];
        } & components["schemas"]["paged_list_response_body"];
        /**
         * create_label_request_body
         * @description A purchase label request body
         */
        create_label_request_body: {
            /**
             * @description A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.
             * @example 614940
             */
            ship_to_service_point_id?: string | null;
            /**
             * @description A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.
             * @example 614940
             */
            ship_from_service_point_id?: string | null;
        } & WithRequired<components["schemas"]["label_request"], "shipment">;
        /**
         * create_netstamps_labels_request_body
         * @description Request body for creating NetStamps labels.
         */
        create_netstamps_labels_request_body: {
            /** @description The shipments to create NetStamps labels for. All shipments must use the same `carrier_id`. Each shipment must include `advanced_options.netstamps_options` with `row` and `column` to control stamp placement. Row/column combinations must be unique across shipments. */
            shipments: components["schemas"]["shipment_request"][];
            /**
             * @description The NetStamps layout to use.
             * @example netstamps_traditional
             * @enum {string}
             */
            label_layout: "netstamps_traditional" | "netstamps_standard" | "netstamps_alternate" | "netstamps_promotional" | "netstamps_themed" | "netstamps_photo_landscape" | "netstamps_photo_portrait" | "netstamps_photo_landscape_hs" | "netstamps_return_address" | "netstamps_roll_type_sd" | "netstamps_promo_paper20";
            /**
             * @description The file format for the label.
             * @default pdf
             * @example pdf
             * @enum {string}
             */
            label_format?: "pdf" | "png";
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
             * @default false
             * @example true
             */
            test_label?: boolean;
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description Indicates whether these are return labels.
             * @default false
             * @example true
             */
            is_return_label?: boolean;
            /**
             * @description An optional Return Merchandise Authorization number for return labels.
             * @example asd12323
             */
            rma_number?: string | null;
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /** @description The `label_id` of the original label that the return label is for. */
            outbound_label_id?: components["schemas"]["se_id"];
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: components["schemas"]["image_id"];
            /**
             * @description A unique identifier for a carrier service point where the shipment will be delivered.
             * @example 614940
             */
            ship_to_service_point_id?: string | null;
            /**
             * @description A unique identifier for a carrier drop off point where a merchant plans to deliver packages.
             * @example 614940
             */
            ship_from_service_point_id?: string | null;
        };
        /**
         * create_mail_labels_request_body
         * @description Request body for creating mail labels on a label sheet.
         */
        create_mail_labels_request_body: {
            /** @description The shipments to create mail labels for. All shipments must use the same `carrier_id`. */
            shipments: components["schemas"]["shipment_request"][];
            /** @description Layout options for printing mail labels on a single sheet. Controls the starting position on the label sheet. */
            mailing_options: {
                /**
                 * Format: int32
                 * @description The row on the sheet where label placement begins.
                 * @default 0
                 * @example 0
                 */
                start_row?: number;
                /**
                 * Format: int32
                 * @description The column on the sheet where label placement begins.
                 * @default 0
                 * @example 0
                 */
                start_column?: number;
            };
            /**
             * @description The mail label layout to use.
             * @example mail_label_sdc3110
             * @enum {string}
             */
            label_layout: "mail_label_sdc3110" | "mail_label_avery5160" | "mail_label_avery5163";
            /**
             * @description The file format for the label.
             * @default pdf
             * @example pdf
             * @enum {string}
             */
            label_format?: "pdf" | "png";
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
             * @default false
             * @example true
             */
            test_label?: boolean;
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description Indicates whether these are return labels.
             * @default false
             * @example true
             */
            is_return_label?: boolean;
            /**
             * @description An optional Return Merchandise Authorization number for return labels.
             * @example asd12323
             */
            rma_number?: string | null;
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /** @description The `label_id` of the original label that the return label is for. */
            outbound_label_id?: components["schemas"]["se_id"];
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: components["schemas"]["image_id"];
            /**
             * @description A unique identifier for a carrier service point where the shipment will be delivered.
             * @example 614940
             */
            ship_to_service_point_id?: string | null;
            /**
             * @description A unique identifier for a carrier drop off point where a merchant plans to deliver packages.
             * @example 614940
             */
            ship_from_service_point_id?: string | null;
        };
        /**
         * create_envelope_label_request_body
         * @description Request body for creating an envelope label.
         */
        create_envelope_label_request_body: {
            /** @description The shipment information used to generate the envelope label. */
            shipment: components["schemas"]["shipment_request"];
            /**
             * @description The envelope layout to use.
             * @example envelope_9
             * @enum {string}
             */
            label_layout: "envelope_9" | "envelope_10" | "envelope_11" | "envelope_12" | "envelope_personal" | "envelope_monarch" | "envelope_greeting" | "envelope_invitation" | "envelope_traditional_single" | "envelope_standard_single" | "envelope_themed_single" | "envelope_photo_landscape_single" | "envelope_photo_portrait_single" | "envelope_return_address_single" | "envelope_alternate_single" | "envelope_themed_alt_single";
            /**
             * @description The file format for the label.
             * @default pdf
             * @example pdf
             * @enum {string}
             */
            label_format?: "pdf" | "png" | "zpl";
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
             * @default false
             * @example true
             */
            test_label?: boolean;
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description Indicates whether this is a return label.
             * @default false
             * @example true
             */
            is_return_label?: boolean;
            /**
             * @description An optional Return Merchandise Authorization number for return labels.
             * @example asd12323
             */
            rma_number?: string | null;
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /** @description The `label_id` of the original label that the return label is for. */
            outbound_label_id?: components["schemas"]["se_id"];
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: components["schemas"]["image_id"];
            /**
             * @description A unique identifier for a carrier service point where the shipment will be delivered.
             * @example 614940
             */
            ship_to_service_point_id?: string | null;
            /**
             * @description A unique identifier for a carrier drop off point where a merchant plans to deliver packages.
             * @example 614940
             */
            ship_from_service_point_id?: string | null;
        };
        /**
         * multi_label_response_body
         * @description Response containing multiple labels created from a mailing request. Extends the standard label with a total cost summary and associated labels.
         */
        multi_label_response_body: components["schemas"]["label"] & {
            /** @description The combined cost of all labels in this mailing request. */
            readonly total_cost?: components["schemas"]["monetary_value"];
            /** @description The individual labels created for each shipment in the request. */
            readonly associated_labels?: components["schemas"]["create_label_response_body"][];
        };
        /**
         * label_request
         * @description A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to create labels and then download them in PDF, PNG, or ZPL format so you can print them.
         */
        label_request: {
            /** @description The shipment information used to generate the label */
            shipment?: components["schemas"]["shipment_request"];
            /** @description Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned. */
            is_return_label?: boolean;
            /** @description An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value. */
            rma_number?: string | null;
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /**
             * @description The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
             *     required by some carriers.
             */
            outbound_label_id?: components["schemas"]["se_id"];
            /**
             * @deprecated
             * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
             * @default false
             */
            test_label?: boolean;
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
             * @default pdf
             */
            label_format?: components["schemas"]["label_format"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
             * @default 4x6
             */
            label_layout?: components["schemas"]["label_layout"];
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: (string & components["schemas"]["image_id"]) | null;
        };
        /**
         * shipment_request
         * @description The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
         *
         *     > **Note:** Either `ship_from` or `warehouse_id` must be set.
         */
        shipment_request: {
            /** @description The carrier account that is billed for the shipping charges */
            carrier_id: components["schemas"]["se_id"];
            /** @description The carrier service used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc. */
            service_code: components["schemas"]["service_code"];
            /** @description ID that the Order Source assigned */
            external_order_id?: string | null;
            /**
             * @description Describe the packages included in this shipment as related to potential metadata that was imported from
             *     external order sources
             * @default []
             */
            items?: components["schemas"]["shipment_item"][];
            tax_identifiers?: components["schemas"]["tax_identifier"][] | null;
            /**
             * @description A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.
             *
             *     > **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.
             */
            external_shipment_id?: string | null;
            /**
             * @description A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.
             *
             *     > **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.
             */
            shipment_number?: string | null;
            /** @description The date that the shipment was (or will be) shipped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead. */
            ship_date?: components["schemas"]["date"];
            /** @description The recipient's mailing address */
            ship_to: components["schemas"]["shipping_address_to"];
            /** @description The shipment's origin address. If you frequently ship from the same location, consider creating a warehouse. Then you can simply specify the `warehouse_id` rather than the complete address each time. */
            ship_from?: components["schemas"]["shipping_address_from"];
            /**
             * @description The warehouse that the shipment is being shipped from. Either `warehouse_id` or `ship_from` must be specified.
             * @default null
             */
            warehouse_id?: (string & components["schemas"]["se_id"]) | null;
            /** @description The return address for this shipment.  Defaults to the `ship_from` address. */
            return_to?: components["schemas"]["shipping_address"];
            /**
             * @description An optional indicator if the shipment is intended to be a return. Defaults to false if not provided.
             * @default false
             */
            is_return?: boolean | null;
            /**
             * @description The type of delivery confirmation for this shipment. Defaults to 'none' if not specified.
             * @default none
             */
            confirmation?: components["schemas"]["delivery_confirmation"];
            /**
             * @description Customs information for international shipments.
             *
             *     > **Note:** International shipments (where `ship_from.country_code` differs from `ship_to.country_code`) must include either `customs` or `advanced_options`.
             *     >
             *     > To prepay duties and taxes (DDP / PDT), set `customs.terms_of_trade_code` to `ddp`.
             *     >
             *     > Please note that the guaranteed prepaid duties and taxes option is available only for eligible ShipStation carriers.
             */
            customs?: components["schemas"]["international_shipment_options"] | null;
            /**
             * @description Advanced shipment options.
             *
             *     > **Note:** International shipments must include either `customs` or `advanced_options`.
             */
            advanced_options?: components["schemas"]["advanced_shipment_options"];
            /**
             * @description The insurance provider to use for any insured packages in the shipment.
             * @default none
             */
            insurance_provider?: components["schemas"]["insurance_provider"];
            order_source_code?: components["schemas"]["order_source_name"];
            /**
             * @description The packages in the shipment.
             *
             *     > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
             */
            packages: components["schemas"]["package"][];
            /**
             * @description Calculate a rate for this shipment with the requested carrier using a ratecard that differs from the default.  Only supported for UPS and USPS.
             * @example retail
             */
            comparison_rate_type?: string | null;
        };
        /**
         * shipment_item
         * @description A shipment item
         */
        shipment_item: {
            /** @description item name */
            name?: string;
            /**
             * @description The ID of the sales order that this item belongs to. In shipment responses, this is `null` if the
             *     item isn't linked to a sales order.
             * @example 8c1f2a5e-3b7d-4e9a-a6c2-1d4f5e6a7b8c
             */
            sales_order_id?: string | null;
            /**
             * @description The ID of the sales order line item that this item belongs to. In shipment responses, this is
             *     `null` if the item isn't linked to a sales order.
             * @example 2e7b9c4d-6a1f-4c3e-8b5d-9f0a1b2c3d4e
             */
            sales_order_item_id?: string | null;
            /**
             * Format: int32
             * @description The quantity of this item included in the shipment
             */
            quantity?: number;
            /** @description Item Stock Keeping Unit */
            sku?: string | null;
            /** @description Item Stock Keeping Unit of the product bundle */
            readonly bundle_sku?: string | null;
            /** @description external order id */
            external_order_id?: string | null;
            /** @description external order item id */
            external_order_item_id?: string | null;
            /**
             * @description Amazon Standard Identification Number
             * @example B00005N5PF
             */
            asin?: string | null;
            order_source_code?: components["schemas"]["order_source_name"];
            /**
             * @description Unique identifier for the item. Use this value as `item_id` when you
             *     [split a shipment](#operation/split_shipment).
             * @example 1402291169813
             */
            item_id?: string | null;
        };
        /**
         * order_source_name
         * @description The order sources that are supported by ShipEngine
         * @enum {string}
         */
        order_source_name: "amazon_ca" | "amazon_us" | "brightpearl" | "channel_advisor" | "cratejoy" | "ebay" | "etsy" | "jane" | "groupon_goods" | "magento" | "paypal" | "seller_active" | "shopify" | "stitch_labs" | "squarespace" | "three_dcart" | "tophatter" | "walmart" | "woo_commerce" | "volusion";
        /**
         * tax_identifier
         * @description A tax identifier object
         */
        tax_identifier: {
            taxable_entity_type: components["schemas"]["taxable_entity_type"];
            identifier_type: components["schemas"]["identifier_type"];
            /** @description The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code. */
            issuing_authority: string;
            /** @description The value of the identifier */
            value: string;
        };
        /**
         * taxable_entity_type
         * @description The taxable entity type for this tax item. Valid values include the following
         *
         *     |Value       |Description
         *     |:---------  |:-----------------------------------------------------
         *     |`shipper`   | The shipper is responsible for this tax.
         *     |`recipient` | The recipient of the shipment is responsible for this tax.
         *     |`ior`       | The importer of records is responsible for tax.
         * @enum {string}
         */
        taxable_entity_type: "shipper" | "recipient" | "ior";
        /**
         * identifier_type
         * @description Tax identifier type for customs declaration
         *
         *     |Pickup Type    | Description
         *     |---------------|-----------------------------------------
         *     |`vat`          | The tax identifier is a Value Added Tax.
         *     |`eori`         | The tax identifier is an Economic Operators Registration and Identification Number (EORI).
         *     |`ssn`          | The tax identifier is a Social Security Number.
         *     |`ein`          | The tax identifier is an Employer Identification Number (EIN).
         *     |`tin`          | The tax identifier is a Tax Identification Number (TIN).
         *     |`ioss`         | The tax identifier is an Import One-Stop Shop (IOSS).
         *     |`pan`          | The tax identifier is a Permanent Account Number (PAN).
         *     |`voec`         | The tax identifier is a Norwegian VAT On E-Commerce(VOEC).
         *     |`pccc`         | The tax identifier is a Personal Customs Clearance Code (PCCC).
         *     |`oss`          | The tax identifier is an One-Stop Shop (OSS).
         *     |`passport`     | The tax identifier is a Passport Number.
         *     |`abn`          | The tax identifier is an Australian Business Number.
         *     |`ukims`        | The tax identifier is an UK Internal Market Scheme number.
         * @enum {string}
         */
        identifier_type: "vat" | "eori" | "ssn" | "ein" | "tin" | "ioss" | "pan" | "voec" | "pccc" | "oss" | "passport" | "abn" | "ukims";
        /**
         * date
         * Format: date-time
         * @description An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date, but not a specific time.  The value _may_ contain a time component, but it will be set to `00:00:00` UTC by ShipEngine.
         * @example 2018-09-23T00:00:00.000Z
         */
        date: string;
        /** shipping_address_to */
        shipping_address_to: components["schemas"]["address"] & components["schemas"]["partial_shipping_address_to"];
        /**
         * partial_shipping_address_to
         * @description A complete or partial mailing address.
         */
        partial_shipping_address_to: {
            /** @description Additional text about how to handle the shipment at this address. */
            instructions?: string | null;
            geolocation?: {
                /**
                 * @description Enum of available type of geolocation items:
                 *       - 'what3words' functionality allows to specify a location by providing 3 words that have been assigned to the specific location. See [link](https://what3words.com/business) for more details.
                 * @example what3words
                 * @enum {string}
                 */
                type?: "what3words";
                /**
                 * @description value of the geolocation item
                 * @example cats.with.thumbs
                 */
                value?: string;
            }[];
        };
        /** shipping_address_from */
        shipping_address_from: components["schemas"]["address"] & components["schemas"]["partial_shipping_address"];
        /**
         * partial_shipping_address
         * @description A complete or partial mailing address.
         */
        partial_shipping_address: {
            /** @description Additional text about how to handle the shipment at this address. */
            instructions?: string | null;
            geolocation?: {
                /**
                 * @description Enum of available type of geolocation items:
                 *       - 'what3words' functionality allows to specify a location by providing 3 words that have been assigned to the specific location. See [link](https://what3words.com/business) for more details.
                 * @example what3words
                 * @enum {string}
                 */
                type?: "what3words";
                /**
                 * @description value of the geolocation item
                 * @example cats.with.thumbs
                 */
                value?: string;
            }[];
        };
        /** shipping_address */
        shipping_address: components["schemas"]["address"] & components["schemas"]["partial_shipping_address"];
        /**
         * delivery_confirmation
         * @description The possible delivery confirmation values
         * @enum {string}
         */
        delivery_confirmation: "none" | "delivery" | "signature" | "adult_signature" | "adult_signature_restricted_delivery" | "direct_signature" | "delivery_mailed" | "verbal_confirmation" | "delivery_code" | "age_verification_16_plus";
        /**
         * international_shipment_options
         * @description Options for international shipments, such as customs declarations.
         * @example {
         *       "terms_of_trade_code": "ddp",
         *       "contents": "gift",
         *       "non_delivery": "return_to_sender"
         *     }
         */
        international_shipment_options: {
            /**
             * @description The type of contents in this shipment.  This may impact import duties or customs treatment.
             * @default merchandise
             */
            contents: components["schemas"]["package_contents"];
            /** @description Explanation for contents (required if the `contents` is provided as `other`) */
            contents_explanation?: string;
            /**
             * @description Indicates what to do if a package is unable to be delivered.
             * @default return_to_sender
             */
            non_delivery: components["schemas"]["non_delivery"];
            /** @description Specifies the supported terms of trade code (incoterms) */
            terms_of_trade_code?: components["schemas"]["allowed_incoterms"];
            /** @description Declaration statement to be placed on the commercial invoice */
            declaration?: string;
            /**
             * @description Set to `true` to indicate the shipment requires customs documents to be uploaded via Carrier Document Upload. See the [Carrier Document Upload guide](/apis/@shipengine/docs/labels/carrier-document-upload.md).
             * @default false
             * @example true
             */
            pending_documents?: boolean;
            invoice_additional_details?: components["schemas"]["invoice_additional_details"];
            importer_of_record?: components["schemas"]["importer_of_records"];
            /** @description The license number to be used in the customs. */
            license_number?: string;
            /** @description The certificate number to be used in the customs. */
            certificate_number?: string;
            /**
             * @deprecated
             * @description Customs declarations for each item in the shipment. (Please provide this information under `products` inside `packages`)
             * @default []
             */
            customs_items?: components["schemas"]["customs_item"][];
        };
        /**
         * package_contents
         * @description The possible package contents values
         * @enum {string}
         */
        package_contents: "merchandise" | "documents" | "gift" | "returned_goods" | "sample" | "e_commerce_goods" | "commercial_sale_of_goods_b2b" | "other";
        /**
         * non_delivery
         * @description The possible non delivery values
         * @enum {string}
         */
        non_delivery: "return_to_sender" | "treat_as_abandoned";
        /**
         * Allowed incoterms
         * @description The Incoterms code (terms of trade) for the shipment.
         *
         *     Set to `ddp` to prepay duties and taxes: indicates that the shipper is paying the international delivery duties for this shipment. This option is currently supported by UPS, FedEx, and DHL Express.
         * @enum {string}
         */
        allowed_incoterms: "exw" | "fca" | "cpt" | "cip" | "dpu" | "dap" | "ddp" | "fas" | "fob" | "cfr" | "cif" | "ddu" | "daf" | "deq" | "des";
        /**
         * invoice_additional_details
         * @description The additional information to put on commercial invoice
         */
        invoice_additional_details: {
            /** @description Freight Charge for shipment. */
            freight_charge?: components["schemas"]["monetary_value"];
            /** @description Insurance Charge for shipment. */
            insurance_charge?: components["schemas"]["monetary_value"];
            /** @description Discount for shipment. */
            discount?: components["schemas"]["monetary_value"];
            /** @description Estimated import charges for commercial invoices for international shipments. */
            estimated_import_charges?: components["schemas"]["estimated_import_charges"];
            /** @description Other charge for shipment. */
            other_charge?: components["schemas"]["monetary_value"];
            /** @description Description for the other charge (if provided). */
            other_charge_description?: string;
            /** @description The invoice number to be used in the customs. */
            invoice_number?: string;
        };
        /**
         * estimated_import_charges
         * @description Estimated import charges for commercial invoices for international shipments.
         */
        estimated_import_charges: {
            /** @description Estimated import taxes. */
            taxes?: components["schemas"]["monetary_value"];
            /** @description Estimated import duties. */
            duties?: components["schemas"]["monetary_value"];
        };
        /**
         * importer_of_records
         * @description importer of records address, anywhere in the world.
         */
        importer_of_records: {
            /**
             * @description The name of a contact person at this address. Either `name` or the `company_name` field should always be set.
             * @example John Doe
             */
            name: string;
            /**
             * @description The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
             * @example +1 204-253-9411 ext. 123
             */
            phone?: string;
            /**
             * @description Email for the address owner.
             * @example example@example.com
             */
            email?: string | null;
            /**
             * @description If this is a business address, then the company name should be specified here. Either `name` or the `company_name` field should always be set.
             * @example The Home Depot
             */
            company_name?: string | null;
            /**
             * @description The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
             * @example 1999 Bishop Grandin Blvd.
             */
            address_line1: string;
            /**
             * @description The second line of the street address.  For some addresses, this line may not be needed.
             * @example Unit 408
             */
            address_line2?: string | null;
            /**
             * @description The third line of the street address.  For some addresses, this line may not be needed.
             * @example Building #7
             */
            address_line3?: string | null;
            /**
             * @description The name of the city or locality
             * @example Winnipeg
             */
            city_locality: string;
            /**
             * @description The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
             * @example Manitoba
             */
            state_province?: string;
            postal_code: components["schemas"]["postal_code"];
            /** @description The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) */
            country_code: components["schemas"]["country_code"];
        };
        /**
         * customs_item
         * @description The customs declaration for a single item in the shipment.
         */
        customs_item: {
            /** @description A string that uniquely identifies the customs item */
            readonly customs_item_id: components["schemas"]["se_id"];
            /**
             * @description A description of the item
             * @default null
             */
            description?: string | null;
            /**
             * Format: int32
             * @description The quantity of this item in the shipment.
             * @default 0
             */
            quantity?: number;
            /** @description The monetary amount, in the specified currency. */
            value?: number;
            /** @description The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html */
            value_currency?: string;
            /** @description The item weight */
            weight?: components["schemas"]["weight"];
            /**
             * @description The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.
             * @default null
             * @example 3926.1
             */
            harmonized_tariff_code?: string | null;
            /**
             * @description The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated
             * @default null
             */
            country_of_origin?: (string & components["schemas"]["country_code"]) | null;
            unit_of_measure?: string | null;
            /** @description The SKU (Stock Keeping Unit) of the customs item */
            sku?: string | null;
            /** @description Description of the Custom Item's SKU */
            sku_description?: string | null;
        };
        /**
         * weight
         * @description The weight of a package
         */
        weight: {
            /** @description The weight, in the specified unit */
            value: number;
            unit: components["schemas"]["weight_unit"];
        };
        /**
         * weight_unit
         * @description The possible weight unit values
         * @enum {string}
         */
        weight_unit: "pound" | "ounce" | "gram" | "kilogram";
        /**
         * advanced_shipment_options
         * @description Advanced shipment options
         */
        advanced_shipment_options: {
            /**
             * @description This field is used to bill shipping costs to a third party. This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.
             * @default null
             */
            bill_to_account?: string | null;
            /**
             * @description The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.
             * @default null
             */
            bill_to_country_code?: (string & components["schemas"]["country_code"]) | null;
            /**
             * @description Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.
             * @default null
             */
            bill_to_party?: (string & components["schemas"]["bill_to_party"]) | null;
            /**
             * @description The postal code of the third-party that is responsible for shipping costs.
             * @default null
             */
            bill_to_postal_code?: string | null;
            /**
             * @description Indicates that the shipment contains alcohol.
             * @default false
             */
            contains_alcohol?: boolean;
            /**
             * @description Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.
             * @default false
             */
            delivered_duty_paid?: boolean;
            /**
             * @description Indicates if the shipment contain dry ice
             * @default false
             */
            dry_ice?: boolean;
            /** @description The weight of the dry ice in the shipment */
            dry_ice_weight?: components["schemas"]["weight"] | null;
            /**
             * @description Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.
             * @default false
             */
            non_machinable?: boolean;
            /**
             * @description Enables Saturday delivery, if supported by the carrier.
             * @default false
             */
            saturday_delivery?: boolean;
            /** @description Provide details for the Fedex freight service */
            fedex_freight?: {
                shipper_load_and_count?: string;
                booking_confirmation?: string;
            };
            /**
             * @description Whether to use UPS Ground Freight pricing. If enabled, then a `freight_class` must also be specified.
             * @default null
             */
            use_ups_ground_freight_pricing?: boolean | null;
            /**
             * @description The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".
             * @default null
             * @example 77.5
             */
            freight_class?: string | null;
            /**
             * @description An arbitrary field that can be used to store information about the shipment.
             * @default null
             */
            custom_field1?: string | null;
            /**
             * @description An arbitrary field that can be used to store information about the shipment.
             * @default null
             */
            custom_field2?: string | null;
            /**
             * @description An arbitrary field that can be used to store information about the shipment.
             * @default null
             */
            custom_field3?: string | null;
            /** @default null */
            origin_type?: (string & components["schemas"]["origin_type"]) | null;
            /**
             * @description Indicate to the carrier that this shipment requires additional handling.
             * @default null
             */
            additional_handling?: boolean | null;
            /** @default null */
            shipper_release?: boolean | null;
            collect_on_delivery?: components["schemas"]["collect_on_delivery"];
            /**
             * @description Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached
             * @default false
             */
            third_party_consignee?: boolean;
            /**
             * @description Indicates if the Dangerous goods are present in the shipment
             * @default false
             */
            dangerous_goods?: boolean;
            /** @description Contact information for Dangerous goods */
            dangerous_goods_contact?: {
                /** @description Name of the contact */
                name?: string;
                /** @description Phone number of the contact */
                phone?: string;
            };
            /**
             * @description An indicator that will tell the carrier the type of movement for the shipment.
             * @default null
             * @example c2c
             * @enum {string|null}
             */
            movement_indicator?: "c2c" | "b2c" | "c2b" | "b2b" | null;
            /** @description The Windsor framework is a new regulation in the UK that simplifies customs procedures for goods moved from the UK mainland to Northern Ireland. */
            windsor_framework_details?: {
                /**
                 * @deprecated
                 * @description An indicator that will tell the carrier and HMRC the type of movement for the shipment.
                 * @enum {string}
                 */
                movement_indicator?: "c2c" | "b2c" | "c2b" | "b2b";
                /** @description An indicator that allows a shipper to declare the shipment as not-at-risk. */
                not_at_risk?: boolean;
            };
            /**
             * @description license_number - This field was part of a historical implementation for passing customs-related data. For new integrations, please use the corresponding parameters within the shipment.customs object.
             * @default null
             * @example 514785
             */
            license_number?: string | null;
            /**
             * @description invoice_number - This field was part of a historical implementation for passing customs-related data. For new integrations, please use the corresponding parameters within the shipment.customs object.
             * @default null
             * @example IOC56888
             */
            invoice_number?: string | null;
            /**
             * @description certificate_number - This field was part of a historical implementation for passing customs-related data. For new integrations, please use the corresponding parameters within the shipment.customs object.
             * @default null
             * @example 784515
             */
            certificate_number?: string | null;
            /**
             * @description Indicates that the contents of the package are fragile and should be handled with care.
             * @default false
             * @example true
             */
            fragile?: boolean;
            /**
             * @description Instructs the carrier to deliver the package only to the exact address provided.
             * @default false
             * @example true
             */
            delivery_as_addressed?: boolean;
            /**
             * @description Ensures the shipment is immediately flagged for return to the sender if the initial delivery attempt fails.
             * @default false
             * @example true
             */
            return_after_first_attempt?: boolean;
            /**
             * @description Indicates the category of goods in the shipment that is subject to special regulatory or compliance requirements.
             * @default null
             */
            regulated_content_type?: (string & components["schemas"]["regulated_content_type"]) | null;
            /** @description Layout options for printing NetStamps labels on a sheet. Controls the starting position on the label sheet. */
            netstamps_options?: {
                /**
                 * Format: int32
                 * @description The row on the sheet where label is placed.
                 * @example 1
                 */
                row?: number;
                /**
                 * Format: int32
                 * @description The column on the sheet where label is placed.
                 * @example 1
                 */
                column?: number;
            };
            /**
             * @description A list of carrier-generated documents to suppress for the shipment.
             *
             *     > **Note:** Currently, only `commercial_invoice` is supported (UPS only).
             * @example [
             *       "commercial_invoice"
             *     ]
             */
            suppress_carrier_generated_documents?: "commercial_invoice"[];
            /** @description Amazon Transparency Codes for verifying product authenticity. Each entry maps transparency codes to the corresponding order item ID, which must match the value in `shipment.items[].external_order_item_id`. */
            transparency_codes?: {
                /**
                 * @description The order item ID from Amazon, matching the `external_order_item_id` in the shipment items.
                 * @example 12345678901234
                 */
                order_item_id: string;
                /** @description Array of Amazon Transparency codes for this order item. */
                codes: string[];
            }[];
        } & {
            [key: string]: unknown;
        };
        /**
         * bill_to_party
         * @description The possible bill to party values
         * @enum {string}
         */
        bill_to_party: "recipient" | "third_party";
        /**
         * origin_type
         * @description Indicates if the package will be picked up or dropped off by the carrier
         * @enum {string}
         */
        origin_type: "pickup" | "drop_off";
        /**
         * collect_on_delivery
         * @description Defer payment until package is delivered, instead of when it is ordered.
         */
        collect_on_delivery: {
            payment_type?: components["schemas"]["collect_on_delivery_payment_type"];
            payment_amount?: components["schemas"]["payment_amount"];
        };
        /**
         * collect_on_delivery_payment_type
         * @description Types of payment that are supported
         * @enum {string}
         */
        collect_on_delivery_payment_type: "any" | "cash" | "cash_equivalent" | "none";
        /** payment_amount */
        payment_amount: {
            currency?: components["schemas"]["currency"];
            amount?: unknown;
        };
        /**
         * regulated_content_type
         * @description Indicates the category of goods in the shipment that is subject to special regulatory or compliance requirements.
         * @enum {string}
         */
        regulated_content_type: "day_old_poultry" | "other_live_animal";
        /**
         * insurance_provider
         * @description The possible insurance provider values
         * @enum {string}
         */
        insurance_provider: "none" | "shipsurance" | "parcelguard" | "xcover" | "carrier" | "third_party";
        /**
         * package
         * @description A package associated with a shipment
         */
        package: {
            /** @description A string that uniquely identifies this shipment package */
            readonly shipment_package_id?: components["schemas"]["se_id"];
            /** @description A string that uniquely identifies this package type */
            package_id?: components["schemas"]["se_id"];
            /** @description The package type, such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type. */
            package_code?: components["schemas"]["package_code"];
            /** @description The name of the of the package type */
            package_name?: string;
            /** @description The package weight */
            weight: components["schemas"]["weight"];
            /** @description The package dimensions */
            dimensions?: components["schemas"]["dimensions"];
            /**
             * @description The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
             * @default {
             *       "currency": "USD",
             *       "amount": 0
             *     }
             */
            insured_value?: components["schemas"]["monetary_value"];
            label_messages?: components["schemas"]["label_messages"];
            /** @description An external package id. */
            external_package_id?: string;
            /**
             * @description A short description of the package content. Required for shipments moving to, from, and through Mexico.
             * @example Hand knitted wool socks
             */
            content_description?: string | null;
            /**
             * @description Details about products inside packages (Information provided would be used on custom documentation)
             * @default []
             */
            products?: components["schemas"]["products"][];
        };
        /**
         * label_messages
         * @description Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.
         *
         *     |Carrier            |Max lines |Max line length
         *     |-------------------|----------|--------------------
         *     |USPS (Stamps.com)  |3         |60
         *     |FedEx              |3         |35 for the first line. 30 for additional lines.
         *     |UPS                |2         |35
         *     |OnTrac             |2         |25
         */
        label_messages: {
            /**
             * @description The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.
             * @default null
             */
            reference1: string | null;
            /**
             * @description The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.
             * @default null
             */
            reference2: string | null;
            /**
             * @description The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.
             * @default null
             */
            reference3: string | null;
        };
        /**
         * tracking_number
         * @description A tracking number for a package. The format depends on the carrier.
         * @example 1Z932R800392060079
         */
        tracking_number: string;
        /**
         * products
         * @description The customs declaration for a single item in the shipment.
         */
        products: {
            /**
             * @description A description of the item
             * @default null
             */
            description?: string | null;
            /**
             * Format: int32
             * @description The quantity of this item in the shipment.
             * @default 0
             */
            quantity?: number;
            /** @description The declared value of each item */
            value?: components["schemas"]["monetary_value"];
            /** @description The item weight */
            weight?: components["schemas"]["weight"];
            /**
             * @description The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.
             * @default null
             * @example 3926.1
             */
            harmonized_tariff_code?: string | null;
            /**
             * @description The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated
             * @default null
             */
            country_of_origin?: (string & components["schemas"]["country_code"]) | null;
            unit_of_measure?: string | null;
            /** @description The SKU (Stock Keeping Unit) of the item */
            sku?: string | null;
            /** @description Description of the Custom Item's SKU */
            sku_description?: string | null;
            /** @description Manufacturers Identification code */
            mid_code?: string | null;
            /** @description link to the item on the seller website */
            product_url?: string | null;
            /**
             * @description VAT rate applicable to the item
             * @example 0.2
             */
            vat_rate?: number | null;
            /**
             * @description Details about dangerous goods inside products
             * @default []
             */
            dangerous_goods?: components["schemas"]["dangerous_goods"][];
            /**
             * @description The type of identifier used for the manufacturer product ID.
             * @default null
             * @example gtin
             */
            manufacturer_product_id_type?: (string & components["schemas"]["manufacturer_product_identifier_type"]) | null;
            /**
             * @description The manufacturer's product identifier corresponding to the `manufacturer_product_id_type`.
             * @default null
             * @example 012345678905
             */
            manufacturer_product_id?: string | null;
            /**
             * @description A non-standardized product identifier unique to the manufacturer's own system that does not follow an internationally recognized standard (e.g. a SKU).
             * @default null
             * @example MY-SKU-12345
             */
            manufacturer_ns_product_id?: string | null;
            /**
             * @description List of CPSC eFiling certificates associated with this product.
             * @default null
             */
            cpsc_certificates?: components["schemas"]["cpsc_certificate"][] | null;
            /**
             * @description CPSC disclaimer information for products that do not require a Certificate of Compliance, even though their HTS code is flagged as potentially subject to CPSC regulation. Use either `cpsc_certificates` or `cpsc_disclaim` per product, not both.
             * @default null
             */
            cpsc_disclaim?: {
                /**
                 * @description The CPSC disclaimer code indicating why no certificate is required. `A` - Product Not Regulated by CPSC: product falls outside CPSC jurisdiction (e.g., regulated by FDA), has no applicable CPSC safety standard, or is a B2B part for further assembly. `B` - Enforcement Discretion: product falls under CPSC jurisdiction and a rule technically applies, but CPSC is exercising enforcement discretion and does not require a certificate.
                 * @example B
                 * @enum {string}
                 */
                disclaim_code: "A" | "B";
                /**
                 * @description A code from CBP's Intended Use Code list indicating why the product is exempt. Required for every Disclaim filing. For Disclaim B, must be `130.006`. For Disclaim A, valid base codes are: `081.XXX` (Medical Device), `090.XXX` (Military Use), `100.XXX` (Personal Use), `130.XXX` (Consumer Use), `155.XXX` (Commercial Assembly), `970.XXX` (Export), `980.000` (Other Use - `intended_use_description` recommended).
                 * @example 130.006
                 */
                intended_use_code: string;
                /**
                 * @description A plain-language description of the product's intended use. Max 100 characters. Recommended by CPSC when `intended_use_code` is `980.000` (Other Use).
                 * @default null
                 * @example
                 */
                intended_use_description?: string | null;
            } | null;
            /** @description Additional details about products */
            extended_details?: {
                [key: string]: unknown;
            };
        };
        /**
         * dangerous_goods
         * @description Dangerous goods attribute associated with the product
         */
        dangerous_goods: {
            /**
             * @description UN number to identify the dangerous goods.
             * @default null
             */
            id_number?: string | null;
            /**
             * @description Trade description of the dangerous goods.
             * @default null
             */
            shipping_name?: string | null;
            /**
             * @description Recognized Technical or chemical name of dangerous goods.
             * @default null
             */
            technical_name?: string | null;
            /**
             * @description Dangerous goods product class based on regulation.
             * @default null
             */
            product_class?: string | null;
            /**
             * @description A secondary of product class for substances presenting more than one particular hazard
             * @default null
             */
            product_class_subsidiary?: string | null;
            packaging_group?: components["schemas"]["packaging_group"];
            /** @description This model represents the amount of the dangerous goods. */
            dangerous_amount?: components["schemas"]["dangerous_amount"];
            /**
             * Format: int32
             * @description Quantity of dangerous goods.
             * @default 0
             */
            quantity?: number;
            /**
             * @description The specific standardized packaging instructions from the relevant regulatory agency that have been applied to the parcel/container.
             * @default null
             */
            packaging_instruction?: string | null;
            packaging_instruction_section?: components["schemas"]["packaging_instruction_section"];
            /**
             * @description The type of exterior packaging used to contain the dangerous good.
             * @default null
             */
            packaging_type?: string | null;
            transport_mean?: components["schemas"]["transport_mean"];
            /**
             * @description Transport category assign to dangerous goods for the transport purpose.
             * @default null
             */
            transport_category?: string | null;
            /**
             * @description Name of the regulatory authority.
             * @default null
             */
            regulation_authority?: string | null;
            regulation_level?: components["schemas"]["regulation_level"];
            /**
             * @description Indication if the substance is radioactive.
             * @example false
             */
            radioactive?: boolean | null;
            /**
             * @description Indication if the substance needs to be reported to regulatory authority based on the quantity.
             * @example false
             */
            reportable_quantity?: boolean | null;
            /**
             * @description Defines which types of tunnels the shipment is allowed to go through
             * @default null
             */
            tunnel_code?: string | null;
            /**
             * @description Provider additonal description regarding the dangerous goods. This is used as a placed holder to provider additional context and varies by carrier
             * @default null
             */
            additional_description?: string | null;
        };
        /**
         * packaging_group
         * @enum {string}
         */
        packaging_group: "i" | "ii" | "iii";
        /**
         * dangerous_amount
         * @description This model represents the amount of the dangerous goods..
         */
        dangerous_amount: {
            /**
             * @description The amount of dangerous goods.
             * @default 0
             */
            amount?: number;
            /**
             * @description The unit of dangerous goods.
             * @default null
             */
            unit?: string | null;
        };
        /**
         * packaging_instruction_section
         * @enum {string}
         */
        packaging_instruction_section: "section_1" | "section_2" | "section_1a" | "section_1b";
        /**
         * transport_mean
         * @enum {string}
         */
        transport_mean: "ground" | "water" | "cargo_aircraft_only" | "passenger_aircraft";
        /**
         * regulation_level
         * @enum {string}
         */
        regulation_level: "lightly_regulated" | "fully_regulated" | "limited_quantities" | "excepted_quantity";
        /**
         * label_charge_event
         * @description Determines when the user's account will be charged for the label.
         * @enum {string}
         */
        label_charge_event: "carrier_default" | "on_creation" | "on_carrier_acceptance";
        /**
         * validate_address
         * @description The possible validate address values
         * @enum {string}
         */
        validate_address: "no_validation" | "validate_only" | "validate_and_clean";
        /**
         * create_label_response_body
         * @description A create label response body
         */
        create_label_response_body: WithRequired<components["schemas"]["label"], "label_id" | "status" | "shipment_id" | "external_shipment_id" | "external_order_id" | "ship_date" | "created_at" | "shipment_cost" | "insurance_cost" | "tracking_number" | "is_international" | "batch_id" | "carrier_id" | "service_code" | "voided" | "label_image_id" | "label_format" | "label_layout" | "trackable" | "carrier_code" | "tracking_status" | "label_download" | "form_download" | "qr_code_download" | "paperless_download" | "insurance_claim" | "packages" | "is_return_label" | "rma_number" | "charge_event" | "package_code" | "display_scheme" | "ship_to">;
        /**
         * label
         * @description A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to create labels and then download them in PDF, PNG, or ZPL format so you can print them.
         */
        label: {
            /** @description A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created. */
            readonly label_id?: components["schemas"]["se_id"];
            readonly status?: components["schemas"]["label_status"];
            /** @description The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you create a label, or you can create your own shipment and then use it to print a label */
            readonly shipment_id?: components["schemas"]["se_id"];
            /** @description A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment. */
            readonly external_shipment_id?: string | null;
            /** @description ID that the Order Source assigned */
            readonly external_order_id?: string | null;
            /** @description The shipment information used to generate the label */
            shipment?: components["schemas"]["shipment"];
            /** @description The date that the package was (or will be) shipped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead. */
            readonly ship_date?: components["schemas"]["date"];
            /** @description ShipStation's predicted delivery estimate for this label. This is the only delivery estimate in a label response; it is omitted when no prediction is available. */
            readonly delivery_prediction?: components["schemas"]["delivery_prediction"];
            /** @description The date and time that the label was created in ShipEngine. */
            readonly created_at?: components["schemas"]["date_time"];
            /** @description The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs. */
            readonly shipment_cost?: components["schemas"]["monetary_value"];
            /** @description The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost. */
            readonly insurance_cost?: components["schemas"]["monetary_value"];
            /** @description The total shipping cost for the specified comparison_rate_type. */
            readonly requested_comparison_amount?: components["schemas"]["monetary_value"];
            /** @description A list of rate details that are associated with shipping cost. This is useful for displaying a breakdown of the rate to the user. */
            readonly rate_details?: components["schemas"]["rate_detail"][];
            /**
             * @description The tracking number for the package. Tracking number formats vary across carriers.
             * @example 782758401696
             */
            readonly tracking_number?: string;
            /** @description Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned. */
            is_return_label?: boolean;
            /** @description An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value. */
            rma_number?: string | null;
            /** @description Indicates whether this is an international shipment.  That is, the originating country and destination country are different. */
            readonly is_international?: boolean;
            /** @description If this label was created as part of a batch, then this is the unique ID of that batch. */
            readonly batch_id?: components["schemas"]["se_id"];
            /** @description The unique ID of the carrier account that was used to create this label */
            readonly carrier_id?: components["schemas"]["se_id"];
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /**
             * @description The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
             *     required by some carriers.
             */
            outbound_label_id?: components["schemas"]["se_id"];
            /** @description The carrier service used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc. */
            readonly service_code?: components["schemas"]["service_code"];
            /**
             * @deprecated
             * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
             * @default false
             */
            test_label?: boolean;
            /** @description The package type, such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type. */
            readonly package_code?: components["schemas"]["package_code"];
            /** @default validate_and_clean */
            validate_address?: components["schemas"]["validate_address"];
            /** @description Indicates whether the label has been voided */
            readonly voided?: boolean;
            /** @description The date and time that the label was voided, or `null` if the label has not been voided */
            readonly voided_at?: (string & components["schemas"]["date_time"]) | null;
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
             * @default pdf
             */
            label_format?: components["schemas"]["label_format"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
             * @default 4x6
             */
            label_layout?: components["schemas"]["label_layout"];
            /** @description Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`. */
            readonly trackable?: boolean;
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: (string & components["schemas"]["image_id"]) | null;
            /** @description The shipping carrier who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc. */
            readonly carrier_code?: components["schemas"]["carrier_code"];
            /** @description The current status of the package, such as `in_transit` or `delivered` */
            readonly tracking_status?: components["schemas"]["tracking_status"];
            /** @description The type of delivery confirmation for this shipment. Defaults to 'none' if not specified. */
            readonly confirmation?: components["schemas"]["delivery_confirmation"];
            readonly label_download?: components["schemas"]["label_download"];
            /** @description The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it. */
            readonly form_download?: components["schemas"]["link"] | null;
            /** @description The QR code download for the package */
            readonly qr_code_download?: components["schemas"]["optional_link"] | null;
            /** @description The paperless details which may contain elements like `href`, `instructions` and `handoff_code`. */
            readonly paperless_download?: components["schemas"]["paperless_download"] | null;
            /** @description The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission. */
            readonly insurance_claim?: components["schemas"]["link"] | null;
            /**
             * @description The label's package(s).
             *
             *     > **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.
             */
            readonly packages?: (components["schemas"]["label_package"] & components["schemas"]["alternative_identifiers"])[];
            /** @description Additional information some carriers may provide by which to identify a given label in their system. */
            readonly alternative_identifiers?: components["schemas"]["alternative_identifier"][] | null;
            /**
             * @description The URL to track the package. This URL is provided by the carrier and is unique to the tracking number.
             * @example https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234
             */
            readonly tracking_url?: string | null;
            /** @description An array of pickup windows provided by the carrier during label creation. Contains time ranges when the carrier will pick up the package. This is particularly useful when the carrier does not support the Schedule Pickup method but still provides pickup date information during label purchase. */
            readonly pickup_windows?: {
                /** @description The start of the pickup window. */
                start_at?: components["schemas"]["date_time"];
                /** @description The end of the pickup window. */
                end_at?: components["schemas"]["date_time"];
                /**
                 * @description The IANA time zone identifier for the pickup window (e.g., "Australia/Sydney"). When provided, start_at and end_at should be interpreted in this time zone.
                 * @example Australia/Sydney
                 */
                use_time_zone_iana?: string | null;
            }[] | null;
            /** @description The recipient's mailing address */
            readonly ship_to?: components["schemas"]["shipping_address_to"];
            /**
             * @description Indicates how the label was voided. This field is `null` if the label has not been voided.
             * @example manual
             */
            readonly void_type?: components["schemas"]["void_type"] | null;
            /** @description Information about the Refund Assist request for this label. This field is `null` if the label is not eligible for Refund Assist. */
            readonly refund_details?: components["schemas"]["refund_details"] | null;
        };
        /**
         * shipment
         * @description The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
         *
         *     > **Note:** Either `ship_from` or `warehouse_id` must be set.
         */
        shipment: WithRequired<components["schemas"]["partial_shipment"], "shipment_id" | "carrier_id" | "service_code" | "ship_date" | "created_at" | "modified_at" | "shipment_status" | "ship_to" | "ship_from" | "warehouse_id" | "return_to" | "insurance_provider" | "tags" | "packages" | "total_weight" | "batch_ids"> & {
            /**
             * @description The IDs of the sales orders that the shipment is linked to. The array is empty if the shipment
             *     isn't linked to a sales order. This field is read-only and is ignored in requests.
             *
             *     A shipment must be linked to a sales order before it can be
             *     [split](#operation/split_shipment) or [merged](#operation/merge_shipments).
             *
             *     > **Note:** After a split, the original shipment can still list a sales order even if all of
             *     that sales order's items have moved to other shipments. To see which sales order each item
             *     belongs to, use `items[].sales_order_id`.
             * @example [
             *       "8c1f2a5e-3b7d-4e9a-a6c2-1d4f5e6a7b8c"
             *     ]
             */
            readonly sales_order_ids?: string[];
        };
        /**
         * partial_shipment
         * @description The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
         */
        partial_shipment: {
            /** @description A string that uniquely identifies the shipment */
            readonly shipment_id?: components["schemas"]["se_id"];
            /** @description The carrier account that is billed for the shipping charges */
            carrier_id?: components["schemas"]["se_id"];
            /** @description The carrier service used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc. */
            service_code?: components["schemas"]["service_code"];
            /** @description ID of the shipping rule, which you want to use to automate carrier/carrier service selection for the shipment. Service Group Rules can use dynamic ordering (_Cheapest_ or _Fastest_) to automatically select the best service based on live rate or transit data (US sellers with USA carriers only). */
            shipping_rule_id?: components["schemas"]["se_id"];
            /** @description ID that the Order Source assigned */
            external_order_id?: string | null;
            /**
             * @description Describe the packages included in this shipment as related to potential metadata that was imported from
             *     external order sources
             * @default []
             */
            items?: components["schemas"]["shipment_item"][];
            tax_identifiers?: components["schemas"]["tax_identifier"][] | null;
            /**
             * @description A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.
             *
             *     > **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.
             */
            external_shipment_id?: string | null;
            /**
             * @description A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.
             *
             *     > **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.
             */
            shipment_number?: string | null;
            /** @description The date that the shipment was (or will be) shipped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead. */
            ship_date?: components["schemas"]["date"];
            /** @description The date and time that the shipment was created in ShipEngine. */
            readonly created_at?: components["schemas"]["date_time"];
            /** @description The date and time that the shipment was created or last modified. */
            readonly modified_at?: components["schemas"]["date_time"];
            /**
             * @description The current status of the shipment
             * @default pending
             */
            readonly shipment_status?: components["schemas"]["shipment_status"];
            /** @description The recipient's mailing address */
            ship_to?: components["schemas"]["shipping_address_to"];
            /** @description The shipment's origin address. If you frequently ship from the same location, consider creating a warehouse. Then you can simply specify the `warehouse_id` rather than the complete address each time. */
            ship_from?: components["schemas"]["shipping_address"];
            /**
             * @description The warehouse that the shipment is being shipped from. Either `warehouse_id` or `ship_from` must be specified.
             * @default null
             */
            warehouse_id?: (string & components["schemas"]["se_id"]) | null;
            /** @description The return address for this shipment.  Defaults to the `ship_from` address. */
            return_to?: components["schemas"]["shipping_address"];
            /**
             * @description An optional indicator if the shipment is intended to be a return. Defaults to false if not provided.
             * @default false
             */
            is_return?: boolean | null;
            /**
             * @description The type of delivery confirmation for this shipment. Defaults to 'none' if not specified.
             * @default none
             */
            confirmation?: components["schemas"]["delivery_confirmation"];
            /**
             * @description Customs information for international shipments.
             *
             *     > **Note:** International shipments (where `ship_from.country_code` differs from `ship_to.country_code`) must include either `customs` or `advanced_options`.
             *     >
             *     > To prepay duties and taxes (DDP / PDT), set `customs.terms_of_trade_code` to `ddp`.
             *     >
             *     > Please note that the guaranteed prepaid duties and taxes option is available only for eligible ShipStation carriers.
             */
            customs?: components["schemas"]["international_shipment_options"] | null;
            /**
             * @description Advanced shipment options.
             *
             *     > **Note:** International shipments must include either `customs` or `advanced_options`.
             */
            advanced_options?: components["schemas"]["advanced_shipment_options"];
            /**
             * @description The insurance provider to use for any insured packages in the shipment.
             * @default none
             */
            insurance_provider?: components["schemas"]["insurance_provider"];
            /**
             * @description Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
             * @default []
             */
            readonly tags?: components["schemas"]["tag"][];
            order_source_code?: components["schemas"]["order_source_name"];
            /**
             * @description The packages in the shipment.
             *
             *     > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
             */
            packages?: components["schemas"]["package"][];
            /** @description The combined weight of all packages in the shipment */
            readonly total_weight?: components["schemas"]["weight"];
            /**
             * @description The unique IDs of any batches that this shipment is associated with. Returns an empty array if the shipment isn't associated with any batch.
             *
             *     If the shipment is associated with more than one batch, the IDs are ordered by batch status priority: `open`, `queued`, `processing`, `completed`, `completed_with_errors`, `archived`, `notifying`, then `invalid`.
             * @default []
             * @example [
             *       "se-9581628",
             *       "se-1935182"
             *     ]
             */
            readonly batch_ids?: components["schemas"]["se_id"][];
            /**
             * @description Calculate a rate for this shipment with the requested carrier using a ratecard that differs from the default.  Only supported for UPS and USPS.
             * @example retail
             */
            comparison_rate_type?: string | null;
            /**
             * Format: int32
             * @description Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
             *     custom zones that vary depending upon the ship_to and ship_from location
             * @example 6
             */
            readonly zone?: number | null;
        };
        /**
         * shipment_status
         * @description The possible shipment status values
         * @enum {string}
         */
        shipment_status: "pending" | "processing" | "label_purchased" | "cancelled";
        /**
         * tag
         * @description Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
         */
        tag: {
            /**
             * Format: int32
             * @description An integer uniquely identifying a tag.
             * @example 8712
             */
            readonly tag_id?: number;
            /**
             * @description The tag name.
             * @example Fragile
             */
            name: string;
            /**
             * @description A hex-coded string identifying the color of the tag.
             * @example #FF0000
             */
            color?: string;
        };
        /**
         * rate_detail
         * @description Represents detailed information about a shipping cost
         */
        rate_detail: {
            /** @description The category of charge. Common values include `shipping` and `additional_fees`. DDP shipments (`customs.terms_of_trade_code: "ddp"`) also return `prepaid_duties`, `prepaid_taxes` and `prepaid_import_fees` on Wallet carriers, or `estimated_duties`, `estimated_taxes` and `estimated_import_fees` on BYOA (Bring Your Own Account) carriers. */
            rate_detail_type?: components["schemas"]["rate_detail_type"];
            /**
             * @description The carrier-provided description of the charge.
             * @example Shipping
             */
            carrier_description?: string | null;
            /**
             * @description The carrier billing code, when provided by the carrier.
             * @example BaseServiceCharge
             */
            carrier_billing_code?: string | null;
            /**
             * @description An optional carrier-supplied note for the charge.
             * @example
             */
            carrier_memo?: string | null;
            /** @description The amount of this individual charge. */
            amount?: components["schemas"]["monetary_value"];
            /** @description If applicable, contains additional data about a rate detail of a specific type, e.g. VAT */
            rate_detail_attributes?: components["schemas"]["rate_detail_attributes"];
            /**
             * @description The source that produced the charge. Common values are `carrier` for carrier-billed charges and `dutiestax` for duties and taxes on DDP shipments (prepaid on Wallet carriers, estimated on BYOA carriers).
             * @example carrier
             */
            billing_source?: string;
        };
        /**
         * rate_detail_type
         * @description The possible rate detail type values. DDP shipments (`customs.terms_of_trade_code: ddp`) return `prepaid_duties`, `prepaid_taxes`, and `prepaid_import_fees` on Wallet carriers, or `estimated_duties`, `estimated_taxes`, and `estimated_import_fees` on BYOA (Bring Your Own Account) carriers.
         * @enum {string}
         */
        rate_detail_type: "uncategorized" | "shipping" | "insurance" | "confirmation" | "discount" | "fuel_charge" | "additional_fees" | "tariff" | "tax" | "delivery" | "handling" | "special_goods" | "pickup" | "location_fee" | "oversize" | "returns" | "notifications" | "tip" | "duties_and_taxes" | "brokerage_fee" | "admin_fee" | "adjustment" | "prepaid_duties" | "prepaid_taxes" | "prepaid_import_fees" | "estimated_duties" | "estimated_taxes" | "estimated_import_fees";
        /**
         * rate_detail_attributes
         * @description Represents detailed information about a tax (e.g. VAT) contained in a shipping cost.
         */
        rate_detail_attributes: {
            tax_type?: components["schemas"]["tax_type"];
            /** @description Tax percentage, e.g. 20 for 20%, added to the shipping cost */
            tax_percentage?: number;
        };
        /**
         * tax_type
         * @description Type of a tax added to shipping cost. Includes Canadian tax types GST (Goods and Services Tax), HST (Harmonized Sales Tax), QST (Quebec Sales Tax), and PST (Provincial Sales Tax).
         * @example vat
         * @enum {string}
         */
        tax_type: "vat" | "gst" | "hst" | "qst" | "pst";
        /**
         * tracking_status
         * @description The different statuses that can apply to a shipment.
         * @enum {string}
         */
        tracking_status: "unknown" | "in_transit" | "error" | "delivered";
        /**
         * label_package
         * @description A package returned in the response from creating a shipping label
         */
        label_package: {
            /**
             * Format: int32
             * @description The shipment package id
             */
            readonly package_id?: number;
            /** @description The package type, such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type. */
            package_code?: components["schemas"]["package_code"];
            /** @description The package weight */
            weight: components["schemas"]["weight"];
            /** @description The package dimensions */
            dimensions?: components["schemas"]["dimensions"];
            /**
             * @description The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.
             * @default {
             *       "currency": "USD",
             *       "amount": 0
             *     }
             */
            insured_value?: components["schemas"]["monetary_value"];
            /** @description The tracking number for the package.  The format depends on the carrier. */
            readonly tracking_number?: components["schemas"]["tracking_number"];
            /** @description The label download for the package */
            readonly label_download?: components["schemas"]["label_download"];
            /** @description The form download for any customs that are needed */
            readonly form_download?: components["schemas"]["optional_link"];
            /** @description The QR code download for the package */
            readonly qr_code_download?: components["schemas"]["optional_link"];
            /** @description The paperless details which may contain elements like `href`, `instructions` and `handoff_code`. */
            readonly paperless_download?: components["schemas"]["paperless_download"];
            label_messages?: components["schemas"]["label_messages"];
            /** @description An external package id. */
            external_package_id?: string;
            /**
             * @description A short description of the package content. Required for shipments moving to, from, and through Mexico.
             * @example Hand knitted wool socks
             */
            content_description?: string | null;
            /**
             * Format: int32
             * @description Package sequence
             */
            readonly sequence?: number;
            /** @description Whether the package has label documents available for download */
            has_label_documents?: boolean;
            /** @description Whether the package has form documents available for download */
            has_form_documents?: boolean;
            /** @description Whether the package has QR code documents available for download */
            has_qr_code_documents?: boolean;
            /** @description Whether the package has paperless documents available for download */
            has_paperless_label_documents?: boolean;
        };
        /** alternative_identifiers */
        alternative_identifiers: {
            /** @description Alternative identifiers associated with this package. */
            readonly alternative_identifiers?: components["schemas"]["alternative_identifier"][] | null;
        };
        /**
         * alternative_identifier
         * @description Additional information some carriers may provide by which to identify a given label in their system.
         */
        alternative_identifier: {
            /**
             * @description The type of alternative_identifier that corresponds to the value.
             * @example last_mile_tracking_number
             */
            type?: string;
            /**
             * @description The value of the alternative_identifier.
             * @example 12345678912345678912
             */
            value?: string;
        };
        /**
         * void_type
         * @description Indicates how a label was voided. `refund_assist` means the label was voided through the Refund Assist program, while `manual` means it was voided manually by the user.
         * @enum {string}
         */
        void_type: "refund_assist" | "manual";
        /**
         * refund_details
         * @description Information about a Refund Assist label. This object contains details about the refund request status and associated monetary amounts.
         */
        refund_details: {
            /** @description The current status of the refund request */
            readonly refund_status?: components["schemas"]["refund_status"];
            /** @description The date and time when the refund request was submitted */
            readonly request_date?: components["schemas"]["date_time"];
            /** @description The amount that was originally paid for the label */
            readonly amount_paid?: components["schemas"]["monetary_value"] | null;
            /** @description The amount requested to be refunded */
            readonly amount_requested?: components["schemas"]["monetary_value"] | null;
            /** @description The amount approved for refund by the carrier */
            readonly amount_approved?: components["schemas"]["monetary_value"] | null;
            /** @description The amount that has been credited back to the account */
            readonly amount_credited?: components["schemas"]["monetary_value"] | null;
        };
        /**
         * refund_status
         * @description The status of a Refund Assist request for eligible labels.
         *
         *     |Status              |Description
         *     |:-------------------|:-----------------------------------------------------
         *     |`request_scheduled` |The refund request has been scheduled but not yet submitted
         *     |`pending`           |The refund request has been submitted and is awaiting approval
         *     |`approved`          |The refund request has been approved by the carrier
         *     |`rejected`          |The refund request has been rejected by the carrier
         *     |`excluded`          |The refund request has been excluded by the user. Labels in this status were not sent to the carrier for a refund request.
         * @enum {string}
         */
        refund_status: "request_scheduled" | "pending" | "approved" | "rejected" | "excluded";
        /**
         * get_label_by_external_shipment_id_response_body
         * @description A get label by external shipment id response body
         */
        get_label_by_external_shipment_id_response_body: components["schemas"]["label"];
        /**
         * create_label_from_rate_request_body
         * @description A purchase label without shipment request body
         */
        create_label_from_rate_request_body: {
            /** @description Optional - Value will be saved in the shipment's advanced_options > custom_field1 */
            custom_field1?: string;
            /** @description Optional - Value will be saved in the shipment's advanced_options > custom_field2 */
            custom_field2?: string;
            /** @description Optional - Value will be saved in the shipment's advanced_options > custom_field3 */
            custom_field3?: string;
            /**
             * @description Optional - A unique user-defined key to identify a shipment limited to 100 characters.
             * @example my-shipment-001
             */
            external_shipment_id?: string | null;
        } & components["schemas"]["purchase_label_without_shipment"];
        /**
         * purchase_label_without_shipment
         * @description A purchase label without shipment resource
         */
        purchase_label_without_shipment: {
            validate_address?: components["schemas"]["validate_address"];
            /** @default 4x6 */
            label_layout?: components["schemas"]["label_layout"];
            /** @default pdf */
            label_format?: components["schemas"]["label_format"];
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
        };
        /**
         * create_label_from_rate_response_body
         * @description A create label from rate response body
         */
        create_label_from_rate_response_body: components["schemas"]["label"];
        /**
         * rate_attributes
         * @description Optional attributes that indicate the most profitable rates
         * @enum {string}
         */
        rate_attributes: "best_value" | "cheapest" | "fastest";
        /**
         * create_label_rate_shopper_request_body
         * @description Request body for creating a label using the Rate Shopper. The Rate Shopper
         *     automatically selects the carrier and service based on your specified strategy.
         *
         *     **Important Constraints:**
         *     - You MUST provide shipment details inline in the `shipment` object
         *     - You MUST NOT set `shipment_id` (inline shipment only)
         *     - You MUST NOT include `carrier_id`, `service_code`, or `shipping_rule_id`
         *       in the shipment (Rate Shopper selects these automatically)
         *     - Only carriers configured in your wallet will be considered
         *     - This endpoint is not available in sandbox mode
         */
        create_label_rate_shopper_request_body: {
            /**
             * @description The shipment details for which to create a label. Must be provided inline.
             *     The carrier_id, service_code, and shipping_rule_id are not included as these
             *     will be automatically determined by the Rate Shopper based on your strategy.
             */
            shipment: components["schemas"]["partial_shipment_for_rate_shopper"];
            /** @description Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned. */
            is_return_label?: boolean;
            /** @description An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value. */
            rma_number?: string | null;
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /**
             * @description The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
             *     required by some carriers.
             */
            outbound_label_id?: components["schemas"]["se_id"];
            /**
             * @deprecated
             * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
             * @default false
             */
            test_label?: boolean;
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
             * @default pdf
             */
            label_format?: components["schemas"]["label_format"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
             * @default 4x6
             */
            label_layout?: components["schemas"]["label_layout"];
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: (string & components["schemas"]["image_id"]) | null;
        };
        /**
         * partial_shipment_for_rate_shopper
         * @description The information necessary to ship a package for Rate Shopper, such as the origin, the destination, and the package dimensions and weight.
         *
         *     **Note:** This schema excludes carrier_id, service_code, and shipping_rule_id as these are automatically selected by the Rate Shopper based on your chosen strategy.
         */
        partial_shipment_for_rate_shopper: {
            /** @description A string that uniquely identifies the shipment */
            readonly shipment_id?: components["schemas"]["se_id"];
            /** @description ID that the Order Source assigned */
            external_order_id?: string | null;
            /**
             * @description Describe the packages included in this shipment as related to potential metadata that was imported from
             *     external order sources
             * @default []
             */
            items?: components["schemas"]["shipment_item"][];
            tax_identifiers?: components["schemas"]["tax_identifier"][] | null;
            /**
             * @description A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.
             *
             *     > **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.
             */
            external_shipment_id?: string | null;
            /**
             * @description A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.
             *
             *     > **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.
             */
            shipment_number?: string | null;
            /** @description The date that the shipment was (or will be) shipped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead. */
            ship_date?: components["schemas"]["date"];
            /** @description The date and time that the shipment was created in ShipEngine. */
            readonly created_at?: components["schemas"]["date_time"];
            /** @description The date and time that the shipment was created or last modified. */
            readonly modified_at?: components["schemas"]["date_time"];
            /**
             * @description The current status of the shipment
             * @default pending
             */
            readonly shipment_status?: components["schemas"]["shipment_status"];
            /** @description The recipient's mailing address */
            ship_to?: components["schemas"]["shipping_address_to"];
            /** @description The shipment's origin address. If you frequently ship from the same location, consider creating a warehouse. Then you can simply specify the `warehouse_id` rather than the complete address each time. */
            ship_from?: components["schemas"]["shipping_address"];
            /**
             * @description The warehouse that the shipment is being shipped from. Either `warehouse_id` or `ship_from` must be specified.
             * @default null
             */
            warehouse_id?: (string & components["schemas"]["se_id"]) | null;
            /** @description The return address for this shipment.  Defaults to the `ship_from` address. */
            return_to?: components["schemas"]["shipping_address"];
            /**
             * @description An optional indicator if the shipment is intended to be a return. Defaults to false if not provided.
             * @default false
             */
            is_return?: boolean | null;
            /**
             * @description The type of delivery confirmation for this shipment. Defaults to 'none' if not specified.
             * @default none
             */
            confirmation?: components["schemas"]["delivery_confirmation"];
            /**
             * @description Customs information for international shipments.
             *
             *     > **Note:** International shipments (where `ship_from.country_code` differs from `ship_to.country_code`) must include either `customs` or `advanced_options`.
             *     >
             *     > To prepay duties and taxes (DDP / PDT), set `customs.terms_of_trade_code` to `ddp`.
             *     >
             *     > Please note that the guaranteed prepaid duties and taxes option is available only for eligible ShipStation carriers.
             */
            customs?: components["schemas"]["international_shipment_options"] | null;
            /**
             * @description Advanced shipment options.
             *
             *     > **Note:** International shipments must include either `customs` or `advanced_options`.
             */
            advanced_options?: components["schemas"]["advanced_shipment_options"];
            /**
             * @description The insurance provider to use for any insured packages in the shipment.
             * @default none
             */
            insurance_provider?: components["schemas"]["insurance_provider"];
            /**
             * @description Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.
             * @default []
             */
            readonly tags?: components["schemas"]["tag"][];
            order_source_code?: components["schemas"]["order_source_name"];
            /**
             * @description The packages in the shipment.
             *
             *     > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
             */
            packages?: components["schemas"]["package"][];
            /** @description The combined weight of all packages in the shipment */
            readonly total_weight?: components["schemas"]["weight"];
            /**
             * @description Calculate a rate for this shipment with the requested carrier using a ratecard that differs from the default.  Only supported for UPS and USPS.
             * @example retail
             */
            comparison_rate_type?: string | null;
            /**
             * Format: int32
             * @description Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
             *     custom zones that vary depending upon the ship_to and ship_from location
             * @example 6
             */
            readonly zone?: number | null;
        };
        /**
         * create_label_rate_shopper_response_body
         * @description The response from creating a label using the Rate Shopper. Includes all standard label information plus the rate_shopper_id indicating which strategy or custom rate shopper was used.
         */
        create_label_rate_shopper_response_body: {
            /**
             * @description The rate selection strategy or custom rate shopper ID that was used to create this label. This will match the rate_shopper_id provided in the request path.
             * @example cheapest
             */
            readonly rate_shopper_id?: string;
        } & components["schemas"]["label"];
        /**
         * rate_shopper_list_response_body
         * @description A list of rate shoppers (both default and custom) for the authenticated seller.
         */
        rate_shopper_list_response_body: {
            /** @description The list of rate shoppers. Default rate shoppers appear first, followed by custom ones. */
            rate_shoppers: components["schemas"]["rate_shopper_response"][];
        };
        /**
         * rate_shopper_response
         * @description A rate shopper configuration. Can be a default rate shopper (cheapest,
         *     fastest, best_value) or a seller-created custom rate shopper.
         */
        rate_shopper_response: {
            /**
             * @description Identifier for the rate shopper. For default rate shoppers this is
             *     a strategy name (`cheapest`, `fastest`, `best_value`). For custom
             *     rate shoppers this is a UUID.
             * @example cheapest
             */
            rate_shopper_id: string;
            /**
             * @description Display name of the rate shopper.
             * @example Cheapest
             */
            name: string;
            /** @description The carrier services included in this rate shopper. */
            services: components["schemas"]["rate_shopper_service"][];
            transit_time?: components["schemas"]["rate_shopper_transit_time"];
            service_preference?: components["schemas"]["rate_shopper_service_preference"];
            /**
             * @description Whether the rate shopper is currently active.
             * @example true
             */
            is_active: boolean;
            /**
             * Format: date-time
             * @description Timestamp when the rate shopper was created.
             * @example 2025-01-15T10:30:00Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @description Timestamp when the rate shopper was last updated.
             * @example 2025-03-20T14:45:00Z
             */
            updated_at: string;
        };
        /**
         * rate_shopper_service
         * @description A carrier service entry in a rate shopper.
         */
        rate_shopper_service: {
            /**
             * @description The carrier service code.
             * @example usps_priority_mail
             */
            service_code: string;
            /**
             * @description The carrier account ID (prefixed with `se-`).
             * @example se-28529731
             */
            carrier_id: string;
        };
        /**
         * rate_shopper_transit_time
         * @description Transit time constraints for rate selection.
         */
        rate_shopper_transit_time: {
            /**
             * @description Maximum transit days for domestic shipments.
             * @example 5
             */
            max_days?: number | null;
            /**
             * @description Maximum transit days for international shipments.
             * @example 14
             */
            max_days_international?: number | null;
            /**
             * @description Whether to use the order's deliver-by date for filtering.
             * @example false
             */
            use_deliver_by_date?: boolean;
        };
        /**
         * rate_shopper_service_preference
         * @description Preferred service and price tolerance settings.
         */
        rate_shopper_service_preference: {
            service?: components["schemas"]["rate_shopper_service"];
            price_tolerance?: components["schemas"]["rate_shopper_price_tolerance"];
        };
        /**
         * rate_shopper_price_tolerance
         * @description Price tolerance thresholds for the preferred service.
         */
        rate_shopper_price_tolerance: {
            /**
             * Format: decimal
             * @description Maximum absolute price difference allowed.
             * @example 2.5
             */
            amount: number;
            /**
             * Format: decimal
             * @description Maximum percentage price difference allowed.
             * @example 10
             */
            percentage: number;
        };
        /**
         * create_label_from_shipping_rule_request_body
         * @description Request body for creating a label using a Shipping Rule. The Shipping Rule automatically selects the carrier and service based on its configuration.
         *
         *     **Important Constraints:**
         *     - You MUST NOT include `carrier_id`, `service_code`, or `shipping_rule_id`
         *       in the shipment (the Shipping Rule selects these automatically)
         */
        create_label_from_shipping_rule_request_body: {
            /** @description The shipment details for which to create a label. The carrier_id, service_code, and shipping_rule_id are not allowed as these will be automatically determined by the Shipping Rule. */
            shipment: components["schemas"]["partial_shipment_for_shipping_rule"];
            /**
             * @description Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.
             * @example false
             */
            is_return_label?: boolean;
            /**
             * @description An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.
             * @example RMA-12345
             */
            rma_number?: string | null;
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /**
             * @description The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is
             *     required by some carriers.
             */
            outbound_label_id?: components["schemas"]["se_id"];
            /**
             * @deprecated
             * @description Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.
             * @default false
             * @example false
             */
            test_label?: boolean;
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
             * @default pdf
             */
            label_format?: components["schemas"]["label_format"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /**
             * @description The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
             * @default 4x6
             */
            label_layout?: components["schemas"]["label_layout"];
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: (string & components["schemas"]["image_id"]) | null;
        };
        /**
         * partial_shipment_for_shipping_rule
         * @description The information necessary to ship a package using a Shipping Rule, such as the origin, the destination, and the package dimensions and weight.
         *
         *     **Note:** This schema excludes carrier_id, service_code, and shipping_rule_id as these are automatically selected by the Shipping Rule based on its configuration.
         */
        partial_shipment_for_shipping_rule: {
            /**
             * @description ID that the Order Source assigned
             * @example ext-order-123
             */
            external_order_id?: string | null;
            /**
             * @description Describe the packages included in this shipment as related to potential metadata that was imported from
             *     external order sources
             * @default []
             */
            items?: components["schemas"]["shipment_item"][];
            tax_identifiers?: components["schemas"]["tax_identifier"][] | null;
            /**
             * @description A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.
             *
             *     > **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.
             * @example ext-ship-123
             */
            external_shipment_id?: string | null;
            /**
             * @description A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.
             *
             *     > **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.
             * @example SHIP-001
             */
            shipment_number?: string | null;
            /** @description The date that the shipment was (or will be) shipped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead. */
            ship_date?: components["schemas"]["date"];
            /** @description The recipient's mailing address */
            ship_to?: components["schemas"]["shipping_address_to"];
            /** @description The shipment's origin address. If you frequently ship from the same location, consider creating a warehouse. Then you can simply specify the `warehouse_id` rather than the complete address each time. */
            ship_from?: components["schemas"]["shipping_address_from"];
            /**
             * @description The warehouse that the shipment is being shipped from. Either `warehouse_id` or `ship_from` must be specified.
             * @default null
             */
            warehouse_id?: (string & components["schemas"]["se_id"]) | null;
            /** @description The return address for this shipment.  Defaults to the `ship_from` address. */
            return_to?: components["schemas"]["shipping_address"];
            /**
             * @description An optional indicator if the shipment is intended to be a return. Defaults to false if not provided.
             * @default false
             * @example false
             */
            is_return?: boolean | null;
            /**
             * @description The type of delivery confirmation for this shipment. Defaults to 'none' if not specified.
             * @default none
             */
            confirmation?: components["schemas"]["delivery_confirmation"];
            /**
             * @description Customs information for international shipments.
             *
             *     > **Note:** International shipments (where `ship_from.country_code` differs from `ship_to.country_code`) must include either `customs` or `advanced_options`.
             *     >
             *     > To prepay duties and taxes (DDP / PDT), set `customs.terms_of_trade_code` to `ddp`.
             *     >
             *     > Please note that the guaranteed prepaid duties and taxes option is available only for eligible ShipStation carriers.
             */
            customs?: components["schemas"]["international_shipment_options"] | null;
            /**
             * @description Advanced shipment options.
             *
             *     > **Note:** International shipments must include either `customs` or `advanced_options`.
             */
            advanced_options?: components["schemas"]["advanced_shipment_options"];
            /**
             * @description The insurance provider to use for any insured packages in the shipment.
             * @default none
             */
            insurance_provider?: components["schemas"]["insurance_provider"];
            order_source_code?: components["schemas"]["order_source_name"];
            /**
             * @description The packages in the shipment.
             *
             *     > **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.
             */
            packages?: components["schemas"]["package"][];
            /**
             * @description Calculate a rate for this shipment with the requested carrier using a ratecard that differs from the default.  Only supported for UPS and USPS.
             * @example retail
             */
            comparison_rate_type?: string | null;
        };
        /**
         * create_label_from_shipment_request_body
         * @description A purchase label without shipment request body
         */
        create_label_from_shipment_request_body: {
            validate_address?: components["schemas"]["validate_address"];
            /** @default 4x6 */
            label_layout?: components["schemas"]["label_layout"];
            /** @default pdf */
            label_format?: components["schemas"]["label_format"];
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
        };
        /**
         * create_label_from_shipment_response_body
         * @description A create label from shipment response body
         */
        create_label_from_shipment_response_body: components["schemas"]["label"];
        /**
         * get_label_by_id_response_body
         * @description A get label by id response body
         */
        get_label_by_id_response_body: components["schemas"]["label"];
        /**
         * create_return_label_request_body
         * @description A create return label request body
         */
        create_return_label_request_body: {
            /** @description The label charge event. */
            charge_event?: components["schemas"]["label_charge_event"];
            /**
             * @description The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
             * @default 4x6
             */
            label_layout?: components["schemas"]["label_layout"];
            /**
             * @description The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
             * @default pdf
             */
            label_format?: components["schemas"]["label_format"];
            /** @default url */
            label_download_type?: components["schemas"]["label_download_type"];
            /**
             * @description The display format that the label should be shown in.
             * @default label
             */
            display_scheme?: components["schemas"]["display_scheme"];
            /** @description The label image resource that was used to create a custom label image. */
            label_image_id?: (string & components["schemas"]["image_id"]) | null;
            /** @description An optional Return Merchandise Authorization number. If provided, this value will be used as the return label's RMA number. If omitted, the system will auto-generate an RMA number (current default behavior). You can set it to any string value. */
            rma_number?: string | null;
        };
        /**
         * create_return_label_response_body
         * @description A create return label response body
         */
        create_return_label_response_body: components["schemas"]["label"];
        /**
         * get_tracking_log_from_label_response_body
         * @description A get tracking log from label response body
         */
        get_tracking_log_from_label_response_body: WithRequired<components["schemas"]["tracking_information"], "tracking_number" | "status_code" | "carrier_status_code" | "events">;
        /**
         * tracking_information
         * @description A tracking information resource
         */
        tracking_information: {
            tracking_number?: components["schemas"]["tracking_number"];
            /**
             * @description Carrier Tracking Url, if available
             * @example https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234
             */
            readonly tracking_url?: string;
            /** @example DE */
            status_code?: components["schemas"]["status_code"];
            /** @example DELIVERED */
            status_detail_code?: components["schemas"]["status_detail_code"];
            carrier_code?: components["schemas"]["carrier_code"];
            /**
             * Format: int32
             * @description The unique ID of the carrier account that was used to create this label
             */
            readonly carrier_id?: number;
            /**
             * @description Status description
             * @example Delivered
             */
            readonly status_description?: string;
            /**
             * @description Status detail description
             * @example Your parcel has been successfully delivered.
             */
            readonly status_detail_description?: string;
            /**
             * @description Carrier status code
             * @example 1
             */
            readonly carrier_status_code?: string;
            /**
             * @description Carrier detail code
             * @example OT
             */
            readonly carrier_detail_code?: string;
            /**
             * @description carrier status description
             * @example Your item was delivered in or at the mailbox at 9:10 am on March
             */
            readonly carrier_status_description?: string;
            ship_date?: components["schemas"]["date_time"];
            estimated_delivery_date?: components["schemas"]["date_time"];
            actual_delivery_date?: components["schemas"]["date_time"];
            /** @description Exception description */
            readonly exception_description?: string;
            /** @description The events that have occured during the lifetime of this tracking number. */
            readonly events?: components["schemas"]["track_event"][];
        };
        /**
         * status_code
         * @description The tracking status codes
         *
         *     |Value       |Description
         *     |:---------  |:-----------------------------------------------------
         *     |`UN` | Unknown
         *     |`AC` | Accepted
         *     |`IT` | In Transit
         *     |`DE` | Delivered
         *     |`EX` | Exception
         *     |`AT` | Delivery Attempt
         *     |`NY` | Not Yet In System
         *     |`SP` | Delivered To Collection Location
         * @example DE
         * @enum {string}
         */
        status_code: "UN" | "AC" | "IT" | "DE" | "EX" | "AT" | "NY" | "SP";
        /**
         * status_detail_code
         * @description The tracking status detail codes
         *
         *     |Value       |Description
         *     |:---------  |:-----------------------------------------------------
         *     | `CARRIER_STATUS_NOT_MAPPED` | Status not mapped. Please check the carrier's website for updates.
         *     | `SHIPMENT_CREATED` | Your tracking number is ready. Your parcel is waiting to be registered in the carrier system and scheduled for pickup.
         *     | `AWAITING_PICKUP_DROP_OFF` | Your parcel is waiting to be handed over to the carrier.
         *     | `DROPPED_OFF` | Your parcel has been dropped off and is ready for carrier processing.
         *     | `ELEC_ADVICE_RECD_BY_CARRIER` | Your shipment is now in the carrier's system.
         *     | `PICKED_UP` | Your parcel has been picked up by the carrier.
         *     | `CUSTOMS_CLEARED` | Your parcel has cleared customs and is continuing its journey.
         *     | `CUSTOMS_PROCESSING` | Your parcel is currently being processed by customs.
         *     | `DELIVERY_ARRANGED_WITH_RECIPIENT` | Your parcel's delivery has been arranged with the carrier.
         *     | `HUB_SCAN_OUT` | Your parcel has left the carrier's hub.
         *     | `HUB_SCAN_IN` | Your parcel has arrived at the carrier's hub for processing.
         *     | `IN_TRANSIT` | Your shipment is on its way between the carrier hubs.
         *     | `INFORMATION` | The carrier has shared additional information about your parcel.
         *     | `PARCEL_OVER_LABELLED` | Your parcel's label has been updated by the carrier, which may affect tracking visibility.
         *     | `PARCEL_UPDATE_NOTIFICATION` | The carrier has sent you an update on your parcel status via SMS or email.
         *     | `RECEIVED_BY_CARRIER` | Your parcel has been received by the carrier and is beginning its journey.
         *     | `RECEIVED_LOCAL_DELIVERY_DEPOT` | Your parcel has arrived at the local delivery depot and is almost ready for delivery.
         *     | `SUB_CONTRACTOR_EVENT` | The carrier has shared additional information about your parcel's handling by a delivery partner.
         *     | `SUB_CONTRACTOR_RECEIVED` | Your parcel has been received by the carrier's local delivery partner.
         *     | `PARCEL_REDIRECTED` | Your parcel has been redirected to a new delivery address per your request.
         *     | `DELIVERY_SCHEDULED` | Your parcel's delivery has been scheduled and will soon be out for delivery.
         *     | `HUB_PROCESSING` | Your parcel is being processed at a carrier hub.
         *     | `DELIVERY_RESCHEDULED` | Your parcel's delivery has been rescheduled due to operational issues.
         *     | `ATTEMPTED_DELIVERY` | The carrier attempted to deliver your parcel but was unable to complete delivery.
         *     | `ATTEMPTED_DELIVERY_FINAL` | The carrier made a final attempt to deliver your parcel but was unable to complete delivery. Please check the carrier's instructions for next steps.
         *     | `COD_AMOUNT_PAID` | Cash on delivery payment received.
         *     | `CUSTOMER_CARDED` | Delivery attempt failed. Please follow delivery instructions left by the carrier.
         *     | `OUT_FOR_DELIVERY` | Your parcel is on its way and will be delivered today.
         *     | `AWAITING_COLLECTION_FROM_PICKUP_POINT` | Your parcel is ready for collection at the selected pickup point.
         *     | `COLLECT_AT_LOCAL_PO` | Your parcel is ready for collection at your local post office.
         *     | `CUSTOMER_TO_COLLECT_FROM_CARRIER` | Your parcel is available for collection from the carrier's local delivery unit.
         *     | `DELIVERED_TO_RECEPTION` | Your parcel has been delivered to your building's reception or designated mail area.
         *     | `DELIVERED` | Your parcel has been successfully delivered.
         *     | `DELIVERED_DAMAGED` | Your parcel was delivered but arrived with visible damage.
         *     | `DELIVERED_IN_PART` | Part of your shipment has been delivered. Check for updates on the rest.
         *     | `DELIVERED_SPECIFIED_SAFE_PLACE` | Your parcel has been delivered to your specified safe place.
         *     | `DELIVERED_TO_ALTERNATIVE_DELIVERY_LOCATION` | Your parcel was delivered to an alternative location due to the delivery company being unable to deliver it to the specified address. Check carrier instructions for pickup details.
         *     | `DELIVERED_TO_NEIGHBOUR` | Your parcel was delivered to your neighbor.
         *     | `DELIVERED_TO_PO_BOX` | Your parcel has been delivered to your specified PO Box.
         *     | `PARCEL_COLLECTED_FROM_PICKUP_POINT` | Your package has been picked up from the pick up point.
         *     | `POST_TRANSIT_STATUS` | The carrier has added more information about your delivery.
         *     | `PROOF_OF_DELIVERY` | The carrier has confirmed delivery with proof, such as a signature or photo.
         *     | `PICKUP_FAILED` | Parcel pickup failed. The delivery company will try again soon.
         *     | `NOT_YET_RECEIVED_BY_CARRIER` | The carrier has not yet received your parcel, which may cause a delay.
         *     | `PARCEL_DAMAGED` | Your parcel was damaged in transit but will still be delivered.
         *     | `ADDRESS_QUERY` | There is an issue with the delivery address, which may delay your parcel.
         *     | `CARRIER_DELAYS` | Your parcel is delayed due to issues within the carrier network.
         *     | `DELAYED_NOT_CARRIER` | Your parcel is delayed due to circumstances beyond the carrier's control.
         *     | `HELD_BY_CARRIER` | Your parcel is being held due to an operational issue. Contact with the carrier for more information.
         *     | `HELD_BY_CARRIER_FOR_CLEARANCE_PRE_PROCESSING` | Your parcel is being held by the carrier for customs documentation checks. This may occur when the carrier must confirm documentation before the parcel can continue its journey.
         *     | `HELD_BY_CUSTOMS` | Your parcel is being held at customs, which may delay delivery.
         *     | `INCORRECT_DECLARATION` | Your parcel has been incorrectly declared but is still moving forward for delivery.
         *     | `MISROUTED` | Your parcel was sent to the wrong place due to a routing error but is being redirected.
         *     | `PARCEL_REPACKED` | Your parcel was repackaged by the carrier due to damage and will still be delivered.
         *     | `RECD_BY_CARRIER_NO_ELEC_ADVICE` | Your parcel has been received by the carrier but may experience delays due to missing pre-advice.
         *     | `COD_AMOUNT_NOT_PAID` | Delivery failed due to unpaid cash on delivery. Please follow carrier instructions.
         *     | `CUSTOMER_IDENTIFICATION_FAILED` | Delivery couldn't be completed as identification requirements were not met.
         *     | `NO_ACCESS_TO_RECIPIENTS_ADDRESS` | The carrier couldn't access the delivery location due to restricted entry.
         *     | `CANCELLED` | Your parcel has been cancelled.
         *     | `CUSTOMER_MOVED` | Delivery failed as the recipient is no longer at the specified address. Your parcel is being returned.
         *     | `HAZARDOUS_PROHIBITED` | Your parcel contains restricted items and will not be delivered.
         *     | `NOT_COLLECTED_FROM_PICKUP_POINT` | Your parcel was not collected from the pickup point within the designated time and will be returned.
         *     | `NOT_DELIVERED` | All delivery attempts failed. Your parcel is being returned to the sender.
         *     | `NOT_DELIVERED_ADDRESSEE_DECEASED` | The parcel could not be delivered as the addressee is reported deceased.
         *     | `PARCEL_DISPOSED` | Your parcel has been disposed of due to its contents or condition and will not be delivered.
         *     | `PARCEL_LOST` | The carrier has reported that your parcel is lost and will not be delivered.
         *     | `PARCEL_OUTSIDE_OF_SERVICE_CAPABILITY` | The parcel cannot be delivered as it exceeds the carrier's service limits.
         *     | `REFUSED_BY_CUSTOMER` | You have refused the parcel, and it will be returned to the sender.
         *     | `RETURN_TO_SENDER` | Your parcel is being returned to the sender due to delivery issues.
         *     | `UNSPECIFIED_EXCEPTION` | The carrier has reported an issue with your parcel, but details are unavailable.
         *     | `TRACKING_EXPIRED` | Tracking for this parcel has expired. If you are still expecting this delivery, please contact the carrier for assistance.
         *     | `DUTY_NOT_PAID` | The import taxes or duties for this package havent been paid and it may be subject to disposal by customs authorities if payment is not made.
         *     | `PARCEL_REDIRECTED_BY_CARRIER` | The carrier has redirected your parcel due to an operational issue. The package is likely being rerouted to a nearby pickup point. You may contact the carrier for more details about the new delivery location.
         *     | `DELIVERED_TO_PICKUP_POINT` | Your package has been delivered to the pickup point. You will be notified when its ready for collection.
         *     | `UNDELIVERABLE_RETURNED_TO_SENDER` | The shipment has been returned to the sender. Please contact the sender for further information.
         * @enum {string}
         */
        status_detail_code: "CARRIER_STATUS_NOT_MAPPED" | "SHIPMENT_CREATED" | "AWAITING_PICKUP_DROP_OFF" | "DROPPED_OFF" | "ELEC_ADVICE_RECD_BY_CARRIER" | "PICKED_UP" | "CUSTOMS_CLEARED" | "CUSTOMS_PROCESSING" | "DELIVERY_ARRANGED_WITH_RECIPIENT" | "HUB_SCAN_OUT" | "HUB_SCAN_IN" | "IN_TRANSIT" | "INFORMATION" | "PARCEL_OVER_LABELLED" | "PARCEL_UPDATE_NOTIFICATION" | "RECEIVED_BY_CARRIER" | "RECEIVED_LOCAL_DELIVERY_DEPOT" | "SUB_CONTRACTOR_EVENT" | "SUB_CONTRACTOR_RECEIVED" | "PARCEL_REDIRECTED" | "DELIVERY_SCHEDULED" | "HUB_PROCESSING" | "DELIVERY_RESCHEDULED" | "ATTEMPTED_DELIVERY" | "ATTEMPTED_DELIVERY_FINAL" | "COD_AMOUNT_PAID" | "CUSTOMER_CARDED" | "OUT_FOR_DELIVERY" | "AWAITING_COLLECTION_FROM_PICKUP_POINT" | "COLLECT_AT_LOCAL_PO" | "CUSTOMER_TO_COLLECT_FROM_CARRIER" | "DELIVERED_TO_RECEPTION" | "DELIVERED" | "DELIVERED_DAMAGED" | "DELIVERED_IN_PART" | "DELIVERED_SPECIFIED_SAFE_PLACE" | "DELIVERED_TO_ALTERNATIVE_DELIVERY_LOCATION" | "DELIVERED_TO_NEIGHBOUR" | "DELIVERED_TO_PO_BOX" | "PARCEL_COLLECTED_FROM_PICKUP_POINT" | "POST_TRANSIT_STATUS" | "PROOF_OF_DELIVERY" | "PICKUP_FAILED" | "NOT_YET_RECEIVED_BY_CARRIER" | "PARCEL_DAMAGED" | "ADDRESS_QUERY" | "CARRIER_DELAYS" | "DELAYED_NOT_CARRIER" | "HELD_BY_CARRIER" | "HELD_BY_CARRIER_FOR_CLEARANCE_PRE_PROCESSING" | "HELD_BY_CUSTOMS" | "INCORRECT_DECLARATION" | "MISROUTED" | "PARCEL_REPACKED" | "RECD_BY_CARRIER_NO_ELEC_ADVICE" | "COD_AMOUNT_NOT_PAID" | "CUSTOMER_IDENTIFICATION_FAILED" | "NO_ACCESS_TO_RECIPIENTS_ADDRESS" | "CANCELLED" | "CUSTOMER_MOVED" | "HAZARDOUS_PROHIBITED" | "NOT_COLLECTED_FROM_PICKUP_POINT" | "NOT_DELIVERED" | "NOT_DELIVERED_ADDRESSEE_DECEASED" | "PARCEL_DISPOSED" | "PARCEL_LOST" | "PARCEL_OUTSIDE_OF_SERVICE_CAPABILITY" | "REFUSED_BY_CUSTOMER" | "RETURN_TO_SENDER" | "UNSPECIFIED_EXCEPTION" | "TRACKING_EXPIRED" | "DUTY_NOT_PAID" | "PARCEL_REDIRECTED_BY_CARRIER" | "DELIVERED_TO_PICKUP_POINT" | "UNDELIVERABLE_RETURNED_TO_SENDER";
        /**
         * track_event
         * @description A track event
         */
        track_event: {
            /** @description Timestamp for carrier event */
            occurred_at: components["schemas"]["date_time"];
            /** @description Carrier timestamp for the event, it is assumed to be the local time of where the event occurred. */
            carrier_occurred_at?: components["schemas"]["date_time"];
            /**
             * @description Event description
             * @example Delivered, In/At Mailbox
             */
            readonly description?: string;
            /**
             * @description City locality
             * @example AUSTIN
             */
            readonly city_locality: string;
            /**
             * @description State province
             * @example TX
             */
            readonly state_province: string;
            /**
             * @description Postal code
             * @example 78756
             */
            readonly postal_code: string;
            country_code?: components["schemas"]["country_code"];
            /**
             * @description Company Name
             * @example Stamps.com
             */
            readonly company_name?: string;
            /** @description Signer information */
            readonly signer?: string;
            /** @description Event Code */
            event_code?: string;
            /**
             * @description Carrier detail code
             * @example OT
             */
            readonly carrier_detail_code: string;
            /** @example IT */
            status_code: components["schemas"]["status_code"];
            /** @example IN_TRANSIT */
            status_detail_code?: components["schemas"]["status_detail_code"];
            /**
             * @description Event Status Description
             * @example In Transit
             */
            readonly status_description: string;
            /**
             * @description Event Status Detail Description
             * @example Your shipment is on its way between the carrier hubs.
             */
            readonly status_detail_description?: string;
            /**
             * @description Carrier status code
             * @example 1
             */
            readonly carrier_status_code: string;
            /**
             * @description carrier status description
             * @example Your item was delivered in or at the mailbox at 9:10 am on March
             */
            readonly carrier_status_description: string;
            /**
             * Format: double
             * @description Latitude coordinate of tracking event.
             */
            latitude?: number;
            /**
             * Format: double
             * @description Longitude coordinate of tracking event.
             */
            longitude?: number;
            /**
             * @description A URL to an image captured at the time of delivery, serving as evidence that the shipment was successfully delivered to the recipient. It can be used to capture things like recipient's signature, location of delivery, condition of the package upon delivery, etc.
             * @example https://tracking-service-prod.s3.amazonaws.com/proof-of-delivery/dummy_module/0000000001/bc6dd17969bd97f24262ca73ac6ff36062aafecba25ef16d4178264bf7c0e72c.png
             */
            readonly proof_of_delivery_url?: string;
        };
        /**
         * void_label_response_body
         * @description A void label response body
         */
        void_label_response_body: {
            /**
             * @description Indicates whether the attempt to void the label was successful
             * @example false
             */
            readonly approved: boolean;
            /** @example Unable to delete FedEx shipment. Unable to retrieve record from database. */
            readonly message: string;
            /** @description The Ids of any associated labels that were also voided as part of this request. Includes the originally requested label. */
            readonly voided_label_ids?: number[];
            /**
             * @description Indicates a normalized reason for the conditions if the void attempt was not approved. Will not populate if approved is true. “unknown” codes may be specified later.
             * @example label_not_found_within_void_period
             */
            readonly reason_code?: components["schemas"]["reason_code"];
        };
        /**
         * reason_code
         * @description The possible normalized reasons a label void request may not have been approved
         * @enum {string}
         */
        reason_code: "unknown" | "unspecified" | "validation_failed" | "label_not_found_within_void_period" | "label_already_used" | "label_already_voided" | "contact_carrier";
        /**
         * cancel_refund_label_response_body
         * @description A cancel refund label response body
         */
        cancel_refund_label_response_body: components["schemas"]["label"];
        /**
         * list_manifests_response_body
         * @description A list manifests response body
         */
        list_manifests_response_body: {
            /**
             * @description The list of available manifests
             * @default []
             */
            readonly manifests: components["schemas"]["manifest"][];
            /**
             * Format: int64
             * @description The total number of manifests returned
             * @example 3
             */
            readonly total: number;
            /**
             * Format: int32
             * @description Current page of the list manifests results
             * @example 3
             */
            readonly page: number;
            /**
             * Format: int32
             * @description Total number of pages for list manifests results
             * @example 4
             */
            readonly pages: number;
            /** @description Helpful links to other pages of results */
            readonly links: components["schemas"]["pagination_link"];
        };
        /**
         * manifest
         * @description Used for combining packages into one scannable form that a carrier can use when picking up a large
         *     number of shipments
         */
        manifest: {
            /** @description A string that uniquely identifies the manifest */
            readonly manifest_id?: components["schemas"]["se_id"];
            /** @description A string that uniquely identifies the form */
            readonly form_id?: components["schemas"]["se_id"];
            /**
             * Format: date-time
             * @description The date-time that the manifest was created
             * @example 2019-07-12T13:37:39.050Z
             */
            readonly created_at?: string;
            /**
             * Format: date-time
             * @description The date-time that the manifests shipments will be picked up
             * @example 2019-07-12T13:37:39.050Z
             */
            readonly ship_date?: string;
            /**
             * Format: int32
             * @description The number of shipments that are included in this manifest
             * @example 100
             */
            readonly shipments?: number;
            /** @description An array of the label ids used in this manifest. */
            readonly label_ids?: components["schemas"]["se_id"][];
            /** @description A string that uniquely identifies the warehouse */
            readonly warehouse_id?: components["schemas"]["se_id"];
            /**
             * @description A string that uniquely identifies the submission
             * @example 9475711899564878915476
             */
            readonly submission_id?: string;
            /** @description A string that uniquely identifies the carrier */
            readonly carrier_id?: components["schemas"]["se_id"];
            readonly manifest_download?: components["schemas"]["manifest_download"];
        };
        /**
         * manifest_download
         * @description Object containing the href link to download the manifest file
         */
        manifest_download: {
            /** @description The URL of the linked resource, if any */
            href?: components["schemas"]["url"];
        };
        /** create_manifest_request_body */
        create_manifest_request_body: components["schemas"]["create_manifest_by_object_request_body"] | components["schemas"]["create_manifest_label_ids_request_body"];
        /**
         * create_manifest_by_object_request_body
         * @description A create manifest request body
         */
        create_manifest_by_object_request_body: {
            /** @description A string that uniquely identifies the carrier */
            carrier_id: components["schemas"]["se_id"];
            /** @description The list of label ids to exclude from the manifest */
            excluded_label_ids?: components["schemas"]["se_id"][];
            /** @description The list of label ids to include for the manifest */
            label_ids?: components["schemas"]["se_id"][];
            /** @description A string that uniquely identifies the warehouse */
            warehouse_id: components["schemas"]["se_id"];
            /**
             * Format: date-time
             * @description The ship date that the shipment will be sent out on
             * @example 2018-09-23T15:00:00.000Z
             */
            ship_date: string;
        };
        /**
         * create_manifest_label_ids_request_body
         * @description A create manifest request body
         */
        create_manifest_label_ids_request_body: {
            /** @description The list of label ids to include in the manifest */
            label_ids: components["schemas"]["se_id"][];
        };
        /**
         * create_manifest_response_body
         * @description A create manifest response body
         */
        create_manifest_response_body: components["schemas"]["manifests"] & components["schemas"]["manifests_requests"] & WithRequired<components["schemas"]["deprecated_manifest"], "manifest_id" | "form_id" | "created_at" | "ship_date" | "shipments" | "warehouse_id" | "submission_id" | "carrier_id" | "manifest_download"> & components["schemas"]["error_with_label_id_response_body"];
        /**
         * manifests
         * @description An array of manifest resources
         */
        manifests: {
            /** @description Resulting Manifests */
            manifests?: components["schemas"]["manifest"][];
        };
        /**
         * manifests_requests
         * @description An array of manifest requests
         */
        manifests_requests: {
            /** @description Resulting manifest requests with statuses */
            manifest_requests?: components["schemas"]["manifest_request"][];
        };
        /**
         * manifest_request
         * @description A reference to the manifest request
         */
        manifest_request: {
            /** @description A string that uniquely identifies a manifest request */
            readonly manifest_request_id?: components["schemas"]["se_id"];
            status?: components["schemas"]["manifest_request_status"];
        };
        /**
         * manifest_request_status
         * @description The possible statuses of a manifest request
         * @enum {string}
         */
        manifest_request_status: "in_progress" | "completed";
        /**
         * deprecated_manifest
         * @description Deprecated manifest resource
         */
        deprecated_manifest: {
            /**
             * @deprecated
             * @description A string that uniquely identifies the manifest
             */
            manifest_id?: components["schemas"]["se_id"];
            /**
             * @deprecated
             * @description A string that uniquely identifies the form
             */
            form_id?: components["schemas"]["se_id"];
            /**
             * Format: date-time
             * @deprecated
             * @description The date-time that the manifest was created
             * @example 2019-07-12T13:37:39.050Z
             */
            created_at?: string;
            /**
             * Format: date-time
             * @deprecated
             * @description The date-time that the manifests shipments will be picked up
             * @example 2019-07-12T13:37:39.050Z
             */
            ship_date?: string;
            /**
             * Format: int32
             * @deprecated
             * @description The number of shipments that are included in this manifest
             * @example 100
             */
            readonly shipments?: number;
            /**
             * @deprecated
             * @description A string that uniquely identifies the warehouse
             */
            warehouse_id?: components["schemas"]["se_id"];
            /**
             * @deprecated
             * @description A string that uniquely identifies the submission
             * @example 9475711899564878915476
             */
            submission_id?: string;
            /**
             * @deprecated
             * @description A string that uniquely identifies the carrier
             */
            carrier_id?: components["schemas"]["se_id"];
            /** @deprecated */
            manifest_download?: components["schemas"]["manifest_download"];
            /**
             * @deprecated
             * @description An array of the label ids used in this manifest.
             */
            readonly label_ids?: components["schemas"]["se_id"][];
        };
        /**
         * error_with_label_id_response_body
         * @description An error response body
         */
        error_with_label_id_response_body: {
            /**
             * @description A UUID that uniquely identifies the request id.
             *     This can be given to the support team to help debug non-trivial issues that may occur
             */
            request_id: components["schemas"]["uuid"];
            /** @description The errors associated with the failed API call */
            readonly errors: components["schemas"]["error"][];
        };
        /**
         * get_manifest_by_id_response_body
         * @description A get manifest by id response body
         */
        get_manifest_by_id_response_body: WithRequired<components["schemas"]["manifest"], "manifest_id" | "form_id" | "created_at" | "ship_date" | "shipments" | "warehouse_id" | "submission_id" | "carrier_id" | "manifest_download" | "label_ids">;
        /**
         * list_package_types_response_body
         * @description A list package types response body
         */
        list_package_types_response_body: {
            /** @description An array of custom package types */
            readonly packages?: components["schemas"]["package_type_response"][];
        };
        /**
         * create_package_type_request_body
         * @description A create package type request body
         */
        create_package_type_request_body: components["schemas"]["package_type_request"];
        /**
         * create_package_type_response_body
         * @description A create package type response body
         */
        create_package_type_response_body: components["schemas"]["package_type_response"];
        /**
         * get_package_type_by_id_response_body
         * @description A get package type by id response body
         */
        get_package_type_by_id_response_body: components["schemas"]["package_type_response"];
        /**
         * update_package_type_request_body
         * @description An update package type request body
         */
        update_package_type_request_body: components["schemas"]["package_type_request"];
        /** get_pickups_response_body */
        get_pickups_response_body: components["schemas"]["list_pickup_response_body"] & components["schemas"]["error_response_body"];
        /**
         * list_pickup_response_body
         * @description A list pickup response body
         */
        list_pickup_response_body: {
            /** @description An array of pickups associated with the user's account. */
            pickups: components["schemas"]["pickup"][];
            /**
             * Format: int64
             * @description The total number of pickups returned
             * @example 3
             */
            readonly total: number;
            /**
             * Format: int32
             * @description Current page of the list pickups results
             * @example 3
             */
            readonly page: number;
            /**
             * Format: int32
             * @description Total number of pages for list pickups results
             * @example 4
             */
            readonly pages: number;
            /** @description Helpful links to other pages of results */
            readonly links: components["schemas"]["pagination_link"];
        };
        /**
         * pickup
         * @description The information necessary to schedule a package pickup
         */
        pickup: {
            readonly pickup_id?: components["schemas"]["pickup_resource_id"];
            /** @description Label IDs that will be included in the pickup request */
            label_ids?: components["schemas"]["se_id"][];
            /** @description The date and time that the pickup was created in ShipEngine. */
            readonly created_at?: components["schemas"]["date_time"];
            /** @description The date and time that the pickup was cancelled in ShipEngine. */
            readonly cancelled_at?: components["schemas"]["date_time"];
            /** @description The carrier_id associated with the pickup */
            readonly carrier_id?: components["schemas"]["se_id"];
            /**
             * @description The carrier confirmation number for the scheduled pickup.
             * @example 292513CL4A3
             */
            readonly confirmation_number?: string | null;
            /** @description The warehouse_id associated with the pickup */
            readonly warehouse_id?: components["schemas"]["se_id"];
            readonly pickup_address?: components["schemas"]["address"];
            contact_details?: components["schemas"]["contact_details"];
            /** @description Used by some carriers to give special instructions for a package pickup */
            pickup_notes?: string;
            pickup_window?: components["schemas"]["pickup_window"];
            /** @description An array of available pickup windows. Carriers can return multiple times that they will pickup packages. */
            readonly pickup_windows?: components["schemas"]["pickup_windows"][];
        };
        /**
         * pickup_resource_id
         * @description Pickup Resource ID
         * @example pik_3YcKU5zdtJuCqoeNwyqqbW
         */
        pickup_resource_id: string;
        /** contact_details */
        contact_details: {
            name: string;
            email: components["schemas"]["email"];
            /** @description Phone number associated */
            phone: string;
        };
        /**
         * pickup_window
         * @description The desired time range for the package pickup.
         */
        pickup_window: {
            start_at: components["schemas"]["date_time"];
            end_at: components["schemas"]["date_time"];
        };
        /** pickup_windows */
        pickup_windows: {
            start_at?: components["schemas"]["date_time"];
            end_at?: components["schemas"]["date_time"];
        };
        /**
         * schedule_pickup_request_body
         * @description A schedule pickup request body
         */
        schedule_pickup_request_body: WithRequired<components["schemas"]["pickup"], "contact_details" | "label_ids" | "pickup_window">;
        /** schedule_pickup_response_body */
        schedule_pickup_response_body: components["schemas"]["pickup"] & components["schemas"]["error_response_body"];
        /** get_pickup_by_id_response_body */
        get_pickup_by_id_response_body: components["schemas"]["pickup_response_body"] & components["schemas"]["error_response_body"];
        /**
         * pickup_response_body
         * @description A pickup response body
         */
        pickup_response_body: WithRequired<components["schemas"]["pickup"], "pickup_id" | "label_ids" | "created_at" | "carrier_id" | "warehouse_id" | "pickup_address" | "contact_details" | "pickup_notes" | "pickup_window" | "confirmation_number">;
        /** delete_pickup_by_id_response_body */
        delete_pickup_by_id_response_body: components["schemas"]["error_response_body"] & components["schemas"]["delete_scheduled_pickup_response_body"];
        /**
         * delete_scheduled_pickup_response_body
         * @description A delete scheduled pickup response body
         */
        delete_scheduled_pickup_response_body: {
            pickup_id: components["schemas"]["pickup_resource_id"];
        };
        /**
         * calculate_rates_request_body
         * @description A rate shipment request body
         */
        calculate_rates_request_body: ({
            /**
             * @description A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.
             * @example 614940
             */
            ship_to_service_point_id?: string | null;
            /**
             * @description A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.
             * @example 614940
             */
            ship_from_service_point_id?: string | null;
        } & components["schemas"]["rate_request_options"]) & (components["schemas"]["shipment_id_request"] | components["schemas"]["rate_shipment_request"]);
        /** shipment_id_request */
        shipment_id_request: {
            /** @description A string that uniquely identifies the shipment */
            shipment_id?: components["schemas"]["se_id"];
        };
        /** rate_shipment_request */
        rate_shipment_request: {
            /** @description The shipment object */
            shipment?: components["schemas"]["address_validating_shipment"];
        };
        /**
         * address_validating_shipment
         * @description An address validating shipment.
         *
         *     **Note**: The `carrier_id` and `service_code` fields are **required** within the `shipment` object when calling v1/rates. However, they are **optional** when rating if `rate_options` are provided, as `rate_options` will take precedence.
         */
        address_validating_shipment: components["schemas"]["validate_shipment_fields"] & WithRequired<components["schemas"]["partial_shipment"], "shipment_id" | "carrier_id" | "service_code" | "ship_to" | "ship_from">;
        /** validate_shipment_fields */
        validate_shipment_fields: {
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
        };
        /** rate_request_options */
        rate_request_options: {
            /** @description The rate options */
            rate_options?: components["schemas"]["rate_request_body"];
        };
        /**
         * rate_request_body
         * @description A rate request body
         */
        rate_request_body: {
            /** @description Array of carrier ids to get rates for */
            carrier_ids: components["schemas"]["se_id"][];
            package_types?: string[];
            service_codes?: string[];
            /** @description Calculate the duties and tariffs for cross border shipments. */
            calculate_tax_amount?: boolean;
            preferred_currency?: components["schemas"]["currency"];
            /** @description Indicate if it's a return shipment */
            is_return?: boolean;
            /**
             * @description Indicates what type of rating to perform
             * @enum {string}
             */
            rate_type?: "check" | "shipment" | "quick";
        };
        /**
         * calculate_rates_response_body
         * @description A rate shipment response body
         */
        calculate_rates_response_body: components["schemas"]["partial_shipment"] & WithRequired<components["schemas"]["rate_response"], "rate_response">;
        /** rate_response */
        rate_response: {
            /** @description The rates response */
            rate_response?: components["schemas"]["rates_information"];
        };
        /**
         * rates_information
         * @description A rates information resource
         */
        rates_information: {
            /** @description An array of shipment rates */
            readonly rates?: (components["schemas"]["rate"] & {
                /** @description Optional attributes that indicate the most profitable rates */
                rate_attributes?: components["schemas"]["rate_attributes"][];
            })[];
            /**
             * @description An array of invalid shipment rates
             * @default []
             */
            readonly invalid_rates?: components["schemas"]["rate"][];
            /** @description A string that uniquely identifies the rate request */
            readonly rate_request_id?: components["schemas"]["se_id"];
            /** @description A string that uniquely identifies the shipment */
            readonly shipment_id?: components["schemas"]["se_id"];
            /** @description When the rate was created */
            readonly created_at?: components["schemas"]["date_time"];
            readonly status?: components["schemas"]["rate_response_status"];
            errors?: components["schemas"]["error"][];
        };
        /**
         * rate
         * @description A rate
         */
        rate: {
            /** @description A string that uniquely identifies the rate */
            readonly rate_id?: (string & components["schemas"]["se_id"]) | null;
            readonly rate_type: components["schemas"]["rate_type"];
            /** @description A string that uniquely identifies the carrier */
            readonly carrier_id: components["schemas"]["se_id"];
            /** @description The shipping amount. Should be added with confirmation_amount, insurance_amount and other_amount to calculate the total purchase price. */
            readonly shipping_amount: components["schemas"]["monetary_value"];
            /** @description The insurance amount.  Should be added with shipping_amount, confirmation_amount and other_amount to calculate the total purchase price. */
            readonly insurance_amount: components["schemas"]["monetary_value"];
            /** @description The confirmation amount.  Should be added with shipping_amount, insurance_amount and other_amount to calculate the total purchase price. */
            readonly confirmation_amount: components["schemas"]["monetary_value"];
            /** @description Any other charges associated with this rate.  Should be added with shipping_amount, insurance_amount and confirmation_amount to calculate the total purchase price. */
            readonly other_amount: components["schemas"]["monetary_value"];
            /** @description The total shipping cost for the specified comparison_rate_type. */
            readonly requested_comparison_amount?: components["schemas"]["monetary_value"];
            /** @description Tariff and additional taxes associated with an international shipment. */
            readonly tax_amount?: components["schemas"]["monetary_value"];
            /** @description A list of rate details that are associated with this rate. This is useful for displaying a breakdown of the rate to the user. */
            readonly rate_details?: components["schemas"]["rate_detail"][];
            /** @description The billable weight assessed by the carrier, based on the weight and dimensions submitted with the rate request. */
            readonly carrier_weight?: components["schemas"]["weight"] | null;
            /** @description The display format for the label this rate would produce. */
            readonly display_scheme?: (string & components["schemas"]["display_scheme_response"]) | null;
            /**
             * Format: int32
             * @description Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
             *     custom zones that vary depending upon the ship_to and ship_from location
             * @example 6
             */
            readonly zone: number | null;
            /**
             * @description package type that this rate was estimated for
             * @example package
             */
            readonly package_type: string | null;
            /**
             * Format: int32
             * @description The number of days estimated for delivery, this will show the _actual_ delivery
             *     time if for example, the package gets shipped on a Friday
             * @example 5
             */
            readonly delivery_days?: number | null;
            /** @description Indicates if the rate is guaranteed. */
            readonly guaranteed_service: boolean;
            readonly estimated_delivery_date?: (string & components["schemas"]["date"]) | null;
            /** @description The carrier delivery days */
            readonly carrier_delivery_days?: string | null;
            /** @description ShipStation's predicted estimated delivery date. */
            readonly delivery_prediction?: components["schemas"]["delivery_prediction"];
            /**
             * Format: date-time
             * @description ship date
             */
            readonly ship_date?: string;
            /** @description Indicates if the rates been negotiated */
            readonly negotiated_rate: boolean;
            /** @description service type */
            readonly service_type: string;
            /** @description service code for the rate */
            readonly service_code: string;
            /** @description Indicates if rate is trackable */
            readonly trackable: boolean;
            /** @description carrier code */
            readonly carrier_code: string;
            /** @description carrier nickname */
            readonly carrier_nickname: string;
            /** @description carrier friendly name */
            readonly carrier_friendly_name: string;
            readonly validation_status: components["schemas"]["validation_status"];
            /** @description The warning messages */
            readonly warning_messages: string[];
            /** @description The error messages */
            readonly error_messages: string[];
        };
        /**
         * rate_type
         * @description The possible rate type values
         * @enum {string}
         */
        rate_type: "check" | "shipment" | "quick";
        /**
         * validation_status
         * @description The possible validation status values
         * @enum {string}
         */
        validation_status: "valid" | "invalid" | "has_warnings" | "unknown";
        /**
         * rate_response_status
         * @description The possible rate response status values
         * @enum {string}
         */
        rate_response_status: "working" | "completed" | "partial" | "error";
        /**
         * compare_bulk_rates_request_body
         * @description A rate shipments request body
         */
        compare_bulk_rates_request_body: ({
            /**
             * @description A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.
             * @example 614940
             */
            ship_to_service_point_id?: string | null;
            /**
             * @description A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.
             * @example 614940
             */
            ship_from_service_point_id?: string | null;
        } & WithRequired<components["schemas"]["rate_request_rate_options"], "rate_options">) & (components["schemas"]["rate_request_by_shipment_ids"] | components["schemas"]["rate_request_by_shipments"]);
        /** rate_request_rate_options */
        rate_request_rate_options: {
            /** @description The rate options */
            rate_options?: components["schemas"]["rate_request_body"];
        };
        /** rate_request_by_shipment_ids */
        rate_request_by_shipment_ids: {
            /** @description The array of shipment IDs */
            shipment_ids: components["schemas"]["se_id"][];
        };
        /** rate_request_by_shipments */
        rate_request_by_shipments: {
            /** @description The array of shipments to get bulk rate estimates for */
            shipments: components["schemas"]["address_validating_shipment"][];
        };
        /**
         * compare_bulk_rates_response_body
         * @description A bulk rate response body
         */
        compare_bulk_rates_response_body: components["schemas"]["bulk_rate"][];
        /**
         * bulk_rate
         * @description A bulk rate
         */
        bulk_rate: {
            /** @description A string that uniquely identifies the rate request */
            readonly rate_request_id: components["schemas"]["se_id"];
            /** @description A string that uniquely identifies the shipment */
            readonly shipment_id: components["schemas"]["se_id"];
            /** Format: date-time */
            readonly created_at: components["schemas"]["date_time"];
            readonly status: components["schemas"]["rate_response_status"];
            /** @description An array of errors that were returned while retrieving the bulk rate */
            readonly errors: components["schemas"]["error"][];
        };
        /**
         * estimate_rates_request_body
         * @description A rate estimate request body
         */
        estimate_rates_request_body: WithRequired<components["schemas"]["rate_estimate_options"], "from_country_code" | "from_postal_code" | "from_city_locality" | "from_state_province" | "to_country_code" | "to_postal_code" | "to_city_locality" | "to_state_province" | "weight" | "ship_date"> & (components["schemas"]["rate_estimate_by_carrier_id"] | components["schemas"]["rate_estimate_by_carrier_ids"]);
        /** rate_estimate_by_carrier_id */
        rate_estimate_by_carrier_id: {
            /**
             * @deprecated
             * @description A string that uniquely identifies the carrier
             */
            carrier_id?: components["schemas"]["se_id"];
        };
        /** rate_estimate_by_carrier_ids */
        rate_estimate_by_carrier_ids: {
            /** @description Array of Carrier Ids */
            carrier_ids?: components["schemas"]["se_id"][];
        };
        /** rate_estimate_options */
        rate_estimate_options: {
            from_country_code?: components["schemas"]["country_code"];
            from_postal_code?: components["schemas"]["postal_code"];
            /**
             * @description from postal code
             * @example Austin
             */
            from_city_locality?: string;
            /**
             * @description From state province
             * @example Austin
             */
            from_state_province?: string;
            to_country_code?: components["schemas"]["country_code"];
            to_postal_code?: components["schemas"]["postal_code"];
            /**
             * @description The city locality the package is being shipped to
             * @example Austin
             */
            to_city_locality?: string;
            /**
             * @description To state province
             * @example Houston
             */
            to_state_province?: string;
            /** @description The weight of the package */
            weight?: components["schemas"]["weight"];
            /** @description The dimensions of the package */
            dimensions?: components["schemas"]["dimensions"];
            confirmation?: components["schemas"]["delivery_confirmation"];
            address_residential_indicator?: components["schemas"]["address_residential_indicator"];
            /** @description ship date */
            ship_date?: components["schemas"]["date_time"];
        };
        /**
         * estimate_rates_response_body
         * @description A rate estimate response body
         */
        estimate_rates_response_body: components["schemas"]["rate_estimate"][];
        /**
         * rate_estimate
         * @description A rate estimate
         */
        rate_estimate: {
            readonly rate_type: components["schemas"]["rate_type"];
            /** @description A string that uniquely identifies the carrier */
            readonly carrier_id: components["schemas"]["se_id"];
            /** @description The shipping amount */
            readonly shipping_amount: components["schemas"]["monetary_value"];
            /** @description The insurance amount */
            readonly insurance_amount: components["schemas"]["monetary_value"];
            /** @description The confirmation amount */
            readonly confirmation_amount: components["schemas"]["monetary_value"];
            /** @description Any other charges associated with this rate */
            readonly other_amount: components["schemas"]["monetary_value"];
            /** @description Tariff and additional taxes associated with an international shipment. */
            readonly tax_amount?: components["schemas"]["monetary_value"];
            /**
             * Format: int32
             * @description Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of
             *     custom zones that vary depending upon the ship_to and ship_from location
             * @example 6
             */
            readonly zone: number | null;
            /**
             * @description package type that this rate was estimated for
             * @example package
             */
            readonly package_type: string | null;
            /**
             * Format: int32
             * @description The number of days estimated for delivery, this will show the _actual_ delivery
             *     time if for example, the package gets shipped on a Friday
             * @example 5
             */
            readonly delivery_days?: number | null;
            /** @description Indicates if the rate is guaranteed. */
            readonly guaranteed_service: boolean;
            readonly estimated_delivery_date?: (string & components["schemas"]["date"]) | null;
            /** @description The carrier delivery days */
            readonly carrier_delivery_days?: string | null;
            /** @description ShipStation's predicted estimated delivery date. */
            readonly delivery_prediction?: components["schemas"]["delivery_prediction"];
            /**
             * Format: date-time
             * @description ship date
             */
            readonly ship_date?: string;
            /** @description Indicates if the rates been negotiated */
            readonly negotiated_rate: boolean;
            /** @description service type */
            readonly service_type: string;
            /** @description service code for the rate */
            readonly service_code: string;
            /** @description Indicates if rate is trackable */
            readonly trackable: boolean;
            /** @description A shipping carrier, such as `fedex`, `dhl_express`, `stamps_com`, etc. */
            readonly carrier_code: string;
            /** @description carrier nickname */
            readonly carrier_nickname: string;
            /** @description carrier friendly name */
            readonly carrier_friendly_name: string;
            readonly validation_status: components["schemas"]["validation_status"];
            /** @description The warning messages */
            readonly warning_messages: string[];
            /** @description The error messages */
            readonly error_messages: string[];
            /** @description Optional attributes that indicate the most profitable rates */
            rate_attributes?: components["schemas"]["rate_attributes"][];
        };
        /**
         * get_rate_by_id_response_body
         * @description A rate response body
         */
        get_rate_by_id_response_body: components["schemas"]["rates_information"];
        /** get_service_points_request */
        get_service_points_request: components["schemas"]["get_service_points_request_body"];
        /**
         * get_service_points_request_body
         * @description A get service points request body. Caller must provide exactly one of address_query, address, or lat / long pair.
         */
        get_service_points_request_body: {
            /**
             * @description Unstructured text to search for service points by.
             * @example 177A Bleecker Street New York
             */
            address_query?: string;
            /** @description Structured address to search by. */
            address?: {
                /**
                 * @description The first line of the street address. For some addresses, this may be the only line. Other addresses may require 2 or 3 lines.
                 * @example 1999 Bishop Grandin Blvd.
                 */
                address_line1?: string;
                address_line2?: string;
                address_line3?: string;
                /** @description The name of the city or locality */
                city_locality?: string;
                /** @description The state or province. For some countries (including the U.S.) only abbreviations are allowed. Other countries allow the full name or abbreviation. */
                state_province?: string;
                postal_code?: components["schemas"]["postal_code"];
                country_code: components["schemas"]["country_code"];
            };
            /** @description An array of shipping service providers and service codes */
            providers: {
                /**
                 * @description Uniquely identifies a carrier connection
                 * @example se-123456
                 */
                carrier_id?: string;
                service_code?: string[];
            }[];
            /**
             * Format: double
             * @description The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html
             * @example 48.874518928233094
             */
            lat?: number;
            /**
             * Format: double
             * @description The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html
             * @example 2.3591775711639404
             */
            long?: number;
            /**
             * Format: int32
             * @description Search radius in kilometers
             * @example 500
             */
            radius?: number;
            /**
             * Format: int32
             * @description The maximum number of service points to return
             * @example 25
             */
            max_results?: number;
            /** @description Shipment information to be used for service point selection */
            shipment?: {
                /** @description Shipment total weight */
                total_weight?: components["schemas"]["weight"];
                /** @description An array of package dimensions */
                packages?: {
                    /** @description The package dimensions */
                    dimensions?: components["schemas"]["dimensions"];
                }[];
            };
        };
        /**
         * list_service_points_response_body
         * @description A list service points response body
         */
        list_service_points_response_body: {
            /**
             * Format: double
             * @description The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html
             * @example 48.842608
             */
            lat?: number;
            /**
             * Format: double
             * @description The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html
             * @example 0.032875
             */
            long?: number;
            service_points?: {
                carrier_code?: components["schemas"]["carrier_code"];
                service_codes?: string[];
                /**
                 * @description A unique identifier for a carrier drop off point.
                 * @example 614940
                 */
                service_point_id?: string;
                /**
                 * @description If this is a business address, then the company name should be specified here.
                 * @example My fancy company name
                 */
                company_name?: string;
                /**
                 * @description The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
                 * @example PLACE DU CANADA
                 */
                address_line1?: string;
                /**
                 * @description The name of the city or locality
                 * @example TRUN
                 */
                city_locality?: string;
                /**
                 * @description The state or province. For some countries (including the U.S.) only abbreviations are allowed. Other countries allow the full name or abbreviation.
                 * @example TRUN
                 */
                state_province?: string;
                postal_code?: components["schemas"]["postal_code"];
                country_code?: components["schemas"]["country_code"];
                /**
                 * @description Phone number associated
                 * @example 555-555-5555
                 */
                phone_number?: string;
                /**
                 * Format: double
                 * @description The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html
                 * @example 48.842608
                 */
                lat?: number;
                /**
                 * Format: double
                 * @description The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html
                 * @example 0.032875
                 */
                long?: number;
                /**
                 * Format: double
                 * @description Distance in meters
                 * @example 728.9959308847579
                 */
                distance_in_meters?: number;
                /** @description Hours of operation */
                hours_of_operation?: {
                    monday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    tuesday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    wednesday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    thursday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    friday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    saturday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    sunday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                };
                /** @description Service features */
                features?: ("drop_off_point" | "pickup_point" | "print_services" | "after_hours_locker" | "after_hours_dropbox")[];
                /**
                 * @description Service point type
                 * @default pudo
                 * @enum {string}
                 */
                type?: "pudo" | "locker";
            }[];
            /** @description The errors associated with the failed API call */
            readonly errors?: components["schemas"]["error"][];
        };
        /**
         * get_service_point_by_id_response_body
         * @description A get service point by ID response body
         */
        get_service_point_by_id_response_body: {
            service_point?: {
                carrier_code?: components["schemas"]["carrier_code"];
                service_codes?: string[];
                /**
                 * @description A unique identifier for a carrier drop off point.
                 * @example 614940
                 */
                service_point_id?: string;
                /**
                 * @description If this is a business address, then the company name should be specified here.
                 * @example My fancy company name
                 */
                company_name?: string;
                /**
                 * @description The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
                 * @example PLACE DU CANADA
                 */
                address_line1?: string;
                /**
                 * @description The name of the city or locality
                 * @example TRUN
                 */
                city_locality?: string;
                /**
                 * @description The state or province. For some countries (including the U.S.) only abbreviations are allowed. Other countries allow the full name or abbreviation.
                 * @example TRUN
                 */
                state_province?: string;
                postal_code?: components["schemas"]["postal_code"];
                country_code?: components["schemas"]["country_code"];
                /**
                 * @description Phone number associated
                 * @example 555-555-5555
                 */
                phone_number?: string;
                /**
                 * Format: double
                 * @description The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html
                 * @example 48.842608
                 */
                lat?: number;
                /**
                 * Format: double
                 * @description The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html
                 * @example 0.032875
                 */
                long?: number;
                /** @description Hours of operation */
                hours_of_operation?: {
                    monday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    tuesday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    wednesday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    thursday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    friday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    saturday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                    sunday?: {
                        /**
                         * @description Opening time
                         * @example 09:15
                         */
                        open?: string;
                        /**
                         * @description Closing time
                         * @example 12:00
                         */
                        close?: string;
                    }[];
                };
                /** @description Service features */
                features?: ("drop_off_point" | "pickup_point" | "print_services" | "after_hours_locker" | "after_hours_dropbox")[];
                /**
                 * @description Service point type
                 * @default pudo
                 * @enum {string}
                 */
                type?: "pudo" | "locker";
            };
        };
        /**
         * shipments_sort_by
         * @description The possible shipments sort by values
         * @enum {string}
         */
        shipments_sort_by: "modified_at" | "created_at";
        /**
         * list_shipments_response_body
         * @description A list shipment response body
         */
        list_shipments_response_body: {
            /** @description The list of shipments returned by the api call */
            readonly shipments: components["schemas"]["shipment"][];
            /**
             * Format: int64
             * @description Total number of shipments returned by the api call
             * @example 1990
             */
            readonly total: number;
            /**
             * Format: int32
             * @example 1
             */
            readonly page: number;
            /** Format: int32 */
            readonly pages: number;
            readonly links: components["schemas"]["pagination_link"];
        };
        /**
         * create_shipments_request_body
         * @description A create shipments request body
         */
        create_shipments_request_body: {
            /** @description An array of shipments to be created. */
            shipments: components["schemas"]["address_validating_shipment"][];
        };
        /**
         * create_shipments_response_body
         * @description A create shipments response body
         */
        create_shipments_response_body: {
            /**
             * @description Indicates if errors occured while creating the shipments
             * @default false
             */
            has_errors: boolean;
            /** @description An array of shipments that were created. */
            shipments: components["schemas"]["create_and_validate_shipment"][];
        };
        /**
         * create_and_validate_shipment
         * @description A create and validate shipment resource
         */
        create_and_validate_shipment: components["schemas"]["partial_shipment"] & components["schemas"]["create_shipment_response_body_fields"];
        /** create_shipment_response_body_fields */
        create_shipment_response_body_fields: {
            /**
             * @deprecated
             * @description An array of errors that occurred while creating shipment.
             */
            readonly errors?: string[];
            /** @description The address validation */
            address_validation?: components["schemas"]["address_validation_result"];
        };
        /**
         * get_shipment_by_external_id_response_body
         * @description A get shipment by external id response body
         */
        get_shipment_by_external_id_response_body: components["schemas"]["shipment"];
        /**
         * parse_shipment_request_body
         * @description The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
         */
        parse_shipment_request_body: {
            /**
             * @description The unstructured text that contains shipping-related entities
             * @example I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.
             */
            text: string;
            /** @description You can optionally provide a `shipment` object containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use. */
            shipment?: components["schemas"]["partial_shipment"];
        };
        /**
         * parse_shipment_response_body
         * @description The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
         */
        parse_shipment_response_body: {
            /**
             * Format: double
             * @description A confidence score between zero and one that indicates how certain the API is that it understood the text.
             */
            score: number;
            /**
             * @description The parsed shipment.  This shipment may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.
             *
             *     > **Note:** The shipment-recognition API does not currently perform any validation of the parsed addresses, so we recommend that you use the address-validation API to ensure that the addresses are correct.
             */
            shipment: components["schemas"]["partial_shipment"];
            /** @description All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, a carrier name, or a package weight.  Each entity includes the original text and the parsed value. */
            entities: components["schemas"]["recognized_entity"][];
        };
        /**
         * get_shipment_by_id_response_body
         * @description A get shipment by id response body
         */
        get_shipment_by_id_response_body: components["schemas"]["shipment"];
        /**
         * update_shipment_request_body
         * @description An update shipment request body
         */
        update_shipment_request_body: WithRequired<components["schemas"]["partial_shipment"], "ship_to" | "ship_from"> & components["schemas"]["update_shipment_fields"];
        /** update_shipment_fields */
        update_shipment_fields: {
            /** @default no_validation */
            validate_address?: components["schemas"]["validate_address"];
        };
        /**
         * update_shipment_response_body
         * @description An update shipment response body
         */
        update_shipment_response_body: components["schemas"]["create_and_validate_shipment"];
        /**
         * assign_user_request_body
         * @description A request body for assigning a user to shipments
         */
        assign_user_request_body: {
            /**
             * @description Array of shipment IDs to assign the user to
             * @example [
             *       "se-202902255",
             *       "se-202902256"
             *     ]
             */
            shipment_ids: components["schemas"]["se_id"][];
            /**
             * Format: uuid
             * @description The ID of the user to assign to the shipments
             * @example a2df9fa5-b7ee-467f-be4e-9c660542c187
             */
            user_id: string;
        };
        /**
         * assign_user_response_body
         * @description A response body for assigning a user to shipments
         */
        assign_user_response_body: {
            /**
             * @description Array of shipment IDs that were assigned to the user
             * @example [
             *       "se-202902255",
             *       "se-202902256"
             *     ]
             */
            shipment_ids?: components["schemas"]["se_id"][];
            /**
             * Format: uuid
             * @description The ID of the user assigned to the shipments
             * @example a2df9fa5-b7ee-467f-be4e-9c660542c187
             */
            user_id?: string;
        };
        /**
         * hold_shipment_request_body
         * @description A request body for holding a shipment
         */
        hold_shipment_request_body: {
            /**
             * Format: date
             * @description The date to hold the shipment until. This is a date-only value — you can send a
             *     plain `YYYY-MM-DD` date, and any time component is ignored. The date must be
             *     later than today.
             * @example 2026-10-15
             */
            hold_until_date: string;
        };
        /**
         * hold_shipment_response_body
         * @description A response body for holding a shipment
         */
        hold_shipment_response_body: {
            /**
             * @description The ID of the shipment that was put on hold
             * @example se-202902255
             */
            shipment_id?: components["schemas"]["se_id"];
            /**
             * Format: date-time
             * @description The date the shipment is held until, returned at midnight
             * @example 2026-10-15T00:00:00Z
             */
            hold_until_date?: string;
        };
        /**
         * restore_shipment_response_body
         * @description A response body for restoring a shipment that is on hold
         */
        restore_shipment_response_body: {
            /**
             * @description The ID of the shipment that was restored
             * @example se-202902255
             */
            shipment_id?: components["schemas"]["se_id"];
        };
        /**
         * hold_shipments_request_body
         * @description A request body for holding one or more shipments
         */
        hold_shipments_request_body: {
            /**
             * @description Array of shipment IDs to hold
             * @example [
             *       "se-202902255",
             *       "se-202902256"
             *     ]
             */
            shipment_ids: components["schemas"]["se_id"][];
            /**
             * Format: date
             * @description The date to hold the shipments until. This is a date-only value — you can send a
             *     plain `YYYY-MM-DD` date, and any time component is ignored. The date must be
             *     later than today.
             * @example 2026-10-15
             */
            hold_until_date: string;
        };
        /**
         * hold_shipments_response_body
         * @description A response body for holding one or more shipments
         */
        hold_shipments_response_body: {
            /**
             * @description Array of shipment IDs that were put on hold
             * @example [
             *       "se-202902255",
             *       "se-202902256"
             *     ]
             */
            shipment_ids?: components["schemas"]["se_id"][];
            /**
             * Format: date-time
             * @description The date the shipments are held until, returned at midnight. Absent when no shipment was held.
             * @example 2026-10-15T00:00:00Z
             */
            hold_until_date?: string;
            /** @description The shipments that could not be held, with the reason for each. Empty when every shipment was processed. */
            readonly errors?: components["schemas"]["error"][];
            /**
             * @description A UUID that uniquely identifies the request id.
             *     This can be given to the support team to help debug non-trivial issues that may occur
             */
            request_id?: components["schemas"]["uuid"];
        };
        /**
         * restore_shipments_request_body
         * @description A request body for restoring one or more shipments that are on hold
         */
        restore_shipments_request_body: {
            /**
             * @description Array of shipment IDs to restore
             * @example [
             *       "se-202902255",
             *       "se-202902256"
             *     ]
             */
            shipment_ids: components["schemas"]["se_id"][];
        };
        /**
         * restore_shipments_response_body
         * @description A response body for restoring one or more shipments that are on hold
         */
        restore_shipments_response_body: {
            /**
             * @description Array of shipment IDs that were restored
             * @example [
             *       "se-202902255",
             *       "se-202902256"
             *     ]
             */
            shipment_ids?: components["schemas"]["se_id"][];
            /** @description The shipments that could not be restored, with the reason for each. Empty when every shipment was processed. */
            readonly errors?: components["schemas"]["error"][];
            /**
             * @description A UUID that uniquely identifies the request id.
             *     This can be given to the support team to help debug non-trivial issues that may occur
             */
            request_id?: components["schemas"]["uuid"];
        };
        /**
         * split_shipment_request_body
         * @description A request body for splitting a shipment into one or more new shipments
         */
        split_shipment_request_body: {
            /**
             * @description The new shipments to create. Each entry creates one new shipment that holds the listed items.
             *     Items and quantities that you don't list stay on the original shipment.
             */
            shipments: {
                /** @description The items to move from the original shipment into this new shipment */
                items: {
                    /**
                     * @description The `item_id` of an item on the original shipment, from the `items` array returned by
                     *     [Get shipment by id](#operation/get_shipment_by_id). Each item can be listed only once
                     *     in the same new shipment.
                     * @example 1402291169813
                     */
                    item_id: string;
                    /**
                     * Format: int32
                     * @description The number of units of the item to move into the new shipment. Across all new
                     *     shipments, the total for an item can't be more than the quantity on the original shipment.
                     * @example 1
                     */
                    quantity: number;
                }[];
            }[];
        };
        /**
         * split_shipment_response_body
         * @description A response body for splitting a shipment
         */
        split_shipment_response_body: {
            /**
             * @description The original shipment, which keeps the items that weren't moved
             * @example se-202902255
             */
            shipment_id?: components["schemas"]["se_id"];
            /**
             * @description The new shipments, in the same order as the `shipments` array in the request
             * @example [
             *       "se-202902301"
             *     ]
             */
            new_shipment_ids?: components["schemas"]["se_id"][];
        };
        /**
         * merge_shipments_request_body
         * @description A request body for merging shipments into a shipment
         */
        merge_shipments_request_body: {
            /**
             * @description The shipments to merge into the shipment in the URL. At least one of them must be a shipment other
             *     than the one in the URL.
             * @example [
             *       "se-202902301",
             *       "se-202902302"
             *     ]
             */
            shipment_ids: components["schemas"]["se_id"][];
        };
        /**
         * merge_shipments_response_body
         * @description A response body for merging shipments
         */
        merge_shipments_response_body: {
            /**
             * @description The shipment that now holds all of the items
             * @example se-202902255
             */
            shipment_id?: components["schemas"]["se_id"];
            /**
             * @description The shipments that were merged in. These shipments have been deleted.
             * @example [
             *       "se-202902301",
             *       "se-202902302"
             *     ]
             */
            merged_shipment_ids?: components["schemas"]["se_id"][];
        };
        /**
         * list_shipment_rates_response_body
         * @description A list shipment rates response body
         */
        list_shipment_rates_response_body: WithRequired<components["schemas"]["rates_information"], "rates" | "invalid_rates" | "rate_request_id" | "shipment_id" | "created_at" | "status" | "errors">;
        /**
         * update_shipments_tags_request_body
         * @description A request body with shipments and tags
         */
        update_shipments_tags_request_body: components["schemas"]["update_shipments_tags"];
        /**
         * update_shipments_tags
         * @example {
         *       "shipments_tags": [
         *         {
         *           "shipment_id": "se-1014296",
         *           "tags": [
         *             "Fragile",
         *             "International"
         *           ]
         *         },
         *         {
         *           "shipment_id": "se-1014297",
         *           "tags": [
         *             "Fragile",
         *             "International"
         *           ]
         *         }
         *       ]
         *     }
         */
        update_shipments_tags: {
            shipments_tags?: {
                shipment_id?: string;
                tags?: string[];
            }[];
        };
        /**
         * tag_shipment_response_body
         * @description Get shipment tags response body
         */
        tag_shipment_response_body: {
            tags: components["schemas"]["tag_name"][];
        };
        /**
         * tag_name
         * @description Tags are arbitrary strings that you can use to categorize shipments. For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.
         * @example Fragile
         */
        tag_name: string;
        /**
         * list_tags_response_body
         * @description Response body from a successful GET /tags API call
         */
        list_tags_response_body: {
            /** @description The array of tags returned by the API call */
            tags?: components["schemas"]["tag"][];
        };
        /**
         * create_tag_request_body
         * @description A create tag request body
         */
        create_tag_request_body: {
            /**
             * @description The tag name.
             * @example Fragile
             */
            name: string;
            /**
             * @description A hex-coded string identifying the color of the tag.
             * @example #FF0000
             */
            color?: string;
        };
        /**
         * create_tag_response_body
         * @description Response body for creating tags
         */
        create_tag_response_body: components["schemas"]["tag"];
        /**
         * redirect
         * @description The resource to return a redirect URL to.
         * @enum {string}
         */
        redirect: "shipengine-dashboard";
        /** tokens_get_ephemeral_token_response_body.yaml */
        "tokens_get_ephemeral_token_response_body.yaml": {
            /** @description The requested token that expires in 10 seconds. */
            token?: string;
            /** @description The redirect url formatted with the requested token. */
            redirect_url?: string;
        };
        /**
         * get_tracking_log_response_body
         * @description A get tracking log response body
         */
        get_tracking_log_response_body: WithRequired<components["schemas"]["tracking_information"], "tracking_number" | "tracking_url" | "status_code" | "carrier_code" | "carrier_id" | "carrier_detail_code" | "carrier_status_code" | "events">;
        /**
         * list_warehouses_response_body
         * @description A warehouse list response body
         */
        list_warehouses_response_body: {
            /** @description The array of warehouses returned by the API call */
            readonly warehouses: components["schemas"]["warehouse"][];
        };
        /**
         * warehouse
         * @description A warehouse
         */
        warehouse: {
            /** @description A string that uniquely identifies the warehouse */
            readonly warehouse_id?: components["schemas"]["se_id"];
            /**
             * @description Designates which single warehouse is the default on the account
             * @default false
             */
            is_default?: boolean | null;
            /**
             * @description Name of the warehouse
             * @example Zero Cool HQ
             */
            name?: string;
            /**
             * Format: date-time
             * @description Timestamp that indicates when the warehouse was created
             * @example 2019-06-25T18:12:35.583Z
             */
            readonly created_at?: string;
            /** @description The origin address of the warehouse */
            origin_address?: components["schemas"]["address"];
            /** @description The return address associated with the warehouse */
            return_address?: components["schemas"]["address"];
        };
        /**
         * create_warehouse_request_body
         * @description A create warehouse request body
         */
        create_warehouse_request_body: WithRequired<components["schemas"]["warehouse"], "name" | "origin_address">;
        /**
         * create_warehouse_response_body
         * @description A create warehouse response body
         */
        create_warehouse_response_body: WithRequired<components["schemas"]["warehouse"], "warehouse_id" | "name" | "created_at" | "origin_address" | "return_address">;
        /**
         * get_warehouse_by_id_response_body
         * @description A get warehouse by id response body
         */
        get_warehouse_by_id_response_body: WithRequired<components["schemas"]["warehouse"], "warehouse_id" | "name" | "created_at" | "origin_address" | "return_address">;
        /**
         * update_warehouse_request_body
         * @description An update warehouse request body
         */
        update_warehouse_request_body: WithRequired<components["schemas"]["warehouse"], "name" | "origin_address">;
        /**
         * update_warehouse_settings_request_body
         * @description An update warehouse settings request body
         */
        update_warehouse_settings_request_body: {
            /**
             * @description The default property on the warehouse.
             * @example true
             */
            is_default?: boolean | null;
        };
        /**
         * manufacturer_product_identifier_type
         * @description The type of manufacturer product identifier. GTIN (Global Trade Item Number), EAN (European Article Number), ISBN (International Standard Book Number), UPC (Universal Product Code), MPN (Manufacturer Part Number), SKU (Stock Keeping Unit). Use `undefined` when the specific identifier type is not defined in this list.
         * @enum {string}
         */
        manufacturer_product_identifier_type: "undefined" | "gtin" | "ean" | "isbn" | "upc" | "mpn" | "sku";
        /**
         * cpsc_certificate
         * @description A US Consumer Product Safety Commission (CPSC) eFiling certificate associated with a product in the shipment.
         */
        cpsc_certificate: {
            /**
             * @description Unique identifier assigned to the certifier by the CPSC.
             * @example CERT-12345
             */
            certifier_id?: string;
            /**
             * @description The version identifier of the CPSC certificate.
             * @example v1.0
             */
            certificate_version_id?: string;
        };
        /**
         * checkout_rates_service_selection
         * @description A carrier and service pairing used by `live_rate` and `local_delivery` delivery options. Both fields are required for each entry.
         */
        checkout_rates_service_selection: {
            /**
             * @description The ID of a carrier connected to your account, in the format `se-` followed by digits (for example, `se-1234567`). A value that does not match this format is rejected with a validation error, and a well-formed ID that is not connected to your account is rejected as an invalid identifier.
             * @example se-1234567
             */
            carrier_id: string;
            /**
             * @description The service code of the carrier service to rate (for example, `usps_priority_mail`). Required for each service; a service code that is not available for the carrier is rejected as an invalid identifier.
             * @example usps_priority_mail
             */
            service_code: string;
        };
        /**
         * checkout_rates_dimensions_by_weight
         * @description A default package size to apply to carts whose total weight is at or below `max_weight`. Used when the configuration calculates live rates without explicit package dimensions.
         */
        checkout_rates_dimensions_by_weight: {
            /** @description The upper weight bound this default package applies to. */
            max_weight?: components["schemas"]["weight"];
            /** @description The default package dimensions to use for carts within this weight bound. */
            default_dimensions?: components["schemas"]["dimensions"];
        };
        /**
         * checkout_rates_shared_settings
         * @description Settings shared by every delivery option in a configuration, controlling how live rates are calculated.
         */
        checkout_rates_shared_settings: {
            /**
             * @description How package dimensions are determined when calculating live rates. `by_volume` derives a package size from the cart; `skip_dimensions` rates without dimensions.
             * @example by_volume
             * @enum {string}
             */
            calculation_method?: "by_volume" | "skip_dimensions";
            /** @description Default package dimensions applied to carts by weight bound. */
            dimensions_by_weight?: components["schemas"]["checkout_rates_dimensions_by_weight"][];
        };
        /**
         * checkout_rates_option_request_body
         * @description The configuration of a single delivery option. The fields that apply depend on `type`:
         *
         *     - `live_rate` and `local_delivery` use `services` (and may apply `fee_mode`/`fee_percentage`); `live_rate` may also define a `fallback_mode`.
         *     - `flat_rate` uses `amount`/`currency`.
         *     - `free` requires no additional fields.
         */
        checkout_rates_option_request_body: {
            /**
             * @description The display name of the delivery option. Must be unique within the configuration.
             * @example Standard Shipping
             */
            name: string;
            /**
             * @description The kind of delivery option.
             * @example live_rate
             * @enum {string}
             */
            type: "live_rate" | "flat_rate" | "free" | "local_delivery";
            /** @description The carrier/service pairings to rate. Applies to `live_rate` and `local_delivery` options. */
            services?: components["schemas"]["checkout_rates_service_selection"][];
            /**
             * @description Whether the fee defined by `fee_percentage` is added to or subtracted from the carrier rate. Omit for a pass-through rate.
             * @example add
             * @enum {string}
             */
            fee_mode?: "add" | "subtract";
            /**
             * @description The percentage of the carrier rate to add or subtract, according to `fee_mode`.
             * @example 10
             */
            fee_percentage?: number;
            /**
             * @description The position of this option relative to the others in the configuration, ascending.
             * @example 0
             */
            sort_index?: number;
            /**
             * @description What to show when live rates cannot be retrieved. `dont_show` hides the option; `flat_rate` shows `fallback_rate_amount`/`fallback_rate_currency`; `cart_percentage` shows `fallback_percentage` of the cart total.
             * @example flat_rate
             * @enum {string}
             */
            fallback_mode?: "dont_show" | "flat_rate" | "cart_percentage";
            /**
             * @description The fixed fallback price, when `fallback_mode` is `flat_rate`.
             * @example 5
             */
            fallback_rate_amount?: number;
            /**
             * @description The currency of `fallback_rate_amount`.
             * @example USD
             */
            fallback_rate_currency?: string;
            /**
             * @description The percentage of the cart total to charge, when `fallback_mode` is `cart_percentage`.
             * @example 5
             */
            fallback_percentage?: number;
            /**
             * @description The fixed price for a `flat_rate` option.
             * @example 4.99
             */
            amount?: number;
            /**
             * @description The currency of `amount`.
             * @example USD
             */
            currency?: string;
        };
        /**
         * checkout_rates_option_response_body
         * @description A delivery option belonging to a checkout rates configuration.
         */
        checkout_rates_option_response_body: {
            /**
             * @description The unique identifier of the delivery option.
             * @example 100001
             */
            readonly option_id?: number;
            /**
             * @description The identifier of the configuration this option belongs to.
             * @example a1b2c3d4-e5f6-7890-abcd-ef1234567890
             */
            readonly config_id?: string;
            /**
             * @description The display name of the delivery option.
             * @example Standard Shipping
             */
            name?: string;
            /**
             * @description The kind of delivery option.
             * @example live_rate
             * @enum {string}
             */
            type?: "live_rate" | "flat_rate" | "free" | "local_delivery";
            /** @description The carrier/service pairings rated by this option, when applicable. */
            services?: components["schemas"]["checkout_rates_service_selection"][];
            /**
             * @description Whether `fee_percentage` is added to or subtracted from the carrier rate.
             * @example add
             * @enum {string}
             */
            fee_mode?: "add" | "subtract";
            /**
             * @description The percentage of the carrier rate added or subtracted, according to `fee_mode`.
             * @example 10
             */
            fee_percentage?: number;
            /**
             * @description The position of this option relative to the others in the configuration, ascending.
             * @example 0
             */
            sort_index?: number;
            /**
             * @description What is shown when live rates cannot be retrieved.
             * @example flat_rate
             * @enum {string}
             */
            fallback_mode?: "dont_show" | "flat_rate" | "cart_percentage";
            /**
             * @description The fixed fallback price, when `fallback_mode` is `flat_rate`.
             * @example 5
             */
            fallback_rate_amount?: number;
            /**
             * @description The currency of `fallback_rate_amount`.
             * @example USD
             */
            fallback_rate_currency?: string;
            /**
             * @description The percentage of the cart total charged, when `fallback_mode` is `cart_percentage`.
             * @example 5
             */
            fallback_percentage?: number;
            /**
             * @description The fixed price for a `flat_rate` option.
             * @example 0
             */
            amount?: number;
            /**
             * @description The currency of `amount`.
             * @example USD
             */
            currency?: string;
            /**
             * @description Whether the option is active and shown at checkout.
             * @example true
             */
            readonly is_active?: boolean;
            /**
             * Format: date-time
             * @description When the option was created.
             * @example 2026-05-15T18:30:00Z
             */
            readonly created_at?: string;
        };
        /**
         * create_checkout_rates_config_request_body
         * @description The configuration to create, including its initial delivery options and shared settings.
         */
        create_checkout_rates_config_request_body: {
            /** @description The delivery options to create with the configuration. */
            options?: components["schemas"]["checkout_rates_option_request_body"][];
            /** @description Settings shared by every option in the configuration. */
            shared_settings?: components["schemas"]["checkout_rates_shared_settings"];
        };
        /**
         * checkout_rates_config_response_body
         * @description A checkout rates configuration with its delivery options and shared settings.
         */
        checkout_rates_config_response_body: {
            /**
             * @description The unique identifier of the configuration.
             * @example a1b2c3d4-e5f6-7890-abcd-ef1234567890
             */
            readonly config_id?: string;
            /** @description The delivery options in the configuration. */
            options?: components["schemas"]["checkout_rates_option_response_body"][];
            /** @description Settings shared by every option in the configuration. */
            shared_settings?: components["schemas"]["checkout_rates_shared_settings"];
            /**
             * Format: date-time
             * @description When the configuration was created.
             * @example 2026-05-15T18:30:00Z
             */
            readonly created_at?: string;
        };
        /**
         * checkout_rates_config_summary
         * @description An identifying summary of a checkout rates configuration, as returned when listing configurations.
         */
        checkout_rates_config_summary: {
            /**
             * @description The unique identifier of the configuration.
             * @example a1b2c3d4-e5f6-7890-abcd-ef1234567890
             */
            readonly config_id?: string;
            /**
             * @description Whether the configuration is active.
             * @example true
             */
            readonly is_active?: boolean;
            /**
             * Format: date-time
             * @description When the configuration was created.
             * @example 2026-05-15T18:30:00Z
             */
            readonly created_at?: string;
        };
        /**
         * list_checkout_rates_configs_response_body
         * @description The checkout rates configurations on the account.
         */
        list_checkout_rates_configs_response_body: components["schemas"]["checkout_rates_config_summary"][];
        /**
         * checkout_rates_ship_to
         * @description The destination address to calculate rates for.
         */
        checkout_rates_ship_to: {
            /**
             * @description The kind of address, when known (for example, `residential` or `commercial`).
             * @example residential
             */
            address_type?: string;
            /**
             * @description The first line of the street address.
             * @example 525 S Winchester Blvd
             */
            address_line1?: string;
            /**
             * @description The second line of the street address, when applicable.
             * @example Suite 200
             */
            address_line2?: string;
            /**
             * @description The third line of the street address, when applicable.
             * @example Apt 12
             */
            address_line3?: string;
            /**
             * @description The city or locality.
             * @example San Jose
             */
            city_locality?: string;
            /**
             * @description The state or province.
             * @example CA
             */
            state_province?: string;
            /**
             * @description The postal code.
             * @example 95128
             */
            postal_code?: string;
            /**
             * @description The ISO 3166-1 alpha-2 country code.
             * @example US
             */
            country_code?: string;
        };
        /**
         * checkout_rates_ship_from
         * @description The origin address to calculate rates from. When this address is omitted, rates are calculated from the origin on the account's registration.
         *
         *     The origin applies to `live_rate` and `local_delivery` options. Pickup point options are unaffected.
         */
        checkout_rates_ship_from: {
            /**
             * @description The kind of address, when known (for example, `residential` or `commercial`). Treated as unknown when omitted.
             * @example commercial
             */
            address_type?: string;
            /**
             * @description The first line of the street address.
             * @example 500 Warehouse Rd
             */
            address_line1?: string;
            /**
             * @description The second line of the street address, when applicable.
             * @example Dock 4
             */
            address_line2?: string;
            /**
             * @description The third line of the street address, when applicable.
             * @example Bay 9
             */
            address_line3?: string;
            /**
             * @description The city or locality.
             * @example Austin
             */
            city_locality?: string;
            /**
             * @description The state or province.
             * @example TX
             */
            state_province?: string;
            /**
             * @description The postal code. Required when `ship_from` is supplied.
             * @example 78702
             */
            postal_code: string;
            /**
             * @description The ISO 3166-1 alpha-2 country code. Required when `ship_from` is supplied.
             * @example US
             */
            country_code: string;
        };
        /**
         * checkout_rates_item
         * @description A line item in the cart being rated.
         */
        checkout_rates_item: {
            /**
             * @description The name of the item.
             * @example T-Shirt
             */
            name?: string;
            /**
             * @description The number of units of the item in the cart.
             * @example 2
             */
            quantity?: number;
            /**
             * @description The stock keeping unit (SKU) of the item.
             * @example SKU-1234
             */
            sku?: string;
            /**
             * @description The unit price of the item.
             * @example 19.99
             */
            price?: number;
            /** @description The weight of a single unit of the item. */
            weight?: components["schemas"]["weight"];
            /** @description The dimensions of a single unit of the item. */
            dimensions?: components["schemas"]["dimensions"];
        };
        /**
         * calculate_checkout_rates_request_body
         * @description The destination and cart contents to calculate checkout rates for, and optionally the origin to calculate them from.
         */
        calculate_checkout_rates_request_body: {
            /** @description The origin to calculate rates from. Optional; when omitted, the origin comes from the account's registration. */
            ship_from?: components["schemas"]["checkout_rates_ship_from"];
            /** @description The destination address. */
            ship_to: components["schemas"]["checkout_rates_ship_to"];
            /** @description The items in the cart. */
            items: components["schemas"]["checkout_rates_item"][];
            /**
             * @description The currency to return rates in.
             * @example USD
             */
            currency?: string;
        };
        /**
         * checkout_rates_rate_option
         * @description A single rate returned for a delivery option. Each rate is an individually retrievable quote identified by its own `quote_id`.
         */
        checkout_rates_rate_option: {
            /**
             * @description The unique identifier of this rate's quote. Use it to retrieve the quote later with [Get a checkout rate quote](#operation/get_checkout_rates_quote).
             * @example f1a2b3c4-d5e6-7890-abcd-ef1234567890
             */
            readonly quote_id?: string;
            /**
             * @description The identifier of the delivery option this rate was produced for.
             * @example 100001
             */
            readonly option_id?: number;
            /**
             * @description The display name of the delivery option.
             * @example Standard Shipping
             */
            readonly option_name?: string;
            /**
             * @description The delivery option type this rate corresponds to (for example, `live_rate` or `free`).
             * @example live_rate
             * @enum {string}
             */
            readonly type?: "live_rate" | "flat_rate" | "free" | "local_delivery";
            /**
             * @description The carrier this rate is for. `null` for options without a carrier (for example, `free`).
             * @example se-1234567
             */
            readonly carrier_id?: string | null;
            /**
             * @description The carrier service this rate is for. `null` for options without a carrier service.
             * @example usps_priority_mail
             */
            readonly service_code?: string | null;
            /**
             * @description The price shown to the buyer after fees or fallbacks are applied.
             * @example 10.69
             */
            readonly final_amount?: number;
            /**
             * @description The currency of `final_amount`.
             * @example USD
             */
            readonly currency?: string;
            /**
             * @description The carrier's estimated number of days in transit, when available.
             * @example 2
             */
            readonly estimated_delivery_days?: number | null;
            /**
             * Format: date-time
             * @description The carrier's estimated delivery date, when available.
             * @example 2026-06-26T00:00:00Z
             */
            readonly estimated_delivery_date?: string | null;
            /** @description ShipStation's predicted delivery date for this rate. */
            readonly delivery_prediction?: components["schemas"]["delivery_prediction"];
        };
        /**
         * calculate_checkout_rates_response_body
         * @description The rates calculated for a cart. Each rate carries its own `quote_id`.
         */
        calculate_checkout_rates_response_body: {
            /**
             * @description The configuration the rates were calculated against.
             * @example a1b2c3d4-e5f6-7890-abcd-ef1234567890
             */
            readonly config_id?: string;
            /** @description The rates to display at checkout, one entry per delivery option that produced a rate. Each entry has its own `quote_id`. */
            rates?: components["schemas"]["checkout_rates_rate_option"][];
            /**
             * Format: date-time
             * @description When the quote was calculated.
             * @example 2026-06-24T10:00:00Z
             */
            readonly created_at?: string;
        };
        /**
         * checkout_rates_quote_response_body
         * @description A previously calculated rate quote.
         */
        checkout_rates_quote_response_body: {
            /**
             * @description The configuration the rate was calculated against.
             * @example a1b2c3d4-e5f6-7890-abcd-ef1234567890
             */
            readonly config_id?: string;
            /** @description The rate returned for this quote, including its `quote_id`. */
            quote?: components["schemas"]["checkout_rates_rate_option"];
            /**
             * Format: date-time
             * @description When the quote was calculated.
             * @example 2026-06-24T10:00:00Z
             */
            readonly created_at?: string;
        };
        /**
         * delivery_prediction_carrier_details
         * @description The carrier and service a delivery prediction or warning belongs to.
         */
        delivery_prediction_carrier_details: {
            /**
             * @description The carrier code, in lowercase.
             * @example ups
             */
            carrier_code: string;
            /**
             * @description The carrier service code, in lowercase.
             * @example ups_ground
             */
            service_code: string;
        };
        /**
         * delivery_prediction_option
         * @description A carrier and service combination to predict a delivery date for.
         */
        delivery_prediction_option: {
            /** @description The carrier and service to predict for. */
            carrier_details: components["schemas"]["delivery_prediction_carrier_details"];
        };
        /**
         * delivery_predictions_request_body
         * @description The lane and the carrier and service combinations to predict delivery dates for.
         */
        delivery_predictions_request_body: {
            /**
             * @description The ISO 3166-1 alpha-2 country code of the origin.
             * @example US
             */
            from_country_code: string;
            /**
             * @description The postal code of the origin.
             * @example 78701
             */
            from_postal_code: string;
            /**
             * @description The ISO 3166-1 alpha-2 country code of the destination.
             * @example US
             */
            to_country_code: string;
            /**
             * @description The postal code of the destination.
             * @example 90210
             */
            to_postal_code: string;
            /**
             * Format: date
             * @description The date the shipment leaves the origin. Defaults to today when omitted. A date in the past is rejected.
             * @example 2026-07-01
             */
            ship_date?: string;
            /** @description The carrier and service combinations to predict for. A combination listed more than once is predicted once. */
            delivery_options: components["schemas"]["delivery_prediction_option"][];
        };
        /**
         * delivery_prediction
         * @description ShipStation's own predicted delivery estimate, from its delivery prediction model rather than quoted by the carrier.
         *
         *     This complements the carrier's own estimate rather than replacing it — where carrier fields are present, they are still populated. The whole object is omitted when a prediction is not available for the carrier, service, and lane, so treat its absence as "no prediction" rather than as an error.
         *
         *     To request predictions on their own, without rating or buying anything, use [Predict delivery dates](#operation/create_delivery_predictions).
         */
        delivery_prediction: {
            /**
             * Format: date
             * @description The predicted delivery date.
             * @example 2026-07-04
             */
            readonly delivery_date?: string | null;
            /**
             * @description How much historical data the prediction rests on.
             *
             *     - `high` — the prediction is based on historical data for this carrier service.
             *     - `low` — little or no historical data was available for this service, so the prediction is based on similar services.
             * @example high
             * @enum {string}
             */
            readonly confidence_level?: "high" | "low";
        };
        /**
         * delivery_prediction_result
         * @description A predicted delivery date for one carrier and service combination.
         */
        delivery_prediction_result: {
            /**
             * Format: date
             * @description The ship date the prediction was calculated for.
             * @example 2026-07-01
             */
            readonly ship_date?: string;
            /**
             * Format: date
             * @description The predicted delivery date.
             * @example 2026-07-04
             */
            readonly delivery_date?: string | null;
            /**
             * @description How much historical data the prediction rests on.
             *
             *     - `high` — the prediction is based on historical data for this carrier service.
             *     - `low` — little or no historical data was available for this service, so the prediction is based on similar services.
             * @example high
             * @enum {string}
             */
            readonly confidence_level?: "high" | "low";
            /** @description The carrier and service this prediction is for. */
            carrier_details?: components["schemas"]["delivery_prediction_carrier_details"];
        };
        /**
         * delivery_prediction_warning
         * @description A requested carrier and service combination that no prediction could be made for.
         */
        delivery_prediction_warning: {
            /** @description The carrier and service the warning is about. */
            carrier_details?: components["schemas"]["delivery_prediction_carrier_details"];
            /**
             * @description Why no prediction was returned for this combination.
             * @example Carrier and service combination is unsupported.
             */
            readonly message?: string;
        };
        /**
         * delivery_predictions_response_body
         * @description The delivery predictions for the requested lane.
         *
         *     A requested carrier and service combination is never in both arrays: it is either a prediction or a warning. A combination the model returns nothing usable for is in neither, so match on `carrier_details` and treat an absent combination as no prediction being available rather than as an error. When none of the requested combinations is supported, `delivery_predictions` is empty and every combination appears in `warnings`.
         */
        delivery_predictions_response_body: {
            /** @description One prediction per supported carrier and service combination. */
            delivery_predictions?: components["schemas"]["delivery_prediction_result"][];
            /** @description One entry per requested combination that no prediction could be made for. */
            warnings?: components["schemas"]["delivery_prediction_warning"][];
        };
        /**
         * freight_address
         * @description An origin or destination address for a freight quote. LTL carriers need city, state, postal code, and country to price a shipment — contact and street details are optional at quote time. When booking, use `freight_book_address`, which requires the full contact details needed to produce a Bill of Lading.
         */
        freight_address: {
            /**
             * @description The name of the contact person at this location.
             * @example Marcus Bell
             */
            name?: string;
            /**
             * @description The name of the business at this location.
             * @example Northgate Distribution
             */
            company_name?: string;
            /**
             * @description The first line of the street address.
             * @example 4200 Industrial Pkwy
             */
            address_line1?: string;
            /**
             * @description The second line of the street address, such as a dock or suite number.
             * @example Dock 12
             */
            address_line2?: string | null;
            /**
             * @description The city or locality.
             * @example Grand Rapids
             */
            city_locality: string;
            /**
             * @description The state or province.
             * @example MI
             */
            state_province: string;
            /**
             * @description The postal code.
             * @example 49512
             */
            postal_code: string;
            /**
             * @description The two-letter ISO 3166-1 alpha-2 country code.
             * @example US
             */
            country_code: string;
            /**
             * @description The phone number of the contact person. Carriers call this number to arrange pickup or delivery.
             * @example +1 616 555 0142
             */
            phone?: string;
            /**
             * @description The email address of the contact person.
             * @example dock@northgate-dist.example
             */
            email?: string | null;
            /**
             * @description How the carrier should classify this location. Location type affects accessorial charges — for example, residential and limited-access locations usually carry a surcharge. An unrecognized value is rejected with a `400 Bad Request`. It describes the kind of site and is independent of the `residential_*` and `construction_site_*` accessorials, so a limited-access destination can also request `residential_delivery`.
             * @example commercial
             * @enum {string|null}
             */
            location_type?: "airport" | "carrier_terminal" | "commercial" | "construction" | "container_freight_station" | "distribution_center" | "government_facility" | "limited_access" | "pier_port_wharf" | "residential" | "secured_access" | "trade_show" | null;
        };
        /**
         * freight_destination_location_type
         * @description The destination of a freight quote that is linked to a shipment with `shipment_id`. The address comes from the shipment, so only `location_type` can be set. It is saved with the shipment's freight configuration and used when you quote or book that shipment again.
         */
        freight_destination_location_type: {
            /**
             * @description How the carrier should classify the destination. An unrecognized value is rejected with a `400 Bad Request`.
             * @example limited_access
             * @enum {string}
             */
            location_type: "airport" | "carrier_terminal" | "commercial" | "construction" | "container_freight_station" | "distribution_center" | "government_facility" | "limited_access" | "pier_port_wharf" | "residential" | "secured_access" | "trade_show";
        };
        /**
         * freight_book_address
         * @description An origin or destination address for a freight booking. Extends `freight_address` with the contact details — name, company, street, and phone — that the carrier needs to produce a Bill of Lading and to reach the pickup or delivery contact.
         */
        freight_book_address: WithRequired<components["schemas"]["freight_address"], "name" | "company_name" | "address_line1" | "phone">;
        /**
         * freight_tradeshow
         * @description Identifies a tradeshow when picking up from or delivering to one.
         */
        freight_tradeshow: {
            /**
             * @description The name of the tradeshow.
             * @example Midwest Home & Garden Expo
             */
            name?: string;
            /**
             * @description The booth number at the tradeshow.
             * @example B-1147
             */
            booth_number?: string;
        };
        /**
         * freight_accessorials
         * @description Additional services requested from the carrier. Accessorials affect the price of every quote, so request them when you quote — there is no `accessorials` field on the booking request. The offer you book already carries the accessorials it was priced with, so adding one afterwards requires requesting fresh quotes.
         */
        freight_accessorials: {
            /**
             * @description The origin has no loading dock and the driver needs a liftgate to load the freight.
             * @default false
             * @example true
             */
            liftgate_pickup?: boolean;
            /**
             * @description The driver needs to collect the freight from inside the building rather than at the dock or curb.
             * @default false
             * @example false
             */
            inside_pickup?: boolean;
            /**
             * @description The freight is dropped off at the carrier's terminal instead of being collected.
             * @default false
             * @example false
             */
            carrier_terminal_pickup?: boolean;
            /**
             * @description The origin is a grocery consolidation facility.
             * @default false
             * @example false
             */
            grocery_consolidation_pickup?: boolean;
            /**
             * @description The origin is a residential address. This is independent of `ship_from.location_type`, so it can be combined with any location type.
             * @default false
             * @example false
             */
            residential_pickup?: boolean;
            /**
             * @description The origin is a construction site. This is independent of `ship_from.location_type`, so it can be combined with any location type.
             * @default false
             * @example false
             */
            construction_site_pickup?: boolean;
            /**
             * @description The destination has no loading dock and the driver needs a liftgate to unload the freight.
             * @default false
             * @example true
             */
            liftgate_delivery?: boolean;
            /**
             * @description The driver needs to bring the freight inside the building rather than leave it at the dock or curb.
             * @default false
             * @example false
             */
            inside_delivery?: boolean;
            /**
             * @description The carrier must schedule a delivery appointment with the consignee.
             * @default false
             * @example false
             */
            appointment_delivery?: boolean;
            /**
             * @description The carrier must call the consignee before delivering.
             * @default false
             * @example true
             */
            notify_before_delivery?: boolean;
            /**
             * @description The carrier holds the freight at the destination terminal for the consignee to collect.
             * @default false
             * @example false
             */
            hold_at_terminal?: boolean;
            /**
             * @description The destination is a grocery consolidation facility.
             * @default false
             * @example false
             */
            grocery_consolidation_delivery?: boolean;
            /**
             * @description The destination is a residential address. This is independent of `ship_to.location_type`, so it can be combined with any location type, such as `limited_access`.
             * @default false
             * @example true
             */
            residential_delivery?: boolean;
            /**
             * @description The destination is a construction site. This is independent of `ship_to.location_type`, so it can be combined with any location type.
             * @default false
             * @example false
             */
            construction_site_delivery?: boolean;
            /**
             * @description The carrier sorts or segregates the freight on delivery.
             * @default false
             * @example false
             */
            sort_and_segregate?: boolean;
            /**
             * @description The freight must be protected from freezing.
             * @default false
             * @example false
             */
            protection_from_cold?: boolean;
            /**
             * @description The freight must be protected from heat.
             * @default false
             * @example false
             */
            protection_from_heat?: boolean;
            /** @description The freight is collected from a tradeshow. Providing this object requests the tradeshow pickup accessorial. */
            tradeshow_pickup?: components["schemas"]["freight_tradeshow"];
            /** @description The freight is delivered to a tradeshow. Providing this object requests the tradeshow delivery accessorial. */
            tradeshow_delivery?: components["schemas"]["freight_tradeshow"];
        };
        /**
         * freight_insurance
         * @description Requests cargo insurance for the shipment. When present, quotes include the insurance premium and, once bound, a certificate number. Insured values are always in USD.
         */
        freight_insurance: {
            /**
             * Format: double
             * @description The declared value of the freight to insure, in USD. Must be greater than 0.
             * @example 18500
             */
            insured_value: number;
            /**
             * @description The condition of the insured goods. Maximum liability differs between new and used freight. An unrecognized value is rejected with a `400 Bad Request`.
             * @default new
             * @example new
             * @enum {string|null}
             */
            item_condition?: "new" | "used" | null;
            /**
             * @description The category of the insured goods. Some categories are excluded or restricted by the insurer. An unrecognized value is rejected with a `400 Bad Request`.
             * @default general_merchandise
             * @example furniture
             * @enum {string|null}
             */
            commodity_category?: "general_merchandise" | "equipment" | "food_and_beverages" | "chemicals" | "electronics" | "construction_materials" | "furniture" | "stonework" | "fragile" | "perishables" | "jewelry" | "motorized_transportation" | "art_and_antiques" | "explosives" | "life_forms" | "controlled_items" | "pharmaceuticals_non_refrigerated" | "pharmaceuticals_refrigerated" | null;
            /**
             * @description The marks and numbers identifying the insured freight on the shipping documents.
             * @example NG-2026-0417
             */
            marks_numbers?: string | null;
        };
        /**
         * freight_hazardous_materials
         * @description Hazardous materials (hazmat) details for a commodity. Providing this object flags the commodity as hazmat, which the carrier prints on the Bill of Lading. All fields other than `subsidiary_hazard_classes`, `emergency_response_reference`, `flashpoint_temperature`, and `additional_details` are required.
         */
        freight_hazardous_materials: {
            /**
             * @description The authority that issued the identification number: `un` for a United Nations number or `na` for a North America number.
             * @example un
             * @enum {string}
             */
            identification_number_type: "un" | "na";
            /**
             * @description The UN or NA number identifying the hazardous material.
             * @example UN1263
             */
            identification_number: string;
            /**
             * @description The proper shipping name of the hazardous material, as published in the hazardous materials table.
             * @example Paint
             */
            proper_shipping_name: string;
            /**
             * @description The primary hazard class or division of the material.
             * @example 3
             * @enum {string}
             */
            hazard_class: "1.1A" | "1.1B" | "1.1C" | "1.1D" | "1.1E" | "1.1F" | "1.1G" | "1.1J" | "1.1L" | "1.2B" | "1.2C" | "1.2D" | "1.2E" | "1.2F" | "1.2G" | "1.2H" | "1.2J" | "1.2K" | "1.2L" | "1.3C" | "1.3G" | "1.3H" | "1.3J" | "1.3K" | "1.3L" | "1.4B" | "1.4C" | "1.4D" | "1.4E" | "1.4F" | "1.4G" | "1.4S" | "1.5D" | "1.6N" | "2.1" | "2.2" | "2.3" | "3" | "4.1" | "4.2" | "4.3" | "5.1" | "5.2" | "6.1" | "6.2" | "7" | "8" | "9";
            /**
             * @description Any subsidiary hazard classes, using the same values as `hazard_class`. Values must be unique and must not repeat the primary `hazard_class`.
             * @example [
             *       "8"
             *     ]
             */
            subsidiary_hazard_classes?: string[];
            /**
             * @description The packing group assigned to the material, or `none` when the material has no packing group.
             * @example iii
             * @enum {string}
             */
            packing_group: "i" | "ii" | "iii" | "none";
            /**
             * @description The name of the 24-hour emergency response contact.
             * @example Chemtrec
             */
            emergency_contact_name: string;
            /**
             * @description The phone number of the 24-hour emergency response contact.
             * @example +1 800 424 9300
             */
            emergency_contact_phone: string;
            /**
             * @description The emergency response registration or contract number, such as a CHEMTREC contract number.
             * @example CCN12345
             */
            emergency_response_reference?: string | null;
            /**
             * Format: double
             * @description The flashpoint of the material in degrees Fahrenheit, when it has one.
             * @example 73
             */
            flashpoint_temperature?: number | null;
            /**
             * @description Any additional hazmat information the carrier should print on the Bill of Lading.
             * @example Keep upright. Do not stack.
             */
            additional_details?: string | null;
        };
        /**
         * freight_commodity
         * @description A line of goods inside a handling unit. Every handling unit needs at least one commodity, and each commodity carries its own freight class.
         */
        freight_commodity: {
            /**
             * @description A description of the goods. Carriers print this on the Bill of Lading.
             * @example Assembled oak dining chairs
             */
            description?: string | null;
            /**
             * Format: int32
             * @description The number of pieces of this commodity inside a single handling unit.
             * @example 24
             */
            quantity: number;
            /**
             * Format: double
             * @description The total weight of this commodity line inside a single handling unit.
             * @example 310
             */
            weight: number;
            /** @description The unit of measure for `weight`. */
            weight_unit: components["schemas"]["weight_unit"];
            /**
             * @description How this commodity is packaged inside the handling unit. Unrecognized values are ignored rather than rejected.
             * @example carton
             * @enum {string|null}
             */
            packaging_type?: "bag" | "bale" | "box" | "bundle" | "carton" | "case" | "crate" | "cylinder" | "drum" | "pail" | "pallet" | "pieces" | "reel" | "roll" | "skid" | "tank" | "tote" | "trailer" | "tube" | null;
            /**
             * @description The National Motor Freight Traffic Association (NMFTA) [freight class](https://nmfta.org/nmfc/) of the goods. Freight class is derived from density, stowability, handling, and liability, and is one of the largest factors in the price of an LTL shipment.
             * @example 125
             * @enum {string}
             */
            freight_class: "50" | "55" | "60" | "65" | "70" | "77.5" | "85" | "92.5" | "100" | "110" | "125" | "150" | "175" | "200" | "250" | "300" | "400" | "500";
            /**
             * @description The NMFC item and sub number for the goods.
             * @example 80700-2
             */
            nmfc_code?: string | null;
            /** @description Hazmat details. Provide this object only for hazardous commodities. */
            hazardous_materials?: components["schemas"]["freight_hazardous_materials"];
        };
        /**
         * freight_handling_unit
         * @description A physical unit the carrier handles, such as a pallet or crate, together with the goods it contains.
         */
        freight_handling_unit: {
            /**
             * @description The kind of handling unit. Defaults to `pallet`. Unrecognized values are ignored rather than rejected.
             * @default pallet
             * @example pallet
             * @enum {string|null}
             */
            type?: "bag" | "bale" | "box" | "bundle" | "carton" | "case" | "crate" | "cylinder" | "drum" | "pail" | "pallet" | "pieces" | "reel" | "roll" | "skid" | "tank" | "tote" | "trailer" | "tube" | null;
            /**
             * Format: int32
             * @description The number of identical handling units being shipped. The dimensions, weight, and commodities describe one of them; the carrier multiplies them out.
             * @example 2
             */
            quantity: number;
            /**
             * Format: double
             * @description The length of a single handling unit, in the unit specified by `dimension_unit`.
             * @example 48
             */
            length: number;
            /**
             * Format: double
             * @description The width of a single handling unit, in the unit specified by `dimension_unit`.
             * @example 40
             */
            width: number;
            /**
             * Format: double
             * @description The height of a single handling unit, in the unit specified by `dimension_unit`.
             * @example 52
             */
            height: number;
            /** @description The unit of measure for `length`, `width`, and `height`. */
            dimension_unit: components["schemas"]["dimension_unit"];
            /**
             * @description Whether the carrier may stack other freight on top of this handling unit. Non-stackable freight consumes more trailer space and can cost more.
             * @default false
             * @example false
             */
            stackable?: boolean;
            /** @description The goods inside a single handling unit. At least one commodity is required. */
            commodities: components["schemas"]["freight_commodity"][];
        };
        /**
         * freight_pickup_details
         * @description When the carrier can collect the freight. The ready and close times define the pickup window at the origin, and the carrier needs a window wide enough for a driver to arrive.
         */
        freight_pickup_details: {
            /**
             * Format: date
             * @description The calendar date at the pickup location when the freight is ready to be collected. Pass a plain date (`YYYY-MM-DD`); any time or UTC offset is accepted but discarded, so `2026-04-17T23:00:00-07:00` and `2026-04-17` both schedule the 17th.
             * @example 2026-04-17
             */
            pickup_date: string;
            /**
             * @description The earliest time the freight can be collected, in 24-hour `HH:mm` format and local to the origin.
             * @example 09:00
             */
            ready_time: string;
            /**
             * @description The time the origin closes, in 24-hour `HH:mm` format and local to the origin.
             * @example 16:30
             */
            close_time: string;
            /**
             * @description Whether you arrange the pickup with the carrier yourself. When `true`, ShipEngine does not request a pickup on your behalf.
             * @default false
             * @example false
             */
            is_self_scheduled?: boolean;
            /**
             * @description How the carrier should classify the pickup location. An unrecognized value is rejected with a `400 Bad Request`.
             * @example commercial
             * @enum {string|null}
             */
            location_type?: "airport" | "carrier_terminal" | "commercial" | "construction" | "container_freight_station" | "distribution_center" | "government_facility" | "limited_access" | "pier_port_wharf" | "residential" | "secured_access" | "trade_show" | null;
        };
        /**
         * freight_reference
         * @description A reference number the carrier prints on the Bill of Lading, such as a purchase order or sales order number.
         */
        freight_reference: {
            /**
             * @description A free-form label for the reference, such as `purchase_order`, `sales_order`, or `reference_1`. The values a carrier can print vary by carrier.
             * @example purchase_order
             */
            type?: string | null;
            /**
             * @description The reference value. Not length-validated by the API, but keep it short — carriers commonly truncate reference values to around 35 characters on the Bill of Lading.
             * @example PO-84213
             */
            value?: string | null;
        };
        /**
         * freight_provider_account
         * @description A freight provider account connected to your account.
         */
        freight_provider_account: {
            /** @description The identifier of the freight provider account. Pass it as `freight_provider_account_id` when quoting, booking, or tracking. */
            freight_provider_account_id?: components["schemas"]["se_id"];
            /**
             * @description The code of the freight provider, such as `UNISHIPPERS` or `WWEX`. This is the same value returned as `freight_provider_code` on quotes, shipments, and tracking.
             * @example UNISHIPPERS
             */
            readonly freight_provider_code?: string;
            /**
             * @description The name given to the connection when it was set up, or `null` when it has none.
             * @example Unishippers - Midwest
             */
            readonly nickname?: string | null;
        };
        /**
         * connect_freight_provider_account_request_body
         * @description A request to connect a freight account the seller already holds with a provider.
         */
        connect_freight_provider_account_request_body: {
            /**
             * @description The code of the provider to connect. The connectable codes are the `freight_provider_code` values returned by [List freight provider accounts](#operation/list_freight_provider_accounts). Currently supported: `speedship` (WWEX) and `unishippers`.
             * @example speedship
             */
            freight_provider_code: string;
            /**
             * @description The OAuth client ID issued by the freight provider.
             * @example my-client-id
             */
            client_id: string;
            /**
             * @description The OAuth client secret issued by the freight provider.
             * @example my-client-secret
             */
            client_secret: string;
            /**
             * @description An optional label for the connection. Echoed back by [List freight provider accounts](#operation/list_freight_provider_accounts).
             * @example My WWEX account
             */
            nickname?: string | null;
        };
        /**
         * update_freight_provider_account_credentials_request_body
         * @description A replacement credential pair for a freight provider account. Both fields are required: the pair is replaced atomically, so a partial update is not supported.
         */
        update_freight_provider_account_credentials_request_body: {
            /**
             * @description The new OAuth client ID issued by the freight provider.
             * @example my-new-client-id
             */
            client_id: string;
            /**
             * @description The new OAuth client secret issued by the freight provider.
             * @example my-new-client-secret
             */
            client_secret: string;
        };
        /**
         * list_freight_provider_accounts_response_body
         * @description The freight provider accounts connected to your account.
         */
        list_freight_provider_accounts_response_body: {
            /** @description The active freight provider accounts on the account. An empty array when no freight provider is connected. */
            readonly freight_provider_accounts?: components["schemas"]["freight_provider_account"][];
        };
        /**
         * get_freight_quotes_request_body
         * @description A freight quote request. Either describe the shipment inline with `ship_from`, `ship_to`, and `handling_units`, or link it to an existing shipment with `shipment_id`.
         */
        get_freight_quotes_request_body: {
            /** @description The freight provider account to quote against. It must be an active connection on your account — retrieve it with [List freight provider accounts](#operation/list_freight_provider_accounts). */
            freight_provider_account_id: components["schemas"]["se_id"];
            /** @description An existing shipment to quote for. When provided, the origin is taken from the shipment's ship-from warehouse and the destination from the order's ship-to address, so `ship_from` must be omitted and `ship_to` may contain only `location_type`. The `handling_units`, `accessorials`, `insurance`, and `ship_to.location_type` you send are saved as the shipment's freight configuration; omit them to reuse the configuration already saved. */
            shipment_id?: components["schemas"]["se_id"];
            /** @description The origin address. Required when `shipment_id` is omitted, and must not be provided when `shipment_id` is present. */
            ship_from?: components["schemas"]["freight_address"];
            /** @description The destination address. Required when `shipment_id` is omitted. When `shipment_id` is present, the address comes from the shipment and only `location_type` may be provided. */
            ship_to?: components["schemas"]["freight_address"] | components["schemas"]["freight_destination_location_type"];
            /**
             * Format: date-time
             * @description The date the freight is ready to ship. Defaults to the current date when omitted.
             * @example 2026-04-17T00:00:00Z
             */
            shipment_date?: string | null;
            /** @description The handling units being shipped. Required when `shipment_id` is omitted. */
            handling_units?: components["schemas"]["freight_handling_unit"][];
            /** @description Additional services to include in the quote. */
            accessorials?: components["schemas"]["freight_accessorials"];
            /** @description Cargo insurance to quote alongside the freight charges. */
            insurance?: components["schemas"]["freight_insurance"];
        };
        /**
         * freight_quote
         * @description A bookable freight offer from a single LTL carrier.
         */
        freight_quote: {
            /** @description The freight provider account that returned the offer. */
            freight_provider_account_id?: components["schemas"]["se_id"];
            /**
             * @description The code of the freight provider that returned the offer.
             * @example UNISHIPPERS
             */
            readonly freight_provider_code?: string;
            /**
             * @description Identifies this offer when booking. Resolves server-side to the provider connection, carrier, and expiration — pass this id alone to [Book a freight shipment](#operation/book_freight_shipment).
             * @example 0f2b41d8-6a17-4c9e-8f52-b71d3e9c4a68
             */
            readonly offer_id?: string | null;
            /**
             * @description The name of the LTL carrier that would move the freight.
             * @example FedEx Freight Economy
             */
            readonly carrier_name?: string | null;
            /**
             * @description The Standard Carrier Alpha Code (SCAC) of the LTL carrier.
             * @example FXFE
             */
            readonly carrier_scac?: string | null;
            /**
             * @description The name of the service level the carrier is offering.
             * @example Standard LTL
             */
            readonly service_name?: string | null;
            /**
             * @description Whether the origin terminal serves the lane directly (`Direct`) or hands the freight to another carrier (`Interline`).
             * @example Direct
             */
            readonly service_type?: string | null;
            /**
             * Format: double
             * @description The total price of the offer in USD, including any accessorials and insurance premium.
             * @example 842.37
             */
            readonly total_charges?: number;
            /**
             * Format: int32
             * @description The carrier's estimated number of transit days.
             * @example 3
             */
            readonly transit_days?: number;
            /**
             * Format: date-time
             * @description The carrier's estimated delivery date, when provided.
             * @example 2026-04-22T00:00:00Z
             */
            readonly estimated_delivery_date?: string | null;
            /**
             * @description Whether the carrier guarantees the transit time for this offer.
             * @example false
             */
            readonly is_guaranteed?: boolean;
            /**
             * @description The code of the carrier terminal serving the origin.
             * @example GRR
             */
            readonly origin_terminal_code?: string | null;
            /**
             * @description The code of the carrier terminal serving the destination.
             * @example DFW
             */
            readonly destination_terminal_code?: string | null;
            /**
             * Format: double
             * @description The insured value in USD, when insurance was requested.
             * @example 18500
             */
            readonly insured_amount?: number | null;
            /**
             * Format: double
             * @description The insurance premium in USD included in `total_charges`, when insurance was requested.
             * @example 46.25
             */
            readonly insurance_premium?: number | null;
            /**
             * @description The insurance certificate number, when the insurer issued one for the offer. `null` when no insurance was requested.
             * @example CRT-4471902
             */
            readonly insurance_certificate_number?: string | null;
            /**
             * Format: date-time
             * @description When the offer expires. Expiry is enforced server-side when booking.
             * @example 2026-04-16T23:59:59Z
             */
            readonly quote_expiration_date?: string | null;
            /**
             * Format: double
             * @description The carrier's maximum liability per pound for new goods, in USD. Carrier liability is far below the value of most freight, which is why cargo insurance is usually worth quoting.
             * @example 25
             */
            readonly max_liability_new?: number | null;
            /**
             * Format: double
             * @description The carrier's maximum liability per pound for used goods, in USD.
             * @example 10
             */
            readonly max_liability_used?: number | null;
        };
        /**
         * freight_quotes_response_body
         * @description The freight offers returned for a quote request.
         */
        freight_quotes_response_body: {
            /** @description The offers returned by the provider, one per carrier and service combination. When no carrier can serve the lane as described, this is an empty array or `null`. */
            readonly quotes?: components["schemas"]["freight_quote"][] | null;
        };
        /**
         * book_freight_shipment_request_body
         * @description A request to book a freight offer returned by a quote. Pass the `offer_id` from the offer being booked — the provider connection, carrier, and expiration are resolved server-side.
         */
        book_freight_shipment_request_body: {
            /** @description The shipment the offer was quoted for. When provided, the shipment must already have a freight quote, and `ship_from` and `ship_to` must be omitted — the origin, destination, and handling units all come from the shipment and its saved freight configuration. */
            shipment_id?: components["schemas"]["se_id"];
            /**
             * @description The `offer_id` of the quoted offer being booked. Resolves server-side to the provider connection, the carrier, and the expiration.
             * @example 0f2b41d8-6a17-4c9e-8f52-b71d3e9c4a68
             */
            offer_id: string;
            /** @description The origin address. Required when `shipment_id` is omitted, and must not be provided when `shipment_id` is present. */
            ship_from?: components["schemas"]["freight_book_address"];
            /** @description The destination address. Required when `shipment_id` is omitted, and must not be provided when `shipment_id` is present. */
            ship_to?: components["schemas"]["freight_book_address"];
            /** @description When the carrier can collect the freight. Always required. */
            pickup_details: components["schemas"]["freight_pickup_details"];
            /** @description Reference numbers for the carrier to print on the Bill of Lading. */
            references?: components["schemas"]["freight_reference"][];
            /**
             * @description Instructions for the driver at the origin.
             * @example Check in with the guard at gate 3 before backing into dock 12.
             */
            pickup_instructions?: string | null;
            /**
             * @description Instructions for the driver at the destination.
             * @example Delivery appointments accepted between 08:00 and 11:00 only.
             */
            delivery_instructions?: string | null;
            /**
             * @description Instructions for handling the freight in transit.
             * @example Do not double stack. Load with forks from the long side.
             */
            handling_instructions?: string | null;
            /** @description Groups of shipment event notifications to send. Each group names one or more event codes and the email addresses to notify when those events occur. When omitted or `null`, no notifications are sent. */
            notifications?: components["schemas"]["freight_notification"][] | null;
        };
        /**
         * freight_shipment_status
         * @description The lifecycle status of a freight shipment. `exception` is also returned when the status cannot be determined.
         * @example booked
         * @enum {string}
         */
        freight_shipment_status: "pending" | "quoted" | "booked" | "in_transit" | "delivered" | "cancelled" | "exception";
        /**
         * freight_booked_document
         * @description A document the carrier generated when the shipment was booked. Each entry includes a `type` and a `url` you can use to download it directly.
         */
        freight_booked_document: {
            /**
             * @description The type of document, as reported by the freight provider — for example `BILL_OF_LADING`, `PALLET_LABEL`, or `BOL_PALLET_LABEL_COMBINED`. Unlike the lowercase values returned by [List freight shipment documents](#operation/list_freight_shipment_documents), this is the provider's raw value.
             * @example BILL_OF_LADING
             */
            readonly type?: string;
            /**
             * @description The path to download the document as a PDF.
             * @example https://api.shipengine.com/v2/downloads/p1/a1b2c3d4e5f6/bill_of_lading.pdf
             */
            readonly url?: string | null;
        };
        /**
         * freight_shipment_document
         * @description A document stored for a freight shipment.
         */
        freight_shipment_document: {
            /**
             * @description The type of document.
             * @example bill_of_lading
             * @enum {string}
             */
            readonly type?: "bill_of_lading" | "bol_pallet_label_combined" | "certificate_of_insurance" | "certificate_of_insurance_instructions" | "certificate_of_origin_us" | "certificate_of_origin_usmca" | "certificate_of_origin_usmca_instructions" | "international_commercial_invoice" | "packing_list" | "pallet_label" | "pallet_label_4x6" | "proof_of_delivery" | "quote" | "weight_and_inspection";
            /**
             * @description The path to download the document as a PDF, relative to the API host. Resolve it against `https://api.shipengine.com` to get the full URL.
             * @example /v1/downloads/10/a1b2c3d4e5f6/bill_of_lading.pdf
             */
            readonly url?: string | null;
        };
        /**
         * freight_notification
         * @description A group of shipment event notifications. Each group maps one or more event codes to a list of email addresses to notify when those events occur.
         */
        freight_notification: {
            /**
             * @description The shipment events that trigger this notification group. Must contain at least one value and no duplicates.
             * @example [
             *       "booked",
             *       "in_transit"
             *     ]
             */
            events: ("quote_ready" | "exception" | "booked" | "delivered" | "in_transit" | "out_for_delivery" | "pickup_scheduled" | "voided")[];
            /**
             * @description The email addresses to notify when any of the listed events occur. Between 1 and 5 addresses per group.
             * @example [
             *       "logistics@example.com"
             *     ]
             */
            email_addresses: string[];
        };
        /**
         * book_freight_shipment_response_body
         * @description The freight shipment created by a booking.
         */
        book_freight_shipment_response_body: {
            /** @description The identifier of the freight shipment. Use it to retrieve, track, or cancel the shipment. */
            freight_shipment_id?: components["schemas"]["se_id"];
            /** @description The identifier of the ShipStation shipment linked to this freight booking, if any. */
            shipment_id?: (string & components["schemas"]["se_id"]) | null;
            /** @description The freight provider account the shipment was booked through. */
            freight_provider_account_id?: components["schemas"]["se_id"];
            /**
             * @description The code of the freight provider the shipment was booked through.
             * @example UNISHIPPERS
             */
            readonly freight_provider_code?: string;
            /** @description The status of the shipment. A successful booking returns `booked`. */
            status?: components["schemas"]["freight_shipment_status"];
            /**
             * @description The Bill of Lading number assigned to the shipment.
             * @example BOL-20260417-4821
             */
            readonly bol_number?: string | null;
            /**
             * @description The carrier's PRO number for the shipment. Carriers often assign this after pickup, so it is usually `null` immediately after booking.
             * @example 072-51293847
             */
            readonly pro_number?: string | null;
            /**
             * @description The carrier's pickup confirmation number. `null` when the carrier did not return one.
             * @example FXFE-PU-884215
             */
            readonly confirmation_number?: string | null;
            /**
             * Format: date-time
             * @description The date and time the freight shipment was created, in UTC.
             * @example 2026-09-18T14:54:44Z
             */
            readonly created_at?: string;
            /** @description The documents the carrier generated for the booking. `null` when the provider reported none. */
            readonly documents?: components["schemas"]["freight_booked_document"][] | null;
            /** @description The notification groups configured for this shipment, echoed back from the booking request. `null` when no notifications were configured. */
            readonly notifications?: components["schemas"]["freight_notification"][] | null;
        };
        /**
         * freight_shipment_response_body
         * @description A freight shipment on your account.
         */
        freight_shipment_response_body: {
            /** @description The identifier of the freight shipment. */
            freight_shipment_id?: components["schemas"]["se_id"];
            /**
             * @description The ID of the base shipment associated with the freight shipment, allowing pairing between standard shipment records and freight shipment records. `null` when no base shipment is associated. This is rare, because a base shipment is created when you book without one.
             * @example se-333551084
             */
            shipment_id?: components["schemas"]["se_id"] | null;
            /** @description The freight provider account the shipment was booked through. */
            freight_provider_account_id?: components["schemas"]["se_id"];
            /**
             * @description The code of the freight provider the shipment was booked through.
             * @example UNISHIPPERS
             */
            readonly freight_provider_code?: string;
            /** @description The current status of the shipment. */
            status?: components["schemas"]["freight_shipment_status"];
            /**
             * @description The Bill of Lading number assigned to the shipment.
             * @example BOL-20260417-4821
             */
            readonly bol_number?: string | null;
            /**
             * @description The carrier's PRO number for the shipment, or `null` until the carrier assigns one.
             * @example 072-51293847
             */
            readonly pro_number?: string | null;
            /**
             * @description The carrier's pickup confirmation number. `null` when the carrier did not return one.
             * @example FXFE-PU-884215
             */
            readonly confirmation_number?: string | null;
            /**
             * Format: date-time
             * @description The date and time the freight shipment was created, in UTC.
             * @example 2026-09-18T14:54:44Z
             */
            readonly created_at?: string;
            /** @description The documents stored for the shipment, each with a download URL. `null` when no documents have been stored yet. */
            readonly documents?: components["schemas"]["freight_shipment_document"][] | null;
            /** @description The notification groups configured for this shipment. `null` when no notifications were configured. */
            readonly notifications?: components["schemas"]["freight_notification"][] | null;
        };
        /**
         * list_freight_shipments_response_body
         * @description A page of freight shipments.
         */
        list_freight_shipments_response_body: {
            /** @description The freight shipments on this page. */
            readonly shipments?: components["schemas"]["freight_shipment_response_body"][];
            /**
             * Format: int32
             * @description The total number of freight shipments on the account.
             * @example 137
             */
            readonly total?: number;
            /**
             * Format: int32
             * @description The page of results returned.
             * @example 1
             */
            readonly page?: number;
            /**
             * Format: int32
             * @description The number of freight shipments per page.
             * @example 25
             */
            readonly page_size?: number;
            /**
             * Format: int32
             * @description The total number of pages available.
             * @example 6
             */
            readonly pages?: number;
        };
        /**
         * cancel_freight_shipment_response_body
         * @description The result of cancelling a freight shipment.
         */
        cancel_freight_shipment_response_body: {
            /** @description The freight shipment that was cancelled. */
            freight_shipment_id?: components["schemas"]["se_id"];
            /**
             * @description `true` when the carrier also voided the associated pickup request. `false` when the shipment had no pickup or the carrier did not confirm the pickup was cancelled.
             * @example true
             */
            readonly pickup_cancelled?: boolean;
        };
        /**
         * freight_document
         * @description A downloadable document for a freight shipment.
         */
        freight_document: {
            /**
             * @description The type of document.
             * @example bill_of_lading
             * @enum {string}
             */
            readonly type?: "bill_of_lading" | "bol_pallet_label_combined" | "certificate_of_insurance" | "certificate_of_insurance_instructions" | "certificate_of_origin_us" | "certificate_of_origin_usmca" | "certificate_of_origin_usmca_instructions" | "international_commercial_invoice" | "packing_list" | "pallet_label" | "pallet_label_4x6" | "proof_of_delivery" | "quote" | "weight_and_inspection";
            /**
             * Format: date-time
             * @description When the document was created.
             * @example 2026-04-16T14:32:07Z
             */
            readonly created_at?: string | null;
            /**
             * @description The path to download the document as a PDF, relative to the API host. Resolve it against `https://api.shipengine.com` to get the full URL.
             * @example /v1/downloads/10/a1b2c3d4e5f6/bill_of_lading.pdf
             */
            readonly url?: string | null;
        };
        /**
         * list_freight_shipment_documents_response_body
         * @description The documents available for a freight shipment.
         */
        list_freight_shipment_documents_response_body: {
            /** @description The documents available for the shipment. The list grows as the shipment progresses — a proof of delivery, for example, only exists after delivery. */
            readonly documents?: components["schemas"]["freight_document"][];
        };
        /**
         * freight_tracking_event_document
         * @description A document the carrier attached to a tracking event.
         */
        freight_tracking_event_document: {
            /**
             * @description The type of document, as reported by the carrier.
             * @example PROOF_OF_DELIVERY
             */
            readonly type?: string | null;
            /**
             * @description The name of the document file.
             * @example pod_072-51293847.pdf
             */
            readonly filename?: string | null;
            /**
             * @description The file format of the document.
             * @example PDF
             */
            readonly format?: string | null;
        };
        /**
         * freight_tracking_event
         * @description A single tracking event reported by the carrier.
         */
        freight_tracking_event: {
            /**
             * @description When the event occurred, in `YYYY-MM-DDTHH:mm:ssZ` format. Carriers that report only a date return midnight as the time.
             * @example 2026-04-20T14:05:00Z
             */
            readonly occurred_at?: string | null;
            /**
             * @description The tracking status the event corresponds to.
             * @example in_transit
             */
            readonly status?: string | null;
            /**
             * @description The carrier's own status or event code.
             * @example AF
             */
            readonly carrier_code?: string | null;
            /**
             * @description The carrier's description of the event.
             * @example Departed terminal in Grand Rapids, MI
             */
            readonly description?: string | null;
            /** @description Any documents the carrier attached to the event, such as a proof of delivery. Always present; an empty array when the carrier attached none. */
            readonly documents?: components["schemas"]["freight_tracking_event_document"][];
        };
        /**
         * freight_shipment_tracking_response_body
         * @description Live carrier tracking for a booked freight shipment.
         */
        freight_shipment_tracking_response_body: {
            /** @description The freight shipment being tracked. */
            freight_shipment_id?: components["schemas"]["se_id"];
            /** @description The freight provider account used to retrieve the tracking. */
            freight_provider_account_id?: components["schemas"]["se_id"];
            /**
             * @description The code of the freight provider used to retrieve the tracking.
             * @example UNISHIPPERS
             */
            readonly freight_provider_code?: string;
            /**
             * @description The SCAC of the LTL carrier moving the freight.
             * @example FXFE
             */
            readonly carrier_scac?: string | null;
            /**
             * @description The Bill of Lading number of the shipment.
             * @example BOL-20260417-4821
             */
            readonly bol_number?: string | null;
            /**
             * @description The carrier's PRO number for the shipment, or `null` until the carrier assigns one.
             * @example 072-51293847
             */
            readonly pro_number?: string | null;
            /** @description The shipment status derived from the carrier's tracking status. */
            status?: components["schemas"]["freight_shipment_status"];
            /**
             * @description The detailed tracking status reported by the carrier. `tracking_status` is finer-grained than `status`: several tracking statuses, such as `dispatched` and `out_for_delivery`, all map to the `in_transit` shipment status.
             * @example in_transit
             * @enum {string|null}
             */
            readonly tracking_status?: "unknown" | "created" | "pending_pickup" | "dispatched" | "in_route_to_pickup" | "at_pickup" | "in_transit" | "out_for_delivery" | "at_delivery" | "delivered" | "exception" | "voided" | null;
            /**
             * @description The carrier's estimated delivery date, in `YYYY-MM-DD` format.
             * @example 2026-04-22
             */
            readonly estimated_delivery_date?: string | null;
            /**
             * @description A carrier page where the shipment can be tracked, when the carrier provides one.
             * @example https://www.fedex.com/fedextrack/?trknbr=07251293847
             */
            readonly tracking_url?: string | null;
            /**
             * @description When the most recent tracking event occurred.
             * @example 2026-04-20T14:05:00Z
             */
            readonly last_event_at?: string | null;
            /** @description The tracking events reported by the carrier. */
            readonly events?: components["schemas"]["freight_tracking_event"][];
        };
        /**
         * freight_tracking_response_body
         * @description Live carrier tracking for a PRO or BOL number.
         */
        freight_tracking_response_body: {
            /** @description The freight provider account used to retrieve the tracking. */
            freight_provider_account_id?: components["schemas"]["se_id"];
            /**
             * @description The code of the freight provider used to retrieve the tracking.
             * @example UNISHIPPERS
             */
            readonly freight_provider_code?: string;
            /**
             * @description The SCAC of the LTL carrier moving the freight, as reported by the carrier. This echoes the provider's response, not the `carrier_scac` you supplied in the request, so it can be `null`.
             * @example FXFE
             */
            readonly carrier_scac?: string | null;
            /**
             * @description The Bill of Lading number reported by the carrier.
             * @example BOL-20260417-4821
             */
            readonly bol_number?: string | null;
            /**
             * @description The PRO number reported by the carrier.
             * @example 072-51293847
             */
            readonly pro_number?: string | null;
            /**
             * @description The detailed tracking status reported by the carrier.
             * @example delivered
             * @enum {string|null}
             */
            readonly tracking_status?: "unknown" | "created" | "pending_pickup" | "dispatched" | "in_route_to_pickup" | "at_pickup" | "in_transit" | "out_for_delivery" | "at_delivery" | "delivered" | "exception" | "voided" | null;
            /**
             * @description A carrier page where the shipment can be tracked, when the carrier provides one.
             * @example https://www.fedex.com/fedextrack/?trknbr=07251293847
             */
            readonly tracking_url?: string | null;
            /**
             * @description When the most recent tracking event occurred.
             * @example 2026-04-22T09:41:00Z
             */
            readonly last_event_at?: string | null;
            /** @description The tracking events reported by the carrier. */
            readonly events?: components["schemas"]["freight_tracking_event"][];
        };
    };
    responses: {
        /** @description The request contained errors. */
        "400_error_response": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error_response_body"];
            };
        };
        /** @description The specified resource does not exist. */
        "404_error_response": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error_response_body"];
            };
        };
        /**
         * @description An error occurred on ShipStation API's side.
         *
         *     > This error will automatically be reported to our engineers.
         */
        "500_error_response": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error_response_body"];
            };
        };
        /** @description The request conflicts with an existing resource. */
        "409_error_response": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error_response_body"];
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    list_account_settings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_account_settings_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_account_images: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_account_settings_images_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_account_image: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_account_settings_image_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_account_settings_images_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_account_settings_images_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label Image Id */
                label_image_id: components["schemas"]["image_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_account_settings_images_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_account_settings_images_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label Image Id */
                label_image_id: components["schemas"]["image_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_account_settings_image_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_account_image_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label Image Id */
                label_image_id: components["schemas"]["image_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    parse_address: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["parse_address_request_body"];
            };
        };
        responses: {
            /** @description Returns the parsed address, as well as a confidence score and a list of all the entities that were recognized in the text. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["parse_address_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    validate_address: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["validate_address_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["validate_address_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_batches: {
        parameters: {
            query?: {
                status?: components["schemas"]["batch_status"];
                /**
                 * @description Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
                 * @example 2
                 */
                page?: number;
                /**
                 * @description The number of results to return per response.
                 * @example 50
                 */
                page_size?: number;
                /** @description Controls the sort order of the query. */
                sort_dir?: components["schemas"]["sort_dir"];
                /** @description Batch Number */
                batch_number?: string;
                /**
                 * @description Only return batches that were created on or after a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_start?: string;
                /**
                 * @description Only return batches that were created on or before a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_end?: string;
                /**
                 * @description Only return batches that were processed on or after a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                processed_at_start?: string;
                /**
                 * @description Only return batches that were processed on or before a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                processed_at_end?: string;
                sort_by?: components["schemas"]["batches_sort_by"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_batches_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_batch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_batch_request"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_batch_response_body"];
                };
            };
            /** @description The request was a partial success. It contains results, as well as processing errors. */
            207: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_batch_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_batch_by_external_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 13553d7f-3c87-4771-bae1-c49bacef11cb */
                external_batch_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_batch_by_external_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_batch_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_batch_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_batch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_batch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    add_to_batch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["add_to_batch_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_batch_errors: {
        parameters: {
            query?: {
                /**
                 * @description Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
                 * @example 2
                 */
                page?: number;
                pagesize?: number;
            };
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_batch_errors_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    process_batch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["process_batch_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    remove_from_batch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["remove_from_batch_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    assign_user_to_batch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["assign_user_to_batch_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    unassign_user_from_batch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Batch ID */
                batch_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_carriers: {
        parameters: {
            query?: {
                /**
                 * @description Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
                 * @example 2
                 */
                page?: number;
                /**
                 * @description The number of results to return per response.
                 * @example 50
                 */
                page_size?: number;
                /**
                 * @description When `true` (the default), each carrier in the response includes two additional arrays: `packages` (the package types supported by that carrier) and `options` (the carrier-level advanced options available for that carrier).
                 *     Set to `false` to omit both arrays and reduce response payload size. This is useful when you only need basic carrier information such as `carrier_id`, `balance`, or `services`.
                 * @example false
                 */
                include_extended_details?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_carriers_response_body"];
                };
            };
            /** @description The request was a partial success. It contains results, as well as errors. */
            207: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_carriers_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_carrier_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_carrier_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    disconnect_carrier_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    add_funds_to_carrier: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["add_funds_to_carrier_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["add_funds_to_carrier_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_carrier_options: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_carrier_options_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_carrier_package_types: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_carrier_package_types_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_carrier_services: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_carrier_services_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    connect_carrier: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
                 * @example dhl_express
                 */
                carrier_name: components["schemas"]["carrier_name"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["connect_carrier_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["connect_carrier_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    disconnect_carrier: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
                 * @example dhl_express
                 */
                carrier_name: components["schemas"]["carrier_name"];
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_carrier_settings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The carrier name, such as `ups`, `fedex`, or `dhl_express`.
                 * @example dhl_express
                 */
                carrier_name: components["schemas"]["carrier_name_with_settings"];
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_carrier_settings_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_carrier_settings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The carrier name, such as `ups`, `fedex`, or `dhl_express`.
                 * @example dhl_express
                 */
                carrier_name: components["schemas"]["carrier_name_with_settings"];
                /**
                 * @description Carrier ID
                 * @example se-28529731
                 */
                carrier_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_carrier_settings_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    connect_insurer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["connect_insurer_request_body"];
            };
        };
        responses: {
            /** @description The request was a success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["connect_insurer_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    disconnect_insurer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["disconnect_insurer_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_combined_label_document: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_combined_label_document_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_combined_label_document_response_body.yaml"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    download_file: {
        parameters: {
            query?: {
                download?: string;
                rotation?: number;
            };
            header?: never;
            path: {
                subdir: string;
                filename: string;
                dir: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/pdf": components["schemas"]["download_file_pdf_response_body"];
                    "image/png": components["schemas"]["download_file_png_response_body"];
                    "application/zpl": components["schemas"]["download_file_zpl_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_webhooks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_webhooks_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_webhook_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_webhook_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            409: components["responses"]["409_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_webhook_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Webhook ID */
                webhook_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_webhook_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Webhook ID */
                webhook_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_webhook_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_webhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Webhook ID */
                webhook_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_freight_provider_accounts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_freight_provider_accounts_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    connect_freight_provider_account: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["connect_freight_provider_account_request_body"];
            };
        };
        responses: {
            /** @description The freight provider account was connected successfully. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "freight_provider_account_id": "se-4821",
                     *       "freight_provider_code": "SPEEDSHIP",
                     *       "nickname": "My WWEX account"
                     *     }
                     */
                    "application/json": components["schemas"]["freight_provider_account"];
                };
            };
            /** @description A required field is missing or invalid, or the `freight_provider_code` is not a supported value. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "validation",
                     *           "error_code": "field_value_required",
                     *           "message": "client_id is required."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The seller already has an active connection to this provider (`freight_provider_already_connected`). The error body includes the existing `freight_provider_account_id`. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "business_rules",
                     *           "error_code": "freight_provider_already_connected",
                     *           "message": "This account is already connected to freight provider 'speedship' as se-4821. Replace the credentials on that freight provider account instead of connecting again."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    disconnect_freight_provider_account: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight provider account to disconnect.
                 * @example se-4821
                 */
                freight_provider_account_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The freight provider account was disconnected successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The `freight_provider_account_id` does not exist on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "validation",
                     *           "error_code": "invalid_identifier",
                     *           "field_name": "freight_provider_account_id",
                     *           "message": "se-9999 is not a valid freight_provider_account_id."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    update_freight_provider_account_credentials: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight provider account whose credentials to replace.
                 * @example se-4821
                 */
                freight_provider_account_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_freight_provider_account_credentials_request_body"];
            };
        };
        responses: {
            /** @description The credentials were replaced successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "freight_provider_account_id": "se-4821",
                     *       "freight_provider_code": "SPEEDSHIP",
                     *       "nickname": "My WWEX account"
                     *     }
                     */
                    "application/json": components["schemas"]["freight_provider_account"];
                };
            };
            /** @description A required field is missing or invalid, or the provider rejected the new credentials (`carrier` error source). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "carrier",
                     *           "error_type": "account_status",
                     *           "error_code": "unspecified",
                     *           "message": "invalid client credentials"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The `freight_provider_account_id` does not exist on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "validation",
                     *           "error_code": "invalid_identifier",
                     *           "field_name": "freight_provider_account_id",
                     *           "message": "se-9999 is not a valid freight_provider_account_id."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    get_freight_quotes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["get_freight_quotes_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["freight_quotes_response_body"];
                };
            };
            /** @description The request contained errors, the freight provider connection is not active for the account, or the provider could not return quotes. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "business_rules",
                     *           "error_code": "unspecified",
                     *           "message": "ship_from must not be provided when shipment_id is present"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The `shipment_id` does not identify a shipment on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    list_freight_shipments: {
        parameters: {
            query?: {
                /**
                 * @description The page of results to return. Values below `1` are treated as `1`.
                 * @example 1
                 */
                page?: number;
                /**
                 * @description The number of freight shipments to return per page. Values above `500` are capped at `500`.
                 * @example 50
                 */
                page_size?: number;
                /**
                 * @description Only return freight shipments created on or after this date and time, in ISO 8601 format. The start of the range is inclusive.
                 * @example 2026-09-01T00:00:00Z
                 */
                created_at_start?: string;
                /**
                 * @description Only return freight shipments created before this date and time, in ISO 8601 format. The end of the range is exclusive.
                 * @example 2026-11-01T00:00:00Z
                 */
                created_at_end?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_freight_shipments_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    book_freight_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["book_freight_shipment_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["book_freight_shipment_response_body"];
                };
            };
            /** @description The request contained errors, the quote has expired, the freight provider connection is not active for the account, the linked shipment has no freight configuration or a cancelled one, or the provider rejected the booking. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "system",
                     *           "error_code": "unspecified",
                     *           "message": "The quote has expired. Please request a new quote."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The `shipment_id` does not identify a shipment on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    get_freight_shipment_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight shipment.
                 * @example se-98765432
                 */
                freight_shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["freight_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            /** @description The freight shipment does not exist on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "business_rules",
                     *           "error_code": "invalid_identifier",
                     *           "message": "Invalid freight_shipment_id.",
                     *           "field_name": "freight_shipment_id"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    cancel_freight_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight shipment.
                 * @example se-98765432
                 */
                freight_shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cancel_freight_shipment_response_body"];
                };
            };
            /** @description The freight shipment ID is malformed, or the provider rejected the cancellation. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The freight shipment does not exist on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    list_freight_shipment_documents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight shipment.
                 * @example se-98765432
                 */
                freight_shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_freight_shipment_documents_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            /** @description The freight shipment does not exist on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    get_freight_shipment_tracking: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The identifier of the freight shipment.
                 * @example se-98765432
                 */
                freight_shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["freight_shipment_tracking_response_body"];
                };
            };
            /** @description The freight shipment ID is malformed, the shipment has no PRO or BOL number to track yet (`freight_tracking_not_available`), or the freight provider connection is not active (`freight_connection_inactive`). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "business_rules",
                     *           "error_code": "freight_tracking_not_available",
                     *           "message": "Tracking is not yet available for this shipment. A PRO or BOL number is required."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The freight shipment does not exist on this account (`freight_shipment_not_found`), or the carrier returned no tracking information (`freight_tracking_not_found`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "carrier",
                     *           "error_type": "business_rules",
                     *           "error_code": "freight_tracking_not_found",
                     *           "message": "No tracking information was found for this shipment."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    get_freight_tracking: {
        parameters: {
            query: {
                /**
                 * @description The freight provider account to track through. Retrieve it with [List freight provider accounts](#operation/list_freight_provider_accounts).
                 * @example se-4821
                 */
                freight_provider_account_id: components["schemas"]["se_id"];
                /**
                 * @description The PRO or BOL number to track.
                 * @example 072-51293847
                 */
                tracking_number: string;
                /**
                 * @description Which kind of number `tracking_number` is.
                 * @example pro_number
                 */
                tracking_type: "pro_number" | "bol_number";
                /**
                 * @description The Standard Carrier Alpha Code (SCAC) of the LTL carrier. Required: the freight provider needs the SCAC to resolve a tracking number.
                 * @example FXFE
                 */
                carrier_scac: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["freight_tracking_response_body"];
                };
            };
            /**
             * @description `freight_provider_account_id` is missing or is not a valid account ID (`freight_provider_id_required`), `tracking_number`, `tracking_type`, or `carrier_scac` is missing or invalid, or the freight provider connection is not active (`freight_connection_inactive`).
             *
             *     The `freight_provider_id_required` message still names the parameter `seller_freight_provider_id`, the name this parameter had previously. Match on `error_code`, not on `message`.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "request_id": "4b8e2f4c-1f6f-4b1a-9c4a-8f5e6d7c8b9a",
                     *       "errors": [
                     *         {
                     *           "error_source": "shipengine",
                     *           "error_type": "business_rules",
                     *           "error_code": "freight_provider_id_required",
                     *           "message": "seller_freight_provider_id is required."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The carrier returned no tracking information for the number (`freight_tracking_not_found`). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    add_funds_to_insurance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["add_funds_to_insurance_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["add_funds_to_insurance_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_insurance_balance: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_insurance_balance_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_labels: {
        parameters: {
            query?: {
                /** @description Only return labels that are currently in the specified status */
                label_status?: components["schemas"]["label_status"];
                /**
                 * @description Only return labels for a specific carrier service
                 * @example usps_first_class_mail
                 */
                service_code?: components["schemas"]["service_code"];
                /** @description Only return labels for a specific carrier account */
                carrier_id?: components["schemas"]["se_id"];
                /**
                 * @description Only return labels with a specific tracking number
                 * @example 9405511899223197428490
                 */
                tracking_number?: string;
                /** @description Only return labels that were created in a specific batch */
                batch_id?: components["schemas"]["se_id"];
                /** @description Rate ID */
                rate_id?: components["schemas"]["se_id"];
                /** @description Shipment ID */
                shipment_id?: components["schemas"]["se_id"];
                /**
                 * @description Only return labels for a specific external shipment ID.
                 * @example 0bcb569d-1727-4ff9-ab49-b2fec0cee5ae
                 */
                external_shipment_id?: string;
                /** @description Only return labels that originate from a specific warehouse */
                warehouse_id?: components["schemas"]["se_id"];
                /**
                 * @description Only return labels that were created on or after a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_start?: string;
                /**
                 * @description Only return labels that were created on or before a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_end?: string;
                /**
                 * @description Only return labels with specific refund status/es.
                 * @example [
                 *       "pending",
                 *       "approved"
                 *     ]
                 */
                refund_status?: ("request_scheduled" | "pending" | "approved" | "rejected" | "excluded")[];
                /**
                 * @description Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
                 * @example 2
                 */
                page?: number;
                /**
                 * @description The number of results to return per response.
                 * @example 50
                 */
                page_size?: number;
                /** @description Controls the sort order of the query. */
                sort_dir?: components["schemas"]["sort_dir"];
                /** @description Controls which field the query is sorted by. */
                sort_by?: "modified_at" | "created_at" | "voided_at";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The response includes a `labels` array containing a page of results (as determined by the `page_size` query parameter).  It also includes other useful information, such as the total number of labels that match the query criteria, the number of pages of results, and the URLs of the first, last, next, and previous pages of results. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_labels_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_label: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_label_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "label_id": "se-2135218",
                     *       "status": "completed",
                     *       "shipment_id": "se-11310579",
                     *       "external_shipment_id": "ext-shipment-1001",
                     *       "external_order_id": null,
                     *       "ship_to": {
                     *         "name": "John Smith",
                     *         "phone": "+1 416-555-0123",
                     *         "address_line1": "301 Front Street West",
                     *         "city_locality": "Toronto",
                     *         "state_province": "ON",
                     *         "postal_code": "M5V 2T6",
                     *         "country_code": "CA",
                     *         "address_residential_indicator": "unknown"
                     *       },
                     *       "ship_date": "2026-05-04T07:00:00Z",
                     *       "delivery_prediction": {
                     *         "delivery_date": "2026-05-06",
                     *         "confidence_level": "high"
                     *       },
                     *       "created_at": "2026-05-04T12:24:34.4153952Z",
                     *       "shipment_cost": {
                     *         "currency": "usd",
                     *         "amount": 83.86
                     *       },
                     *       "insurance_cost": {
                     *         "currency": "usd",
                     *         "amount": 0
                     *       },
                     *       "requested_comparison_amount": {
                     *         "currency": "usd",
                     *         "amount": 0
                     *       },
                     *       "rate_details": [
                     *         {
                     *           "rate_detail_type": "shipping",
                     *           "carrier_description": "Shipping",
                     *           "carrier_billing_code": "BaseServiceCharge",
                     *           "carrier_memo": "",
                     *           "amount": {
                     *             "currency": "usd",
                     *             "amount": 59.07
                     *           },
                     *           "billing_source": "carrier"
                     *         },
                     *         {
                     *           "rate_detail_type": "additional_fees",
                     *           "carrier_description": "Surge Fee",
                     *           "carrier_billing_code": "434",
                     *           "carrier_memo": "",
                     *           "amount": {
                     *             "currency": "usd",
                     *             "amount": 0.96
                     *           },
                     *           "billing_source": "carrier"
                     *         },
                     *         {
                     *           "rate_detail_type": "prepaid_duties",
                     *           "carrier_description": "Duties and Taxes (Guaranteed)",
                     *           "carrier_billing_code": "",
                     *           "carrier_memo": "",
                     *           "amount": {
                     *             "currency": "usd",
                     *             "amount": 0
                     *           },
                     *           "billing_source": "dutiestax"
                     *         },
                     *         {
                     *           "rate_detail_type": "prepaid_taxes",
                     *           "carrier_description": "Duties and Taxes (Guaranteed)",
                     *           "carrier_billing_code": "",
                     *           "carrier_memo": "",
                     *           "amount": {
                     *             "currency": "usd",
                     *             "amount": 13.43
                     *           },
                     *           "billing_source": "dutiestax"
                     *         },
                     *         {
                     *           "rate_detail_type": "prepaid_import_fees",
                     *           "carrier_description": "Duties and Taxes (Guaranteed)",
                     *           "carrier_billing_code": "",
                     *           "carrier_memo": "",
                     *           "amount": {
                     *             "currency": "usd",
                     *             "amount": 10.4
                     *           },
                     *           "billing_source": "dutiestax"
                     *         }
                     *       ],
                     *       "tracking_number": "1Z2A863C6620022614",
                     *       "is_return_label": false,
                     *       "rma_number": null,
                     *       "is_international": true,
                     *       "batch_id": "se-0",
                     *       "carrier_id": "se-440144",
                     *       "charge_event": "carrier_default",
                     *       "service_code": "ups_worldwide_express",
                     *       "package_code": "package",
                     *       "voided": false,
                     *       "label_image_id": "img_DtBXupDBxREpHnwEXhTfgK",
                     *       "label_format": "pdf",
                     *       "display_scheme": "label",
                     *       "label_layout": "4x6",
                     *       "trackable": true,
                     *       "carrier_code": "ups",
                     *       "tracking_status": "in_transit",
                     *       "label_download": {
                     *         "href": "https://api.shipengine.com/v1/downloads/label-2135218.pdf",
                     *         "pdf": "https://api.shipengine.com/v1/downloads/label-2135218.pdf",
                     *         "png": "https://api.shipengine.com/v1/downloads/label-2135218.png",
                     *         "zpl": "https://api.shipengine.com/v1/downloads/label-2135218.zpl"
                     *       },
                     *       "form_download": {
                     *         "href": "https://api.shipengine.com/v1/downloads/form-2135218.pdf"
                     *       },
                     *       "qr_code_download": null,
                     *       "paperless_download": {
                     *         "href": "https://api.shipengine.com/v1/downloads/paperless-2135218",
                     *         "instructions": null,
                     *         "handoff_code": null
                     *       },
                     *       "insurance_claim": null,
                     *       "packages": []
                     *     }
                     */
                    "application/json": components["schemas"]["create_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_label_from_rate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Rate ID */
                rate_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_label_from_rate_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_label_from_rate_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_label_from_rate_shopper: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The rate selection strategy or custom rate shopper ID.
                 *
                 *     **Standard strategies:**
                 *     - `cheapest`: Lowest cost option
                 *     - `fastest`: Fastest option at the lowest price
                 *     - `best_value`: Lowest cost option arriving within 4 days
                 *
                 *     **Custom rate shopper:**
                 *     Pass a service collection GUID (e.g., `f47ac10b-58cc-4372-a567-0e02b2c3d479`)
                 *     to use a custom rate shopper configuration. The service collection must be
                 *     active and owned by the authenticated seller.
                 */
                rate_shopper_id: string;
            };
            cookie?: never;
        };
        /** @description Label creation details with inline shipment */
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_label_rate_shopper_request_body"];
            };
        };
        responses: {
            /**
             * @description Label created successfully using Rate Shopper. The response includes the
             *     selected carrier_id, service_code, and rate_shopper_id that was used.
             */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_label_rate_shopper_response_body"];
                };
            };
            /**
             * @description Bad Request. Possible causes:
             *     - Request body is missing
             *     - `rate_shopper_id` is not a valid standard strategy or GUID
             *     - Custom rate shopper not found (invalid GUID or not owned by seller)
             *     - Custom rate shopper is not active
             *     - No rates available for the shipment
             *     - Unable to resolve carrier and service using the specified custom rate shopper
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_label_from_shipping_rule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipping Rule ID */
                shipping_rule_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_label_from_shipping_rule_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_label_from_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_label_from_shipment_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_label_from_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_label_by_id: {
        parameters: {
            query?: {
                /** @example url */
                label_download_type?: components["schemas"]["label_download_type"];
            };
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_label_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_label_by_external_shipment_id: {
        parameters: {
            query?: {
                /** @example url */
                label_download_type?: components["schemas"]["label_download_type"];
            };
            header?: never;
            path: {
                /** @example 0bcb569d-1727-4ff9-ab49-b2fec0cee5ae */
                external_shipment_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_label_by_external_shipment_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_return_label: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_return_label_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_return_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_tracking_log_from_label: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_tracking_log_from_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    void_label: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["void_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    cancel_label_refund: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The refund cancellation was successful. Returns the updated label object. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cancel_refund_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_label_documents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_documents_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    register_label_document: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["register_document_request_body"];
            };
        };
        responses: {
            /** @description The document was registered successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["register_document_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_label_document: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
                /**
                 * @description The unique identifier of the document.
                 * @example 7f3c1b2a-9d4e-4f5a-8c6b-2e1d0a9b8c7d
                 */
                document_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The document was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["404_error_response"];
            409: components["responses"]["409_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    send_label_documents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Label ID */
                label_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The documents were sent to the carrier. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["send_documents_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
            /** @description The document service is temporarily unavailable. Try again later. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
        };
    };
    download_document: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The unique identifier of the document.
                 * @example 7f3c1b2a-9d4e-4f5a-8c6b-2e1d0a9b8c7d
                 */
                document_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The document file. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/pdf": string;
                    "image/png": string;
                };
            };
            404: components["responses"]["404_error_response"];
            /** @description The document is invalid and cannot be downloaded. */
            410: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The document is still being processed. Try again later. */
            425: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
            /** @description The document service is temporarily unavailable. Try again later. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
        };
    };
    create_netstamps: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_netstamps_labels_request_body"];
            };
        };
        responses: {
            /** @description The labels were created successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["multi_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_mailing_labels: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_mail_labels_request_body"];
            };
        };
        responses: {
            /** @description The labels were created successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["multi_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_envelope: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_envelope_label_request_body"];
            };
        };
        responses: {
            /** @description The label was created successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_label_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_manifests: {
        parameters: {
            query?: {
                /** @description Warehouse ID */
                warehouse_id?: components["schemas"]["se_id"];
                /**
                 * @description ship date start range
                 * @example 2018-09-23T15:00:00.000Z
                 */
                ship_date_start?: string;
                /**
                 * @description ship date end range
                 * @example 2018-09-23T15:00:00.000Z
                 */
                ship_date_end?: string;
                /**
                 * @description Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_start?: string;
                /**
                 * @description Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_end?: string;
                /** @description Carrier ID */
                carrier_id?: components["schemas"]["se_id"];
                /**
                 * @description Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
                 * @example 2
                 */
                page?: number;
                /**
                 * @description The number of results to return per response.
                 * @example 50
                 */
                page_size?: number;
                label_ids?: string[];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_manifests_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_manifest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_manifest_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_manifest_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_manifest_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Manifest Id */
                manifest_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_manifest_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_manifest_request_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The Manifest Request Id */
                manifest_request_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_manifest_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_package_types: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_package_types_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_package_type: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_package_type_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_package_type_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_package_type_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Package ID */
                package_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_package_type_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_package_type: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Package ID */
                package_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_package_type_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_package_type: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Package ID */
                package_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_scheduled_pickups: {
        parameters: {
            query?: {
                /** @description Carrier ID */
                carrier_id?: components["schemas"]["se_id"];
                /** @description Warehouse ID */
                warehouse_id?: components["schemas"]["se_id"];
                /**
                 * @description Only return scheduled pickups that were created on or after a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_start?: string;
                /**
                 * @description Only return scheduled pickups that were created on or before a specific date/time
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_end?: string;
                /**
                 * @description Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
                 * @example 2
                 */
                page?: number;
                /**
                 * @description The number of results to return per response.
                 * @example 50
                 */
                page_size?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_pickups_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    schedule_pickup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["schedule_pickup_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["schedule_pickup_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_pickup_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                pickup_id: components["schemas"]["pickup_resource_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_pickup_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_scheduled_pickup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                pickup_id: components["schemas"]["pickup_resource_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Return the `pickup_id` of the scheduled pickup that was successfully deleted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["delete_pickup_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    calculate_rates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["calculate_rates_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "rate_response": {
                     *         "rates": [
                     *           {
                     *             "rate_id": "se-7766853",
                     *             "rate_type": "shipment",
                     *             "carrier_id": "se-426451",
                     *             "zone": 5,
                     *             "package_type": "package",
                     *             "shipping_amount": {
                     *               "currency": "usd",
                     *               "amount": 59.07
                     *             },
                     *             "insurance_amount": {
                     *               "currency": "usd",
                     *               "amount": 0
                     *             },
                     *             "confirmation_amount": {
                     *               "currency": "usd",
                     *               "amount": 0
                     *             },
                     *             "other_amount": {
                     *               "currency": "usd",
                     *               "amount": 20.63
                     *             },
                     *             "rate_details": [
                     *               {
                     *                 "rate_detail_type": "shipping",
                     *                 "carrier_description": "Shipping",
                     *                 "carrier_billing_code": "BaseServiceCharge",
                     *                 "carrier_memo": "",
                     *                 "amount": {
                     *                   "currency": "usd",
                     *                   "amount": 59.07
                     *                 },
                     *                 "billing_source": "Carrier"
                     *               },
                     *               {
                     *                 "rate_detail_type": "additional_fees",
                     *                 "carrier_description": "Surge Fee",
                     *                 "carrier_billing_code": "434",
                     *                 "carrier_memo": "",
                     *                 "amount": {
                     *                   "currency": "usd",
                     *                   "amount": 0.96
                     *                 },
                     *                 "billing_source": "Carrier"
                     *               },
                     *               {
                     *                 "rate_detail_type": "estimated_duties",
                     *                 "carrier_description": "Duties and Taxes (Estimated)",
                     *                 "carrier_billing_code": "",
                     *                 "carrier_memo": "",
                     *                 "amount": {
                     *                   "currency": "usd",
                     *                   "amount": 0
                     *                 },
                     *                 "billing_source": "DutiesTax"
                     *               },
                     *               {
                     *                 "rate_detail_type": "estimated_taxes",
                     *                 "carrier_description": "Duties and Taxes (Estimated)",
                     *                 "carrier_billing_code": "",
                     *                 "carrier_memo": "",
                     *                 "amount": {
                     *                   "currency": "usd",
                     *                   "amount": 13.43
                     *                 },
                     *                 "billing_source": "DutiesTax"
                     *               },
                     *               {
                     *                 "rate_detail_type": "estimated_import_fees",
                     *                 "carrier_description": "Duties and Taxes (Estimated)",
                     *                 "carrier_billing_code": "",
                     *                 "carrier_memo": "",
                     *                 "amount": {
                     *                   "currency": "usd",
                     *                   "amount": 6.24
                     *                 },
                     *                 "billing_source": "DutiesTax"
                     *               }
                     *             ],
                     *             "delivery_days": 1,
                     *             "guaranteed_service": true,
                     *             "estimated_delivery_date": "2026-05-26T12:00:00Z",
                     *             "carrier_delivery_days": "Tuesday 5/26 by 12:00 PM",
                     *             "delivery_prediction": {
                     *               "delivery_date": "2026-05-26",
                     *               "confidence_level": "high"
                     *             },
                     *             "ship_date": "2026-05-22T00:00:00Z",
                     *             "negotiated_rate": false,
                     *             "service_type": "UPS Worldwide Express®",
                     *             "service_code": "ups_worldwide_express",
                     *             "trackable": true,
                     *             "carrier_code": "ups",
                     *             "carrier_nickname": "UPS by ShipStation (USD)",
                     *             "carrier_friendly_name": "UPS",
                     *             "validation_status": "valid",
                     *             "warning_messages": [],
                     *             "error_messages": []
                     *           }
                     *         ],
                     *         "invalid_rates": [],
                     *         "rate_request_id": "se-1224263",
                     *         "shipment_id": "se-11501596",
                     *         "status": "completed",
                     *         "errors": []
                     *       },
                     *       "shipment_id": "se-11501596",
                     *       "ship_date": "2026-05-22T00:00:00Z",
                     *       "created_at": "2026-05-22T23:19:47.493Z",
                     *       "modified_at": "2026-05-22T23:19:47.087Z",
                     *       "shipment_status": "pending"
                     *     }
                     */
                    "application/json": components["schemas"]["calculate_rates_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    compare_bulk_rates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["compare_bulk_rates_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["compare_bulk_rates_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    estimate_rates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["estimate_rates_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["estimate_rates_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_rate_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Rate ID */
                rate_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_rate_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_rate_shoppers: {
        parameters: {
            query?: {
                /**
                 * @description Filter rate shoppers by type. When set to `custom`, only
                 *     seller-created rate shoppers are returned (excludes defaults).
                 *     When omitted, both default and custom rate shoppers are returned.
                 */
                type?: "custom";
                /**
                 * @description Field to sort results by. Sorting only applies to custom rate
                 *     shoppers; default rate shoppers are always listed first.
                 */
                sort_by?: "name" | "created_at";
                /** @description Sort direction. */
                sort_dir?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["rate_shopper_list_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_rate_shopper_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The rate shopper identifier. Can be one of:
                 *
                 *     **Default rate shoppers (strategy name):**
                 *     - `cheapest`: Lowest cost option
                 *     - `fastest`: Fastest option at the lowest price
                 *     - `best_value`: Lowest cost option arriving within 4 days
                 *
                 *     **Custom rate shoppers:**
                 *     A UUID (e.g., `f47ac10b-58cc-4372-a567-0e02b2c3d479`) identifying
                 *     a seller-created rate shopper.
                 */
                rate_shopper_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["rate_shopper_response"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    service_points_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["get_service_points_request"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_service_points_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    service_points_get_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Carrier code
                 * @example stamps_com
                 */
                carrier_code: string;
                /**
                 * @description A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
                 * @example CA
                 */
                country_code: string;
                /** @example 614940 */
                service_point_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_service_point_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_shipments: {
        parameters: {
            query?: {
                shipment_status?: components["schemas"]["shipment_status"];
                /** @description Batch ID */
                batch_id?: components["schemas"]["se_id"];
                /**
                 * @description Filter shipments by tag name. Returns only shipments that have been assigned the specified tag. You can filter by one tag at a time. Tags are arbitrary strings used to categorize shipments (e.g., "Priority", "Fragile", "International").
                 * @example Letters_to_santa
                 */
                tag?: string;
                /**
                 * @description Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_start?: string;
                /**
                 * @description Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_end?: string;
                /**
                 * @description Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)
                 * @example 2019-03-12T19:24:13.657Z
                 */
                modified_at_start?: string;
                /**
                 * @description Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)
                 * @example 2019-03-12T19:24:13.657Z
                 */
                modified_at_end?: string;
                /**
                 * @description Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
                 * @example 2
                 */
                page?: number;
                /**
                 * @description The number of results to return per response.
                 * @example 50
                 */
                page_size?: number;
                /** @description Sales Order ID */
                sales_order_id?: string;
                /** @description Controls the sort order of the query. */
                sort_dir?: components["schemas"]["sort_dir"];
                /** @example modified_at */
                sort_by?: components["schemas"]["shipments_sort_by"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_shipments_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_shipments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_shipments_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_shipments_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_shipment_by_external_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 0bcb569d-1727-4ff9-ab49-b2fec0cee5ae */
                external_shipment_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_shipment_by_external_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    parse_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["parse_shipment_request_body"];
            };
        };
        responses: {
            /** @description Returns the parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["parse_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_shipment_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_shipment_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_shipment_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["update_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    cancel_shipments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_shipment_rates: {
        parameters: {
            query?: {
                /**
                 * @description Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
                 * @example 2019-03-12T19:24:13.657Z
                 */
                created_at_start?: string;
            };
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_shipment_rates_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    shipments_update_tags: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_shipments_tags_request_body"];
            };
        };
        responses: {
            /** @description NoContent */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    assign_user_to_shipments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["assign_user_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["assign_user_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    hold_shipments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["hold_shipments_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["hold_shipments_response_body"];
                };
            };
            /** @description The request was a partial success. Some shipments were not held; see `errors`. */
            207: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["hold_shipments_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    restore_shipments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["restore_shipments_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["restore_shipments_response_body"];
                };
            };
            /** @description The request was a partial success. Some shipments were not restored; see `errors`. */
            207: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["restore_shipments_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    hold_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["hold_shipment_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["hold_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    restore_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["restore_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    split_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["split_shipment_request_body"];
            };
        };
        responses: {
            /** @description The shipment was split. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "shipment_id": "se-202902255",
                     *       "new_shipment_ids": [
                     *         "se-202902301"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["split_shipment_response_body"];
                };
            };
            /**
             * @description The request contained errors, or the shipment can't be split. The `error_code` identifies the reason:
             *
             *     | `error_code` | Reason |
             *     |---|---|
             *     | `invalid_field_value` | A value in the request can't be used. For example, a quantity is larger than the quantity on the shipment, an item is listed twice in the same new shipment, or no items would stay on the original shipment. |
             *     | `invalid_identifier` | An `item_id` isn't on the shipment. |
             *     | `invalid_status` | The shipment has already shipped, has been cancelled, or is in another status that can't be split. |
             *     | `sales_order_link_required` | The shipment isn't linked to a sales order. |
             *     | `multiple_sales_orders` | The items you're moving belong to more than one sales order. |
             *     | `bring_your_own_label_not_supported` | The shipment comes from a marketplace that supplies its own shipping labels. |
             *     | `unspecified` | The split was rejected for another reason. The `message` explains why. |
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The `shipment_id` does not identify a shipment on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    merge_shipments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "shipment_ids": [
                 *         "se-202902301",
                 *         "se-202902302"
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["merge_shipments_request_body"];
            };
        };
        responses: {
            /** @description The shipments were merged. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "shipment_id": "se-202902255",
                     *       "merged_shipment_ids": [
                     *         "se-202902301",
                     *         "se-202902302"
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["merge_shipments_response_body"];
                };
            };
            /**
             * @description The request contained errors, or the shipments can't be merged. The `error_code` identifies the reason:
             *
             *     | `error_code` | Reason |
             *     |---|---|
             *     | `invalid_field_value` | A value in the request can't be used. For example, `shipment_ids` contains only the shipment in the URL, or contains `null`. |
             *     | `invalid_status` | One of the shipments has already shipped, has been cancelled, or is in another status that can't be merged. |
             *     | `sales_order_link_required` | One of the shipments isn't linked to a sales order. |
             *     | `bring_your_own_label_not_supported` | One of the shipments comes from a marketplace that supplies its own shipping labels. |
             *     | `unspecified` | The merge was rejected for another reason. The `message` explains why. |
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            /** @description The shipment in the URL, or one of the shipments in `shipment_ids`, does not identify a shipment on this account. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    shipments_list_tags: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tag_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    tag_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
                tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tag_shipment_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    untag_shipment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
                tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_shipment_documents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_documents_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    register_shipment_document: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["register_document_request_body"];
            };
        };
        responses: {
            /** @description The document was registered successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["register_document_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_shipment_document: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
                /**
                 * @description The unique identifier of the document.
                 * @example 7f3c1b2a-9d4e-4f5a-8c6b-2e1d0a9b8c7d
                 */
                document_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The document was deleted successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: components["responses"]["404_error_response"];
            409: components["responses"]["409_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_shipment_label_documents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Shipment ID */
                shipment_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_shipment_labels_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_tags: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_tags_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_tag: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_tag_request_body"];
            };
        };
        responses: {
            /** @description The requested object creation was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_tag_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_tag_by_name: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_tag_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_tag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    rename_tag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tag_name: components["schemas"]["tag_name"];
                new_tag_name: components["schemas"]["tag_name"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    tokens_get_ephemeral_token: {
        parameters: {
            query?: {
                /** @description Include a redirect url to the application formatted with the ephemeral token. */
                redirect?: components["schemas"]["redirect"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tokens_get_ephemeral_token_response_body.yaml"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_tracking_log: {
        parameters: {
            query?: {
                /**
                 * @description A shipping carrier, such as `fedex`, `dhl_express`, `stamps_com`, etc.
                 * @example stamps_com
                 */
                carrier_code?: string;
                /**
                 * @description The tracking number associated with a shipment
                 * @example 9405511899223197428490
                 */
                tracking_number?: string;
                /** @description Carrier ID */
                carrier_id?: components["schemas"]["se_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_tracking_log_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    start_tracking: {
        parameters: {
            query?: {
                /**
                 * @description A shipping carrier, such as `fedex`, `dhl_express`, `stamps_com`, etc.
                 * @example stamps_com
                 */
                carrier_code?: string;
                /**
                 * @description The tracking number associated with a shipment
                 * @example 9405511899223197428490
                 */
                tracking_number?: string;
                /** @description Carrier ID */
                carrier_id?: components["schemas"]["se_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    stop_tracking: {
        parameters: {
            query?: {
                /**
                 * @description A shipping carrier, such as `fedex`, `dhl_express`, `stamps_com`, etc.
                 * @example stamps_com
                 */
                carrier_code?: string;
                /**
                 * @description The tracking number associated with a shipment
                 * @example 9405511899223197428490
                 */
                tracking_number?: string;
                /** @description Carrier ID */
                carrier_id?: components["schemas"]["se_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_warehouses: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_warehouses_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_warehouse: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["create_warehouse_request_body"];
            };
        };
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["create_warehouse_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_warehouse_by_id: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Warehouse ID */
                warehouse_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was a success. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["get_warehouse_by_id_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_warehouse: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Warehouse ID */
                warehouse_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_warehouse_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_warehouse: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Warehouse ID */
                warehouse_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_warehouse_settings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Warehouse ID */
                warehouse_id: components["schemas"]["se_id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["update_warehouse_settings_request_body"];
            };
        };
        responses: {
            /** @description The request was successful. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    list_checkout_rates_configs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The list of checkout rates configurations. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["list_checkout_rates_configs_response_body"];
                };
            };
            500: components["responses"]["500_error_response"];
        };
    };
    create_checkout_rates_config: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "options": [
                 *         {
                 *           "name": "Standard Shipping",
                 *           "type": "live_rate",
                 *           "services": [
                 *             {
                 *               "carrier_id": "se-1234567",
                 *               "service_code": "usps_priority_mail"
                 *             }
                 *           ],
                 *           "fee_mode": "add",
                 *           "fee_percentage": 10,
                 *           "fallback_mode": "flat_rate",
                 *           "fallback_rate_amount": 5,
                 *           "fallback_rate_currency": "USD"
                 *         },
                 *         {
                 *           "name": "Free Shipping",
                 *           "type": "free"
                 *         },
                 *         {
                 *           "name": "Flat Rate Shipping",
                 *           "type": "flat_rate",
                 *           "amount": 4.99,
                 *           "currency": "USD"
                 *         }
                 *       ],
                 *       "shared_settings": {
                 *         "calculation_method": "by_volume",
                 *         "dimensions_by_weight": [
                 *           {
                 *             "max_weight": {
                 *               "value": 10,
                 *               "unit": "pound"
                 *             },
                 *             "default_dimensions": {
                 *               "length": 12,
                 *               "width": 9,
                 *               "height": 6,
                 *               "unit": "inch"
                 *             }
                 *           }
                 *         ]
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["create_checkout_rates_config_request_body"];
            };
        };
        responses: {
            /** @description The checkout rates configuration was created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["checkout_rates_config_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_checkout_rates_config: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested checkout rates configuration. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["checkout_rates_config_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    add_checkout_rates_option: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["checkout_rates_option_request_body"];
            };
        };
        responses: {
            /** @description The delivery option was added. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["checkout_rates_option_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            409: components["responses"]["409_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_checkout_rates_option: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
                /** @description The unique identifier of the delivery option. */
                option_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested delivery option. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["checkout_rates_option_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    update_checkout_rates_option: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
                /** @description The unique identifier of the delivery option. */
                option_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["checkout_rates_option_request_body"];
            };
        };
        responses: {
            /** @description The delivery option was updated. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["checkout_rates_option_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            409: components["responses"]["409_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    delete_checkout_rates_option: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration. */
                config_id: string;
                /** @description The unique identifier of the delivery option. */
                option_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The delivery option was marked inactive. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["empty_response_body"];
                    "application/json": components["schemas"]["empty_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    calculate_checkout_rates: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the checkout rates configuration to quote against. */
                config_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "ship_to": {
                 *         "address_type": "residential",
                 *         "address_line1": "525 S Winchester Blvd",
                 *         "city_locality": "San Jose",
                 *         "state_province": "CA",
                 *         "postal_code": "95128",
                 *         "country_code": "US"
                 *       },
                 *       "items": [
                 *         {
                 *           "name": "T-Shirt",
                 *           "quantity": 2,
                 *           "price": 19.99,
                 *           "weight": {
                 *             "value": 8,
                 *             "unit": "ounce"
                 *           },
                 *           "dimensions": {
                 *             "length": 10,
                 *             "width": 8,
                 *             "height": 1,
                 *             "unit": "inch"
                 *           }
                 *         }
                 *       ],
                 *       "currency": "USD"
                 *     }
                 */
                "application/json": components["schemas"]["calculate_checkout_rates_request_body"];
            };
        };
        responses: {
            /** @description The calculated rates for the cart. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["calculate_checkout_rates_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    get_checkout_rates_quote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of a previously calculated rate quote. */
                quote_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The requested rate quote. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["checkout_rates_quote_response_body"];
                };
            };
            404: components["responses"]["404_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
    create_delivery_predictions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "from_country_code": "US",
                 *       "from_postal_code": "78701",
                 *       "to_country_code": "US",
                 *       "to_postal_code": "90210",
                 *       "ship_date": "2026-07-01",
                 *       "delivery_options": [
                 *         {
                 *           "carrier_details": {
                 *             "carrier_code": "ups",
                 *             "service_code": "ups_ground"
                 *           }
                 *         },
                 *         {
                 *           "carrier_details": {
                 *             "carrier_code": "fedex",
                 *             "service_code": "fedex_express_saver"
                 *           }
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["delivery_predictions_request_body"];
            };
        };
        responses: {
            /** @description The predictions for the requested lane, and a warning for every combination that could not be predicted. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "delivery_predictions": [
                     *         {
                     *           "ship_date": "2026-07-01",
                     *           "delivery_date": "2026-07-04",
                     *           "confidence_level": "high",
                     *           "carrier_details": {
                     *             "carrier_code": "ups",
                     *             "service_code": "ups_ground"
                     *           }
                     *         }
                     *       ],
                     *       "warnings": [
                     *         {
                     *           "carrier_details": {
                     *             "carrier_code": "fedex",
                     *             "service_code": "fedex_express_saver"
                     *           },
                     *           "message": "Carrier and service combination is unsupported."
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["delivery_predictions_response_body"];
                };
            };
            400: components["responses"]["400_error_response"];
            500: components["responses"]["500_error_response"];
        };
    };
}
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
