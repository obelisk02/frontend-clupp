
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from './db/firebase_config';

import SignIn from '../src/components/auth/SignIn'
import Home from '../src/components/Home';
import RegisterVehicle from '../src/components/RegisterVehicle';

function App() {
 
  
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterVehicle />} />
       
      </Routes>
    </Router>
  );
}



export default App;
