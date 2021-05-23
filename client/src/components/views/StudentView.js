import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/StudentView.css";

const StudentView = (props) => {
    const {student} = props;

     //waiting for campus array to be populated
    if (student.campus === undefined){
        return <div>Loading...</div>
    }
    //no students
    let hasCampus = student.campus !== null;

    console.log(hasCampus);
    //console.log(student.campus);
    return (
        <div>
            <h1>{student.firstname} {student.lastname}</h1>
            <img src={student.imageUrl} alt='student-pic' />
            {
                (!hasCampus) ? <p>This student is not currently registered to any campus.</p>:(
                
                <Link to={`/campus/${student.campus.id}`}>
                    <p>{student.campus.name}</p>
                </Link>
                ) 
            }
            <p>{student.email}</p>
            <p>{student.gpa}</p>
        </div>
    )

}

StudentView.propTypes = {
    student: PropTypes.array.isRequired,
};

export default StudentView;