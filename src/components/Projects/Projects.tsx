import React, { useEffect, useRef } from "react";
import "./projects.css";
import Project from "./Project";

import wordwise from "/projects/wordwise.png";
import wordwise_des from "/projects/wordwise-info.png";
import huffman from "/projects/huffman.png";
import huffman_des from "/projects/huffman-info.png";
import snakedql from "/projects/snake.png";
import snakedql_des from "/projects/snakeinfo.png";
import asl from "/projects/asl.png";
import asl_des from "/projects/gesture.png";
import mtm from "/projects/mtm.png";
import mtm_des from "/projects/mtm-info.png";
import nvim from "/projects/nvim.png";
import nvim_des from "/projects/nvim-info.png";

import av from "/projects/av.png";
import av_des from "/projects/av-info.png";
import DOE from "/projects/DOE.png";
import DOE_des from "/projects/dallasinno.png";
import nn from "/projects/nn.png";
import nn_des from "/projects/nn-info.png";
import folio from "/projects/portfolio.png";
import folio_des from "/projects/port2.png";

import logo from "/logo.png";
import doePoster from "/omni.pdf";

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
    img: DOE,
    title: "Research Publication",
    img_des: DOE_des,
    subtitle: "Optimizing Vision Transformers for Fluid Dynamics",
    stack: "Public Speaking :3",

    description: (
      <p>
        This is a research poster presented at the 2024 Departments of Energy
        Cybersecurity and Technology conference. It provides insights into the
        research findings, methodologies, and applications of the study,
        showcasing the results and impact of my research.
        <br />
        <br />
        <a
          href={doePoster}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit" /* Match text color with surrounding text */,
            textDecoration: "none" /* Remove underline */,
            fontWeight: "bold" /* Match font weight with surrounding text */,
          }}
        >
          Click here to view presentation
        </a>
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
    img: mtm,
    title: "Mother To Mother PWA",
    img_des: mtm_des,
    subtitle: "Fullstack Application",
    github: "https://github.com/mtmvuse/MotherToMother",
    stack: "Typescript, React, MYSQL, Prisma, Firebase, AWS:RDS/EC2",
    description: (
      <p>
        The Mother to Mother web app is a project deliverable for the mother to
        mother non-profit in Nashville, TN. It's function is to tracking
        incoming and outgoing donations for mothers in need.
        <br />
        <br />
        Our team created created a client-side frontend using React Typescript,
        PWA, and firebase, incorporating real time synchronization and session
        management. This project utilized a custom backed server and database
        using MYSQL and Prisma, in order manage user data and donation
        information. Additionally, we developed an admin dashboard to manage
        users and view overall metrics, enhancing the system's efficiency and
        transparency. The application was deployed using AWS EC2 and RDS.
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
    github: "https://github.com/josephjquinn/avit-vis",
    stack: "Typescript, React, Flask, ReCharts",

    description: (
      <p>
        For this project, I developed a web application to
        display dynamic visualizations of performance metrics for various test
        cases of an AViT model, specifically applied to fluid dynamics
        simulations. Additionally, I integrated support for NetCDF files,
        enabling the visualization of complex fluid dynamics data.
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
    github: "https://github.com/josephjquinn/gesture-model",
    stack: "Python, PyTorch, numPy, OpenCV, Matplotlib, Pandas, Mediapipe",
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
    img: nvim,
    title: "Neovim Config",
    img_des: nvim_des,
    subtitle: "From Scratch Nvim Configuration",
    github: "https://github.com/josephjquinn/nvim",
    stack: "Lua, Vimscript",
    description: (
      <p>
        This Neovim configuration is customized for enhanced productivity and a
        seamless coding experience like that you'd find in IDE's such as Visual
        Studio Code. Allowing for full customization from user to user and
        operating completely within your terminal.
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
    img: nn,
    title: "nnScratch",
    img_des: nn_des,
    subtitle: "Fullstack Application",
    github: "https://github.com/josephjquinn/nnScratch",
    stack: "Python, numPy",
    description: (
      <p>
        This project implements a feedforward neural network class entirely from
        scratch without using machine learning libraries, performing the
        propagation equations manually using calculus fundamentals. This network
        features customizable architecture and training options, and a
        hyperparameter optimization script for automatically fine tuning network
        parameters.
        <br />
        <br />
        Key features of the implementation include support for ReLU, Sigmoid,
        and Leaky ReLU activation functions, a cross-entropy loss function for
        classification tasks, and initialization methods such as Xavier, He, and
        Numpy rand. The training process includes options for mini-batch
        training with customizable batch size and real-time plots of training
        loss, validation loss, and accuracy, and single and grid predictions on
        unseen data.
        <br />
        <br />
        See Github for more information and detailed documentation
      </p>
    ),
  },
  {
    img: folio,
    title: "Custom Portfolio Sites",
    img_des: folio_des,
    subtitle: "Dynamic Portfolio Pages",
    github: "https://github.com/josephjquinn/cv-portfolio",
    stack: "Typescript, React",
    description: (
      <p>
        I designed and developed two portfolio websites from scratch, utilizing
        the React framework along with raw HTML/CSS. Each site features a custom
        layout and interactive elements, tailored to effectively showcase
        projects, experience, and achievements. They are fully responsive,
        ensuring an optimal viewing experience across all screen sizes and
        devices, and are self-hosted through Netlify for seamless performance
        and deployment.
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
];

export const Projects: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const textH1Ref = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLParagraphElement>(null);
  const projRef = useRef<HTMLDivElement>(null);

  const gsapAnimation = (
    ref: React.MutableRefObject<HTMLElement | null>,
    deg: number,
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
      },
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
