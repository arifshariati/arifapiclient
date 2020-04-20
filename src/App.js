import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import Header from './components/header';
import LandingPage from './components/landingPage';
import Ariananews from './components/Ariananews';
import Pajhwok from './components/Pajhwok';
import Khaama from './components/Khaama';
import Voadari from './components/Voadari';
import Footer from './components/footer';

import './App.css';


class App extends Component {

  
  render(){
    
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route path="/Ariananews" component={Ariananews} />
          <Route path="/Pajhwok" component={Pajhwok} />
          <Route path="/Khaama" component={Khaama} />
          <Route path="/Voadari" component={Voadari} />
        </Router>
        <Footer />
      </div>
    );
  }
  
}

export default App;
