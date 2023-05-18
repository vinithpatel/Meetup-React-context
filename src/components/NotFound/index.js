import {
  Container,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <Container>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found.
    </NotFoundPara>
  </Container>
)

export default NotFound
