import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import { Navbar } from './components/Navbar';
import { Route, Router, Routes } from 'react-router';
import SignUp from './components/SignupForm';
import {StudentDashboard }from './components/StudentDashboard'
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LoginForm /> */}
      {/* <SignUp/>  */}
      <Routes>
        <Route path='/login' Component={LoginForm }></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/' element={StudentDashboard }></Route>

      </Routes>

    </div>
  );
}

export default App;
