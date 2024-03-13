import React, { useEffect, useRef } from "react";
import "./contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const RefArray = [h1Ref, pRef];

  const gsapAnimation = (ref: React.RefObject<HTMLElement>) => {
    gsap.fromTo(
      ref.current,
      {
        y: "10rem",
      },
      {
        y: "0rem",
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

  useEffect(() => {
    RefArray.forEach((item) => gsapAnimation(item));
  }, []);

  return (
    <div className="contact">
      <div className="left">
        <div className="text-box">
          <h1
            className="text-box-h1"
            ref={h1Ref}
            style={{ marginBottom: "40px" }}
          >
            Contact
          </h1>
          <p className="text-box-p" ref={pRef}>
            <a
              href="mailto:jquinn2005@outlook.com"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                fontFamily: "Montserrat",
                textDecoration: "none",
                color: "black",
              }}
            >
              <MdEmail
                style={{
                  marginTop: "2px",
                  marginRight: "5px",
                  fontSize: "25px",
                }}
              />
              Email
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/joseph-quinn-196b76249/"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                fontFamily: "Montserrat",
                textDecoration: "none",
                color: "black",
              }}
            >
              <FaLinkedinIn
                style={{
                  marginTop: "2px",
                  marginRight: "5px",
                  fontSize: "25px",
                }}
              />
              LinkedIn
            </a>
            <br />
            <a
              href="https://www.github.com/josephjquinn"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                fontFamily: "Montserrat",
                textDecoration: "none",
                color: "black",
              }}
            >
              <FaGithub
                style={{
                  marginTop: "2px",
                  marginRight: "5px",
                  fontSize: "25px",
                }}
              />
              Github
            </a>
            <br />
            <br />
            Joseph Quinn
            <br />
            <br />
            Nashville, tennessee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
