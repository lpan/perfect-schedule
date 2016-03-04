# [Perfect Schedule](http://schedule-perfect.me)
Create your perfect semester schedule with easiness. A free, opensource and
extensible mock schedule maker.

##### Note
This project is still in an early phase of development! 

### What exactly is [Perfect Schedule](http://schedule-perfect.me)
Perfect schedule is an online schedule maker to help college and CEGEP students to get the best 
semester schedule possible. Different from many other online schedule generators, Perfect Schedule is not simply
a static schedule maker app that resorts on course data manually entered by the user. Perfect Schedule is an 
intelligent schedule maker connected to a rapidly growing database. To get a list of your perfect schedules, simply
tell Perfect Schedule what school do you go to and what courses are you going to take (and your preferences of course).
That is it!

### Contribute
Our ultimate goal is to support all colleges in the world! Expand our database or improve our app if you could!

#### Roadmap

##### Client side
- [x] Static pages with basic information
- [x] Input box capable of fetching suggestions from DB via AJAX
- [ ] '/${school}' page -> ['browse courses', 'see available schedules']
- [ ] '/generate' page fetches courses + renders available schedules.<sup>1</sup>

##### Server and Database
- [x] Extensible (has a configuration file keeps track of a list of supported school)
- [x] Feed course data to DB -> if a school is in config file but its collections are empty
- [x] Handle GET '/api/suggest' request.
- [x] Handle GET '/api/search' request.

##### School Data
- [x] [Marianopolis College](http://github.com/lorix-lpan/converter-marianopolis)
- [ ] Vanier College
- [ ] Dawson College
- [ ] John Abbott College

##### Bugs and Issues
- [ ] Unable to add react-motion for better UX due to [this](http://stackoverflow.com/questions/35787069/react-each-child-in-an-array-or-iterator-should-have-a-unique-key-prop-when-m/35788275#35788275) error.
- [ ] ...

1: The course compatibility test will be done on the client side


#### Data submission

Your school's course data is crucial to Perfect Schedule! To get the course data of your school, you can either talk 
to your school's official or just hack your school's course offering PDF. However, the final data to be submitted has
to meet the following requirements:

* 4 seperate JSON files => ['teachers.json', 'codes.json', 'courses.json', 'details.json']
* Each file consists of an array of Objects
* Make a pull request to [this](https://github.com/lorix-lpan/perfect-schedule-schools) repo to submit your data (Make sure to read the README first)

If you choose to convert the PDF manually (it is fun), here is a list of PDF converters

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
