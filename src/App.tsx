import InputFileUpload from './components/UploadWindow';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="ResScanner/" element={<Home></Home>}></Route>
          <Route
            path="ResScanner/joinus"
            element={<InputFileUpload></InputFileUpload>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
