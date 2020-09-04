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

Per [Cigi Tech Design](https://gitlab.com/tikal-fuse/fuseday2020/group2/test/-/wikis/Cigi-tech-design) timer-server accepts graphQL requests from cigi-server and based on their input adds notifications to terminate existing zoom sessions at a specific timestamp.

## Installation

Assuming cockroachDB and the other relevant micro-services are already present. 

Simply do: `npm install`

## API Reference

Requirements detailed [here](https://gitlab.com/tikal-fuse/fuseday2020/group2/test/-/issues/7)

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)