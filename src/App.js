import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import EventsPage from './components/EventsPage';
import Event from './components/Event';
import ContactPage from './components/ContactPage';
import Signup from './components/Signup';
import LoginForm from './components/LoginForm';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SignupPopup from './components/SignupPopup';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Automatically show the modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000); // Show the modal after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };

    return (
      <div>
         <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/eventspage" element={<EventsPage />}/>
          <Route path="/event" element={<Event />}/>
          <Route path="/contact" element={ <ContactPage />}/>
          <Route path="/login" element={ <LoginForm />}/>
          <Route path="/signup" element={ <Signup />}/>
          <Route path="/sipnuppopup" element={ <SignupPopup isOpen={isModalOpen} onClose={closeModal} />}/>
        </Routes>
        </ScrollToTop>
      </div>
    );
}

export default App;
