import Home from './components/Home';
import img from '../src/data/images/img.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';





function App() {

  const [about, setAbout] = useState();
  const [project, setProject] = useState();
  const [experience, setExperience] = useState();
  const [education, setEducation] = useState();





  useEffect(() => {
    getAbout();
    getProjects();
    getExperience();
    getEducation();
  }, []);






  const getAbout = async () => {
    try {
      const res = await axios.get('http://localhost:4000/AboutMeRoute');
      setAbout(res.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const getProjects = async () => {
    try {
      const res = await axios.get('http://localhost:4000/ProjectsRoute');
      setProject(res.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const getExperience = async () => {
    try {
      const res = await axios.get('http://localhost:4000/ExperienceRoute');
      setExperience(res.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const getEducation = async () => {
    try {
      const res = await axios.get('http://localhost:4000/EducationRoute');
      setEducation(res.data);
    }
    catch (e) {
      console.log(e);
    }
  }







  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home img={img} data={about} />} > </Route>
        <Route path='/resume' element={<Resume projects={project} experience={experience} education={education} />}> </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
