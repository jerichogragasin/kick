import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Homepage from './pages/Hompage';
import Userpage from './pages/Userpage';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/home" element={<Userpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
