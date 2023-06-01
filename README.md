# Renty API 🚘

You can CRUD this API using the RentCar API from the Renty application. The data obtained includes data on car names, car rental prices, car colors, car pictures, car types, car status, and car brands

## Tech Stack

**Client:** React, TailwindCSS

**Server:** Laravel

## API Documentation

The REST API to the rent car app is described below.

### Get all data

```
  GET /api/rentcars
```

| Parameter | Type     | Description                                                                                                                                                |
| :-------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`   | `string` | **Optional**. Returns a car data, but there is a limit in taking it, such as if there is only one limit, only one car data will be displayed.Rentcar model |
| `type`    | `string` | **Optional**. Returns car data according to its type, and here the car types are divided into automatic and manual.                                        |
| `q`       | `string` | **Optional**. Return car data according to its name.                                                                                                       |

#### Response

```{
    "status": 200,
    "message": "success",
    "datas": {
        "current_page": 1,
        "data": [
            {
                "id": 21,
                "car_name": "Agya",
                "merk": "Honda",
                "image": "public/rentcar-images/pINazRb6yALVaJ4OSOJTQC4on97TUY0ntxVz5oT6.png",
                "price": 100000,
                "type": "Automatic",
                "color": "Silver",
                "status": "Available",
                "created_at": "2023-05-28T16:10:13.000000Z",
                "updated_at": "2023-05-28T16:10:13.000000Z"
            },
        ],
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://localhost:8000/api/rentcars?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "http://localhost:8000/api/rentcars",
        "per_page": 20,
        "prev_page_url": null,
        "to": 10,
        "total": 10
    },
    "length": 10
}
```

### Get Spesific Car

```
  GET /api/rentcars/{id}
```

| Parameter | Type     | Description                                                     |
| :-------- | :------- | :-------------------------------------------------------------- |
| `id`      | `string` | **Required**. It is used to find specific data from the car id. |

#### Response

```
{
    "status": 200,
    "message": "success",
    "data": {
        "id": 21,
        "car_name": "Agya",
        "merk": "Honda",
        "image": "public/rentcar-images/pINazRb6yALVaJ4OSOJTQC4on97TUY0ntxVz5oT6.png",
        "price": 100000,
        "type": "Automatic",
        "color": "Silver",
        "status": "Available",
        "created_at": "2023-05-28T16:10:13.000000Z",
        "updated_at": "2023-05-28T16:10:13.000000Z"
    }
}
```

### Add Car Data

```
  POST /api/rentcars/
```

| Parameter  | Type     | Status                                                                                                                              |
| :--------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `car_name` | `string` | **Required** The car_name column is mandatory and has a string value.                                                               |
| `merk`     | `string` | **Required** The brand column shows the brand of the car. The brand column has a string value and is required.                      |
| `image`    | `file`   | **Required** The image column shows a picture of the car to be rented out. The image column has a file value and extension jpg, png |
| `price`    | `string` | **Required**. The price column uses the rental price of each rented car. This column has an integer value.                          |
| `type`     | `string` | **Required**. There are 2 values that can be entered like `Automatic` oe `Manual` case sensitive must be Capitalize                 |
| `color`    | `string` | **Required**. The color column shows the color of the car to be rented out. This column has a string value.                         |
| `status`   | `string` | **Required**. There are 2 values that can be entered like `Booked` oe `Available` case sensitive must be Capitalize                 |

#### Response

```
{
    "status": 201,
    "message": "Success",
    "data": {
        "car_name": "Fuqi",
        "merk": "Nissan",
        "image": "public/rentcar-images/GrqglnqrrVWlm5s9cyv7yBkRbXOf9tIocMfEyUKg.jpg",
        "price": "780000",
        "type": "Manual",
        "color": "Silver",
        "status": "Booked"
    }
}
```

### Update Car Data

```
  PUT /api/rentcars/{id}
```

| Parameter | Type     | Description                                                              |
| :-------- | :------- | :----------------------------------------------------------------------- |
| `id`      | `string` | **Required**. To search for specific car data that will be modified data |

#### Response

```
{
    "status": 202,
    "message": "Update successfully",
    "data": {
        "id": 22,
        "car_name": "Avanza Turbo",
        "merk": "Toyota",
        "image": "public/rentcar-images/znpMH2FZUU3JmB54wNrcc8IcL3Op7HlKrQPbaet4.png",
        "price": "150000",
        "type": "Automatic",
        "color": "Silver",
        "status": "Available",
        "created_at": "2023-05-28T16:10:49.000000Z",
        "updated_at": "2023-06-01T08:09:40.000000Z"
    }
}
```

### Delete Car Data

```
  DELETE /api/rentcars/{id}
```

| Parameter | Type     | Description                                                             |
| :-------- | :------- | :---------------------------------------------------------------------- |
| `id`      | `string` | **Required**. To search for specific car data that will be deleted data |

#### Response

```
{
    "status": 200,
    "message": "delete successful."
}
```

## How to clone ?

**Backend**

- Clone this project using https or ssh
- So the api is using Laravel

```
composer install
npm install
```

- Copy `.env.example` file to `.env` on the root folder. You can type copy `.env.example .env` if using command prompt Windows or cp `.env.example .env` if using terminal, Ubuntu
- adjust the values that are in the `env` file like db name, db username, db password
- Set key in `.env` using `php artisan key:generate`
- Migrate database using `php artisan migrate`
- After everything has been set, the final step is to type the code below

```
php artisan serve
```

**Frontend**

- To install react js package using this code

```
npm install
```

## Screenshots

![Homepage](./screenshot/home.jpeg)
![Card Page](./screenshot/card.jpeg)

## Authors

- [Muhammad Nurul Afif Maliki](https://www.github.com/mafif21)
- [Andrian Saputra](https://www.github.com/mafif21)
- [Alvin Renaldy Novanza](https://www.github.com/mafif21)
- [Adnan Nauli Harahap](https://www.github.com/mafif21)
- [Muhammad Rayhan Kurniawan](https://www.github.com/mafif21)
