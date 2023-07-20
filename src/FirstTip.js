import React, { Component } from 'react';

import "../src/css/Main.css"

class FirstTip extends Component {
    render() {
        return (
            <div>
                

{/* 주택공급 메뉴 */}
<div className="SecondMenu">
        <div className="SecondHead">
            <img src="../images/navimg.png"></img>
        </div>
        <br></br>
        <h2> 주택공급</h2>
            <br></br>
            <div class="main">
            <input type="radio" id="tab-1" name="show" />
            <input type="radio" id="tab-2" name="show" />
            <input type="radio" id="tab-3" name="show" />
            <input type="radio" id="tab-4" name="show" />
            <div class="tab">
                <label for="tab-1">역세권 청년주택</label>
                <label for="tab-2">청년전세임대주택</label>
                <label for="tab-3">행복주택</label>
                <label for="tab-4">매입임대주택</label>
            </div>
            <div class="content">
                <div class="content-dis">
                    <div className="content-detail">
                        <h2>역세권 청년주택이란</h2>
                        대중교통 이용이 편리한 역세권의 규제완화와 체계적인 개발을 통해 <br></br>
                        만19세 이상 만39세 이하의 청년, 신혼부부 등에게 공급하는 주택으로 <br></br>
                        공공임대와 민간임대가 있습니다.
                        <br></br>
                    
                    </div>
                    <div className="content-img">
                        <img src="../images/contentdetail1.png"></img>
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
                        <h2>행복주택이란?</h2>
                        청년(19세∼39세)·신혼부부·대학생 등 젊은 계층의 주거불안 해소를 위해 <br></br>
                        국가 재정과 주택도시기금을 지원받아 대중교통이 편리하고 직주근접이 가능한 부지에 <br></br>
                        주변시세보다 저렴하게 공급하는 공공임대주택 입니다.
                        <br></br>
                    </div>
                    <div className="content-img">
                        <img src="../images/contentdetail3.png"></img>
                    </div>
                    <div className="content-text">
                       <span className="text">지원대상자</span>  <br></br> 
                            주거 관련 지원대상 요건은 다양한 공급유형과 순위 등에 따라 서로 다른 요건들을 요구합니다. <br></br>과거 공고문을 참고용으로 확인해 보세요.  <br></br>

                            ※ 과거 공고문은 참고용으로만 보시고 <br></br> 꼭! 지원하시는 해당 공고문의 요건을 다시 한 번 확인하신 후에 지원하시기 바랍니다.  <br></br> 

                            <span className="text">신청방법</span> <br></br>
                            신청기간 : 각 홈페이지 공고 확인
                            공고확인방법 <br></br> 
                            - SH홈페이지 → 임대모집공고(주택임대) → '행복주택' 검색 <br></br> 
                            - LH청약센터 → 임대주택 → '행복주택' 클릭 <br></br> 
                            신청방법 <br></br>
                            - SH홈페이지 → 인터넷청약 <br></br>
                            - LH청약센터 → 인터넷청약 <br></br>
                            ※서울시 행복주택은 SH와 LH에서 각각 다른 주택이 공급됩니다. 두 홈페이지 모두 확인해 주세요.

                            <a href="https://soco.seoul.go.kr/youth/main/main.do">바로가기</a> <br></br>

                            <span className="text">문의</span> <br></br>
                            SH서울주택도시공사 콜센터 : 1600-3456
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

export default FirstTip;