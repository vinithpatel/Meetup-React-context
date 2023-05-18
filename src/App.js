import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import RegistrationContext from './context/RegistrationContext'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    isRegistered: false,
    userName: '',
    userTopic: topicsList[0].displayText,
  }

  updateRegistration = (userName, userTopic) => {
    this.setState({
      isRegistered: true,
      userName,
      userTopic,
    })
  }

  render() {
    const {isRegistered, userName, userTopic} = this.state
    return (
      <RegistrationContext.Provider
        value={{
          isRegistered,
          userName,
          userTopic,
          updateRegistration: this.updateRegistration,
        }}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegistrationContext.Provider>
    )
  }
}

export default App
