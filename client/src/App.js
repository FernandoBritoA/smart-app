import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import AnimatedNavbar from './components/AnimatedNavbar/AnimatedNavbar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ModelsPage from './pages/ModelsPage/ModelsPage';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 150,
      },
    },
  },
};

function App() {
  return (
    <div>
      <Particles className='particles' params={particlesOptions} />
      <AnimatedNavbar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/models' component={ModelsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
