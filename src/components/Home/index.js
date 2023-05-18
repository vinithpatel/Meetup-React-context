import {Link} from 'react-router-dom'
import {
  HomeBgContainer,
  HomeRegisterContainer,
  WelcomeHeading,
  RegisterPara,
  RegisterButton,
  MeetupImg,
  UserGreeting,
  UserTopic,
} from './styledComponents'
import RegistrationContext from '../../context/RegistrationContext'
import Navbar from '../Navbar'

const Home = () => (
  <RegistrationContext.Consumer>
    {value => {
      const {isRegistered, userName, userTopic} = value
      console.log(userTopic)

      return (
        <>
          <Navbar />
          <HomeBgContainer>
            {!isRegistered && (
              <HomeRegisterContainer>
                <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
                <RegisterPara>Please register for the topic</RegisterPara>
                <Link to="/register">
                  <RegisterButton>Register</RegisterButton>
                </Link>
                <MeetupImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeRegisterContainer>
            )}
            {isRegistered && (
              <HomeRegisterContainer>
                <UserGreeting>Hello {userName}</UserGreeting>
                <UserTopic>Welcome to {userTopic}</UserTopic>
                <MeetupImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeRegisterContainer>
            )}
          </HomeBgContainer>
        </>
      )
    }}
  </RegistrationContext.Consumer>
)

export default Home
