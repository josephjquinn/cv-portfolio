import React, { useEffect, useRef } from "react"
import "./home.css"

import logo from "../../assets/logo2.png"

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {

    const h1Ref = useRef(null);
    const logoRef = useRef(null);
    const scrollRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(()=>{
        const gsapAnimation = (Obj:any) => {
            gsap.fromTo(Obj.element.current,
                {
                    scale: Obj.initScale,
                    y: `${Obj.initY}`,
                    opacity: Obj.initOpacity,
                    rotate: `${Obj.rotate}deg`,
                    yPercent: Obj.yPercent,
                },
                {scale: Obj.endScale, y: `${Obj.endY}`, rotate: "0deg", opacity: Obj.endOpacity, duration: .6, scrollTrigger:{
                        trigger: Obj.trigger.current,
                        scrub: 2,
                        markers: false,
                    }})
        }

        const AnimateObject = [
            {
                element: h1Ref,
                trigger: triggerRef,
                rotate: 0,
                yPercent: 0,
                initScale: 1,
                endScale: .5,
                initY: "65vh",
                endY: "0vh",
                initOpacity: .8,
                endOpacity: 0,
            },
            {
                element: logoRef,
                trigger: triggerRef,
                rotate: -90,
                yPercent: -50,
                initScale: .5,
                endScale: .05,
                initY: "50vh",
                endY: "1.5rem",
                initOpacity: 1,
                endOpacity: 1,
            },
            {
                element: scrollRef,
                trigger: scrollRef,
                rotate: 0,
                yPercent: 0,
                initScale: 1,
                endScale: 1,
                initY: "10rem",
                endY: "0rem",
                initOpacity: 0,
                endOpacity: 1,
            }
        ]

        AnimateObject.map((item)=>{
            gsapAnimation(item);
        })
    },[])

    return(
        <div className="home">
            <div className="section1">
                <h1 ref={h1Ref}>Welcome to My Portfolio</h1>
                <img src={logo} ref={logoRef}/>
            </div>
            <div className="section2" ref={triggerRef}>
                <div className="text-at-bottom" ref={scrollRef}>
                </div>
            </div>
        </div>
    );
}