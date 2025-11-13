import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/courses';
import SignUp from './Components/SignUp';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';

function App() {
  const[authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/SignUp"/>} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App
