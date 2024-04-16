import { useNavigate } from 'react-router-dom';
import '../stuff.css';

function Recruiter() {
  const navigate = useNavigate();
  const leaderboard = [
    [
      'John Doe',
      'john.doe@example.com',
      '123-456-7890',
      'Computer Science',
      '2023',
      'Software Engineer',
      'JavaScript, React, Node.js',
      'Experienced software engineer with a passion for building scalable web applications. Proficient in JavaScript ecosystem including React and Node.js.',
    ],
    [
      'Alice Smith',
      'alice.smith@example.com',
      '987-654-3210',
      'Electrical Engineering',
      '2022',
      'Software Engineer',
      'Verilog, FPGA, Circuit Design',
      'Electrical engineer specializing in hardware design. Skilled in Verilog, FPGA programming, and circuit design.',
    ],
    [
      'David Lee',
      'david.lee@example.com',
      '456-789-0123',
      'Data Science',
      '2024',
      'Software Engineer',
      'Python, Pandas, SQL',
      'Data enthusiast with a strong background in Python and data analysis. Proficient in using Pandas for data manipulation and SQL for database querying.',
    ],
    [
      'Emily Johnson',
      'emily.johnson@example.com',
      '789-012-3456',
      'Mechanical Engineering',
      '2023',
      'Software Engineer',
      'AutoCAD, SolidWorks, Finite Element Analysis',
      'Mechanical engineer specializing in CAD design. Experienced in AutoCAD and SolidWorks with knowledge of Finite Element Analysis.',
    ],
    [
      'Michael Brown',
      'michael.brown@example.com',
      '234-567-8901',
      'Business Administration',
      '2022',
      'Software Engineer',
      'Digital Marketing, SEO, Social Media Management',
      'Marketing professional with expertise in digital marketing strategies. Skilled in SEO optimization, social media management, and content marketing.',
    ],
    [
      'Sarah Wilson',
      'sarah.wilson@example.com',
      '890-123-4567',
      'Finance',
      '2024',
      'Software Engineer',
      'Financial Modeling, Excel, Investment Analysis',
      'Finance graduate with strong analytical skills. Proficient in financial modeling, Excel, and investment analysis.',
    ],
    [
      'Kevin Kim',
      'kevin.kim@example.com',
      '567-890-1234',
      'Civil Engineering',
      '2023',
      'Software Engineer',
      'AutoCAD, Revit, Structural Analysis',
      'Civil engineer specializing in structural design. Experienced in AutoCAD, Revit, and structural analysis.',
    ],
    [
      'Rachel Garcia',
      'rachel.garcia@example.com',
      '012-345-6789',
      'Biochemistry',
      '2022',
      'Software Engineer',
      'PCR, Western Blotting, Cell Culture',
      'Biochemist with expertise in molecular biology techniques. Skilled in PCR, Western blotting, and cell culture.',
    ],
    [
      'Daniel Martinez',
      'daniel.martinez@example.com',
      '345-678-9012',
      'Computer Engineering',
      '2024',
      'Software Engineer',
      'C, C++, ARM Cortex',
      'Computer engineer specializing in embedded systems development. Proficient in C, C++, and ARM Cortex architecture.',
    ],
    [
      'Olivia Taylor',
      'olivia.taylor@example.com',
      '678-901-2345',
      'Psychology',
      '2023',
      'Software Engineer',
      'Psychotherapy, Psychological Assessment, Counseling',
      'Clinical psychologist with a focus on providing therapy and psychological assessments. Skilled in various psychotherapeutic techniques and counseling.',
    ],
    [
      'James Wilson',
      'james.wilson@example.com',
      '789-123-4567',
      'Physics',
      '2024',
      'Software Engineer',
      'Matlab, Data Analysis, Quantum Mechanics',
      'Physics graduate with experience in research and data analysis. Proficient in Matlab and knowledgeable in quantum mechanics principles.',
    ],
    [
      'Emma Thompson',
      'emma.thompson@example.com',
      '123-456-7890',
      'English Literature',
      '2023',
      'Software Engineer',
      'Copywriting, Editing, Content Strategy',
      'English literature enthusiast with a flair for writing. Skilled in copywriting, editing, and content strategy.',
    ],
    [
      'Alex Turner',
      'alex.turner@example.com',
      '456-789-0123',
      'Environmental Science',
      '2022',
      'Software Engineer',
      'Environmental Impact Assessment, GIS, Sustainability',
      'Environmental science graduate with expertise in conducting environmental impact assessments. Proficient in GIS and sustainability principles.',
    ],
  ];

  function openUserPage(data: Array<string>) {
    navigate('/user', {
      state: {
        name: data[0],
        email: data[1],
        mobile: data[2],
        course: data[3],
        graduation: data[4],
        position: data[5],
        skills: data[6],
        summary: data[7],
      },
    });
  }
  return (
    <>
      <div className="recruitermain">
        <table className="recruiter-leaderboard">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((data, index) => (
              <tr
                key={index}
                onClick={() => {
                  openUserPage(data);
                }}
              >
                <td className="center">{index + 1}</td>
                <td className="center">{data[0]}</td>
                <td className="center">{data[7]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Recruiter;
