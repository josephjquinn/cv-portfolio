import React, { useEffect, useRef } from "react";
import "./projects.css";
import Project from "./Project";

import wordwise from "../../assets/projects/wordwise.png";
import wordwise_des from "../../assets/projects/wordwise-info.png";
import huffman from "../../assets/projects/huffman.png";
import huffman_des from "../../assets/projects/huffman-info.png";
import snakedql from "../../assets/projects/snake.png";
import snakedql_des from "../../assets/projects/snakeinfo.png";
import asl from "../../assets/projects/asl.png";
import asl_des from "../../assets/projects/gesture.png";
import mtm from "../../assets/projects/mtm.png";
import mtm_des from "../../assets/projects/mtm-info.png";
import nvim from "../../assets/projects/nvim.png";
import nvim_des from "../../assets/projects/nvim-info.png";

import av from "../../assets/projects/av.png";
import av_des from "../../assets/projects/av-info.png";
import DOE from "../../assets/projects/DOE.png";
import DOE_des from "../../assets/projects/dallasinno.png";
import nn from "../../assets/projects/nn.png";
import nn_des from "../../assets/projects/nn-info.png";
import folio from "../../assets/projects/portfolio.png";
import folio_des from "../../assets/projects/port2.png";

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
    github: "https://github.com/josephjquinn/word-wise",
    stack: "Python, Selenium, Matplotlib ",

    description: (
      <p>
        This project is a Python implementation of a Wordle solver using the
        Selenium web automation framework. Wordle is a word puzzle game where
        the player tries to guess a five-letter word within a limited number of
        attempts. This project is a Python-based implementation aimed at solving
        the Wordle game efficiently using the Selenium web automation framework.
        The repo offers a suite of tools for simulating, analyzing, and
        optimizing gameplay strategies.
        <br />
        <br />
        I created an algorithm that systematically narrows down potential words,
        achieving a high solve percentage of 98.6% with an average of 3.753
        guesses per game across 1000 simulations. Data analysis classes are
        included to visualize game data, providing insights into solve rates,
        guess distribution, and word frequency analysis.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
  },
  {
    img: snakedql,
    title: "Snake Deep Learning",
    img_des: snakedql_des,
    subtitle: "DQL Model",
    github: "https://github.com/josephjquinn/snake-dql",
    stack: "Python, PyTorch, NumPy",
    description: (
      <p>
        This repository contains a Python implementation of a reinforcement
        learning model that plays a basic Snake arcade game.
        <br />
        <br />
        This system relies on a reward system in order to train the model, every
        action the snake takes has the potential for a change in the reward
        score, the snake wants to increase its reward at all times and the model
        trains itself to be the most effect at this task. It includes a
        Python-based architecture with classes for the game logic, the learning
        agent, and the neural network model. The project allows training the
        agent to optimize its gameplay through a reward system, and provides
        scripts for both user-controlled and automated game sessions.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
  },
  {
    img: huffman,
    title: "Huffman Encoding",
    img_des: huffman_des,
    subtitle: "Compression Algorithm",
    github: "https://github.com/josephjquinn/Huffman-Encoding-Algorithm",
    stack: "Java",
    description: (
      <p>
        This Java program implements the Huffman encoding algorithm for lossless
        data compression.
        <br />
        <br />
        It analyzes the frequency of characters in a user-input string,
        constructs a Huffman tree prioritizing characters by frequency, and
        assigns variable-length codes to each character. The program outputs the
        binary representation of the encoded string and logs the Huffman codes
        for each character to a text file, facilitating efficient data storage
        and transmission.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
  },
  {
    img: asl,
    title: "ASL Model",
    img_des: asl_des,
    subtitle: "Hand Gesture Computer Vision",
    github: "https://github.com/josephjquinn/asl-model",
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
  },
  {
    img: mtm,
    title: "Mother To Mother Web App",
    img_des: mtm_des,
    subtitle: "Fullstack Application",
    github: "https://github.com/ChangePlusPlusVandy/MotherToMother",
    stack: "Typescript, React, MYSQL, Prisma, FFirebase, AWS:RDS/EC2, ",
    description: (
      <p>
        The Mother to Mother web app is a project delieverable for the mother to
        mother non-profit in Nashville, TN. It's function is to tracking
        incoming and outgoing donations for mothers in need.
        <br />
        <br />
        Our team created created a client-side frontend using React Typscript,
        PWA, and firebase, incorporating real time synchronization and session
        management.
        <br />
        This project utilized a custom backed server and database using MYSQL
        and Prisma, in order manage user data and donation information.
        <br />
        Additionally, we developed an admin dashboard to manage users and view
        overall metrics, enhancing the system's efficiency and transparency.
        <br />
        The application was deolpyed using AWS EC2 and RDS.
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
  },
  {
    img: nvim,
    title: "Nvim Config",
    img_des: nvim_des,
    subtitle: "Nvim Configuration",
    github: "https://github.com/josephjquinn/nvim",
    stack: "lua, vimscript",
    description: (
      <p>
        This Neovim configuration is customized for enhanced productivity and a
        seamless coding experience like that youd find in IDE's such as Visual
        Studio Code. Allowing for full custimization from user to user and
        operating completely wihtin yourF terminal.
        <br />
        <br />
        It includes features like plugin management, LSP server integration,
        Tmux support, custom keybindings, syntax highlighting, autocompletion,
        color themes, and file navigation trees.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
  },
  {
    img: av,
    title: "Avit Visualization",
    img_des: av_des,
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
    img: nn,
    title: "nnScratch",
    img_des: nn_des,
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
    img: DOE,
    title: "DOE Presentation",
    img_des: DOE_des,
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
    img: folio,
    title: "Custom Portfolio Sites",
    img_des: folio_des,
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
