import React, { useEffect, useRef } from "react";
import "./projects.css";
import Project from "./Project";

import wordwise from "../../assets/projects/wordwise.png";
import wordwise_des from "../../assets/projects/wordwise-info.png";
import huffman from "../../assets/projects/huffman.png";
import huffman_des from "../../assets/projects/huffman-info.png";
import snakedql from "../../assets/projects/sdl.png";
import snakedql_des from "../../assets/projects/sdl-info.png";



import logo from "../../assets/logo.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectData {
    img: string;
    title: string;
    subtitle: string;
    img_des: string;
    description: JSX.Element;
    youtube?: { link: string; title: string }[];
    github?: string;
}

const projectArr: ProjectData[] = [
    {
        img: wordwise,
        title: "Wordwise",
        img_des: wordwise_des,
        subtitle: "Control character in 2D game.",
        description: (
            <p>In this project, I use my advantage skill to design my own character. It’s inspired by the game Hollow Knight. Then I create a sprite sheet with run, attack, jump, and dash actions. Finally, make animation by using Javascript.
                <br/><br/>
                Thanks to the powerful HTML Canvas Graphic Method that makes it is easy for me to render each frame correctly. With the retention of the image in the human eye, if I render each frame of an action in a short time, I can create the feeling that the character is moving. Similar to the old-generation 2D games.
                <br/><br/>
                In addition to managing a large number of character properties, I have to use "Object" and its methods. This project helped me understand a lot more about Object Oriented.
                <br/><br/>
                Note: All of these things, I learned from the Franks Laboratory.
            </p>
        ),
        github: "https://github.com/thekietvuong/Sprite-Animation-in-JavaScript"
    },
    {
        img: snakedql,
        title: "Snake Deep Learning",
        img_des: snakedql_des,
        subtitle: "The RedFox website",
        description: (
            <p>This project is a website about red foxes that includes interesting information about their characteristics, habitat, food, and reproduction,...
                <br/><br/>
                Talking about the technical aspects, this is a simple website consisting of just a navbar with an animation that spans out when the user hovers over it. Along with eye-catching page transition effects.
                <br/><br/>
                To do that, I had to combine React Router Dom and Framer motion.
                <br/><br/>
                Let's click on my Youtube video links below to find out in detail how I designed the logo, and how I coded the website from scratch.
            </p>
        ),
        github: "https://github.com/thekietvuong/The-Red-Fox-Information-Website"
    },
    {
        img: huffman,
        title: "Huffman Encoding",
        img_des: huffman_des,
        subtitle: "POKEMON API",
        description: (
            <p>This project is a front-end developer test of the MOCK interview. Fetching Pokemon API with React as a framework. Once again, I took advantage of my graphic design to create a simple yet interesting UI.
                <br/><br/>
                This project gives me the opportunity to work with fetching data, array method, filtering, and finding the corresponding pokemon when the user types in the search bar.
                <br/><br/>
                It will be interesting and I'm sure you don't want to miss my video below. Let's check it out
            </p>
        ),
    },
];

export const Projects: React.FC = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const textH1Ref = useRef<HTMLHeadingElement>(null);
    const infoRef = useRef<HTMLParagraphElement>(null);
    const projRef = useRef<HTMLDivElement>(null);

    const gsapAnimation = (ref: React.MutableRefObject<HTMLElement | null>, deg: number) => {
        gsap.fromTo(ref.current,
            {
                y: "10rem",
                opacity: 0.5,
                rotate: `${deg}deg`
            },
            { y: "0rem", opacity: 1, rotate: "0deg", duration: 1, scrollTrigger: {
                    trigger: ref.current,
                    toggleActions: 'restart none restart none',
                    start: `-600px center`,
                    end: `top center`,
                    scrub: 2,
                    markers: false,
                }})
    }

    useEffect(() => {
        gsapAnimation(imgRef, -90);
        gsapAnimation(textH1Ref, 0);
        gsapAnimation(infoRef, 0);
    }, []);

    return (
        <div className="project-content">
            <div className="intro">
                <img src={logo} className="logo" ref={imgRef} alt="Logo" />
                <div className="text">
                    <h1 ref={textH1Ref}>MY PROJECT</h1>
                    <p ref={infoRef}>
                        <span>Hi,</span><br/>
                        My projects range from webdev to machine learning.
                        You can click any project for more details
                    </p>
                </div>
            </div>
            <div className="projects" ref={projRef}>
                {projectArr.map((item, index) => (
                    <Project
                        key={index}
                        img={item.img}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        img_des={item.img_des}
                        github={item.github}
                    />
                ))}
            </div>
        </div>
    );
}
