#!/bin/bash

mkdir -p openapi
curl 'http://gnosis-devnet.neontest.xyz:8000/cfg/' > openapi/tx-service.json
npx openapi-typescript openapi/tx-service.json --output openapi/tx-service.ts
