# Perfect Schedule
Create your perfect semester schedule with easiness. A free, opensource and
extensible mock schedule generator.

## Ideas
* Isomorphic MERN app
* Single Page App at the frontend
* Backed with a RESTful api written in Express
* Users can submit data of a certain school => save to the db if the data is
  valid

### PDF conversion
A list of PDF converters

* Marianopolis College:
  * [converter-marianopolis](https://github.com/lorix-lpan/converter-marianopolis)
  * [mariocoursepdfparser](https://github.com/sunbinyuan/mariocoursespdfparser)


### API reference

#### Search course
* GET '/api/search', school, code, teacher, course => serve courses

###### Example
```bash
curl localhost:8000/api/search?school=marianopolis&code=SSS-LAQ
```
* => returns a list of all SSS-LAQ courses at Marianopolis

#### Get Suggestions
* GET '/api/suggest', school, type, val => serve a list of (teacher|course|code)

###### Example
```bash
curl localhost:8000/api/suggest?school=marianopolis&type=teacher&val=ob
```
* => returns a list of teacher objects whose name contains "ob"
* type -> ['teacher', 'course', 'code']
