import React from 'react';
import Layout from '../components/Layout';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';
import Process from './Process';
import Projects from './Projects';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <Testimonials />
          </Route>
          <Route path='/portfolio'>
            <Projects />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
