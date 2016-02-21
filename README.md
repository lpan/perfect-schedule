# Perfect Schedule
Create your perfect semester schedule with easiness. A free, opensource and
extensible mock schedule generator.

## Ideas
* Isomorphic MERN app
* Single Page App at the frontend
* Backed with a RESTful api written in Express
* All school data is represented as an array of course objects
* Users can submit data of a certain school to the database

Example Data format:
```javascript
var courses = [
  {
    name: "GENERAL BIOLOGY I",
    teacher: "John Doe",
    classes: [
      {
        day: "T"
        room: "A101",
        start: "12:00",
        end: "14:00"
      },
      {
        // ...
      }
    ]
  },
  {
    //...
  }
];
```

## The backend
* A RESTful Express API

##### Route
* GET '/' => Serve "index.html"
* GET '/search', $COLLEGE, $YEAR => Serve data.json


## The frontend
* A Single Page App

##### Behaviours


## License
GNU GENERAL PUBLIC LICENSE VERSION 3
