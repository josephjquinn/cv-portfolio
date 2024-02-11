import React, {useEffect, useRef} from "react";
import "./contact.css";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const RefArray = [h1Ref, pRef];

    const gsapAnimation = (ref: React.RefObject<HTMLElement>) => {
        gsap.fromTo(ref.current,
            {
                y: "10rem",
            },
            {
                y: "0rem", duration: 1, scrollTrigger: {
                    trigger: ref.current,
                    toggleActions: 'restart none restart none',
                    start: `-600px center`,
                    end: `top center`,
                    scrub: 2,
                    markers: false,
                }
            })
    }

    useEffect(() => {
        RefArray.forEach(item => gsapAnimation(item));
    }, [])

    return (
        <div className="contact">
            <div className="left">
                <div className="text-box">
                    <h1 className="text-box-h1" ref={h1Ref}>Contact</h1>
                    <p className="text-box-p" ref={pRef}>
                        <a href="mailto:your.email@example.com">Email</a>
                        <br/>
                        <a href="https://www.linkedin.com/in/your-linkedin-profile">LinkedIn</a>
                        <br/>
                        <a href="https://github.com/your-github-profile">GitHub</a><br/><br/>
                        Joseph Quinn<br/><br/>
                        Denver, Colorado
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
