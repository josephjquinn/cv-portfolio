import React, { useRef, useEffect } from "react";
import "./about.css";
import Headshot from "/headshot.png";
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
  const imgRef = useRef<HTMLImageElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsapAnimation = (ref: React.RefObject<HTMLElement>) => {
      gsap.fromTo(
        ref.current,
        { y: "10rem", opacity: 0.5 },
        {
          y: "0rem",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: "restart none restart none",
            start: "-600px center",
            end: "top center",
            scrub: 2,
            markers: false,
          },
        }
      );
    };

    [imgRef, paraRef, infoRef].forEach(gsapAnimation);
  }, []);

  return (
    <div className="about">
      <div className="content">
        <img src={Headshot} ref={imgRef} alt="Headshot" />
        <p className="paragraph" ref={paraRef}>
          I'm a computer science student at Vanderbilt University. My interests
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
                  <TimelineOppositeContent
                    className="timeline-date"
                    color="text.secondary"
                  >
                    January 2019 - March 2020
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="timeline-name">
                    Lockheed Martin Engineering Explorers Post
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    className="timeline-date"
                    color="text.secondary"
                  >
                    August 2023 - Present
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="timeline-name">
                    Vanderbilt Change++ Developer
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    className="timeline-date"
                    color="text.secondary"
                  >
                    May 2024 - August 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="timeline-name">
                    ORNL Machine Learning Intern
                  </TimelineContent>
                </TimelineItem>
                {/* Additional Timeline Items can be added here */}
              </Timeline>
            </div>
          </div>
          You can see more about my projects and skills below.
        </p>
      </div>
    </div>
  );
};
