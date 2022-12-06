import React from "react";
import "./AboutMe.css";
import Profile from "../Images/Profile.jpg";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
    return (
        
        <div className="Home">
            <div className="Header">
                <img alt="Profile" src={Profile}/>
                Pottarrพงศ์
            </div>
            <div className="AboutMe">
                <h1>About Me</h1>
                <div className="Seperated">
                    <div className="Left">
                        <p>Name: Theepakorn Phayonrat</p>
                        <p>DOB: 12th-November-2005</p>
                    </div>
                    <div className="Right">
                        <p>Origin: Pattani, Thailand</p>
                        <p>Languages: Thai and English</p>
                    </div>
                </div>
            </div>
            <div className="Mottos">
                <h1>My Mottos</h1>
                <div className="TypeWriter">
                    <Typewriter
                    words={[
                        "My Internet Connection is trash and so is my life...", 
                        "Due tomorrow, do tomorrow!", 
                        "Not the best, but the worst...", 
                        "Getting tired of my life...", 
                        "Wanna be a billionare but can't even take care of my own life...",
                        "Just want a cup of coffee and a new laptop."
                        ]}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={120}
                    deleteSpeed={50}
                    delaySpeed={1000}             
                    />
                </div>
            </div>
            <div className="MyDream">
                <h1>My Dream</h1>
                <p>
                I am a student who wants to reform Thailand's medical technology, 
                which may still be outdated compared to other developing countries. 
                As long as technology remains the foundation of the development of 
                human quality of life. Medical technology and public health will 
                continue to be necessary to be further developed.
                </p>
            </div>
        </div> 
    );
}

export default AboutMe;