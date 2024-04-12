import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import { Navbar } from './components/Navbar';
import { Route, Router, Routes } from 'react-router';
import SignUp from './components/SignupForm';
// import OrganizerSignup from './components/OrganizerSignup'
import { StudentDashboard } from './components/student/StudentDashboard'
import { Home } from './components/Home';
// import { Events  } from './components/Events';
import { OranizerDashboard } from './components/organizer/OranizerDashboard'
import { EventRegistration } from './components/student/EventRegistration';
import { OrganizerSignup } from './components/organizer/OrganizerSignup';
import { OrganizerProfile } from './components/organizer/OrganizerProfile';
import { StudentProfile } from './components/student/studentProfile';
import { Events } from './components/events/Events';
import { EventsCultural } from './components/events/eventsCultural';
import { EventsNontechnical } from './components/events/eventsNontechnical';
import { EventsOthers } from './components/events/eventsOthers';
import { EventsSeminar } from './components/events/eventsSeminar';
import { EventsTechnical } from './components/events/eventsTechnical';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LoginForm /> */}
      {/* <SignUp/>  */}
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' Component={LoginForm}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/events' Component={Events }></Route>
        <Route path='/student' element={<StudentDashboard/> }></Route>
        <Route path='/organizer' element={<OranizerDashboard/>}></Route>
        <Route path='/events/registration' element={<EventRegistration/>}></Route>
        {/* <Route path='/signup/organizer' element={OrganizerSignup}></Route> */}
        <Route path='/signup/organizer' element={<OrganizerSignup></OrganizerSignup>}></Route>
        <Route path='/organizer/profile' element={<OrganizerProfile/>}></Route>
        <Route path='/student/profile' element={<StudentProfile/>}></Route>
        <Route path='/events/cultural' element={<EventsCultural/>}></Route>
        <Route path='/events/nontechnical' element={<EventsNontechnical/>}></Route>
        <Route path='/events/other' element={<EventsOthers/> }></Route>
        <Route path='/events/seminar' element={<EventsSeminar/> }></Route>
        <Route path='/events/technical' element={<EventsTechnical/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
