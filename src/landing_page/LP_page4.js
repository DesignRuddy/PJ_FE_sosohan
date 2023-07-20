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
                        오늘 알아볼 회사  <br></br>
                        내일로 미루지 말자 ! <br></br>
                        <Button variant="outline-secondary"><a href="../sosohanJob">잡으러 가보JOB</a></Button>{' '}
                    </div>
               </div>
            </section>
            </>
        );
    }
};