# API | MQTT

MQTT (MQ Telemetry Transport or Message Queue Telemetry Transport) is an ISO standard (ISO/IEC PRF 20922)[2] publish-subscribe-based "lightweight" messaging protocol for use on top of the TCP/IP protocol. MQTT defines 5 methods such as, **Connect, Disconnect, Subscribe, Unsubscribe, and Publish**.

* Connect: Waits for a connection to be established with the server.
* Disconnect: Waits for the MQTT client to finish any work it must do, and for the TCP/IP session to disconnect.
* Subscribe: Waits for completion of the Subscribe or UnSubscribe method.
* Unsubscribe Requests the server unsubscribe the client from one or more topics.
* Publish: Returns immediately to the application thread after passing the request to the MQTT client.  

Below is the illustration of MQTT communication architecture:
![mqtt](/../assets/mqttflow.jpg)

## Topic
MQTT communication is based on Topic. Topic is used to distinguish between each communication channel. The oneM2M technical specification provides the topics that has to be used for MQTT communication. The serialized request has to be pushed on a specific request topic and the response will be given to a different predefined topic.

### Publish/Request Topic
The request topic is formulated as the following:  
`/oneM2M/req/your-access-key/antares-cse/choose-a-serialization-format`

### Subscribe/Response Topic
The response topic is constructed based on the request topic.  
`/oneM2M/resp/antares-cse/your-access-key/choose-a-serialization-format`

**Note**  
The `your-access-key` correspond to the originator provided into the X-M2M-Origin header. Then the last information of the topic is serialization format of the request. The `choose-a-serialization-format` parameter can have 2 values:

* `xml` for XML format
* `json` for JSON format

## MQTT Broker

| Host | Port |
|------|------|
| `platform.antares.id` | 1883 |

## MQTT Payload
The payload published into the topic is the serialized RequestPrimitive or ResponsePrimitive. The RequestPrimitive correspond to all information needed to formulate a oneM2M request and receive the response into the ResponsePrimitive.

The main parameters are:

| Parameter short name | Parameter name | Usage |
|----------------------|----------------|-------|
| `fr` | From | Originator of the request |
| `to` | To   | Destination of the request |
| `op` | Operation | The operation to perform `(CREATE, RETRIEVE, ...)` |
| `rqi` | Request Identifier | Correlation ID for the request and response |
| `pc` | Primitive Content | Content of the request (e.g., ressource to be created) |
| `ty` | Type | The type of the resource to be created |
| `rsc` | Response Status Code | The oneM2M response status code |

The operation values are:

| Operation | Value |
|-----------|-------|
| `CREATE`  | 1     |
| `RETRIEVE`  | 2     |
| `UPDATE`  | 3     |
| `DELETE`  | 4     |
| `NOTIFY`  | 5     |
| `CREATE`  | 6     |

## Device
### Create
Request  

**Topic**  

`/oneM2M/req/your-access-key/antares-cse/json`  

**Payload**  
```json
{
  "m2m:rqp" : {
    "fr" : "your-access-key",
    "to" : "/antares-cse/antares-id/your-application-name",
    "op" : 1,
    "rqi": 123456,
    "pc": {
      "m2m:cnt" : {
        "rn": "device-name"
      }
    },
    "ty": 3
  }
}
```
### Delete
Request  

**Topic**  

`/oneM2M/req/your-access-key/antares-cse/json`  

**Payload**  
```json
{
  "m2m:rqp" : {
    "fr" : "your-access-key",
    "to" : "/antares-cse/antares-id/your-application-name/your-device-name",
    "op" : 4,
    "rqi": 123456
  }
}
```

## Data of Device
### Store
Request  

**Topic**  

`/oneM2M/req/your-access-key/antares-cse/json`  

**Payload**  
```json
{
  "m2m:rqp": {
    "fr": "your-access-key",
    "to": "/antares-cse/antares-id/your-application-name/your-device-name",
    "op": 1,
    "rqi": 123456,
    "pc": {
      "m2m:cin": {
        "cnf": "message",
        "con": "{\"your-first-data\":the-integer-value,\"your-second-data\":\"the-string-data\"}"
      }
    },
    "ty": 4
  }
}
```
