import InputFileUpload from './components/UploadWindow';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinus" element={<InputFileUpload />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
