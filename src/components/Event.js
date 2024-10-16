import Navbar from './Nav_bar';
import EventPic from '../assets/images/events-pic.jpg'

const Event = () => {
  return (
    <div>
      <Navbar />
        <div className="event">
            <h2>Rock Concert</h2>
            <img src={EventPic} alt="event-pic" />
            <div className="time-date">
               <h5>Saturday November 5th 2024</h5>
               <h5>Starts at 7:00pm</h5>
            </div>
        </div>
    </div>
  )
}

export default Event