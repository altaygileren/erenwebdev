import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path={process.env.PUBLIC_URL + '/'} render={({ location }) => (
          <div>
            
            <Header />

            <div>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={450}
                >
                  <Switch location={location}>
                    <Route path="/" component={About} exact/>
                    <Route path="/contact" component={Contact} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route component={Error} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <Footer />
          </div>
        )} />
      </Router>
    )
  }
}

export default App;
