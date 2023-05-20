/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, addCampus, deleteCampus, fetAllStudents, allStudents, editStudent, enrolledStudents, unenrolledStudents} = props;
  // student that are able to enroll
  let enrolledStudents = allStudents.filter(student => student.campusId === campusId);

  // student that can't enroll
  let unenrolledStudents = allStudents.filter(student => student.campusId !== campusId);
  
  // Render a single Campus view with list of its students
  // if the enrollStudent != 0, enroll the new student to campus
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <br></br>
      <Link to={`/editcampus/${campus.id}`}>
          <Button>Edit Campus</Button>
      </Link> 
      <br></br>

      <Link to={`/deletecampus/${campus.id}`}>
          <Button>Delete Campus</Button>
      </Link> 
      <br></br>

      {enrolledStudents.length !== 0}
      <div>
        <h2>current student</h2>
        {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <Button>Student enroll in campus</Button>             
          </div>
        );
      })}

      </div>
      <br></br>

      {enrolledStudents.length !== 0}
      <div>
        <h2>current student</h2>
        {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <Button>Student unenroll in campus</Button>             
          </div>
        );
      })}

      </div>
      <br></br>


      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>             
          </div>
        );
      })}
    </div>
  );
};

export default CampusView;