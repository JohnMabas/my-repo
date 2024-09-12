import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/pages/Home";
import Navbar from './Components/sharedComponent/Navbar';


function App() {
  return (

    <Router>
        <div className="App">

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/navbar' element={<Navbar/>} />
      
          </Routes>
  

     </div>
      
    </Router>
  
  );
}

export default App;
