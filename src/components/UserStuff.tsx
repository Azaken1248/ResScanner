import { useLocation } from 'react-router-dom';
import '../stuff.css';
function UserStuff() {
  const { state } = useLocation();
  const {
    name = 'Error',
    email = 'Error',
    mobile = 'Error',
    course = 'Error',
    graduation = 'Error',
    position = 'Error',
    skills = 'Error',
    summary = 'Error',
  } = state || {};
  return (
    <div className="everything">
      <div className="box">
        <table>
          <tbody>
            <tr>
              <td className="bold">Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className="bold">Email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className="bold">Mobile</td>
              <td>{mobile}</td>
            </tr>
            <tr>
              <td className="bold">Course</td>
              <td>{course}</td>
            </tr>
            <tr>
              <td className="bold">Graduation</td>
              <td>{graduation}</td>
            </tr>
            <tr>
              <td className="bold">Position</td>
              <td>{position}</td>
            </tr>
            <tr>
              <td className="bold">Skills</td>
              <td>{skills}</td>
            </tr>
            <tr>
              <td className="bold">Summary</td>
              <td>{summary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserStuff;
