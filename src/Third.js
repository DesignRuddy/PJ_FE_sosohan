import React, { Component } from 'react';

import "../src/css/Main.css"

class Third extends Component {
    render() {
        return (
            <div>




                {/* 주거복지 서비스 */}
                <div className="SecondMenu">
                    <div className="ThirdHead">
                        <img src="../images/navimg3.png"></img>
                    </div>
                    <br></br>
                    <h2>주거복지서비스</h2>
                    <br></br>
                    <div class="main3">
                        <input type="radio" id="tab-9" name="show" />
                        <input type="radio" id="tab-10" name="show" />
                        <input type="radio" id="tab-11" name="show" />
                        <input type="radio" id="tab-12" name="show" />
                        <div class="tab">
                            <label for="tab-9">긴급주택</label>
                            <label for="tab-10">지원주택</label>
                            <label for="tab-11">1인가구 주택관리서비스</label>
                            <label for="tab-12">주거취약계층 주거지원</label>
                        </div>
                        <div class="content">
                            <div class="content-dis">
                                <div className="content-detail">
                                    <h2>긴급주택 지원이란</h2>
                                    청년과 신혼부부의 주거비부담을 경감하여 <br></br>
                                    혼인 감소 및 출산율 감소문제를 해결하기 위해 <br></br>
                                    임차보증금 대출을 지원하여 주거디딤돌 역할을 부여합니다.
                                    <br></br>

                                </div>
                                <div >
                                    <img src="../images/thirdtab.png"></img>
                                </div>
                                <div className="content-text">
                                    <span className="text">지원대상자</span>  <br></br>
                                    주거 관련 지원대상 요건은 다양한 공급유형과 순위 등에 따라 서로 다른 요건들을 요구합니다. <br></br>과거 공고문을 참고용으로 확인해 보세요.  <br></br>

                                    ※ 과거 공고문은 참고용으로만 보시고 <br></br> 꼭! 지원하시는 해당 공고문의 요건을 다시 한 번 확인하신 후에 지원하시기 바랍니다.  <br></br>

                                    <span className="text">신청방법</span> <br></br>
                                    신청기간 : 각 홈페이지 공고 확인  <br></br>

                                    <span className="text">공고확인방법</span>
                                    <br></br>
                                    - 역세권 청년주택 홈페이지  <br></br>
                                    - SH홈페이지  <br></br>
                                    - 각 민간사업자 홈페이지  <br></br>
                                    신청방법 : 역세권 청년주택 모집공고 <br></br>
                                    <a href="https://soco.seoul.go.kr/youth/main/main.do">바로가기</a> <br></br>

                                    ※ 민간임대와 공공임대 신청홈페이지가 다릅니다. <br></br> 역세권 청년주택 홈페이지 공지사항에 게시된 링크를 통해 신청해 주세요.  <br></br>
                                    문의 : 역세권 청년주택 고객센터  <br></br>
                                </div>
                            </div>

                            <div class="content-dis">
                                <div className="content-detail">
                                    <h2>청년 전세 임대주택이란?</h2>
                                    대학생, 취업준비생의 전세임대를 돕기 위해 <br></br>
                                    입주대상자로 선정된 자(대학생,취업준비생)가 거주할 지역을 물색하면 <br></br>
                                    LH가 주택소유자와 전세계약을 체결한 후 재임대하는 정책입니다.
                                    <br></br>
                                </div>
                                <div className="content-img">
                                    <img src="../images/contentdetail2.png"></img>
                                </div>
                                <div className="content-text">
                                    <span className="text">지원대상자</span>  <br></br>
                                    주거 관련 지원대상 요건은 다양한 공급유형과 순위 등에 따라 서로 다른 요건들을 요구합니다. <br></br>과거 공고문을 참고용으로 확인해 보세요.  <br></br>

                                    ※ 과거 공고문은 참고용으로만 보시고 <br></br> 꼭! 지원하시는 해당 공고문의 요건을 다시 한 번 확인하신 후에 지원하시기 바랍니다.  <br></br>

                                    <span className="text">신청방법</span> <br></br>
                                    신청기간 : 청년 1순위 수시 모집 <br></br>
                                    공고확인방법 : LH청약센터 → 매입임대/전세임대 임대정보 클릭 → 전세임대 클릭 <br></br>
                                    신청방법 : LH청약센터 → 인터넷청약 <br></br>

                                    <a href="https://soco.seoul.go.kr/youth/main/main.do">바로가기</a> <br></br>

                                    <span className="text">문의</span> <br></br>
                                    LH 콜센터 : 1600-1004
                                </div>
                            </div>
                            <div class="content-dis">
                                <div className="content-detail">
                                    <h2>1인가구 주택관리서비스란?</h2>
                                    1인 임차가구의 안전하고 행복한 주거환경 조성을 위해

                                    '신속생활불편처리·홈케어·클린케어' 서비스를 제공합니다.<br />
                                    [신속 생활불편 처리] 현장에서 즉시 조치 가능한 주거불편사항 처리<br />
                                    [홈케어 서비스] 신속 생활불편 처리로 어려운 경우, 집수리업체를 연계하여 소규모 집수리<br />
                                    [클린케어 서비스] 독거노인, 장애가구, 저장강박 등 주택 내부 위생관리에 어려움을 겪는 경우, 청소 및 수납정리 등 환경개선 지원
                                    <br></br>
                                </div>
                                <div className="content-img">
                                    <img src="../images/contentdetail3.png"></img>
                                </div>
                                <div className="content-text">
                                    <span className="text">지원대상자</span>  <br></br>
                                    서울시 거주 기준중위소득 120% 이하 1인 임차가구 <br></br>과거 공고문을 참고용으로 확인해 보세요.  <br></br>

                                    ※ 과거 공고문은 참고용으로만 보시고 <br></br> 꼭! 지원하시는 해당 공고문의 요건을 다시 한 번 확인하신 후에 지원하시기 바랍니다.  <br></br>

                                    <span className="text">신청방법</span> <br></br>
                                    신청기간 : 2023년 3월 ~ 예산 소진시
                                    공고확인방법 <br></br>
                                    - 서울주거포털 → 주거정책 → 주거복지 사업 → 신청페이지<br />
                                    지원 절차 <br></br>
                                    - (1단계)신청 및 접수 <br />
                                    - (2단계)주택방문 및 분석 <br />
                                    - (3단계)서비스 시행 <br />
                                    - (4단계)사후관리 <br />

                                    <a href="https://www.seoulhousing.kr/jsp/center.do">바로가기</a> <br />

                                    <span className="text">문의</span> <br></br>
                                    담당부서 : (주거안심지원반) 02-2133-9584
                                </div>
                            </div>
                            
                            <div class="content-dis">
                                <div className="content-detail">
                                    <h2>매입임대주택이란?</h2>
                                    SH서울주택공사와 LH에서 국민의 주거안정을 위해   <br></br>
                                    민간주택을 매입하여 임대해주는 정책입니다. <br></br>
                                    청년을 위한 청년매입임대주택과 일반 매입임대주택이 있습니다.
                                    <br></br>
                                </div>
                                <div className="content-img">
                                    <img src="../images/contentdetail4.png"></img>
                                </div>
                                <div className="content-text">
                                    <span className="text">지원대상자</span>  <br></br>
                                    주거 관련 지원대상 요건은 다양한 공급유형과 순위 등에 따라 서로 다른 요건들을 요구합니다. <br></br>과거 공고문을 참고용으로 확인해 보세요.  <br></br>

                                    ※ 과거 공고문은 참고용으로만 보시고 <br></br> 꼭! 지원하시는 해당 공고문의 요건을 다시 한 번 확인하신 후에 지원하시기 바랍니다.  <br></br>

                                    <span className="text">신청방법</span> <br></br>
                                    신청기간 : 각 홈페이지 공고 확인

                                    공고확인방법 <br></br>
                                    - SH홈페이지 → 임대모집공고(주택임대) → '매입임대' 검색 <br></br>
                                    - LH청약센터 → 매입임대/전세임대 → '매입임대' 클릭 <br></br>
                                    신청방법 <br></br>
                                    - SH홈페이지 → 인터넷청약 <br></br>
                                    - LH청약센터 → 인터넷청약 <br></br>

                                    <a href="https://soco.seoul.go.kr/youth/main/main.do">바로가기</a> <br></br>

                                    <span className="text">문의</span> <br></br>
                                    SH서울주택도시공사 콜센터 : 1600-3456 <br></br>
                                    LH 콜센터 : 1600-1004
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}

export default Third;