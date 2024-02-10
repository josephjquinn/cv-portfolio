import React, {useRef, useEffect} from "react"
import "./about.css"
import Headshot from "../../assets/headshot1.png"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {

    const imgRef = useRef(null);
    const paraRef = useRef(null);
    const infoRef = useRef(null);

    const AnimateObject = [imgRef, paraRef, infoRef];

    useEffect(()=>{

        const gsapAnimation = (ref:any) => {
            gsap.fromTo(ref.current,
                {
                    y: "10rem",
                    opacity: 0.5,
                },
                {y: "0rem", opacity: 1, duration: 1, scrollTrigger:{
                        trigger: ref.current,
                        toggleActions: 'restart none restart none',
                        start: `-600px center`,
                        end: `top center`,
                        scrub: 2,
                        markers: false,
                    }})
        }

        AnimateObject.map(item => {
            gsapAnimation(item);
        })
    },[])

    return(
        <div className="about">
            <div className="content">
                <img src={Headshot} ref={imgRef} alt={"headshot"}></img>
                <p className="paragraph" ref={paraRef}>
                    Hello everyone, my name is Joseph, I'm a computer science student with a foundation in programming and problem-solving,
                    excited about software development, AI, and tackling real-world Issues. Currently, I'm seeking opportunities to collaborate
                    on exciting tech projects and contribute to industry growth.
                    <br/>
                    <br/>
                    I'm deeply passionate about films, with Blade Runner (1982) and La La Land being my top choices.
                    In terms of music, Lush by Mitski and Diamond Eyes by Deftones as my favorite albums.
                    <br/>
                    <br/>
                    You can see more about my projects and skills below.
                    <br/>
                    <br/>
                </p>
                {/*<div className="info" ref={infoRef}>*/}
                {/*    <p className="name">THE KIET VUONG</p>*/}
                {/*    <p>0123 456 789</p>*/}
                {/*    <p>vvvvvvvvv@gmail.com</p>*/}
                {/*    <p>Ho Chi Minh City, Viet Nam</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}