import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/User/Navigation/Navigation';
import ExperienceContainer from './components/User/ExperienceContainer/ExperienceContainer';
import SkillsContainer from './components/User/SkillsContainer/SkillsContainer';
import About from './components/User/About/About';
import Contact from './components/User/Contact/Contact';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlWebsite: 'http://localhost/mael-landrin/mael-landrin/public',
      // isLoggedIn: false,
    }
  }

  componentDidMount() {
    // this.setState({isLoggedIn: true});
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <ExperienceContainer />
        <SkillsContainer urlWebsite={this.state.urlWebsite} />
        <Contact />
      </div>
    );
  }
}

export default App;
