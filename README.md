## timer-server

Uses Node/GraphQL to accept requests to add terminations to a zoom-session and updates them into CockroachDB

## cURL Examples

### Get all existing terminations
```
curl 'http://localhost:4000/terminations' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"query GetTerminations {\n  terminations {\n    zoomId,\n    ttl\n  }\n}\n# mutation CreateTermination {\n#   addTermination(zoomId: \"987654321\", ttl: 1599175200) {\n#     zoomId\n#     ttl\n#   }\n# }\n"}' --compressed
```

### Create a termination (TODO: UPDATE!)
```
curl 'http://localhost:4000/terminations' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"query GetTerminations {\n  terminations {\n    zoomId,\n    ttl\n  }\n}\n# mutation CreateTermination {\n#   addTermination(zoomId: \"987654321\", ttl: 1599175200) {\n#     zoomId\n#     ttl\n#   }\n# }\n"}' --compressed
```

We recommend piping the output into `jq`.

## Motivation

Per [Cigi Tech Design][1] timer-server accepts graphQL requests from cigi-server and based on their input adds notifications to terminate existing zoom sessions at a specific timestamp.

## Installation

Assuming cockroachDB and the other relevant micro-service are already present. Simply do: `npm install`

## API Reference

Requirements detailed [here][2]

## Tests

Describe and show how to run the tests with code examples.

## License

[ISC][3]

[1]:[https://gitlab.com/tikal-fuse/fuseday2020/group2/test/-/wikis/Cigi-tech-design]
[2]: [https://gitlab.com/tikal-fuse/fuseday2020/group2/test/-/issues/7]
[3]: [https://en.wikipedia.org/wiki/ISC_license]