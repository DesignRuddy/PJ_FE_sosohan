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
            <input type="radio" id="tab-10" name="show"/>
            <input type="radio" id="tab-11" name="show" />
            <input type="radio" id="tab-12" name="show" />
            <div class="tab">
                <label for="tab-9">긴급주거지원제도</label>
                <label for="tab-10">주거안심동행파트너</label>
                <label for="tab-11">1인가구 주택관리서비스</label>
                <label for="tab-12">희망하우징</label>

            </div>
            <div class="content">
                <div class="content-dis">
                    <div className="content-detail">
                        <h2>긴급주거지원 제도란?</h2>
                        위기사유 발생으로 도움이 필요한 서울시민을 위해 <br/>
                        생계곤란 등의 위기상황에 처하여 도움이 필요한 분에게 <br/>
                        거주할 장소나 거주할 비용을 지원합니다.
                    </div>
                    <div className='thirdimg'>
                        <img src="../images/thirdtab.png"></img>
                    </div>
                    <div className="content-text2">
                       <span className="text">지원대상자</span>  <br></br> 
                            위기사유의 발생으로 거소제공 또는 주거비지원이 필요한 사람 <br></br> 
                            신청기간 : 각 홈페이지 공고 확인  <br></br> 
                            주소득자(主所得者)가 사망, 가출, 행방불명, 구금시설에 수용되는 등의 사유로 소득을 상실한 경우 <br></br> 
                            중한 질병 또는 부상을 당한 경우 <br></br> 
                            가구구성원으로부터 방임(放任)･유기(遺棄)되거나 학대 등을 당한 경우 <br></br> 
                            가정폭력을 당하여 가구구성원과 함께 원만한 가정생활이 곤란하거나  <br></br> 가구구성원으로부터 성폭력을 당한 경우 <br></br> 
                            화재 등으로 인하여 거주하는 주택 또는 건물에서 생활하기 곤란하게 된 경우 <br></br> 
                        <span className="text">신청방법</span> <br></br>
                            신청 : 거주지 구청 또는 동주민센터 <br></br>
                            문의 : 동주민센터, 구청, 다산콜센터 120 <br></br>
                        <a href='https://housing.seoul.go.kr/site/main/content/sh04_050100'> 주거안심종합센터(주거상담소) 연락처 바로가기</a>
                    </div>
                </div>

                <div class="content-dis">
                <div className="content-detail">
                        <h2>주거안심동행파트너란?</h2>
                        민간부문의 다양한 주체의 역량을 활용하고 상호 밀접한 협력관계 구축을 통해 <br/>
                        주거취약계층 주거복지를 실현하고자 하는 사업입니다.<br></br>
                        사각지대에 놓인 주거약자의 주거안정을 위해 서울시·SH공사와 함께 <br/>
                        자발적으로 나눔 문화를 실천하는 공공·민간부문 기업(기관)과 개인 등을 일컫습니다.
                </div>
                <div className='thirdimg2'>
                    <img src='../images/thirdimg2.png'></img>
                </div>
                    <div className="content-text">
                       <span className="text3">지원대상자</span>  <br></br> 
                       주거실태조사를 통해 발굴한 사각지대에 놓인 반지하 등에 거주하는 주거취약가구 <br/>
                        ※ ’22년 반지하(장애인, 아동 및 노인) 취약가구 실태조사 실시, ’23년 3단계 추진 중 <br/>
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
                                    <img src="../images/thirdimg3.png"></img>
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
                        <h2>희망하우징이란?</h2>
                        희망하우징은 서울주택도시공사에서 건설한 원룸형 및 기숙사형 주택을 <br/>
                        주거지원이 필요한 대학생에게 저렴하게 공급하는 임대주택입니다.
                        <br></br>
                    </div>
                    <div className="content-img">
                        <img src="../images/contentdetail3.png"></img>
                    </div>
                    <div className="content-text">
                       <span className="text">지원대상자</span>  <br></br> 
                        주거 관련 지원 대상 요건은 다양한 공급유형과 순위 등에 따라 서로 다른 요건들을 요구합니다. <br/>
                            <span className="text">신청방법</span> <br></br>
                            신청기간 : 홈페이지 공고 확인 <br/> 
                            공고확인방법 : SH홈페이지 → 임대모집공고(주택임대) → '희망하우징' 검색 <br/>
                            신청방법 : SH홈페이지 → 인터넷청약 <br/>
                            <a href="https://www.i-sh.co.kr/main/index.do">SH 바로가기</a> <br></br>
                            <span className="text">문의</span> <br></br>
                            SH서울주택도시공사 콜센터 : 1600-3456
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