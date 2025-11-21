import { Component } from 'react'
import NetflixNavbar from './NetflixNavbar'
import NetflixFooter from './NetflixFooter'
import { Container, Row, Col, Button } from 'react-bootstrap'

class Settings extends Component {
  render() {
    return (
      <>
        <NetflixNavbar activeLink="Settings" />
        <Container className="my-5">
          <Row>
            <Col>
              <h1>Account</h1>
            </Col>
          </Row>
          <Row>
            <hr />
            <Col xs={12} md={4}>
              <h4>MEMBERSHIP & BILLING</h4>{' '}
              <Button variant="secondary">Cancel Membership</Button>
            </Col>
            <Col xs={12} md={8} className="d-flex justify-content-between">
              <div>
                <p className="mb-2 fw-bold">student@strive.school</p>
                <p className="mb-2">Password: ********</p>
                <p className="mb-2">Phone: 321 044 1279</p>
              </div>
              <div className="text-end">
                <a className="linkSettings mb-2">Change account email</a>
                <a className="linkSettings mb-2">Change password</a>
                <a className="linkSettings mb-2">Change phone number</a>
              </div>
            </Col>
          </Row>
        </Container>
        <NetflixFooter />
      </>
    )
  }
}

export default Settings
