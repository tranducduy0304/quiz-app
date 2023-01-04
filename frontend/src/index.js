import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Auth/Login';
import ManagerUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import HomePage from './components/Home/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path='user' element={<User/>}/>
        </Route>

        <Route path='/admin' element={<Admin/>}>
          <Route index element={<DashBoard/>}/>
          <Route path='manager-users' element={<ManagerUser/>}/>
        </Route>

        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
  </BrowserRouter>
);

