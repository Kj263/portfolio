import React from 'react';
import Education from './Experience/Education';
import Microcredentials from './Experience/Microcredentials';
import InternationalExperience from './Experience/InternationalExperience';
import Skills from './Experience/Skills';
import Coursework from './Experience/Coursework';
import Projects from './Experience/Projects';
import Header from './Components/Header';

const App = () => (
  <div>
    <Header />
    <Skills />
    <Microcredentials />
    <Projects />
    <Education />
    <InternationalExperience />
  </div>
);

export default App;