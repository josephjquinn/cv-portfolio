import React, { useRef, useEffect } from "react";
import "./about.css";
import Headshot from "../../assets/headshot.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

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
          include software design and development, machine learning, computer
          vision, and natural language processing.
          <br />
          <br />
          <div className="exp-container">
            <div style={{ marginRight: "50px" }}>
              <h2>Vanderbilt University</h2>
              <ul>
                <li>
                  Bachelor of Science: School of Engineering
                  <ul>
                    <li>Major: Computer Science & Math</li>
                    <li>Minor: Data Science</li>
                  </ul>
                </li>
              </ul>
              <br />
              <br />
            </div>
            <div>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    January 2019 - March 2020
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    Lockheed Martin Enginerering Exploers Post
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    August 2023 - Present
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    Vanderbilt Change ++ Developer
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    May 2024 - August 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    ORNL Machine Learning Intern
                  </TimelineContent>
                </TimelineItem>
                {/* <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                  May 2024 - August 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>CS Teaching Assistant</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                  May 2024 - August 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Vanderbilt Lab Intern</TimelineContent>
                </TimelineItem> */}
              </Timeline>
            </div>
          </div>
          You can see more about my projects and skills below.
        </p>
      </div>
    </div>
  );
};
