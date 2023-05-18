import React from 'react'

const RegistrationContext = React.createContext({
  isRegistered: false,
  userName: '',
  userTopic: '',
  updateRegistration: () => {},
})

export default RegistrationContext
