# Air Tree n Tree Recommendation Service

## API Spec

### Request

    `GET api/recommendations/:roomid`

### Response

| Field | Type |
|--------| -------- |
| id | String |
| imageURLs | Array |
| title | String |
| size | String |
| description | String
| price | Number |
| reviewScore | Number |
| reviewCount | Number |


```
    {
        "id": "724837428328934",
        "imageURLs": [
            "listings/1234/photo/001.jpg",
            "listings/1234/photo/002.jpg",
            "listings/1234/photo/003.jpg"
        ],
        "title": "Josh Elders Amazing Tree House",
        "size": "3 bedrooms",
        "description": "Beach Front Tree-House in Cancun",
        "price": 400
        "reviewScore": 45
        "reviewCount": 14
    }
```

