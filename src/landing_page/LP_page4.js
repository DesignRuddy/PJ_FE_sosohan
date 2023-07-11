import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";

export default class LP_page4 extends React.Component {

    render(){
        return(
            <>
            <section class="hero page4">
               <div className="FourthLand">
               <div className="FourthImg">
                        <img src="../images/main4.png"></img>
                    </div>

                    <div className="FourthText">
                        나와 함께 할 동반자와 
                        누릴 수 있는 혜택을 알아보러 가보자고 ! <br></br>
                        <Button variant="outline-secondary"><a href="../SubPage2">혜택 보러가보자 Go</a></Button>{' '}
                    </div>
               </div>
            </section>
            </>
        );
    }
};