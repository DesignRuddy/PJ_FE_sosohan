import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay:true
    };
    return (
      <div className="slick-container">
        <div className="Recr_info">
          <span className="Company_info">회사정보</span>
        </div>
        <Slider {...settings}>
          <div className="slick_imgSlide">
            <img src="../images/getImage_1.png" alt="" style={{width:'220'}}/>
                            <div class="box">
                                <p>SARTORIUS<br />지속가능경영재단</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
            <img src="../images/getImage_2.png" alt="" />
                            <div class="box">
                                <p>KMA<br />(주)Lotte</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_3.png" alt="" />
                            <div class="box">
                                <p>Kakao<br />(주)카카오<br /></p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_4.png" alt="" />
                            <div class="box">
                                <p>MONA<br />Yong Pyong</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_5.png" alt="" />
                            <div class="box">
                                <p>AMORE<br />사회복지법인</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_6.png" alt=""/>
                            <div class="box">
                                <p>LG<br/>한경닷컴</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_7.png" alt="" />
                            <div class="box">
                                <p>Geekble<br/>소셜혁신연구센터</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_8.png" alt=""/>
                            <div class="box">
                                <p>제로투 앤<br />언하이드로스 솔루션</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_9.png" alt=""/>
                            <div class="box">
                                <p>레인보우<br />엔터테인먼트</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_10.png" alt=""/>
                            <div class="box">
                                <p>HANA<br />하나금융그룹</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
        </Slider>

        <Slider {...settings}>
          <div className="slick_imgSlide">
            <img src="../images/getImage_1.png" alt="" style={{width:'220'}}/>
                            <div class="box">
                                <p>SARTORIUS<br />지속가능경영재단</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
            <img src="../images/getImage_2.png" alt="" />
                            <div class="box">
                                <p>KMA<br />(주)Lotte</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_3.png" alt="" />
                            <div class="box">
                                <p>Kakao<br />(주)카카오<br /></p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_4.png" alt="" />
                            <div class="box">
                                <p>MONA<br />Yong Pyong</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_5.png" alt="" />
                            <div class="box">
                                <p>AMORE<br />사회복지법인</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_6.png" alt=""/>
                            <div class="box">
                                <p>LG<br/>한경닷컴</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_7.png" alt="" />
                            <div class="box">
                                <p>Geekble<br/>소셜혁신연구센터</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_8.png" alt=""/>
                            <div class="box">
                                <p>제로투 앤<br />언하이드로스 솔루션</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_9.png" alt=""/>
                            <div class="box">
                                <p>레인보우<br />엔터테인먼트</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
          <div className="slick_imgSlide">
          <img src="../images/getImage_10.png" alt=""/>
                            <div class="box">
                                <p>HANA<br />하나금융그룹</p>
                                <a href="">바로가기</a>
                            </div>
          </div>
        </Slider>
      </div>
    );
  }
}