import NavBar from "./Nav_bar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import HomeEvents from "./HomeEvents";
import HomeImg from '../assets/images/events-home.jpg'
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel";
import { useEffect } from 'react';


const Homepage = () => {

  useEffect(() => {
    const components = document.querySelectorAll('.animate');
    components.forEach((component, index) => {
      setTimeout(() => {
        component.classList.add('show');
      }, index * 200);
    });

    const leftComponents = document.querySelectorAll('.slide-left');
    const rightComponents = document.querySelectorAll('.slide-right');

    leftComponents.forEach((component, index) => {
      setTimeout(() => {
        component.classList.add('show');
      }, index * 200);
    });

    rightComponents.forEach((component, index) => {
      setTimeout(() => {
        component.classList.add('show');
      }, index * 200 + 400);
    });
  }, []);



  return (
    <>
    <NavBar />
    <Container>
      <div className="homepage slide-left">
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
      <div className="upcoming-events slide-right">
        <h2>Upcoming Events</h2>
         <HomeEvents />
      </div>
      
    </Container>
    <div className="image-container slide-left">
      <img className="bottom-image" src={HomeImg} alt="Event" />
    </div>
    <Footer />
    </>
  );
};

export default Homepage;
