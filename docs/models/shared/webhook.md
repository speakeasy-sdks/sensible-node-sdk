# Webhook

Specifies to return extraction results to the defined webhook as soon as they're complete, so you don't have to poll for results status. Sensible also calls this webhook on error.


## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `payload`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Information additional to the API response, for example a UUID for verification.     | info extra to the default extraction payload                                         |
| `url`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | Webhook destination. Sensible will POST to this URL when the extraction is complete. | https://example.com/example_webhook_url                                              |