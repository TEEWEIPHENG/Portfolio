import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home/index'
import Projects from './components/Projs/index'
import Experiences from './components/Exps/index'
import Certificates from './components/Certs/index'
import Layout from './components/Layout/index';
import ScrollButton from './components/common/ScrollButton/index';
function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/Portfolio" element={<Home />}/>
          <Route path="/Portfolio/projects" element={<Projects/>}/>
          <Route path="/Portfolio/experiences" element={<Experiences />}/>
          <Route path="/Portfolio/certificates" element={<Certificates />}/>
        </Routes>
        <ScrollButton />
      </Router>
    </div>
  );
}

export default App;
