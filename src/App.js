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
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experiences" element={<Experiences />}/>
          <Route path="/certificates" element={<Certificates />}/>
        </Routes>
        <ScrollButton />
      </Router>
    </div>
  );
}

export default App;
