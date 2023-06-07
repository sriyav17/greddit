import React from 'react';
// import logo from './logo.svg';
import LogRegPage from './Login_register.jsx';
import ProfilePage from './Profile.jsx';
import LoggedInRoute from './LoggedinRoutes.jsx';
import ProtectedRoute from './ProtectedRoutes'
// import NavBar from './Navbar.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<LoggedInRoute />}>
          <Route path="/" element={<LogRegPage />} />
        </Route>
        
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
