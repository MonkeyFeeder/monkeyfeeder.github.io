import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/User/Navigation/Navigation';
import ExperienceContainer from './components/User/ExperienceContainer/ExperienceContainer';
import SkillsContainer from './components/User/SkillsContainer/SkillsContainer';
import About from './components/User/About/About.component';
import Contact from './components/User/Contact/Contact.component';
import ExperienceForm from "./components/User/ExperienceForm/ExperienceForm";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlWebsite: 'https://monkeyfeeder.github.io/mael-landrin',
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
