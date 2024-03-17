import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import { Navbar } from './components/Navbar';
import { Route, Router, Routes } from 'react-router';
import SignUp from './components/SignupForm';
import { StudentDashboard } from './components/StudentDashboard'
import { Home } from './components/Home';
import { Events  } from './components/Events';
import { OranizerDashboard } from './components/OranizerDashboard';


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


      </Routes>

    </div>
  );
}

export default App;
