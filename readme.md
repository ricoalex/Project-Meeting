# API

```
https://project-meeting.herokuapp.com/api/
```

**News Routes:**

| Routes | Method | Description     |
| ------ | ------ | --------------- |
| /users | POST   | Add User        |
| /time  | GET    | Get Time        |
| /time  | POST   | Add Master Time |
| /room  | POST   | Add Master Room |
| /room  | GET    | Get Data Room   |
| /trx   | POST   | Add Meeting     |

## **Create User**

- **URL:** `/users`
- **Method:** `POST`
- **URL Params:** `None`
- **Parameter Respone:**
  - **Status:** `200` **Content:**
  ```
  {
    "name": "Alexander Joharico",
    "email": "rico@123.com",
    "password": "qwe1234"
  }
  ```
  - **Result**
  ```
  {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE2ZmNiZThiYjE0MjEzMzE4YTAzZDJkIn0sImlhdCI6MTYzNDcxNjY0OCwiZXhwIjoxNjM1MDc2NjQ4fQ.5494j8tyRBdpyzs3OUEu4AJHD_IYFRhp5-XOIaqsrQE"
  }
  ```
- **Error Respone:**
  - **Status:**`500`**Content:**
  ```
      [
          'message' : 'internal server error'
      ]
  ```
  - **Status:**`400`**Content:**
  ```
      [
          'msg' : 'Email Sudah Terdaftar'
      ]
  ```

## **CREATE Room**

- **URL:** `/room`
- **Method:** `POST`
- **URL Params:** `None`
- **Parameter Respone:**

  ```
    {

        "room_name": "MEETING-1",
        "desc": "-",
    },

  ```

- **Error Respone:**

  - **Status:**`500`**Content:**

  ```
      [
          'message' : 'internal server error'
      ]
  ```

  - **Status:**`200`**Content:**

  ```
       {
        "_id": "616ed493b3f4a01ef0a709dd",
        "room_name": "MEETING-1",
        "desc": "-",
        "__v": 0
    }
  ```

## **GET Room**

- **URL:** `/room`
- **Method:** `GET`
- **URL Params:** `None`
- **Parameter Respone:**
  - **Status:** `200` **Content:**
  ```
  [
    {
        "_id": "616ed493b3f4a01ef0a709dd",
        "room_name": "MEETING-1",
        "desc": "-",
        "__v": 0
    },
    {
        "_id": "616ed4c3b3f4a01ef0a709df",
        "room_name": "MEETING-2",
        "desc": "-",
        "__v": 0
    }
    ]
  ```
- **Error Respone:**
  - **Status:**`500`**Content:**
  ```
      [
          'message' : 'internal server error'
      ]
  ```

## **Create Time**

- **URL:** `/time`
- **Method:** `POST`
- **URL Params:** `None`
- **Parameter Respone:**

  ```
    {
        "time_meeting" : "11:00",
        "desc": "-"
    }
  ```

  - **Status:** `200` **Content:**

  ```
  {
    "_id": "616edc13ba84a23368fbbd89",
    "time_meeting": "11:00",
    "desc": "-",
    "__v": 0
  }
  ```

- **Error Respone:**
- **Status:**`400`**Content:**
  ```
      [
          'error' : 'Error Case'
      ]
  ```
  - **Status:**`500`**Content:**
  ```
      [
          'message' : 'internal server error'
      ]
  ```

## **GET Time**

- **URL:** `/time`
- **Method:** `GET`
- **URL Params:** `None`
- **Parameter Respone:**

  - **Status:** `200` **Content:**

  ```
  [
    {
        "_id": "616edbf4ba84a23368fbbd85",
        "time_meeting": "09:00",
        "desc": "-",
        "__v": 0
    },
    {
        "_id": "616edc0cba84a23368fbbd87",
        "time_meeting": "10:00",
        "desc": "-",
        "__v": 0
    },
    {
        "_id": "616edc13ba84a23368fbbd89",
        "time_meeting": "11:00",
        "desc": "-",
        "__v": 0
    },
    {
        "_id": "616edc21ba84a23368fbbd8b",
        "time_meeting": "12:00",
        "desc": "-",
        "__v": 0
    },
    {
        "_id": "616edc2aba84a23368fbbd8d",
        "time_meeting": "13:00",
        "desc": "-",
        "__v": 0
    },
    {
        "_id": "616edc2fba84a23368fbbd8f",
        "time_meeting": "14:00",
        "desc": "-",
        "__v": 0
    },
    {
        "_id": "616edc34ba84a23368fbbd91",
        "time_meeting": "15:00",
        "desc": "-",
        "__v": 0
    }
    ]

  ```

- **Error Respone:**
  - **Status:**`500`**Content:**
  ```
      [
          'message' : 'internal server error'
      ]
  ```

## **CREATE Schedule**

- **URL:** `/trx`
- **Method:** `POST`
- **URL Params:** `None`
- **Parameter Respone:**

  ```
    {
        "idroom" : "616ed493b3f4a01ef0a709dd",
        "necessary" : "Meeting keuangan",
        "date_use" : "2021-10-21",
        "start_time" : "09:00",
        "finish_time" : "10:00"
    }

  ```

- **Error Respone:**

- **Status:**`400`**Content:**

  ```
      [
          'message' : 'internal server error'
      ]
  ```

  - **Status:**`500`**Content:**

  ```
      ERORR CASE
  ```

  - **Status:**`200`**Content:**

  ```
       {
        "date_trx": "2021-10-20T07:43:03.230Z",
        "status": 1,
        "reason": "-",
        "_id": "616fc887bb14213318a03d27",
        "idroom": "616ed493b3f4a01ef0a709dd",
        "necessary": "Meeting keuangan",
        "date_use": "2021-10-21",
        "start_time": "09:00",
        "finish_time": "10:00",
        "__v": 0
        }
  ```
