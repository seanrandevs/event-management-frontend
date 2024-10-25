import Navbar from './Nav_bar';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cardImg from '../assets/images/events-pic.jpg';
import { Link } from "react-router-dom";

const EventsPage = () => {
  return (
    <div className="event-page">
      <Navbar />
      <h1>Explore upcoming events, manage RSVPs, and more.</h1>
      <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Events"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
        <Row xs={1} md={3} className="g-5">
          {Array.from({ length: 9 }).map((_, idx) => (
          <Link to="/event">
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Link>
          ))}
        </Row>
      <Footer />
      </div>
  )
}

export default EventsPage