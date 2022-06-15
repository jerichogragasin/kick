import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  useEffect,
  useState
} from 'react';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Outlet,
  Navigate
  } from 'react-router-dom';
  
import Index from './pages/Index';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/login" 
            element={
              <Login 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                /> }        
            />
          <Route 
            path="/signup"                                  
            element={<Signup />}                            
            />
          <Route path='/home' element={
            <Home 
              isLoggedIn={isLoggedIn}
              logoutHandler={logoutHandler}
                    />} 
            />
          <Route path='*' element={<p>Page not found.</p>} />
        </Routes>                                   
      </Router>     
    </div>

  );
}

export default App;
