function Greeting() {
  // welcomeStudent is a helper function which takes in a studentName parameter and uses it to alert a string
  const welcomeStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`);
  };

  const students = [
    {
      id: 1,
      name: "Mary",
    },
    {
      id: 2,
      name: "Cole",
    },
    {
      id: 3,
      name: "Rebecca",
    },
  ];

  return (
    <div className="container text-center">
      <h2>Welcome the Students!</h2>
      <div className="list-group">
        {students.map((student) => {
          return (
            <button
              key={student.id}
              onClick={() => {
                welcomeStudent(student.name);
              }}
              className="list-group-item list-group-item-action"
            >
              {student.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Greeting;
