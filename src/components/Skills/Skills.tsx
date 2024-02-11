import React, {useEffect, useRef} from "react"
import "./skills.css"

import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { BsBrushFill } from "react-icons/bs";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { GiPuzzle } from "react-icons/gi";
import { TypeAnimation } from 'react-type-animation';

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
        icon: <DiReact />,
        name: "React",
    },
];

const libraries: Skill[] = [
    {
        icon: <SiAdobeillustrator />,
        name: "Adobe Illustrator",
    },
    {
        icon: <SiAdobephotoshop />,
        name: "Photoshop",
    },
    {
        icon: <BsBrushFill />,
        name: "UI design",
    },
    {
        icon: <GiPuzzle />,
        name: "Critical thinking",
    },
];

const tools: Skill[] = [
    {
        icon: <SiAdobeillustrator />,
        name: "Adobe Illustrator",
    },
    {
        icon: <SiAdobephotoshop />,
        name: "Photoshop",
    },
    {
        icon: <BsBrushFill />,
        name: "UI design",
    },
    {
        icon: <GiPuzzle />,
        name: "Critical thinking",
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
            <h1 ref={h1Ref}>MY SKILL</h1>

            <div className="skill-intro" ref={skillIntroRef}>
                <p><span>"</span> Almost my skills, I learn by myself. <br />Let me tell you what I can do</p>

                <div className={"skills-dir"}>

                    <div className="code-box">
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                500,
                                'Frontend: HTML, CSS, JavaScript', // initially rendered starting point
                                1000,
                                'Frontend Frameworks: React, Vue.js, Angular',
                                1000,
                                'Backend: Node.js, Express.js',
                                1000,
                                'Databases: MongoDB, MySQL, PostgreSQL',
                                1000,
                                'Mobile: React Native, Flutter',
                                1000,
                                'Version Control: Git, GitHub',
                                1000,
                                'Deployment: Heroku, Netlify, Vercel',
                                500,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
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
