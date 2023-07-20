import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

export default class LP_page3 extends React.Component {

    render() {
        return (
            <>
              <div className="ThirdLanding">
                    <div className="ThirdImg">
                        <img src="../images/main3.png"></img>
                    </div>
                    {/* <div className="FirstImg2">
                        <img src="../images/a2.jpg"></img>
                    </div> */}

                    <div className="ThirdText">
                        요즘 고민이 무엇인가요? <br></br>
                        함께 나누러 갑시다 ! <br></br>
                        <Button variant="outline-secondary"><a href="../SubPage2">이야기 나누러 가보자Go</a></Button>{' '}
                    </div>
                  
                  
                </div>
             
            </>
        );
    }
};

