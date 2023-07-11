import React from "react";
import Table from 'react-bootstrap/Table';

import "../src/css/MyPage.css"
import Landing_Footer from "./include/Footer";
import { Footer } from "react-fullpage";

class Mypage extends React.Component {
    defaultMainTitle = ""
    defaultTitle = "내정보";

    /* 내용들어갈 곳*/
    defaultContent = (
      <>
        <div className="Info_Container">
            소소한 일상의 회원님 어서 오십시요.라는 문구
            <div>여기여기</div>
            <div>여기여기</div>
            <div>여기여기</div>
            <div>여기여기</div>
            <div>여기여기</div>
            <div>여기여기</div>
            <div>여기여기</div>
            <div>여기여기</div>
            <div>여기여기</div>
        </div>
      </>
    );
    state = {
      isSidebarOpened: true,
      MainTitle : this.defaultMainTitle,
      title: this.defaultTitle,
      content: this.defaultContent
    };

  
    toggleSidebar(event = null) {
      if (event == null || event.target == event.currentTarget) {
        this.setState({ isSidebarOpened: !this.state.isSidebarOpened });
      }
    }
  
    sidebarItems = (title, content) => {
      return (
        <button
          onClick={() => {
            this.setState({
              title: title,
              content: content
            });
            this.toggleSidebar();
          }}
        >
          <div
            className={
              "title " + (this.state.title == title ? "currentTitle" : "")
            }
          >
            {title}
          </div>
          {/* <div className="indicator">
            {this.state.title == title && (
              <span class="indicator">
              </span>
            )}
          </div> */}
        </button>
      );
    };
    render() {
      return (
        <>
          <div
            onClick={(e) => this.toggleSidebar(e)}
            className={
              "sidebarOverlay " + (this.state.isSidebarOpened ? "" : "hide")
            }
          >
            <button
              onClick={(e) => this.toggleSidebar(e)}
              className="sidebarToggle"
            >
              {this.state.isSidebarOpened ?
               <svg viewBox="-265 388.9 64 64" width="50" onClick={(e) => this.toggleSidebar(e)}>
                  <path d="M-209,443.3v-44.8c0-0.9-0.7-1.6-1.6-1.6h-44.8c-0.9,0-1.6,0.7-1.6,1.6v44.8c0,0.9,0.7,1.6,1.6,1.6h44.8  C-209.7,444.9-209,444.2-209,443.3z M-237,409.3c0.1-0.3,0.4-0.4,0.8-0.4h6.8c0.6,0,1.1,0.6,0.8,1.1l-6,7.4h14.3  c0.5,0,0.9,0.3,0.9,0.8v6c0,0.4-0.4,0.8-0.9,0.8h-14.1l5.7,6.9c0.3,0.5-0.1,1.1-0.8,1.1h-6.8c-0.3,0-0.6-0.2-0.8-0.4l-9.3-11.7  L-237,409.3z"
                    onClick={(e) => this.toggleSidebar(e)}
                  />
               </svg>
               :
               <svg viewBox="-265 388.9 64 64" width="50" onClick={(e) => this.toggleSidebar(e)}>
                  <path d="M-257,398.5v44.8c0,0.9,0.7,1.6,1.6,1.6h44.8c0.9,0,1.6-0.7,1.6-1.6v-44.8c0-0.9-0.7-1.6-1.6-1.6h-44.8  C-256.3,396.9-257,397.6-257,398.5z M-229,432.5c-0.1,0.3-0.4,0.4-0.8,0.4h-6.8c-0.6,0-1.1-0.6-0.8-1.1l6-7.4h-14.1  c-0.5,0-0.9-0.3-0.9-0.8v-6c0-0.4,0.4-0.8,0.9-0.8h13.9l-5.7-6.9c-0.3-0.5,0.1-1.1,0.8-1.1h6.8c0.3,0,0.6,0.2,0.8,0.4l9.3,11.7  L-229,432.5z"
                    onClick={(e) => this.toggleSidebar(e)}
                  />
               </svg>
                }
            </button>

            <div className={"sidebar"} id="sidebar">
              {this.sidebarItems(this.defaultTitle, this.defaultContent)}
              
              {/* My soso */}
              {this.sidebarItems(
                "My soso",
                <>
                <div className="Info_Container">
                  <h1>My soso 페이지</h1>
                  <p>여기에는 신청내역 목록</p>
                  <p>신청취소 들어가야함</p>
                  <Table striped bordered hover size="sm" className="Info_Table">
                    <thead>
                      <tr className="table_row">
                        <th>#</th>
                        <th>이름</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <br />
                    <tbody className="table_body">
                      <tr className="table_row">
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr className="table_row">
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr className="table_row">
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                 </Table>
                </div>
                </>
              )}

            {/* 주문내역 */}
              {this.sidebarItems(
                "주문내역",
                <>
                <div className="Info_Container">
                  <h1>주문내역</h1>
                  <p>여기에 표시하자</p>
                </div>
                </>
              )}

        

            </div>
          </div>
          {this.state.content}
        </>
      );
    }
  }

  export default Mypage;