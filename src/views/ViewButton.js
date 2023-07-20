import React from "react";
import { Link } from "react-router-dom";


const ViewButton = () => {
    return(
        <>
        
        <a href="/Insert">
            <button>게시글 등록</button>
        </a>

        <Link to="/View">
            <button>최근 게시글 보기</button>
        </Link>

        <Link to="/Update">
            <button>최근 게시글 수정</button>
        </Link>

        <Link to="/Delete">
            <button>최근 게시글 삭제</button>
        </Link>
        <Link to="/boardList">
            <button>게시글 목록보기</button>
        </Link>
        <Link to="/Login">
            <button>로그인 하러가기</button>
        </Link>
        <Link to="/Signup">
            <button>게시글 목록보기</button>
        </Link>
        </>

    );
};
export default ViewButton;