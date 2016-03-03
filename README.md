# Perfect Schedule
Create your perfect semester schedule with easiness. A free, opensource and
extensible mock schedule generator.

[schedule-perfect.me](http://schedule-perfect.me)

##### Note
This project is still in an early phase of development! 


### PDF conversion
A list of PDF converters

* Marianopolis College:
  * [converter-marianopolis](https://github.com/lorix-lpan/converter-marianopolis)
  * [mariocoursepdfparser](https://github.com/sunbinyuan/mariocoursespdfparser)


### API reference

#### Search course
To get a list of detailed course objects

###### Note
The search option has to be either empty or match **exactly**

GET '/api/search':
```javascript
  school: string.match(/([a-z]|\-)+/).isRequired // ex. marianopolis
  course: string // ex. CALCULUS I
  teacher: string.match(/[A-Z].*,\ [A-Z].*/) // ex. Doe, John
  code: string // ex. SSS-LAQ
```

###### Example
```bash
curl localhost:8000/api/search?school=marianopolis&code=SSS-LAQ
```

=> returns a list of all SSS-LAQ courses at Marianopolis

#### Get Suggestions
To emulate Google suggestion.

###### Note
By default, all suggestions return maximum 5 data objects per request

GET '/api/suggest';
```javascript
{
  school: string.match(/([a-z]|\-)+/).isRequired // ex. 'marianopolis'
  type: string.match(/(teacher|course|code)/).isRequired // ex. 'teacher'
  val: string // ex. 'ab'
}
```

###### Example
```bash
curl schedule-perfect.me/api/suggest?school=marianopolis&type=teacher&val=ob
```
=> returns a list of teacher objects whose name contains "ob"
