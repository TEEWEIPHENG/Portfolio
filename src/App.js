import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home/index';
import Projects from './components/Projs/index';
import Experiences from './components/Exps/index';
import Certificates from './components/Certs/index';
import Layout from './components/Layout/index';
import ScrollButton from './components/common/ScrollButton/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <section id="home">
          <Home />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        {/* <ScrollButton /> */}
      </Router>
    </div>
  );
}

export default App;
