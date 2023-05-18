import {Link} from 'react-router-dom'
import {NavigationBar, WebsiteLogo} from './styledComponents'

const Navbar = () => (
  <NavigationBar>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavigationBar>
)

export default Navbar
