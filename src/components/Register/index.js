import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  Container,
  RegisterImg,
  Form,
  FormHeading,
  InputCard,
  Label,
  InputEl,
  DropDown,
  Option,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'
import Navbar from '../Navbar'
import RegistrationContext from '../../context/RegistrationContext'

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

class Register extends Component {
  state = {
    userName: '',
    userTopicId: topicsList[0].id,
    isError: false,
    errorMsg: '',
  }

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({userTopicId: event.target.value})
  }

  getUserTopic = () => {
    const {userTopicId} = this.state
    const obj = topicsList.find(each => each.id === userTopicId)
    return obj.displayText
  }

  render() {
    const {userName, userTopicId, isError, errorMsg} = this.state
    return (
      <RegistrationContext.Consumer>
        {value => {
          const {isRegistered, updateRegistration} = value

          const onSubmitRegistration = event => {
            event.preventDefault()
            if (userName === '') {
              this.setState({isError: true, errorMsg: 'Please enter your name'})
            } else {
              const {history} = this.props
              const userTopic = this.getUserTopic()
              updateRegistration(userName, userTopic)
              history.replace('/')
            }
          }
          if (isRegistered) {
            return <Redirect to="/" />
          }
          return (
            <>
              <Navbar />
              <BgContainer>
                <Container>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <Form onSubmit={onSubmitRegistration}>
                    <FormHeading>Let us Join</FormHeading>
                    <InputCard>
                      <Label htmlFor="name">NAME</Label>
                      <InputEl
                        type="text"
                        id="name"
                        value={userName}
                        placeholder="Your name"
                        onChange={this.onChangeName}
                      />
                    </InputCard>
                    <InputCard>
                      <Label htmlFor="topics">TOPICS</Label>
                      <DropDown
                        type="text"
                        id="topics"
                        value={userTopicId}
                        onChange={this.onChangeTopic}
                      >
                        {topicsList.map(eachTopic => (
                          <Option key={eachTopic.id} value={eachTopic.id}>
                            {eachTopic.displayText}
                          </Option>
                        ))}
                      </DropDown>
                    </InputCard>
                    <RegisterButton type="submit">Register Now</RegisterButton>
                    {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                  </Form>
                </Container>
              </BgContainer>
            </>
          )
        }}
      </RegistrationContext.Consumer>
    )
  }
}

export default Register
