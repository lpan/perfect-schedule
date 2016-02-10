# Perfect Schedule
Create your perfect semester schedule with easiness. A free, opensource and
extensible mock schedule generator.

## Ideas
* AngularJs app at the frontend
* Backed with an RESTful api written in Express
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

### The backend
* A RESTful Express API

##### Route
* GET '/' => Serve "index.html"

### The frontend
* AngularJs App

## License
GNU GENERAL PUBLIC LICENSE VERSION 3
