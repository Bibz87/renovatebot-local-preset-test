# renovatebot-local-preset-test

Testing RenovateBot's local preset support in packageRules. To reproduce the
issue, run Renovate's Docker container:

``` shell
docker run \
  --rm \
  -v $(pwd)/global_config.js:/usr/src/app/config.js \
  -e RENOVATE_GITHUB_COM_TOKEN=github_pat_... \
  -e RENOVATE_TOKEN=github_pat_... \
  -e LOG_LEVEL=DEBUG \
  renovate/renovate:41.95.0
```
