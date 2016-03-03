# Perfect Schedule
As seen on [schedule-perfect.me](http://schedule-perfect.me)


Create your perfect semester schedule with easiness. A free, opensource and
extensible mock schedule generator.

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

###### Note
By default, all suggestions return maximum 5 data objects per request

* GET '/api/suggest', school, type, val => serve a list of (teacher|course|code)

###### Example
```bash
curl schedule-perfect.me/api/suggest?school=marianopolis&type=teacher&val=ob
```
* => returns a list of teacher objects whose name contains "ob"
* type -> ['teacher', 'course', 'code']
