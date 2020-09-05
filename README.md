![terminate zoom session](./assets/cigi-timer.jpeg)

## timer-server

Uses Apollo/GraphQL/Nodejs to accept requests to terminate a zoom-session and sends these notifications into [CockroachDB](https://www.cockroachlabs.com/)

## cURL Examples

### Get all existing terminations
```
curl 'http://localhost:4000/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"query GetTerminations {\n  terminations {\n    zoomId,\n    ttl\n  }\n}\n# mutation CreateTermination {\n#   addTermination(zoomId: \"987654321\", ttl: 1599175200) {\n#     zoomId\n#     ttl\n#   }\n# }\n"}' --compressed
```

*Example output*
```
{
  "data": {
    "terminations": [
      {
        "id": "2fa1cee5-41fd-4880-8812-dd40dfbb587b",
        "zoomId": "987653245345",
        "terminateTime": "2020-09-05T00:55:10.445Z"
      },
      {
        "id": "46ab0752-8e2f-41ad-9415-4b46c848d33c",
        "zoomId": "987653245346",
        "terminateTime": "2020-09-05T00:55:16.357Z"
      },
      {
        "id": "8191aa3c-8213-4a72-98a1-91e4f6acbbd5",
        "zoomId": "987653245345",
        "terminateTime": "2020-09-05T00:55:22.093Z"
      }
    ]
  }
}
```

### Create a termination (TODO: UPDATE!)
```
curl 'http://localhost:4000/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"mutation CreateTermination {\n  addTermination(zoomId: \"987653245345\", timeLeftMinutes: 10) {\n    id\n    zoomId\n    terminateTime\n  }  \n}"}' --compressed
```

*Example output*
```
{
  "data": {
    "addTermination": {
      "id": "f8545885-d68c-44ed-8909-5368b46c3352",
      "zoomId": "987653245345",
      "terminateTime": "2020-09-05T00:56:08.049Z"
    }
  }
}
```

We recommend piping the output into `jq`.

### Using the playground

When running the server locally, we can access http://localhost:4000/ and run graphQL queries directly in the playground instead of using cURL.

Examples:

![create a termination](./assets/playground_create.png)

![get existing terminations](./assets/playground_get.png)


## Motivation

Per [Cigi Tech Design](https://gitlab.com/tikal-fuse/fuseday2020/group2/test/-/wikis/Cigi-tech-design) timer-server accepts graphQL requests from cigi-server and based on their input adds notifications to terminate existing zoom sessions at a specific timestamp.

## Installation

Assuming cockroachDB and the other relevant micro-services are already present. 

Simply do: `npm install`

## Running

`npm start`

## API Reference

Requirements detailed [here](https://gitlab.com/tikal-fuse/fuseday2020/group2/test/-/issues/7)

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)