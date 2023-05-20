import { Button } from "@material-ui/core";

/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student, deleteStudent } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.campus.name}</h3>
      {student.campus.name !== null}
        <Link to={`/campus/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
        </Link>

    <h1>Email: {student.email}</h1>
    <h1>GPA: {student.gpa}</h1>

    <Link to={`/editStudent/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
          <Button>Edit Student</Button>
        </Link>
        <br></br>

    <Link to={`/deleteStudent/${student.id}`}>
      <Button>Delete Student onClick(){ => deleteStudent(studentId)} </Button>
    </Link> 
      <br></br>

    </div>
  );

};

export default StudentView;