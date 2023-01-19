

```bash
# To Build and Run The App
$ docker build .
$ docker-compose build
$ docker-compose up -d
```

```bash
# Api Documentation:

#Place Orders
#Method:Post
#Path: localhost:3000/restaurant
#Example_Body:
{
    "orders": [
        {
            "id": 1,
            "topping": ["topping1","topping2"]
        },
         {
            "id": 2,
            "topping": ["topping1","topping2"]
        },
         {
            "id": 3
        },
         {
            "id": 4
        },
         {
            "id": 5
        },
         {
            "id": 6,
            "topping": ["topping1","topping2"]
        },
         {
            "id": 7
        },
         {
            "id": 8,
            "topping": ["topping1","topping2"]
        }
    ]
}
```

