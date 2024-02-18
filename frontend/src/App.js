import logo from './logo.svg';
import './App.css';
import LoginForm from  "./components/LoginForm";
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router';
import SignUp from './components/SignupForm';
import { Switch } from '@mui/material';

function App() {
  return (
    <div className="App">
          {/* <Navbar/> */}
          <LoginForm/>
          {/* <SignUp/>  */}
          {/* <Routes>
            <Route  path="/login" Component={<LoginForm/>}></Route>
            <Route path="/signup"  Component ={<SignUp/>}></Route>
          </Routes> */}
         
    </div>
  );
}

export default App;
