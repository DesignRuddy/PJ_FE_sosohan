import React, { useState } from "react";
import "../css/signup.css";
import { Container } from "react-bootstrap";

const Signup = () => {
  const [userIdx, setUserIdx] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
        }),
      });

      if (response.ok) {
        alert('Sign up successful');
        // 필요한 작업 수행
      } else {
        alert('Sign up failed');
        // 필요한 작업 수행
      }
    } catch (error) {
      console.error('Error occurred during sign up:', error);
      // 에러 처리
    }
  };

  return (
    <>
    <Container>
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
          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
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
    </Container>
    </>
  );
};

export default Signup;