// import "../src/css/test.css"
import React, { Component } from "react";
import { SectionsContainer, Section , Header, Footer } from "react-fullpage"
// import {BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import "./css/Landing.css";

import LP_page1 from "./landing_page/LP_page1";
import LP_page2 from "./landing_page/LP_page2";
import LP_page3 from "./landing_page/LP_page3";
import LP_page4 from "./landing_page/LP_page4";
import LP_page5 from "./landing_page/LP_page5";

// import Navbar from "./include/Navbar";
import Landing_Footer from "./include/Footer";
import Main from "./Main";
import Mfooter from "./Mfooter";

export default class ScrollPage extends React.Component {

    render(){

     let options = {
        activeClass:          'active', // the class that is appended to the sections links
        anchors:              ['LP_page1','LP_page2', 'LP_page3', 'LP_page4', 'LP_page5'], // the anchors for each sections
        arrowNavigation:      true, // use arrow keys
        className:            'SectionContainer', // the class name for the section container
        delay:                1100, // the scroll animation speed
        navigation:           true, // use dots navigatio
        scrollBar:            false, // use the browser default scrollbar
        sectionClassName:     'Section', // the section class name
        sectionPaddingTop:    '0', // the section top padding
        verticalAlign:        true, // align the content of each section vertical
        };

        return(
            <>
            <SectionsContainer className="container" {...options}>

                <Section className="LP_page1" verticalAlign="true" color="#F6F3E7">
                    <LP_page1 />
                </Section>

                <Section className="LP_page2" color="#D5E8E7">
                    <LP_page2 />
                </Section>

                <Section className="LP_page3" color="#F6F3E7">
                    <LP_page3 />
                </Section>

                <Section className="LP_page4" color="#D5E8E7">
                    <LP_page4 />
                </Section>

                <Section className="LP_page5" color="#D5E8E7">
                    <LP_page5 />
                </Section>

                {/* <Footer className="Landing-footer">
                    <Landing_Footer />
                </Footer> */}

                <Footer>
                    <Mfooter />
                </Footer>
                


            </SectionsContainer>   
            </>
        )
    }

    
}