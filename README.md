# node-truck-delivery-api
REST API for calucating least trucks needed to move packages and the cost of it

## Docs
Working to solve the problem with ghpages, documentation will be available at [DOCS](https://wooojek.github.io/node-truck-delivery-api)

## Pricing
Pricing available at [heroku](https://floating-sea-78939.herokuapp.com/pricing.png)

## Deployed to heroku
### example POST /delivery:
```
curl -X POST \
  https://floating-sea-78939.herokuapp.com/delivery \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"data": [
		{ "id": "OTHER-ID-2", "weight": 500 },
		{ "id": "CLIENT-ID-3", "weight": 300 }
	]
}'
```

### example POST response:
```
{
    "trucks": [
        {
            "load": [
                {
                    "id": "OTHER-ID-2",
                    "weight": 500
                },
                {
                    "id": "CLIENT-ID-3",
                    "weight": 300
                }
            ],
            "truckID": "f672a071-b68a-4f42-a207-4bb9682bbb00"
        }
    ],
    "price": 7.5,
    "createdAt": "2018-10-22T07:53:31.300Z"
}
```

### example GET /delivery/history:
```
curl -X GET \
  https://floating-sea-78939.herokuapp.com/delivery/history \
  -H 'Postman-Token: 8003398f-f8c3-4f8d-812d-9d24c854a8ba' \
  -H 'cache-control: no-cache'
```

### example GET response:
```
[
    {
        "trucks": [
            {
                "load": [
                    {
                        "id": "OTHER-ID-2",
                        "weight": 500
                    },
                    {
                        "id": "CLIENT-ID-3",
                        "weight": 300
                    }
                ],
                "truckID": "93d097b6-57ac-4083-b9a2-0eff0d60a952"
            }
        ],
        "_id": "5bcd7c4e2d8dc200154aa6e1",
        "price": 7.5,
        "createdAt": "2018-10-22T07:29:18.424Z",
        "__v": 0
    }
]
```