import React, { useEffect, useRef } from "react";
import "./skills.css";

import { FaAws } from "react-icons/fa";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiFlask,
  SiGit,
  SiJunit5,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPrisma,
  SiPytorch,
  SiR,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import {
  DiCss3,
  DiFirebase,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiMysql,
  DiPython,
} from "react-icons/di";
import { GoGraph } from "react-icons/go";

import { FaNodeJs } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  icon: JSX.Element;
  name: string;
  description?: string;
}

const languages: Skill[] = [
  {
    icon: <DiHtml5 />,
    name: "HTML/CSS",
  },

  {
    icon: <DiJavascript />,
    name: "Javascript/ Typescript",
  },
  {
    icon: <DiJava />,
    name: "Java",
  },
  {
    icon: <DiPython />,
    name: "Python",
  },
  {
    icon: <DiMysql />,
    name: "MYSQL",
  },
];

const data: Skill[] = [
  {
    icon: <SiNumpy />,
    name: "Numpy",
  },
  {
    icon: <SiPytorch />,
    name: "Pytorch",
  },
  {
    icon: <GoGraph />,
    name: "Matplotlib",
  },
  {
    icon: <SiPandas />,
    name: "Pandas",
  },
  {
    icon: <SiR />,
    name: "R",
  },
 
 
];

const frameworks: Skill[] = [
  {
    icon: <FaNodeJs />,
    name: "NodeJS",
  },
  
  {
    icon: <SiReact />,
    name: "React",
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
  },
  {
    icon: <SiFlask />,
    name: "Flask",
  },

  {
    icon: <SiJunit5 />,
    name: "JUnit",
  },
];

const tools: Skill[] = [
 
  {
    icon: <SiGit />,
    name: "Git",
  },
  {
    icon: <SiMongodb />,
    name: "Mongodb",
  }, 

  {
    icon: <DiFirebase />,
    name: "Firebase",
  },
  {
    icon: <SiDocker />,
    name: "Docker",
  },
  {
    icon: <FaAws />,
    name: "AWS",
  },
]

export const Skills: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const skillIntroRef = useRef<HTMLDivElement>(null);
  const skillBoxRef = useRef<HTMLDivElement>(null);
  const lineArtRef = useRef<HTMLDivElement>(null);

  const refEle = [h1Ref, skillIntroRef, skillBoxRef, lineArtRef];

  const gsapAnimation = (ref: React.RefObject<HTMLDivElement>) => {
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
    refEle.forEach((item) => {
      if (item.current) {
        gsapAnimation(item);
      }
    });
  }, []);

  return (
    <div className="skill-page">
      <div className="skills-box">
      <h1 ref={h1Ref}>MY SKILLS</h1>

      <div className="skill-intro" ref={skillIntroRef}>
        <p>
          <span></span> Below are some of my skills,
          <br />
          and I'm always looking to learn more
        </p>

        <div className={"skills-dir"}>
          <div className="code-box">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Frontend: HTML, CSS, React",
                1000,
                "Languages: Java, Python, Typescript",
                1000,
                "Backend: Node.js, Express.js",
                1000,
                "Databases: MongoDB, MySQL, Firebase",
                500,
              ]}
              speed={50}
              style={{
                fontSize: "20px",
                fontFamily: "Courier New, Courier, monospace",
              }}
              repeat={Infinity}
            />
          </div>

          <div className="skill-box" ref={skillBoxRef}>
            <div className="left">
              <h2 style={{ textAlign: "center" }}>LANGUAGES</h2>
              <div className="skill-dex">
                {languages.map((item, index) => (
                  <div className="skill" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div className="skill-info">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="middle">
              <h2 style={{ textAlign: "center" }}>FRAMEWORKS</h2>
              <div className="skill-dex">
                {frameworks.map((item, index) => (
                  <div className="skill" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div className="skill-info">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <h2 style={{ textAlign: "center" }}>DATA</h2>
              <div className="skill-dex">
                {data.map((item, index) => (
                  <div className="skill" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div className="skill-info">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <h2 style={{ textAlign: "center" }}>DEV TOOLS</h2>
              <div className="skill-dex">
                {tools.map((item, index) => (
                  <div className="skill" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div className="skill-info">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
