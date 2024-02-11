import React, {useEffect, useRef} from "react"
import "./skills.css"

import {SiExpress, SiGit, SiNetlify, SiNotion, SiNumpy, SiPandas, SiPytorch, SiVim} from "react-icons/si";


import {DiCss3, DiFirebase, DiHtml5, DiJava, DiJavascript, DiMongodb, DiPython, DiReact} from "react-icons/di";
import {BiLogoTypescript} from "react-icons/bi";

import {FaNodeJs} from "react-icons/fa";
import {TypeAnimation} from 'react-type-animation';

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
    icon: JSX.Element;
    name: string;
    description?: string;
}

const languages: Skill[] = [
    {
        icon: <DiHtml5 />,
        name: "HTML",
    },
    {
        icon: <DiCss3 />,
        name: "CSS",
    },
    {
        icon: <DiJavascript />,
        name: "Javascript",
    },
    {
        icon: <BiLogoTypescript/>,
        name: "Typescript",
    },
    {
        icon: <DiJava />,
        name: "Java",
    },
    {
        icon: <DiPython/>,
        name: "Python",
    },
];

const libraries: Skill[] = [
    {
        icon: <FaNodeJs />,
        name: "Node",
    },
    {
        icon: <SiExpress />,
        name: "Express",
    },
    {
        icon: <SiNumpy />,
        name: "Numpy",
    },
    {
        icon: <DiReact/>,
        name: "React",
    },
    {
        icon: <SiPytorch/>,
        name: "Pytorch",
    },
    {
        icon: <SiPandas />,
        name: "Pandas",
    },
];

const tools: Skill[] = [
    {
        icon: <SiGit />,
        name: "Git",
    },
    {
        icon: <DiFirebase />,
        name: "Firebase",
    },
    {
        icon: <DiMongodb />,
        name: "Mongodb",
    },
    {
        icon: <SiVim/>,
        name: "Vim",
    },
    {
        icon: <SiNotion/>,
        name: "Notion",
    },
    {
        icon: <SiNetlify/>,
        name: "Netlify",
    },
];

export const Skills: React.FC = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const skillIntroRef = useRef<HTMLDivElement>(null);
    const skillBoxRef = useRef<HTMLDivElement>(null);
    const lineArtRef = useRef<HTMLDivElement>(null);

    const refEle = [h1Ref, skillIntroRef, skillBoxRef, lineArtRef];

    const gsapAnimation = (ref: React.RefObject<HTMLDivElement>) => {
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
            });
    };

    useEffect(() => {
        refEle.forEach(item => {
            if (item.current) {
                gsapAnimation(item);
            }
        });
    }, []);

    return (
        <div className="skill-page">
            <h1 ref={h1Ref}>MY SKILLS</h1>

            <div className="skill-intro" ref={skillIntroRef}>
                <p><span></span> Below are some of my skills,<br />and I'm always looking to learn more</p>

                <div className={"skills-dir"}>

                    <div className="code-box">
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                500,
                                'Frontend: HTML, CSS, React',
                                1000,
                                'Languages: Java, Python, Typescript',
                                1000,
                                'Backend: Node.js, Express.js',
                                1000,
                                'Databases: MongoDB, MySQL, Firebase',
                                500,
                            ]}
                            speed={50}
                            style={{ fontSize: '20px', fontFamily:"Courier New, Courier, monospace"}}
                            repeat={Infinity}
                        />
                    </div>

                    <div className="skill-box" ref={skillBoxRef}>
                        <div className="left">
                            <h2 style={{textAlign: "left"}}>LANGUAGES</h2>
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
                            <h2 style={{textAlign: "left"}}>TOOLS</h2>
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
                        <div className="right">
                            <h2 style={{textAlign: "left"}}>LIBRARIES</h2>
                            <div className="skill-dex">
                                {libraries.map((item, index) => (
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
    );
};

export default Skills;
