import React, { useEffect, useRef } from "react";
import "./projects.css";
import Project from "./Project";

import wordwise from "../../assets/projects/wordwise.png";
import wordwise_des from "../../assets/projects/wordwise-info.png";
import huffman from "../../assets/projects/huffman.png";
import huffman_des from "../../assets/projects/huffman-info.png";
import snakedql from "../../assets/projects/sdl.png";
import snakedql_des from "../../assets/projects/sdl-info.png";
import asl from "../../assets/projects/asl.png";
import asl_des from "../../assets/projects/asl-info.png";
import mtm from "../../assets/projects/mtm.png";
import mtm_des from "../../assets/projects/mtm-info.png";
import nvim from "../../assets/projects/nvim.png";
import nvim_des from "../../assets/projects/nvim-info.png";

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
  stack?: string;
  github?: string;
}

const projectArr: ProjectData[] = [
  {
    img: wordwise,
    title: "Wordwise",
    img_des: wordwise_des,
    subtitle: "Wordle Solving Algorithm",
    description: (
      <p>
        This project is a Python implementation of a Wordle solver using the
        Selenium web automation framework. Wordle is a word puzzle game where
        the player tries to guess a five-letter word within a limited number of
        attempts.
        <br />
        <br />
        Through a process of elimination and statistical analysis of letter
        frequencies, the algorithm refines the pool of potential words and
        selects the optimal guess based on calculated word scores, increasing
        the likelihood of correctly guessing the target word within the allotted
        attempts.
        <br />
        <br />
        Through pie charts, bar plots, histograms, box plots, scatter plots, and
        more, users can explore various aspects of Wordle gameplay, such as
        solve percentages, distribution of guesses, time per game, letter
        frequency in solution words, and even the impact of different starting
        words on solving efficiency.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
    github: "https://github.com/josephjquinn/word-wise",
  },
  {
    img: snakedql,
    title: "Snake Deep Learning",
    img_des: snakedql_des,
    subtitle: "DQL Model",
    description: (
      <p>
        This repository contains a Python implementation of a Deep Q-Learning
        model that plays a basic Snake arcade game.
        <br />
        <br />
        Deep Q-Learning is a popular reinforcement learning algorithm that
        allows an agent to learn optimal strategies to maximize its cumulative
        reward in a given environment.
        <br />
        <br />
        This system relies on a reward system in order to train the model, every
        action the snake takes has the potential for a change in the reward
        score, the snake wants to increase its reward at all times and the model
        trains itself to be the most effect at this task.
        This system relies on a reward system in order to train the model, every
        action the snake takes has the potential for a change in the reward
        score, the snake wants to increase its reward at all times and the model
        trains itself to be the most effect at this task.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
    github: "https://github.com/josephjquinn/Snake-Deep-Learning",
    stack: "Python, PyTorch, NumPy",
  },
  {
    img: huffman,
    title: "Huffman Encoding",
    img_des: huffman_des,
    subtitle: "Compression Algorithm",
    description: (
      <p>
        This Java program implements the Huffman encoding algorithm for lossless
        data compression.
        <br />
        <br />
        It analyzes the frequency of characters in a user-input string,
        constructs a Huffman tree prioritizing characters by frequency, and
        assigns variable-length codes to each character.
        <br />
        <br />
        The program outputs the binary representation of the encoded string and
        logs the Huffman codes for each character to a text file, facilitating
        efficient data storage and transmission.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
    github: "https://github.com/josephjquinn/Huffman-Encoding-Algorithm",
  },
  {
    img: asl,
    title: "ASL Model",
    img_des: asl_des,
    subtitle: "Hand Gesture Computer Vision",
    description: (
      <p>
        The Hand Gesture Recognition project combines computer vision and
        machine learning techniques to enable real-time interpretation of hand
        gestures.
        <br />
        <br />
        Key features include real-time recognition using webcam input, a
        pre-trained hand gesture dataset model, the ability to create custom
        datasets for personalized gestures and labels, and training a Random
        Forest classifier for accurate classification. Additionally, the project
        provides an interactive spelling feature based on recognized gestures,
        to create words in real-time.
        <br />
        <br />
        Leveraging the Mediapipe library for hand tracking and landmark
        detection, along with a Random Forest classifier for gesture
        classification, this project offers a solution for recognizing and
        understanding asl hand signs.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
    github: "https://github.com/josephjquinn/asl-model",
  },
  {
    img: mtm,
    title: "Mother To Mother Web App",
    img_des: mtm_des,
    subtitle: "Fullstack Application",
    description: (
      <p>
        The Mother to Mother web app is a project delieverable for the mother to
        mother non-profit in Nashville, TN. It's function is to tracking
        incoming and outgoing donations for mothers in need. Our team created
        created a client-side frontend using React Typscript, PWA, and firebase,
        incorporating real time synchronization and session management.
        <br />
        <br />
        This project utilized a custom backed server and database using
        typescript and SQL, to manage user data and donation information. The
        databse utilized CRUD API's to communicate with the forntend.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
    github: "https://github.com/ChangePlusPlusVandy/MotherToMother",
  },
  {
    img: nvim,
    title: "Nvim Config",
    img_des: nvim_des,
    subtitle: "Nvim Configuration",
    description: (
      <p>
        This Neovim configuration is customized for enhanced productivity and a
        seamless coding experience like that youd find in IDE's such as Visual
        Studio Code. Allowing for full custimization from user to user and
        running completely in terminal.
        <br />
        <br />
        It includes features like plugin management, LSP server integration,
        Tmux support, custom keybindings, syntax highlighting, autocompletion,
        themes, and file navigation.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
    github: "https://github.com/josephjquinn/nvim",
  }
];

export const Projects: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const textH1Ref = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLParagraphElement>(null);
  const projRef = useRef<HTMLDivElement>(null);

  const gsapAnimation = (
    ref: React.MutableRefObject<HTMLElement | null>,
    deg: number
  ) => {
    gsap.fromTo(
      ref.current,
      {
        y: "10rem",
        opacity: 0.5,
        rotate: `${deg}deg`,
      },
      {
        y: "0rem",
        opacity: 1,
        rotate: "0deg",
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
            <span>Hi,</span>
            <br />
            My projects range from webdev to machine learning. You can click any
            project for more details
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
            stack={item.stack}
          />
        ))}
      </div>
    </div>
  );
};
