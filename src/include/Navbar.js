import React from "react";
import "../css/include_css/nav-bar.css"


class Navbar extends React.Component {
    state = {
      menuToggle: false
    }

  render() {
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
                        <li><a href="/Job">소소한Job</a></li>
                        <li><a href="http://localhost/board/list">커뮤니티</a></li>
                </ul>

                <ul className="nav-menu2">
                    <li><a href="/Login">로그인</a></li>
                    <li><a href="/Sign_In">회원가입</a></li>
                </ul>
            </div>
        </nav>

        </>
        )
    }
}

export default Navbar;