class Student {
  name;
  standard;

  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
  }

  markAttandance() {
    console.log(`hey there ${this.name} is Present :: Normal Attandance`);
    }

    grades() {
      console.log(`grade ${this.name} are nice`);
    }
  }
//  Child Class

class SportCaptain extends Student {
  constructor(name, standard, tool) {
    super(name, standard);
    this.favTool = tool
}

markAttandance() {
  console.log(`hey there ${this.name} is Present :: Sport Captain Attandance`);
}

routine() {
  console.log("ROUTINE of regrous things");
}
}


const ankit = new Student("ankit", 10);
const virat = new SportCaptain("viratkohli", 12, "bat");

// ------------ Imheritance Before 2015 ------------------

function StudentFunction(name, student) {
  this.name = name;
  this.standard = standard;
  this.country = "INDIAN"


  this.markAttandance = function () {
    console.log(`hey there ${this.name} is Present :: Normal Attandance`);
    }

    this.grades = function() {
      console.log(`grade ${this.name} are nice`);
    }
  
}

























































































