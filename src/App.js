import './App.css';
import React, { Component } from "react";
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer, Header } from "react-fullpage"
import ScrollPage from './Landing';
import Navbar from './include/Navbar';
import Main from './Main';
import Login from './Login/Login';
import Sign_In from './Login/Sign_In';
// import Mypage from './Mypage';

import ViewButton from './views/ViewButton';
import BoardList from './views/BoardList';
import InputForm from './views/InputForm';
import ArticleList from './ArticleList';
import Mfooter from './Mfooter';
import Company from './Company';
import SosohanJob from './sosohanJob';



class App extends Component {
  render() {
    return(
      <>
        <Header className="Landing-header">
          <Navbar />
        </Header>
        <Router>
          <Routes>
           <Route exact path='/' element={<ScrollPage />}/>
           <Route path='/Main' element={<Main />} />
           <Route path='/Company' element={<Company />} />
           <Route path='/sosohanJob' element={<SosohanJob />} />
           <Route path='/Login' element={<Login />} />
           <Route path='/Sign_In' element={<Sign_In/>} />
           {/* <Route path='/Mypage' element={<Mypage/>} /> */}

           <Route path='/ArticleList' element={<ArticleList/>} />

           
           
           <Route exact path='/ViewButton' element={<ViewButton/>}/>
           <Route exact path='/BoardList' element={<BoardList/>}/> 
           
          {/*/:crud 경로에서 :crud 부분은 URL 파라미터를 정의할 때
         사용하는 React Router의 문법입니다.
          경로에 이와 같이 URL 파라미터가 포함된 경우,
          패턴 매칭이 되어 /1, /a 등이 모두 매칭이 되며,
          해당 파라미터는 변수화되어 맵핑된 컴포넌트에서
          match.params.crud 같이 읽어올 수 있습니다. */}
          <Route exact path="localhost:3000/:crud" element={<InputForm/>} />
          </Routes>
       </Router>
       
       <Mfooter />
      </>
    )
  }
}

export default App;
