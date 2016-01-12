# Your Perfect Schedule
Create your perfect schedule with easiness. A free, opensource and
extensible scheduling app.

### Basic Features and Functions
* Be able to parse the course offering list (pdf) **DONE**
* Frontend heavy application (computation on the client side)
* RESTful API only serves raw data in json format
* Client app generates schedules according to user inputs (preferences)
* Course data can be added by the server administrator or uploaded by
  the users

### Some more features
##### The backend
* RESTful API
* Serves data corresponding to the school selected. **eg.** serves
  marianopolis course offering when marianopolis is selected
* Handle POST json. A list of courses offered can also be uploaded
  manually by the users if the course offering list is absent or 
  unable to be parsed easily.
* If course offering is available and parsable, the list can be 
  manually converted into json objects and stored into the database
  by the server administrator
* Express + Mongodb

##### The frontend
* Handle most of the computation
* Fetch data from the server
* Generate schedules according to user's preferences
* Javscript or its alternatives (no Dart :P )
* Angularjs or Angular 2.0

## License
GNU GENERAL PUBLIC LICENSE VERSION 3
