# Environment

If you specify `development`, extracts preferentially using config versions published to the development environment in the Sensible app. The extraction runs all configs in the doc type before picking the best fit. For each config, falls back to production version if no development version of the config exists.


## Values

| Name          | Value         |
| ------------- | ------------- |
| `Production`  | production    |
| `Development` | development   |