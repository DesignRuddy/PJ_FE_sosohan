import React from "react";
import {  Button, Container } from "react-bootstrap";
import "../src/css/Modal.css"
import "../src/css/Main.css"
import "../src/css/subpage.css"

class Main extends React.Component {
    constructor() {
      super();
      this.state = {
        isModalOn: false
      };
    }
  
    handleModalOn = () => {
      this.setState((prevState) => ({
        isModalOn: !prevState.isModalOn
      }));
    };

    render() {
        return (
            <>
            <div className="FirstHead">
                    <img src="../images/navbar.png"></img>
            </div>
            <Container>

                <div className="MainMenu">
                <div className="FirstMenu">
                    <div className="FirstImg">
                        <img src="../images/ListImg1.png"></img>
                    </div>

                    <div className="FirstDetail">
                        <div className="FirstText">
                            취업을 원하는 사람에게 취업지원서비스를 종합적으로 제공하고 <br></br>
                            저소득 구직자에게는 생계를 위한 최소화의 소득을 지원하기 위한 제도
                        </div>
                        <br></br>
                            {/* 모달 버튼 */}
                    <Button className="Btn1" onClick={this.handleModalOn} variant="outline-secondary">상담하기</Button>
                    {this.state.isModalOn && (<ModalComponent onClose={this.handleModalOn} />)}
                    <Button variant="outline-secondary"><a href="https://www.kua.go.kr/uaptm010/selectMain.do" target="_blank">더보기</a></Button>{' '}
                    </div>
                </div>
                <br></br>
                <div className="FirstMenu">
                    <div className="FirstImg">
                        <img src="../images/ListImg2.png"></img>
                    </div>
                    <div className="FirstDetail">
                        <div className="FirstText">
                            핵심인력(청년취업자)과 기업이 청년내일채움공제에 가입하여, <br></br> 
                            핵심인력 본인 납부금, 기업기여금 및 취업지원금을 적립하여, <br></br>
                            2년 또는 3년 만기시 적립금 전액을 핵심인력에 지급합니다. <br></br>
                        </div>
                        <br></br>
                        <Button className="Btn1" onClick={this.handleModalOn} variant="outline-secondary">상담하기</Button>
                        {this.state.isModalOn && (<ModalComponent onClose={this.handleModalOn} />)}
                        <Button variant="outline-secondary"><a href="https://www.kua.go.kr/uaptm010/selectMain.do" target="_blank">더보기</a></Button>{' '}
                    </div>
                    </div>
                </div>

                <br></br>

                <div className="FirstMenu">
                    <div className="FirstImg">
                        <img src="../images/ListImg3.png"></img>
                    </div>
                    <div className="FirstDetail">
                        <div className="FirstText">
                            핵심인력(청년취업자)과 기업이 청년내일채움공제에 가입하여, <br></br> 
                            핵심인력 본인 납부금, 기업기여금 및 취업지원금을 적립하여, <br></br>
                            2년 또는 3년 만기시 적립금 전액을 핵심인력에 지급합니다. <br></br>
                        </div>
                        <br></br>
                        
                        {/* 모달 버튼 */}
                        <Button className="Btn1" onClick={this.handleModalOn} variant="outline-secondary">상담하기</Button>
                        {this.state.isModalOn && (<ModalComponent onClose={this.handleModalOn} />)}
                        <Button variant="outline-secondary"><a href="https://www.kua.go.kr/uaptm010/selectMain.do" target="_blank">더보기</a></Button>{' '}
                    </div>
                </div>
                <br></br>

                <div className="FirstMenu">
                    <div className="FirstImg">
                        <img src="../images/ListImg4.png"></img>
                    </div>
                    <div className="FirstDetail">
                        <div className="FirstText">
                            핵심인력(청년취업자)과 기업이 청년내일채움공제에 가입하여, <br></br> 
                            핵심인력 본인 납부금, 기업기여금 및 취업지원금을 적립하여, <br></br>
                            2년 또는 3년 만기시 적립금 전액을 핵심인력에 지급합니다. <br></br>
                        </div>
                        <br></br>
                    {/* 모달 버튼 */}
                     <Button className="Btn1" onClick={this.handleModalOn} variant="outline-secondary">상담하기</Button>
                    {this.state.isModalOn && (<ModalComponent onClose={this.handleModalOn} />)}
                    <Button variant="outline-secondary"><a href="https://www.kua.go.kr/uaptm010/selectMain.do" target="_blank">더보기</a></Button>{' '}
                    </div>
                </div>

        <br></br>

        <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <img src="../images/site_banner2.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner3.png"/>
                </div>
                <div className="slide">
                    <img src="../images/site_banner4.png"/>
                </div>
                <div className="slide">
                    <img src="../images/site_banner5.png"  />
                </div>
                <div className="slide">
                    <img src="../images/site_banner6.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner4.png" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
            </div>
        </div>
        

        <div className="SecondMenu">
                    <div className="SecondHead">
                        <img src="../images/navimg.png"></img>
                     </div>
                 {/* 첫번째 줄 */}
                    <figure className="hover-img">
                        <img src="../images/Img1.png"/>
                        <figcaption>
                        <h3>지원대상 <br/>
                            무주택 청년/ 청년가구 중위소득 60%이하 <br/>
                            <Button>자세히</Button>
                        </h3>
                        </figcaption>
                    </figure>

                    <figure className="hover-img">
                        <img src="../images/Img2.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>

                    <figure className="hover-img">
                        <img src="../images/Img3.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>
                {/* 두번째 줄 */}
                    <figure className="hover-img">
                        <img src="../images/Img5.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>

                    <figure className="hover-img">
                        <img src="../images/Img6.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>

                    <figure className="hover-img">
                        <img src="../images/Img4.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>

                    <figure className="hover-img">
                        <img src="../images/Img7.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>

                    <figure className="hover-img">
                        <img src="../images/Img8.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>

                    <figure className="hover-img">
                        <img src="../images/Img9.png"/>
                        <figcaption>
                        <h3>Lorem <br/>Ipsum</h3>
                        </figcaption>
                    </figure>

                    </div>
            </Container>
        </>
        );
    }
}

class ModalComponent extends React.Component {
    handleApply = () => {
      alert("신청되었습니다");
    };
  
    render() {
      return (
        <div className="modal">
          <div className="modal-content">
            <h1>상담 신청서</h1>
            <p>이름</p><input type="text"/> 
            <p>전화번호 </p><input type="text"/>
            <p>상담 시간</p><input type="text"/>
            <br></br>

            <button onClick={this.handleApply}>신청하기</button>
            <button onClick={this.props.onClose}>닫기</button>
          </div>
        </div>
      );
    }
  }



export default Main;