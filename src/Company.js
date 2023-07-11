/*global kakao */
//맨위에 global kakao를 선언해서 kakao를 글로벌로 선언해서 사용합니다.
import {useEffect} from "react";
import React, { Component } from 'react';
import "../src/css/subpage3.css"
import "../src/css/location.css"
import { Container } from "react-bootstrap";

//지도 소스 시작
const location_name = "소소한";

export default function Map(){
    useEffect(() =>{
        kakaoMapScript();
}, []);

const kakaoMapScript = () => {
    let container = document.getElementById("map");
    let options = {
        center: new kakao.maps.LatLng (37.5030698, 126.8789856),
        level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    var imageSrc = '../images/maplogo.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(100, 100), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커가 표시될 위치입니다 
    let  markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), 
    markerPosition = new kakao.maps.LatLng(37.5030698, 126.8789856);

    let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
    });
    //마커를 지도 위에 표시해 줍니다.

    marker.setMap(map);
};
//지도 소스 끝

        return (
            <div>
                <div class="wrap">
                    <section class="visual">
                        <div class="maintitle animate" data-animate="motion">
                            <h2 class="en">청년들에게 필요한 정보가 무엇인지 <br></br>
                                                청년들이 골랐습니다.
                            </h2>
                            <a href="/" class="view en">view more</a>
                        </div>
                     </section>

               <section class="about"> 
                   <div class="inner">
                       <div  class="title animate" data-animate="motion">
                           <h2 class="en">ABOUT SOSOHAN <span></span></h2>
                           <p>청년 정책소개부터 소통의 마당까지, <br class="mo" />
                                소소한을 소개합니다</p>
                       </div>
                       <ul>
                           <li class="animate" data-animate="motion">
                               <a href="#">
                                   <p class="img"><img src="img/about_1.jpg" alt=""/></p>
                                   <div class="text">
                                       <h3>회사소개</h3>
                                       <p>제공하는 정보를 통해 청년들의 <br class="mo"/>
                                        삶의 질이 상승하는 것을 응원합니다.
                                       </p>
                                       <p class="more">more</p>
                                   </div>
                               </a>
                           </li>
                           <li class="animate" data-animate="motion">
                               <a href="http://localhost/board/list">
                                   <p class="img"><img src="img/about_2.jpg" alt=""/></p>
                                   <div class="text">
                                       <h3>청년정책정보</h3>
                                       <p>필요한 정보만 쏙쏙
                                       전달하고 있습니다.</p>
                                       <p class="more">more</p>
                                   </div>
                               </a>
                           </li>
                           <li class="animate" data-animate="motion">
                               <a href="#">
                                   <p class="img"><img src="img/about_3.jpg" alt=""/></p>
                                   <div class="text">
                                       <h3>소통의 마당</h3>
                                       <p>청년들의 고민들 함께 나눌 수 있는 <br class="mo"/>
                                        공간을 마련했습니다.</p>
                                       <p class="more">more</p>
                                   </div>
                               </a>
                           </li>
                       </ul>
                   </div>
               </section>
               <section class="innovations">
                   <div class="inner">
                       <div class="title animate" data-animate="motion">
                           <h2 class="en">OUR GOAL</h2>
                           <p>지속적인 업데이트를 통해 <br class="mo"/>
                               필요한 정보를 전달합니다.
                           </p>
                       </div>
                       <div class="imgBox">
                           <div class="bottom animate" data-animate="motion">
                               <h3 class="en">01우리는 자유로운 삶을 추구합니다.</h3>
                               <div class="innerBox">
                                   <p>한화케미칼은 국내에서 처음으로 자체 기술로 cpvc를 생산하는데 성공하고 2017년
                                       울산 2공장에 연간 3만톤 규모의 <br class="clear"/>
                                       공장을 건설해 생산 중입니다.
                                   </p>
                                   <a href="#">제품상세보기</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
               {/* <section class="me">
                   <div class="inner">
                       <div class="title animate" data-animate="motion">
                           <h2 class="en">CHALLENGE ME <span>.</span></h2>
                           <p>한화와 함께 꿈을 키워 갈 인재를 기다립니다.</p>
                       </div>
                       <ul class="list animate" data-animate="motion">
                           <li>
                               <h3><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>직무특성</h3>
                               <p>한국 케미칼 산업의 역사를 이끌어 온 한화케미칼이 미래를 선도하는 글로벌 케미칼리더로 함께 성장해 나갈 인재를 모집합니다. <br/>
                               글로벌 시장 진출 및 사업다각화가 본격화됨에 따라 체계적 . 전문적인 인재 육성의 중요성을 인식하고,
                           그에 걸맞은 다양한 교육 프로그램과 인사제도를 폭넓게 실시하고 있습니다.</p>
                               <a href="#" class="more">
                                   more
                                   <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                               </a>
                           </li>
                           <li>
                               <h3><span><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>인재상</h3>
                               <p>한화는 신용과 의리에 기반하여 '도전, 헌신, 정도'를 3대 핵심가치로 삼는 인재상을 추구하고 있습니다.</p>
                               <ul class="in">
                                   <li>
                                       <em>Challenge</em>
                                       <p>기존의 틀에 안주하지 않고 변화와 혁신을 통해 최고를 추구하는 도전적인 한화인</p>
                                   </li>
                                   <li>
                                       <em>Dedication</em>
                                       <p>사, 고객, 동료와의 인연을 소중히 여기고 큰 목표를 위해 혼신의 힘을 다하는 헌신적인 한화인</p>
                                   </li>
                                   <li>
                                       <em>Intergrity</em>
                                       <p>자긍심을 바탕으로 원칙에 따라 바르고 공정하게 행동하는 정도의 한화인</p>
                                   </li>
                               </ul>
                               <a href="#" class="more">
                                   more
                                   <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                               </a>
                           </li>
                       </ul>
                       <button>한화인 채용사이트 바로가기</button>
                   </div>
               </section> */}
            <Container>
                <div className="location_common">
                        <h1>{location_name} 찾아오시는 길</h1>
                        <div id="map"></div>
                        <div className="location_information">
                            <h3>LOCATION INFORMATION</h3>
                            주소 : <small>서울특별시 구로구 경인로 557 삼영빌딩 4층</small> <br></br>
                            대표전화번호 : <small>02-1234-5678</small>
                        </div>
                    </div>
            </Container>

            <section class="sns">
                   <div class="inner">
                       <div class="title animate" data-animate="motion">
                           <h2 class="en">
                               SNS CHANNEL <span>.</span>
                           </h2>
                           <p class="en">SNS를 통해 한화케미칼의 다양한 <br class="mo"/>
                           모습을 만나보세요.</p>
                       </div>
                       <ul>
                           <li>
                               <a href="#">
                                   <p class="img"><img src="../images/flat_img01.jpg" alt="" style={{width:350, height:450}}/></p>
                                   <div class="bottom">
                                       <p class="color">화학캐스트</p>
                                       <p>자동차에 색을 입히는 기술, 아크릴 수지 도료</p>
                                       <p class="time">2020. 03. 10 <span>08:00</span></p>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <p class="img"><img src="../images/flat_img02.jpg" alt="" style={{width:350, height:450}}/></p>
                                   <div class="bottom">
                                       <p class="color">뉴스</p>
                                       <p>자동차에 색을 입히는 기술, 아크릴 수지 도료</p>
                                       <p class="time">2020. 03. 10 <span>08:00</span></p>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <p class="img"><img src="../images/mian1.png" alt="" style={{width:350, height:450}}/></p>
                                   <div class="bottom">
                                       <p class="color">동호회</p>
                                       <p>한화케미컬 중앙연구소, '청소년의 꿈'을 응원합니다!</p>
                                       <p class="time">2020. 03. 10 <span>08:00</span></p>
                                   </div>
                               </a>
                           </li>
                       </ul>
                   </div>
               </section>
         
            </div>
            </div>

        );
    }
