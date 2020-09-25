<!-- Generator: Widdershins v4.0.1 -->

<h1 id="openapi-spec-demo">OpenApi Spec Demo v1.0.0</h1>

> Scroll down for example requests and responses.

Some random service tht does some random stuff

Base URLs:

* <a href="http://localhost">http://localhost</a>

<h1 id="openapi-spec-demo-customers">Customers</h1>

Endpoints relating to customer records

## post__customer

`POST /customer`

*Creates a new customer*

> Body parameter

```json
{
  "email": "user@example.com",
  "height": 50
}
```

<h3 id="post__customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|true|none|
|» height|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

<h3 id="post__customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request processed successfully|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request. Possibly missing required params|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="post__customer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-spec-demo-miscellaneous">Miscellaneous</h1>

Endpoints that don't have anything to do with users.

## get__ping

`GET /ping`

*Endpoint to check whether service is healthy*

Used by the AWS ELB healthcheck to see if service is healthy. Also used by cypress tests, to ensure mocked server is ready before we run actual tests.

> Example responses

> 200 Response

```json
{
  "response": "pong"
}
```

<h3 id="get__ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request processed successfully|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="get__ping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» response|string|false|none|What do you get when you ping? A pong.|

<aside class="success">
This operation does not require authentication
</aside>

