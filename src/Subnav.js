import React, { Component } from 'react';
// import './css/main.scss';

export default class Subnav extends Component {

    defaultMainTitle = "";
    defaultTitle = "채용공고";

    defaultContent = (
        <>
            <div>
                <h1>디폴트 컨텐츠입니다.</h1>
            </div>
        </>
    );

    state = {
        isNavbarOpened: true,
        MainTitle: this.defaultMainTitle,
        content: "전체",
        section: "전체",
    }

    // add class remove class
    toggleNavbar = (event = null) => {
        if (event == null || event.target === event.currentTarget) {
            this.setState((prevState) => ({
                isNavbarOpened: !prevState.isNavbarOpened,
            }));
        }
    };

    // SubNavbar 항목 선택 시 실행되는 함수임
    handleSectionChange(section, content) {
        this.setState({ section, content });
        this.toggleNavbar();
    }

    NavbarItems = (title, content) => {
        return (
            <li className='sub-bar-menu-item'>
                <a href={`#item-${title.toLowerCase()}`} onClick={() => this.handleSectionChange(title, content)}>
                    {title}
                </a>
            </li>
        )
    }

    renderContent() {
        const { content } = this.state;

        switch (content) {
            case "전체":
                return this.renderPage('전체');
            case "대기업":
                return this.renderPage('대기업');
            case "중소·중견":
                return this.renderPage('중소·중견');
            case "벤쳐":
                return this.renderPage('벤쳐');
            case "외국계":
                return this.renderPage('외국계');
            case "헤드헌팅":
                return this.renderPage('헤드헌팅');
            default:
                return null;
        };
    };



    renderSectionpage = (page) => {
        return (
            <>
                <div className='Com_info_PageName'>
                    <span>{page}</span>
                </div>

                <div className='board'>
                    <div className='boardHeader'>
                        <h4 className='boardNo'>기업명</h4>
                        <h4 className='boardTitle'>공고 제목</h4>
                        <h4 className='boardCreateDate'>마감일</h4>
                    </div>
                </div>
            </>
        );
    };

    renderPage = (page) => {

        const dataFromDB = [
            { company: '기업명1', title: '공고 제목1', experience: '신입·경력', grade: '대졸 ↑', location: '경기' },
            { company: '기업명2', title: '공고 제목2', experience: '경력', grade: '고졸 ↑', location: '서울' },
            { company: '기업명3', title: '공고 제목3', experience: '신입·경력', grade: '대졸 ↑', location: 'd' },
            { company: '기업명4', title: '공고 제목4', experience: '경력', grade: '고졸 ↑', location: '서울' },
            // ... 더 많은 데이터
        ];
        return (
            <>
                {dataFromDB.map((item, index) => (
                    <li key={index} className='info_ConBox'>
                        <div className='ConBox_company'>
                            <span>{item.company}</span>
                        </div>
                        <div className='ConBox_title'>
                            <span>{item.title}</span>
                        </div>
                        <div className='ConBox_experien'>
                            <sapn><strong>{item.experience}</strong></sapn>
                            <br />
                            <span>{item.grade}</span>
                            <br />
                            <span>{item.location}</span>
                        </div>
                        <div className='info_buttons'>
                            <div className='info_btn'>
                                <span><a href='http://www.naver.com' target='_blank'>즉시지원</a></span>
                            </div>
                            <br />
                            <div className='info_btn'>
                                <span><a href='http://www.naver.com' target='_blank'>공채자료</a></span>
                            </div>
                        </div>
                    </li>
                ))}
            </>
        );
    };

    renderSection() {
        const { section } = this.state;

        switch (section) {
            case "전체":
                return this.renderSectionpage('전체');
            case "대기업":
                return this.renderSectionpage('대기업');
            case "중소·중견":
                return this.renderSectionpage('중소·중견');
            case "벤쳐":
                return this.renderSectionpage('벤쳐');
            case "외국계":
                return this.renderSectionpage('외국계');
            case "헤드헌팅":
                return this.renderSectionpage('헤드헌팅');
            default:
                return null;
        }
    }



    render() {
        return (
            <>
                <div class="menu-wrapper">
                    <ul class="sub-bar-menu">

                        {this.NavbarItems("전체", "전체")}
                        {this.NavbarItems("대기업", "대기업")}
                        {this.NavbarItems("중소·중견", "중소·중견")}
                        {this.NavbarItems("벤쳐", "벤쳐")}
                        {this.NavbarItems("외국계", "외국계")}
                        {this.NavbarItems("헤드헌팅", "헤드헌팅")}
                        {/* <li class="sub-bar-menu-item"><a href="#item-all"> 전체 </a></li>
                    <li class="sub-bar-menu-item"><a href="#item-major"> 대기업 </a></li>
                    <li class="sub-bar-menu-item"><a href="#item-midsize"> 중견·중소 </a></li>
                    <li class="sub-bar-menu-item"><a href="#item-venture"> 벤처 </a></li>
                    <li class="sub-bar-menu-item"><a href="#item-Foreign"> 외국계 </a></li>
                    <li class="sub-bar-menu-item"><a href="#item-headhunting"> 헤드헌팅 </a></li> */}
                    </ul>
                </div>


                <section className='News inner'>
                    <div className='info_Recruidiv'>

                        <span className='info_Recruitment'>채용 정보</span>

                        <form className='searchmade'>
                             <div className='Glyph'>
                                <svg>
                                    <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_" />
                                </svg>
                            </div>
                            <div className='Recr_search' >    
                            <input className='Recr_searchBar' type='text' placeholder='hide' />
                            </div>
                            
                        </form>
                    </div>
                    {this.renderSection()}
                    {/* menu_head */}
                    {/* menu_head */}

                    {/* menu_Content */}
                    {/* <ul className='boardBody'>
                            {data.slice(
                                items * (page - 1),
                                items * (page - 1) + items
                            ).map((it, i) => {
                                return (
                                    <li key={i}>
                                        <div className='no'>{it.notice_num}</div>
                                        <div className='wri'>{it.user_name}</div>
                                        <div className='date'>{moment(it.notice_date).format('YYYY-MM-DD')}</div>
                                    </li>
                                )
                            })
                            }
                        </ul> */}
                    {/* menu_Content end */}
                    <div className='info_content'>


                        <div className="info_board">
                            <ul className='info_boardHeader'>
                                {this.renderContent()}
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
