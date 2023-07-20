import React,{useEffect, useState} from "react";
import "../css/include_css/nav-bar.css"

const Navbar = () => {

    const [isLogin, setIsLogin] = useState(false);
    const name = sessionStorage.getItem("name");

  useEffect(() => {
    if (sessionStorage.getItem("user_Id") === null) {
      setIsLogin(false); 
    } else {
      // 로그인 상태 변경
      setIsLogin(true);
    }
    }, [isLogin]);

    const onLogout = () => {
    alert("로그아웃 되셨습니다!");
    sessionStorage.removeItem("user_Id");
    sessionStorage.removeItem("userName");
    document.location.href = "/";
    };

    return(
        <>
        <nav id="navbar" class="">
            <div class="nav-wrapper">

                {/* // <!-- Navbar Logo --> */}
                <div class="logo">
                {/* <!-- Logo Placeholder for Inlustration --> */}
                    <a href="/"><img src="../images/sosohanLogo.png"  className="brand-Logo" style={{width:125}}/></a>
                </div>

                {/* <!-- Navbar Links --> */}
                <ul className="nav-menu">
                        <li><a href="/Company">소소한그룹</a></li>
                        <li><a href="/Main">소소한TIP</a></li>
                        <li><a href="/SosohanJob">소소한Job</a></li>
                        <li><a href="http://localhost/board/list">커뮤니티</a></li>
                </ul>

                <ul className="nav-menu2">
                {isLogin ? ( 
                        <li>{name} 님
                            <a onClick={onLogout}>로그아웃</a>
                        </li>
                    ) : 
                    (
                    <>
                        <li><a href="/Login">로그인</a></li>
                        <li><a href="/Sign_In">회원가입</a></li>
                    </>
                    )
                    }

                </ul>
            </div>
        </nav>

        </>
        )
}

export default Navbar;