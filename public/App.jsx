import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Awards from './pages/Awards';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/interest" component={Interest} />
        <Route path="/awards" component={Awards} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
