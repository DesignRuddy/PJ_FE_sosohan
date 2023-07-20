import React from "react";
import {  Button, Container, Toast } from "react-bootstrap";
import FirstTip from "./FirstTip";
import SecondTip from "./SecondTip";
import Third from "./Third";
import "../src/css/Main.css"

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
                            저소득 구직자에게는 생계를 위한 최소화의 소득을 지원하기 위한 제도입니다.
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
                        <Button variant="outline-secondary"><a href="https://www.sbcplan.or.kr/intro.do" target="_blank">더보기</a></Button>{' '}
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
                        급격한 기술발전에 적응하고 노동시장 변화에 대응하는 <br></br>
                        사회안전망 차원에서 생애에 걸친 역량개발 향상 등을 위해  <br></br>
                        국민 스스로 직업능력개발훈련을 실시할 수 있도록 훈련비 등 지원합니다.
                        </div>
                        <br></br>
                        
                        {/* 모달 버튼 */}
                        <Button className="Btn1" onClick={this.handleModalOn} variant="outline-secondary">상담하기</Button>
                        {this.state.isModalOn && (<ModalComponent onClose={this.handleModalOn} />)}
                        <Button variant="outline-secondary"><a href="https://www.moel.go.kr/policy/policyinfo/reclamarion/list2.do" target="_blank">더보기</a></Button>{' '}
                    </div>
                </div>
                <br></br>

                <div className="FirstMenu">
                    <div className="FirstImg">
                        <img src="../images/ListImg4.png"></img>
                    </div>
                    <div className="FirstDetail">
                        <div className="FirstText">
                        강소기업 선정기준을 갖추고 있으면서 고용유지율이 높고,  <br></br>
                        일생활균형, 임금, 고용안정, 혁신역량  <br></br>
                        측면에서 우수하여 청년에게 추천할만한 중소·중견기업입니다.
                        </div>
                        <br></br>
                    {/* 모달 버튼 */}
                     <Button className="Btn1" onClick={this.handleModalOn} variant="outline-secondary">상담하기</Button>
                    {this.state.isModalOn && (<ModalComponent onClose={this.handleModalOn} />)}
                    <Button variant="outline-secondary"><a href="https://www.work.go.kr/jobyoung/smallGiants/smallGiantsMain.do" target="_blank">더보기</a></Button>{' '}
                    </div>
                </div>

        <br></br>
    
    {/* 배너 이미지 슬라이드 */}
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
                    <img src="../images/site_banner7.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner8.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner9.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner10.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner4.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner3.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner2.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner4.png" />
                </div>
                <div className="slide">
                    <img src="../images/site_banner4.png" />
                </div>
            </div>
        </div>

    {/* 주택공급 메뉴 */}

    <FirstTip />
   

    {/* 금융지원 */}
        <SecondTip />

    {/* 주거복지 서비스 */}
        <Third />


</Container>
        </>
        );
    }
}

class ModalComponent extends React.Component {

    state = {
        consulteCode : "",
        policyName : "",
        userName: sessionStorage.getItem("userName"),
        phoneNumber:sessionStorage.getItem("phoneNumber"),
        consulteTime: ""
    };
    componentDidMount() {
        //백엔드 API 호출
        fetch("/api/user/{userId}") // 실제 로그인된 유저ID값 넣기
            .then(response => response.json())
            .then(data => {
                // 로그인된 사용자 정보설정
                this.setState({
                    userName: data.userName,
                    phoneNumber: data.phoneNumber
                });
            })
            .catch(error => {
                console.log(error);
            })
        // 로그인되어있는 사용자 정보가져오는 코드
        const currentUser = {
            name: "사용자 이름",
            phoneNumber: ""
        };

        this.setState({
            name: currentUser.name,
            phoneNumber: currentUser.phoneNumber
        });
    }
    handleApply = () => {
        const { userName, phoneNumber, consulteTime } = this.state;
        if (userName && phoneNumber && consulteTime) {
            Toast("신청되었습니다");
        } else {
            alert("신청서를 모두 작성해 주세요");
        }
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { userName, consulteCode, policyName, phoneNumber, consulteTime } = this.state;

        return (
            <div className="modal">
                <div className="modal-content">
                    {/* 신청서 code */}
                    <input
                        type="hidden" name="consulteCode" value={consulteCode} />

                    <p>정책 신청서</p>
                    <input
                        type="text" name="policyName" value={policyName} readOnly />

                    <p>이름</p>
                    <input
                        type="text" name="userName" value={userName} readOnly />

                    <p>전화번호</p>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleInputChange}
                    />
                    <p>상담 시간</p>
                    <input
                        type="time"
                        name="consulteTime"
                        value={consulteTime}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <br></br>

                    <button onClick={this.handleApply}>신청하기</button>
                    <button onClick={this.props.onClose}>닫기</button>
                </div>
            </div>
        );
    }
}



export default Main;