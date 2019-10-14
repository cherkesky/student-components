
const students = [
  {
      name: "Chris Miller",
      subject: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      subject: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      subject: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      subject: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      subject: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      subject: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      subject: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      subject: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      subject: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      subject: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      subject: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      subject: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

const studentContainer = document.querySelector("#container")


for (let i=0; students.length; i++) {
  let studentComponent = ""
  if (students[i].score >= 60) {
    debugger
       studentComponent = `
       <div class="student">
      <h1 class="xx-large passing">${students[i].name} </h1>
     <section class="bordered dashed section--padded">${students[i].subject} </section>
      <aside class="pushRight"> ${students[i].info} </aside>
      </div>
       `
       studentContainer.innerHTML +=  studentComponent;
      } else {
        studentComponent = `
    <div class="student">
   <h1 class="xx-large failing">${students[i].name} </h1>
  <section class="bordered dashed section--padded">${students[i].subject} </section>
   <aside class="pushRight"> ${students[i].info} </aside>
   </div>
    `
    studentContainer.innerHTML +=  studentComponent;
}
}