import InputFileUpload from './components/UploadWindow';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/Nav';
import Recruiter from './components/Recruiter';
import UserStuff from './components/UserStuff';

function App() {
  return (
    <>
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinus" element={<InputFileUpload />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/user" element={<UserStuff />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
