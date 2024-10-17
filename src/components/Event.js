import Navbar from './Nav_bar';
import Footer from './Footer';
import EventPic from '../assets/images/events-pic.jpg';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const Event = () => {
  return (
    <>
         <Navbar />
          <div className="event">
              <h2>Rock Concert</h2>
              <img src={EventPic} alt="event-pic" />
              <div className="time-date-location">
                <h5>Saturday November 5th 2024</h5>
                <h5>Starts at 7:00pm</h5>
                <h5>Location: The Electric Arena, 123 Main Street, Downtown</h5>
              </div>
              <div className="attending">
                  <h6><FaThumbsUp style={{ margin: '0 5px 5px 0' }} />Going</h6> 
                  <h6 style={{ margin: '0 25px' }}><FaThumbsDown style={{ margin: '0 5px 0 0' }}/>Not Going</h6>
              </div>
              <hr style={{ border: '1px solid #00000', margin: '20px 50px' }} />
              <div className="description">
              Get ready to experience an unforgettable night of pure rock energy! 
              Rock Thunder is bringing together some of the biggest names in rock for 
              one explosive evening of head-banging, guitar-shredding, and adrenaline-pumping performances.
              Featuring chart-topping headliners Thunderstrike and The Voltage, 
              with special guests Wildfire and Neon Howl, this concert will electrify the stage with a mix of classic rock 
              anthems and new hits. From heart-thumping drums to soaring guitar solos, you'll feel the music in your bones.
              Join thousands of fellow rock enthusiasts in the pulse of the crowd, 
              surrounded by vibrant light shows and a sound system that'll shake the walls. 
              Whether you're here for the epic riffs, the rebellious spirit, or just to be part of an incredible 
              live music experience, Rock Thunder promises to deliver an electrifying night that you'll never forget.
              </div>
          </div>
         <hr style={{ border: '1px solid #00000', margin: '20px 50px' }} />
        <Footer />
        </>
  )
}

export default Event