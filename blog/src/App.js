//npm i react-router-dom
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import NavBar from "./component/NavBar";
import User from "./component/User";
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Channel from "./component/Channel";
import Other from "./component/Other";
import Login from "./component/Login";
import Protected from "./component/Protected";
// import Page404 from "./component/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>         
          {/* <Route path="/" element={<Home />} />    */}
          <Route path="/" element={<Protected Component={Home}/>} />   
          <Route path="/login" element={<Login/>} />               
          <Route path="/about" element={<Protected Component={About}/>}/>
          {/* <Route path="/*" element={<Page404 />}/> */}
          <Route path="/user/:name" element={<User />}/>
          <Route path="/*" element={<Navigate to="/" />}/>
          <Route path="/filter" element={<Filter />}/>
          <Route path="/contact" element={<Contact />}>

            <Route path="company" element={<Company />}/>
            <Route path="channel" element={<Channel/>}/>
            <Route path="other" element={<Other/>}/>

          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
