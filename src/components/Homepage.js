import NavBar from "./Nav_bar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import HomeEvents from "./HomeEvents";
import HomeImg from '../assets/images/events-home.jpg'
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel";

const Homepage = () => {

  return (
    <>
    <NavBar />
    <Container>
      <div className="homepage">
        <HomeCarousel />
      <h1>Welcome to EventSnap</h1>
      <p>Explore upcoming events, manage RSVPs, and more.</p>
      <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Events"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
      </div>
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
         <HomeEvents />
      </div>
      
    </Container>
    <div className="image-container">
      <img className="bottom-image" src={HomeImg} alt="Event" />
    </div>
    <Footer />
    </>
  );
};

export default Homepage;
