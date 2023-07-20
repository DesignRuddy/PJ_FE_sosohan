/*global kakao */
//맨위에 global kakao를 선언해서 kakao를 글로벌로 선언해서 사용합니다.
import {useEffect} from "react";
import React, { Component } from 'react';
import "../src/css/Company.css"
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
                                   <img src="../images/company.png"></img>
                                       <h3>회사소개</h3>
                                       <p>제공하는 정보를 통해 청년들의 <br class="mo"/>
                                        삶의 질이 상승하는 것을 응원합니다.
                                       </p>
                                       {/* <p class="more">more</p> */}
                                   </div>
                               </a>
                           </li>
                           <li class="animate" data-animate="motion">
                               <a href="http://localhost/board/list">
                                   <p class="img"><img src="img/about_2.jpg" alt=""/></p>
                                   <div class="text">
                                   <img src="../images/notice.png"></img>
                                       <h3>청년정책정보</h3>
                                       <p>필요한 정보만 쏙쏙
                                       전달하고 있습니다.</p>
                                       {/* <p class="more">more</p> */}
                                   </div>
                               </a>
                           </li>
                           <li class="animate" data-animate="motion">
                               <a href="#">
                                   <p class="img"><img src="img/about_3.jpg" alt=""/></p>
                                   <div class="text">
                                   <img src="../images/commu.png">
                                    </img><h3>소통의 마당</h3>   
                                       <p>청년들의 고민들 함께 나눌 수 있는 <br class="mo"/>
                                        공간을 마련했습니다.</p>
                                       {/* <p class="more">more</p> */}
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
                           
                       </div>
                       <div class="imgBox">
                           <div class="bottom animate" data-animate="motion">
                               <h3 class="en">지속적인 업데이트를 통해 
                                        필요한 정보를 전달합니다.</h3>
                               <div class="innerBox">
                                <p> ① 청년 정책 
                                    ② 청년 주거 정책 
                                    ③ 일자리 정보 <br class="mo"/>
                                    청년들에게 필요한 이 세가지 사항만 알차게 구성했습니다. 

                                </p>
                                   <a href="#">상세보기</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
               
            
            <section class="sns">
                   <div class="inner">
                       <div class="title animate" data-animate="motion">
                           <h2 class="en">
                               SNS CHANNEL
                           </h2>
                           <p class="en">SNS를 통해 소소한의 다양한 <br class="mo"/>
                           모습을 만나보세요.</p>
                       </div>
                       <ul>
                           <li>
                               <a href="#">
                                   <p class="img"><img src="../images/facebook.png" alt=""/></p>
                                   <div class="bottom">
                                       <p class="color">소소한 페이스북</p>
                                       <p>소소한의 정보를 페이스북에서 만나보실 수 있습니다.</p>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <p class="img"><img src="../images/youtube.png" alt=""/></p>
                                   <div class="bottom">
                                       <p class="color">소소한 유튜브</p>
                                       <p>소소한의 정보를 유튜브에서 만나보실 수 있습니다.</p>
                                   </div>
                               </a>
                           </li>
                           <li>
                               <a href="#">
                                   <p class="img"><img src="../images/insta.png" alt=""/></p>
                                   <div class="bottom">
                                       <p class="color">소소한 인스타그램</p>
                                       <p>소소한의 정보를 인스타그램에서 만나보실 수 있습니다.</p>
                                   </div>
                               </a>
                           </li>
                       </ul>
                   </div>
               </section>

               <Container> 
                <div className="location_full">     
                    <h1>{location_name} 찾아오시는 길</h1>        
                    <div className="location_common">
                        <div id="map"></div>
                    </div>
                    <div className="location_information">
                        <h3>LOCATION INFORMATION</h3> 
                        주소 : <small>서울특별시 구로구 경인로 557 삼영빌딩 4층</small> <br></br>
                        대표전화번호 : <small>02-1234-5678</small>

                        <div class='location_traffic'>
                            <div class='traffic_details'>
                                <img src="../images/location_subway_icon.svg" alt="지하철 아이콘"/>
                                <h2>지하철</h2>
                            </div>            
                            <small>1호선 구로역 하차<br></br>2번 또는 4번 출구로 나와서 150m 직진 지점</small>
                        </div>
                        <div class='location_traffic'>
                            <div class='traffic_details'>
                                <img src="../images/location_navigation_icon.svg" alt="네비게이션 아이콘"/>
                                <h2>내비게이션(Navigation)</h2>
                            </div>
                            <small>아이나비 네비, 구글 네비 등 네비게이션 "소소한" 검색</small>
                        </div>
                        <div class='location_traffic'>
                            <div class='traffic_details'>
                                <img src="../images/location_parking_icon.svg" alt="주차 아이콘"/>
                                <h2>주차안내</h2>
                            </div>
                            <small>소소한 고객안내센터 1층 주차장 이용</small>
                        </div>


                    </div>

                </div>
            </Container>


            </div>
            </div>

        );
    }
