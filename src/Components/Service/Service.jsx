import "./service.scss";
import React from 'react';
import ServiceEntry from './ServiceEntry';
import {IoDesktopOutline} from "react-icons/io5";
import {GiFilmStrip} from "react-icons/gi";
import {FaPeopleCarry} from "react-icons/fa";
// import {FaHandsHelping, FaPeopleCarry} from "react-icons/fa";

const entryOne = {
  sub: "Programming",
  txt1: "I’m a programmer with experience in both the front and back end of production. I’m driven to work on technologies surrounding film and art, and I’m excited to work with you on your next project.", 
  txt2: "I understand the importance of a well-rounded and complete product, and I’ll be enthusiastic to collaborate with you to help achieve your vision. I’ll work with you to create a product that is not only functional, but also beautiful, user-friendly, and efficient.", 
  // txt3: "I’ll work with you to understand your vision for the project, and I’ll use my skills and knowledge to help you bring that vision to life. I’ll also be available to answer any questions and to provide support throughout the project."
}

const entryTwo = {
  sub: "Filmming",
  txt1: "I’m a programmer with experience in both the front and back end of production. I’m driven to work on technologies surrounding film and art, and I’m excited to work with you on your next project.", 
  txt2: "I understand the importance of a well-rounded and complete product, and I’ll be enthusiastic to collaborate with you to help achieve your vision. I’ll work with you to create a product that is not only functional, but also beautiful, user-friendly, and efficient.", 
  // txt3: "I’ll work with you to understand your vision for the project, and I’ll use my skills and knowledge to help you bring that vision to life. I’ll also be available to answer any questions and to provide support throughout the project."
}

const entryThree = {
  sub: "Combination",
  txt1: "I’m a programmer with experience in both the front and back end of production. I’m driven to work on technologies surrounding film and art, and I’m excited to work with you on your next project.", 
  txt2: "I understand the importance of a well-rounded and complete product, and I’ll be enthusiastic to collaborate with you to help achieve your vision. I’ll work with you to create a product that is not only functional, but also beautiful, user-friendly, and efficient.", 
  // txt3: "I’ll work with you to understand your vision for the project, and I’ll use my skills and knowledge to help you bring that vision to life. I’ll also be available to answer any questions and to provide support throughout the project."
}

export default function Service() {
  return (
    <div className="serviceContainer">
        <div className="serviceTitle">
          <div>SERVICES</div>
          <div>What Can I Do For You?</div>
        </div>
        <ServiceEntry icon={<IoDesktopOutline size={100}/>} {...entryOne}/>
        <ServiceEntry icon={<GiFilmStrip size={100} style = {{transform: 'rotate(270deg)' }}/>} {...entryTwo}/>
        <ServiceEntry icon={<FaPeopleCarry size={100}/>} {...entryThree}/>
    </div>
  )
}