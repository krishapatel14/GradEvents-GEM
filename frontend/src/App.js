import logo from './logo.svg';
import './App.css';
import LoginForm from  "./components/LoginForm";
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
          {/* <Navbar/> */}
          <Routes>
            <Route  path="/login" element={<LoginForm />}></Route>
          </Routes>
    </div>
  );
}

export default App;
