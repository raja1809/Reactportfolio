import React from 'react';
import Header from './components/Header/Header';
import Skill from './components/Skill/Skill';
import TopContainer from './components/TopContainer/TopContainer';
import Projects from './components/Projects/Projects';
import "./App.css"
import Exp from './components/Exp/Exp';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <Skill />
      <Projects />
      <Exp/>
      <Contact/>
    </div>
  )
}


export default App