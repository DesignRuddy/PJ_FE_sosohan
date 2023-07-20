import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "react-fullpage";
import ScrollPage from './Landing';
import Navbar from './include/Navbar';
import Main from './Main';
import Login from './Login/Login';
import Sign_In from './Login/Sign_In';
import ViewButton from './views/ViewButton';
import BoardList from './views/BoardList';
import InputForm from './views/InputForm';
import Mfooter from './Mfooter';
import Company from './Company';
import SosohanJob from './sosohanJob';
import AddressPopup from './Login/AddressPopup';
import Payment from './Payment';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<ScrollPage />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/sosohanJob" element={<SosohanJob />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Sign_In" element={<Sign_In />} />
            <Route path="/ViewButton" element={<ViewButton />} />
            <Route path="/BoardList" element={<BoardList />} />
            <Route path="/AddressPopup" element={<AddressPopup />} />
            <Route path="localhost:3000/:crud" element={<InputForm />} />
            <Route path='/Payment' element={<Payment/>} />
          </Routes>
        </Router>
        {window.location.pathname !== "/AddressPopup" && (
          <>
            <Header className="Landing-header">
              <Navbar />
            </Header>
            <Mfooter />
          </>
        )}
      </>
    );
  }
}

export default App;