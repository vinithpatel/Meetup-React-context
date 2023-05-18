import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  height: 95vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WelcomeHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
  color: #334155;
`
export const RegisterPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
`
export const RegisterButton = styled.button`
  width: 80px;
  height: 35px;

  border-width: 0px;
  border-radius: 8px;

  background-color: #2563eb;

  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;

  cursor: pointer;
  outline: none;
`
export const MeetupImg = styled.img`
  width: 700px;
`

export const UserGreeting = styled(WelcomeHeading)`
  color: #2563eb;
  font-size: 40px;
`
export const UserTopic = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: #334155;
`
