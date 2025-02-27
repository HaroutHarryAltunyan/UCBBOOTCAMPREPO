import { useState } from "react";
// Import our custom useStudentContext hook to have access to the initial state
import { useStudentContext } from "../utils/StudentContext";

export default function StudentList() {
  // TODO: Import the students, actions and majors from our custom useStudentContext hook
  const { students, addStudent, removeStudent, majors, buildings } =
    useStudentContext();

  // Initialize state for new students and new student majors
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentMajor, setNewStudentMajor] = useState("");
  const [newBuilding, setNewBuilding] = useState("");

  return (
    <div>
      {students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          // TODO: Update the button's onClick so that it will remove students
                          // Your code here
                          removeStudent(student.id);
                        }}
                      >
                        <span role="img" aria-label="close">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                onChange={(e) => setNewStudentName(e.target.value)}
                placeholder="New student name..."
                type="text"
                value={newStudentName}
              />

              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {/* // TODO: Map over each major and return an <option> element for each with all the necessary attributes*/}
                {majors.map((major) => (
                  <option value={major} key={major}>
                    {major}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setNewBuilding(e.target.value)}
                value={newBuilding}
              >
                <option>Choose building...</option>
                {/* // TODO: Map over each major and return an <option> element for each with all the necessary attributes*/}
                {buildings.map((myVar) => (
                  <option value={myVar} key={myVar}>
                    {myVar}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  // TODO: Write an onClick for the button so that it will add students
                  // Your code here
                  addStudent({
                    name: newStudentName,
                    major: newStudentMajor,
                    building: newBuilding,
                  });
                  setNewStudentMajor("");
                  setNewStudentName("");
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
