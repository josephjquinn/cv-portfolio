import React, { useRef, useEffect } from "react";
import "./about.css";
import Headshot from "../../assets/headshot.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const imgRef = useRef(null);
  const paraRef = useRef(null);
  const infoRef = useRef(null);

  const AnimateObject = [imgRef, paraRef, infoRef];

  useEffect(() => {
    const gsapAnimation = (ref: any) => {
      gsap.fromTo(
        ref.current,
        {
          y: "10rem",
          opacity: 0.5,
        },
        {
          y: "0rem",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: "restart none restart none",
            start: `-600px center`,
            end: `top center`,
            scrub: 2,
            markers: false,
          },
        }
      );
    };

    AnimateObject.map((item) => {
      gsapAnimation(item);
    });
  }, []);

  return (
    <div className="about">
      <div className="content">
        <img src={Headshot} ref={imgRef} alt={"headshot"}></img>
        <p className="paragraph" ref={paraRef}>
          I'm a computer science student at Vanderbilt University, My interests
          include software design and development, artificial intelligence,
          machine learning, computer vision, and natural language processing.
          <br />
          <br />
          <h2>Vanderbilt University</h2>
          <ul>
            <li>
              Bachelor of Science: School of Engineering
              <ul>
                <li>Major: Computer Science</li>
                <li>Minor: Data Science</li>
              </ul>
            </li>
          </ul>
          <br />
          <br />
          You can see more about my projects and skills below.
        </p>
      </div>
    </div>
  );
};
