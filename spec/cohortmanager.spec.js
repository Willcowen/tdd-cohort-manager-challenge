const CohortManager = require("../src/cohortmanager.js");
const Student = require("../src/student.js");

describe("cohortManager", () => {
  let cohortManager
  const student1 = new Student(
    1,
    "Jimmy",
    "Smith",
    "jsmith",
    "jsmith@gmail.com"
  );
  const student2 = new Student(
    2,
    "Steve",
    "Bruce",
    "sbruce",
    "sbruce@gmail.com"
  );
  const student3 = new Student(
    3,
    "Brian",
    "Turing",
    "bturing",
    "bturing@gmail.com"
  );
  const student4 = new Student(
    4,
    "Chris",
    "Payne",
    "cpayne",
    "cpayne@gmail.com"
  );
  const student5 = new Student(
    5,
    "Tom",
    "Jackson",
    "tjackson",
    "tjackson@gmail.com"
  );
  const student6 = new Student(6, "Ben", "Brown", "bbrown", "bbrown@gmail.com");
  beforeEach(() => {
    cohortManager = new CohortManager()
  });

  it("adding students to a list", () => {
    //setup
    const expected = student1
    //execute
    cohortManager.createStudent(student1)
    const result = cohortManager.getStudentList()

    //verify
    expect(result).toEqual([expected])
  });

  it("adding multiple students", () => {
    //setup
    const expected = [student1, student2, student3]
    //execute
    cohortManager.createStudent(student1)
    cohortManager.createStudent(student2)
    cohortManager.createStudent(student3)
    const result = cohortManager.getStudentList()
    //verify
    expect(result).toEqual(expected);
  });

  it("creating a cohort", () => {
    //setup
    const expected = {
      name: "CohortOne",
      students: [],
      cohortCapacity: 24,
    };
    //execute
    const result = cohortManager.createCohort("CohortOne");
    //verify
    expect(result).toEqual(expected)
  });
  it("creating multiple cohorts", () => {
    //setup
    const expected = [
      {
        name: "CohortOne",
        students: [],
        cohortCapacity: 24,
      },
      {
        name: "CohortTwo",
        students: [],
        cohortCapacity: 24,
      },
    ]
    cohortManager.createCohort("CohortOne")
    cohortManager.createCohort("CohortTwo")
    //execute
    const result = cohortManager.getAllCohorts()
    //verify
    expect(result).toEqual(expected)
  });
  it("Search for a cohort by it's name", () => {
    //setup
    const expected = 
      {
        name: "CohortOne",
        students: [],
        cohortCapacity: 24,
      }
    cohortManager.createCohort("CohortOne")
    cohortManager.createCohort("CohortTwo")
    //execute
    const result = cohortManager.searchCohort('CohortOne')
    //verify
    expect(result).toEqual(expected)
  });
  it("Search for a cohort that doesn't exist!", () => {
    //setup
    const expected = 'This Cohort does not exist!'
    cohortManager.createCohort("CohortOne")
    //execute
    const result = cohortManager.searchCohort('CohortThree')
    //verify
    expect(result).toEqual(expected)
  });
  it("Remove a cohort by it's name", () => {
    //setup
    const expected = [
      {
        name: "CohortOne",
        students: [],
        cohortCapacity: 24,
      }
    ]
    cohortManager.createCohort("CohortOne")
    cohortManager.createCohort("CohortTwo")
    //execute
    cohortManager.removeCohort('CohortTwo')
    const result = cohortManager.getAllCohorts()
    //verify
    expect(result).toEqual(expected)
  });
  it("Add student to a cohort", () => {
    //setup
    const expected = [
      {
        name: "CohortOne",
        students: [student1],
        cohortCapacity: 24
      }
    ]
    cohortManager.createStudent(student1)
    cohortManager.createCohort("CohortOne")
    //execute
    cohortManager.addStudentToCohort("Jimmy", "CohortOne")
    const result = cohortManager.getAllCohorts()
    //verify
    expect(result).toEqual(expected)
  });
  it("Add multiple students to a cohort", () => {
    //setup
    const expected = [
      {
        name: "CohortOne",
        students: [student1, student2, student3],
        cohortCapacity: 24
      }
    ]
    cohortManager.createStudent(student1)
    cohortManager.createStudent(student2)
    cohortManager.createStudent(student3)
    cohortManager.createCohort("CohortOne")
    //execute
    cohortManager.addStudentToCohort("Jimmy", "CohortOne")
    cohortManager.addStudentToCohort("Steve", "CohortOne")
    cohortManager.addStudentToCohort("Brian", "CohortOne")
    const result = cohortManager.getAllCohorts()
    //verify
    expect(result).toEqual(expected)
  });
  // it("Removing a student from a specific cohort", () => {
  //   //setup
  //   const expected = [
  //     {
  //       name: "CohortOne",
  //       students: [student1, student3],
  //       cohortCapacity: 24
  //     }
  //   ]
  //   cohortManager.createStudent(student1)
  //   cohortManager.createStudent(student2)
  //   cohortManager.createStudent(student3)
  //   cohortManager.createCohort("CohortOne")
  //   cohortManager.addStudentToCohort("Jimmy", "CohortOne")
  //   cohortManager.addStudentToCohort("Steve", "CohortOne")
  //   cohortManager.addStudentToCohort("Brian", "CohortOne")
  //   //execute
  //   cohortManager.removeStudentFromCohort(2, "CohortOne")
  //   const result = cohortManager.getAllCohorts()
  //   //verify
  //   expect(result).toEqual(expected)
  // });

});