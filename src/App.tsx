import InputFileUpload from './components/UploadWindow';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/Nav';
import Recruiter from './components/Recruiter';

function App() {
  return (
    <>
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinus" element={<InputFileUpload />} />
          <Route path="/recruiter" element={<Recruiter />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
