import React from "react";
import { Button } from "react-bootstrap";

export default class LP_page2 extends React.Component {

    render(){
        return(
            <>
            <section class="hero">
                <div className="SecondLading">
                    <div className="SecondImg">
                        <img src="../images/people.png"></img>
                    </div>
                    <div className="SecondText">
                        우리에게 필요한 정보만 담았습니다.
                    </div>
                    <Button variant="outline-secondary"><a href="../Main"> 정책 더보기 </a></Button>{' '}

                </div>
            </section>

           
            </>
        );
    }
};