import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.scss";
import { Container } from "react-bootstrap";

const Login = () => {
  const options = {
    verticalAlign:true,
  }

  const navigate = useNavigate();

  const fn_signIn = () => {
    var submitYN = false;

    const userId = document.getElementById("userId").value;
    const userPw = document.getElementById("userPw").value;

    if (document.getElementById("userId").value.length < 1) {
      alert("아이디를 입력해주세요!");
      document.getElementById("userId").focus();
      return;
    }

    if (document.getElementById("userPw").value.length < 1) {
      alert("비밀번호를 입력해주세요!");
      document.getElementById("userPw").focus();
      return;
    }

    if (!submitYN) {
      var submitYN = true;

      const form = new FormData();
      form.append("userId", userId);
      form.append("userPw", userPw);

      console.log("click login");

      axios
        .post("http://localhost:9008/loginAction.do", form, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data !== null) {
            alert(res.data + "회원님, 환영합니다!");
            sessionStorage.setItem("user_Id", userId);
            sessionStorage.setItem("name", res.data);
            window.location.href="/"; // 인덱스 페이지로 이동
          } else {
            alert("회원정보가 없습니다");
          }
        })
        .catch((error) => {
          console.error("Error occurred during login:", error);
        });
    }
  };

  return (

    <>
    <div className="Login_background">
    <Container {...options}>
      <div className="login_header">
        <h2>로그인</h2>
        <div className="container">
          <form onSubmit={fn_signIn} className="loginForm">
            <div>
              <input
                type="id"
                id="userId"
                className="form-control"
                placeholder="아이디를 입력해 주세요!"
              />
            </div>
            <div>
              <input
                type="password"
                id="userPw"
                className="form-control"
                placeholder="비밀번호를 입력해 주세요!"
              />
            </div>
            <div>
              <button className="id_btn" onClick={fn_signIn}>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
    </div>
    </>
  );
};

export default Login;
