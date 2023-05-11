import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Add from './routes/Add';
import Edit from './routes/Edit';
import List from './routes/List';
import Gallery from './routes/Gallery';
// import Dashboard from './routes/Dashboard';
import Profile from './routes/Profile';
import Akun from './routes/Akun';
import ContactUs from './routes/Contact';
import LandingPage from './routes/LandingPage';
import Dashboard from './routes/Dashboard'
import Detail from './routes/Detail';

// import Navbar from './routes/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/akun' element={<Akun></Akun>}></Route>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/add" element={<Add></Add>} />
        <Route path="/logout" element={<Login></Login>} />
        <Route path="/gallery" element={<Gallery></Gallery>} />\
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/list">
          <Route index element={<List></List>} />
          <Route path=":id" element={<Edit></Edit>} />
        </Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
