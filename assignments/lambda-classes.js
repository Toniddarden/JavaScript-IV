// CODE here for your Lambda Classes
// We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// Lambda personnel can be broken down into three different types of people.
// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors
// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
//  -----------------------------------------------  Person

// Person

// First we need a Person class. This will be our base-class
// Person receives name age location all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    console.log(
      `Hello my name ${this.name} , I am from ${
        this.location
      } where name and location are the object's own props.`
    );
  }
}

const fred = new Person({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});
console.log(fred);
fred.speak();

const jaye = new Person({
  name: "Jaye",
  location: "Collingdale",
  age: 7,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the little ladies`
});
console.log(jaye);
jaye.speak();

const robby = new Person({
  name: "Robby",
  location: "Darby",
  age: 10,
  favLanguage: "Python",
  specialty: "back-end",
  catchPhrase: `Don't forget the little gentelmen`
});
console.log(robby);
robby.speak();

// ---------------------------------------------    Instructor

// Instructor

// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(InstructorAttributes) {
    super(InstructorAttributes);
    this.specialty = InstructorAttributes.specialty;
    this.favLanguage = InstructorAttributes.favLanguage;
    this.catchPhrase = InstructorAttributes.catchPhrase;
  }
  demo(subject = this.favLanguage) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(subject = this.favLanguage) {
    console.log(`${this.name} receives a perfect score on ${subject}`);
  }
}

const pat = new Instructor({
  name: "Pat",
  location: "Yeadon",
  age: 61,
  favLanguage: "JavaScript",
  specialty: "back-end",
  catchPhrase: `Don't forget the MomMom's`,
  subject: "CS"
});
console.log(pat);
pat.demo();

const ashley = new Instructor({
  name: "Ashley",
  location: "Boothwyn",
  age: 31,
  favLanguage: "Ruby",
  specialty: "Front-end",
  catchPhrase: `Don't forget the Middle sista's`,
  subject: "CS"
});
console.log(ashley);
ashley.grade(this.Student);

const jennifer = new Instructor({
  name: "Jennifer",
  location: "Aldan",
  age: 37,
  favLanguage: "C#",
  specialty: "FullStack",
  catchPhrase: `Don't forget the older sista's`,
  subject: "CS"
});
console.log(jennifer);
jennifer.demo();
// ----------------------------------------------     Student

// Student

// Now we need some students!
// Student uses the same attributes that have been set up by Person

// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']

// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Person {
  constructor(StudentAttributes) {
    super(StudentAttributes);
    this.previousBackground = StudentAttributes.previousBackground;
    this.className = StudentAttributes.className;
    this.favSubjects = StudentAttributes.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(favSubject => console.log(favSubject));
  }
  PRAssignment(subject = this.favSubjects) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject = this.favSubjects) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const toni = new Student({
  name: "Toni",
  location: "Philly",
  age: 25,
  favLanguage: "JavaScript",
  specialty: "Fullstack",
  catchPhrase: `Don't forget Me`,
  previousBackground: "Teacher",
  favSubjects: "Javascript"
});
console.log(toni);
toni.PRAssignment();

const gerald = new Student({
  name: "Gerald",
  location: "North Philly",
  age: 60,
  favLanguage: "Java",
  specialty: "Fullstack",
  catchPhrase: `Don't forget the Cowboy`,
  previousBackground: "Driver",
  favSubjects: "Java"
});
console.log(gerald);
gerald.sprintChallenge();

const memmom = new Student({
  name: "Me Mom",
  location: "North Carolina",
  age: 90,
  favLanguage: "C++",
  specialty: "Gaming",
  catchPhrase: `Don't forget the OG`,
  previousBackground: "CEO",
  favSubjects: "C++/C#"
});
console.log(memmom);
memmom.sprintChallenge();

// ----------------------------------------------        Project Manager
// Project Manager

// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManagers extends Instructor {
  constructor(ProjectManagersAttributes) {
    super(ProjectManagersAttributes);
    this.gradClassName = ProjectManagersAttributes.gradClassName;
    this.favInstructor = ProjectManagersAttributes.favInstructor;
  }
  standUp(channel = "Slack") {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(subject = this.specialty) {
    console.log(`${this.name} debugs ${toni.name}'s code on ${subject}.`);
  }
}

const sean = new ProjectManagers({
  name: "Sean",
  gradClassName: "CS1",
  favInstructor: "Pat",
  location: "Canada",
  age: 41,
  specialty: "back-end",
  catchPhrase: `Don't forget the PM`,
  subject: "CS"
});

console.log(sean);
sean.standUp();
sean.debugsCode();

const ivan = new ProjectManagers({
    name: "Ivan",
    gradClassName: "CS2",
    favInstructor: "Ashley",
    location: "South America",
    age: 29,
    specialty: "front-end",
    catchPhrase: `Don't forget the other PM`,
    subject: "CS2"
  });
  
  console.log(ivan);
  ivan.standUp();
  ivan.debugsCode();