import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseConfig from './firebaseConfig';
import '../stuff.css';
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Container = styled('div')({
  backgroundColor: 'white',
  border: '2px solid black',
  borderRadius: '10px',
  padding: '1.3rem',
});

const FileInfoTable = styled('table')({
  width: '100px',
  borderCollapse: 'collapse',
  marginTop: '3%',
  maxHeight: '200px',
  overflowY: 'auto',
  maxWidth: '100%',
  overflowX: 'scroll',
});

const FileInfoRow = styled('tr')({
  borderBottom: '1px solid #ccc',
});

const FileInfoHeaderCell = styled('th')({
  textAlign: 'left',
  padding: '0.5rem',
});

const FileInfoCell = styled('td')({
  padding: '0.5rem',
});

export default function InputFileUpload() {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [uploadSuccess, setUploadSuccess] = React.useState(false);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const fileList = Array.from(files);
      setSelectedFiles(fileList);
      fileList.forEach(async (file) => {
        console.log(file);
        console.log('hi');
        const storageRef = ref(storage, '' + file.name);
        await uploadBytes(storageRef, file);
        console.log('File uploaded successfully');
        setUploadSuccess(true);
      });
    }
  };
  const submitted = () => {
    console.log('submitted');
  };
  return (
    <>
      <div className="box">
        <h2 className="recruitment-heading">Recruitment Form</h2>
        <p className="recruitment-content">
          Fill this to apply to your target position. Data submitted here will
          be used according to our terms. Make sure to submit the resume in pdf
          format.
        </p>
        <form className="needs-validation" onSubmit={submitted} noValidate>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <div className="invalid-feedback">
                Name should only consist of letters (a-z) and spaces
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="vit_email">
                Contact Email:
              </label>
              <input
                className="form-control"
                type="email"
                id="vit_email"
                name="vit_email"
                placeholder="Email ID"
                required
              />
              <div className="invalid-feedback">Invalid email id</div>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="phone_no">
                Phone No:
              </label>
              <input
                className="form-control"
                type="tel"
                id="phone_no"
                name="phone_no"
                placeholder="Phone number"
                required
              />
              <div className="invalid-feedback">Invalid phone number</div>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="degree">
                Highest educational qualification:
              </label>
              <input
                className="form-control"
                type="text"
                id="degree"
                name="degree"
                placeholder="Degree"
                required
              />
              <div className="invalid-feedback">
                Degree should only consist of letters, spaces and dot (.)
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="branch">
                Year of passing:
              </label>
              <input
                className="form-control"
                type="number"
                step="1"
                id="cgpa"
                name="cgpa"
                min="1900"
                max="2028"
                required
              />
              <div className="invalid-feedback">
                Branch name should only consist letters and spaces
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="department" className="form-label">
                Position:
              </label>
              <select
                className="form-select"
                id="department"
                name="department"
                required
              >
                <option value="">Select A Department</option>
                <option value="competitive_programming">
                  Competitive Programming
                </option>
                <option value="web_development">Web Development</option>
                <option value="design_and_content">Design and Content</option>
                <option value="marketing_and_outreach">
                  Marketing & Outreach
                </option>
                <option value="management">Management</option>
                <option value="finance">Finance</option>
              </select>
              <div className="invalid-feedback">Select a department</div>
            </div>
            <div className="mb-3 col-sm-12">
              <label className="form-label" htmlFor="experience">
                Relevant Experience:
              </label>
              <textarea
                className="form-control"
                id="experience"
                name="experience"
                rows={5}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="Resume Submission">
                Submit your resume (in pdf format):
              </label>
              <Button
                className="form-control"
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {selectedFiles.length > 0 ? 'Change Files' : 'Add Submission'}
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
              </Button>
              {uploadSuccess && <p>Files uploaded successfully!</p>}
            </div>
            <Container className="mb-3 col-md-5">
              {selectedFiles.length > 0 && (
                <FileInfoTable>
                  <tbody>
                    {selectedFiles.map((file, index) => (
                      <FileInfoRow key={index}>
                        <FileInfoHeaderCell>File Name</FileInfoHeaderCell>
                        <FileInfoCell>{file.name}</FileInfoCell>
                        <FileInfoHeaderCell>File Size</FileInfoHeaderCell>
                        <FileInfoCell>{file.size} bytes</FileInfoCell>
                        <FileInfoHeaderCell>File Type</FileInfoHeaderCell>
                        <FileInfoCell>{file.type}</FileInfoCell>
                      </FileInfoRow>
                    ))}
                  </tbody>
                </FileInfoTable>
              )}
            </Container>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
