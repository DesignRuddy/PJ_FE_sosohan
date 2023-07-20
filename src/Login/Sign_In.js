import React, { useState } from 'react';
import { navigate } from 'react-router-dom';
import "../css/Login.scss";

const Sign_In = () => {
  const [userIdx, setUserIdx] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mainAddress, setMainAddress] = useState(''); // 주소 입력창 추가
  const [subAddress, setSubAddress] = useState(''); // 주소 입력창 추가

  // 모달 창 열림 여부 상태 변수
  // 주소 검색 팝업 열기
  const openAddressPopup = () => {
    const popupWindow = window.open('/AddressPopup', 'Address Search', 'width=800,height=600');

    // 팝업 창이 닫힐 때 주소 정보를 받아옴
    window.callback_openAddressPopup = (aParam) => {
      setMainAddress(aParam.roadAddr);
      setSubAddress('');
      popupWindow.close();
    };
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/SignupAction.do', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userIdx: userIdx,
          userId: userId,
          userPw: userPw,
          userName: userName,
          email: email,
          birthDate: birthDate,
          gender: gender,
          phoneNumber: phoneNumber,
          mainAddress: mainAddress, // mainAddress 추가
          subAddress: subAddress, // subAddress 추가
        }),
      });

       if (response.ok) {
        alert('회원가입 성공');
        window.location.href="/"; // 인덱스 페이지로 이동
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 도중 오류 발생:', error);
    }
 
    
  };

  return (
    <div className='signup_background'>
    <div className='containersignup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className='Signform'>
        <div>
          <label htmlFor="userIdx"></label>
          <input
            type="hidden"
            id="userIdx"
            name="userIdx"
            value="USER_IDX_SEQ.nextval"
            onChange={(e) => setUserIdx(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="userId"
            name="userId"
            value={userId}
            placeholder='Id'
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="userPw"
            name="userPw"
            value={userPw}
            placeholder='Password'
            onChange={(e) => setUserPw(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            placeholder='Name'
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>

        <div className='address'>
          <input
            type="text"
            id="mainAddress"
            name="mainAddress"
            value={mainAddress}
            placeholder='Main Address' // 주소 입력창 placeholder
            onChange={(e) => setMainAddress(e.target.value)}
            required
          />
          <button type="button" onClick={openAddressPopup}>
            주소검색
          </button>
        </div>
        <div>
          <input
            type="text"
            id="subAddress"
            name="subAddress"
            value={subAddress}
            placeholder='Sub Address' // 주소 입력창 placeholder
            onChange={(e) => setSubAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            placeholder='PhoneNumber'
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <input className='btn-sign' type="submit" value="회원가입" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Sign_In;