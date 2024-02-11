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
        subtitle: "Wordle Solving Algorithm",
        description: (
            <p>This project is a Python implementation of a Wordle solver using the Selenium web automation framework.
                Wordle is a word puzzle game where the player tries to guess a five-letter word within a limited number
                of attempts.
                <br/><br/>
                The algorithm at the core of this project is designed to systematically approach solving Wordle puzzles
                efficiently. It utilizes feedback from previous guesses, analyzing which letters are correctly guessed
                but misplaced, which are correctly guessed and correctly positioned, and which are incorrect.
                Through a process of elimination and statistical analysis of letter frequencies, the algorithm refines
                the pool of potential words and selects the optimal guess based on calculated scores,
                increasing the likelihood of correctly guessing the target word within the allotted attempts.
                <br/><br/>
                See Github for more information and detailed documentation
            </p>
        ),
        github: "https://github.com/josephjquinn/word-wise"
    },
    {
        img: snakedql,
        title: "Snake Deep Learning",
        img_des: snakedql_des,
        subtitle: "DQL Model",
        description: (
            <p>This repository contains a Python implementation of a Deep Q-Learning model that plays a basic Snake
                arcade game.
                <br/><br/>
                Deep Q-Learning is a popular reinforcement learning algorithm that allows an agent to learn optimal
                strategies to maximize its cumulative reward in a given environment.<br/>
                <br/>
                This system relies on a reward system in order to train the model, every action the snake takes has the
                potential for a change in the reward score, the snake wants to increase its reward at all times and the
                model trains itself to be the most effect at this task.
                <br/>
                <br/>
                See Github for more information and detailed documentation
            </p>
        ),
        github: "https://github.com/josephjquinn/Huffman-Encoding-Algorithm"
    },
    {
        img: huffman,
        title: "Huffman Encoding",
        img_des: huffman_des,
        subtitle: "Compression Algorithm",
        description: (
            <p>
                This Java program implements the Huffman encoding algorithm for lossless data compression.
                <br/><br/>
                It analyzes the frequency of characters in a user-input string, constructs a Huffman tree prioritizing characters by frequency, and assigns variable-length codes to each character.
                <br/><br/>
                The program outputs the binary representation of the encoded string and logs the Huffman codes for each character to a text file, facilitating efficient data storage and transmission.
                <br/>
                <br/>
                See Github for more information and detailed documentation
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
                    <h1 ref={textH1Ref}>MY PROJECTS</h1>
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
