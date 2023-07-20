import React from "react";



const ITEMS = [
    {
      title: 'Home',
      icon:'M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z'
    },
    {
      title: 'Explorer',
      icon: 'M12 2C11.5 2 11 2.19 10.59 2.59L7.29 5.88L12 10.58L16.71 5.88L13.41 2.59C13 2.19 12.5 2 12 2M5.88 7.29L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L5.88 16.71L10.58 12L5.88 7.29M18.12 7.29L13.42 12L18.12 16.71L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L18.12 7.29M12 13.42L7.29 18.12L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L16.71 18.12L12 13.42Z'
    },
    {
      title: 'Panel',
      icon: 'M4 3C2.9 3 2 3.9 2 5V18C2 19.11 2.9 20 4 20V21H6V20H18V21H20V20C21.11 20 22 19.11 22 18V5C22 3.9 21.11 3 20 3H4M4 5H20V8H4V5M10 6V7H14V6H10M4 10H20V13H4V10M10 11V12H14V11H10M4 15H20V18H4V15M10 16V17H14V16H10Z'
     },
     {
      title: 'Murals',
      icon: 'M21,15H23V17H21V15M21,11H23V13H21V11M23,19H21V21C22,21 23,20 23,19M13,3H15V5H13V3M21,7H23V9H21V7M21,3V5H23C23,4 22,3 21,3M1,7H3V9H1V7M17,3H19V5H17V3M17,19H19V21H17V19M3,3C2,3 1,4 1,5H3V3M9,3H11V5H9V3M5,3H7V5H5V3M1,11V19A2,2 0 0,0 3,21H15V11H1M3,19L5.5,15.79L7.29,17.94L9.79,14.72L13,19H3Z'
     },
     {
      title: 'Projects',
      icon: 'M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z'
     },
     {
      title: 'Members',
      icon: 'M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z'
     },
     {
      title: 'Publications',
      icon: 'M11,23A2,2 0 0,1 9,21V19H15V21A2,2 0 0,1 13,23H11M12,1C12.71,1 13.39,1.09 14.05,1.26C15.22,2.83 16,5.71 16,9C16,11.28 15.62,13.37 15,16A2,2 0 0,1 13,18H11A2,2 0 0,1 9,16C8.38,13.37 8,11.28 8,9C8,5.71 8.78,2.83 9.95,1.26C10.61,1.09 11.29,1 12,1M20,8C20,11.18 18.15,15.92 15.46,17.21C16.41,15.39 17,11.83 17,9C17,6.17 16.41,3.61 15.46,1.79C18.15,3.08 20,4.82 20,8M4,8C4,4.82 5.85,3.08 8.54,1.79C7.59,3.61 7,6.17 7,9C7,11.83 7.59,15.39 8.54,17.21C5.85,15.92 4,11.18 4,8Z'
     },
     {
      title: 'Groups',
      icon: 'M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z'
     }
   ]
  
  
  const profile = {
    name: 'Frank Esteban',
    avatar: 'https://assets.codepen.io/5683883/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1612207004&width=512',
  }
  
  const ProfileContent = () => {
    return(
      <a className="sidebar-media-link" href="#/">
        <img className="avatar" src={ profile.avatar } style={{ height: '40px', width: '40px' }}/>
        <div className="media-body">
          <span className="name">{ profile.name }</span>
        </div>
      </a>  
    )
  }
  
  

/* Sidebar component */  
  
  const Sidebar = ({ className }) => {
    return(
      <div className={ `smooth-sidebar ${className}` }>
        <div className="sidebar-inner">
          <div className="smooth-sidebar-header">
            <ProfileContent/>
          </div>
          <div className="smooth-sidebar-navs">
            <ul className="sidebar-nav">
              {
                ITEMS.map(( value, index ) =>
                  <li className="sidebar-item" key={ index }>
                    <a href="#" className="sidebar-link">
                      <svg className="sidebar-icon" style={{ idth:"26", height:"26" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d={ value.icon }></path>
                      </svg>
                      <span>{ value.title }</span>
                    </a>
                 </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

  
  /* Overlay component */ 
  
  const Overlay = ({ className, onClick}) => {
    return(
      <div className={ className } onClick={ onClick }></div>
    )
  }
  
  const {useState} = React;
  


  /* Toggle component */ 
  
  const ButtonToggle = (props) => {
    return(
      <div className="toggle-content">
        <a href="#" id="sidebar-toggler" onClick={ props.onClick }>Open sidebar</a>
      </div>
    )
  }

const Slide = () => {
    // 슬라이드 상태관리 state 변수
    const [isSlideOpen, setSlideOpen ] = useState(false);

    const toggleSlide = () => {
        setSlideOpen(!isSlideOpen);
    };

    return(
        <>
        <button onClick={toggleSlide}>메뉴</button>

        {isSlideOpen && (
            <div className="slide-content">
              
            </div>
        )}
        </>
    )
}

export default Slide;