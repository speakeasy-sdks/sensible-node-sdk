# Validation


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `description`                                                   | *string*                                                        | :heavy_minus_sign:                                              | Description of the validation                                   | Dollar amount should be more than $100                          |
| `message`                                                       | *string*                                                        | :heavy_minus_sign:                                              | Messages about why the validation failed                        | Missing prerequisites: broker.email                             |
| `severity`                                                      | [ValidationSeverity](../../models/shared/validationseverity.md) | :heavy_minus_sign:                                              | Severity of the failing validation (error, warning, skipped)    | warning                                                         |