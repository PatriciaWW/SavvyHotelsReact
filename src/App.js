import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddRoom from './components/AddRoom';
import Viewrooms from './components/Viewrooms';
import Room from './components/Room';
import Bookings from './components/Viewbookings';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
       <div className="container-fluid">
            <div className="row">
              <Routes>
                  <Route exact path ="/" element={<MainContent/>}/>
                  <Route exact path ="/signin" element={<Signin/>}/>
                  <Route exact path ="/signup" element={<Signup/>}/>
                  <Route exact path ="/addroom" element={<AddRoom/>}/>
                  <Route exact path ="/roomdetails" element={<Room/>}/>
                  <Route exact path ="/viewrooms" element={<Viewrooms/>}/>
                  <Route exact path ="/profile" element={<Profile/>}/>
                  <Route exact path ="/viewbookings" element={<Bookings/>}/>
              </Routes>
            </div>
        </div>
     </Router>
  );
}

export default App;
