import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/User/navigation/navigation.component';
import ExperienceContainer from './components/User/experience-container/experience-container.component';
import SkillsContainer from './components/User/skills-container/skills-container.component';
import About from './components/User/about/about.component';
import Contact from './components/User/contact/contact.component';

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
