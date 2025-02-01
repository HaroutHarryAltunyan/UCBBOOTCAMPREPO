// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();

const canGiveInformation = (state) => ({
  information: () => {
    console.log(state.title, state.description);
  },
});

const canMeetInPerson = (state) => ({
  meet: () => {
    console.log(state.location, state.name);
  },
});

const createLesson = () => {
  const state = {
    title: "Module 17 - Computer Science",
    description: "CS for JS",
  };

  return { ...canGiveInformation(state) };
};

const csForJS = createLesson();
csForJS.information();

const createSeminar = (location, name, title, description) => {
  const state = {
    location,
    name,
    title,
    description,
  };

  return { ...canGiveInformation(state), ...canMeetInPerson(state) };
};
