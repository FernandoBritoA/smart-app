import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import AnimatedNavbar from './components/AnimatedNavbar/AnimatedNavbar';
import Alert from './components/Alert/Alert';
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
      <AnimatedNavbar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/models' component={ModelsPage} />
        </Switch>
        <Alert />
      </div>
    </div>
  );
}

export default App;
