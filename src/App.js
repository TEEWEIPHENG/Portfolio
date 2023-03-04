import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Certificates from './components/Certificates'
import Layout from './components/Layout';
import ScrollButton from './components/ScrollButton';
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
