# AWS Lambda Layer with curl

[![NPM version](https://badge.fury.io/js/cdk-lambda-layer-curl.svg)](https://badge.fury.io/js/cdk-lambda-layer-curl)
[![PyPI version](https://badge.fury.io/py/cdk-lambda-layer-curl.svg)](https://badge.fury.io/py/cdk-lambda-layer-curl)
![Release](https://github.com/neilkuan/cdk-lambda-layer-curl/workflows/Release/badge.svg)

Usage:

```ts
// CurlLayer bundles the curl in a lambda layer
import { CurlLayer } from 'cdk-lambda-layer-curl';

declare const fn: lambda.Function;
fn.addLayers(new CurlLayer(this, 'CurlLayer'));
```

```ts
import { CurlLayer } from 'cdk-lambda-layer-curl'
import * as lambda from 'aws-cdk-lib/aws-lambda'

new lambda.Function(this, 'MyLambda', {
  code: lambda.Code.fromAsset(path.join(__dirname, 'my-lambda-handler')),
  handler: 'index.main',
  runtime: lambda.Runtime.PYTHON_3_9,
  layers: [new CurlLayer(this, 'CurlLayer')]
});
```