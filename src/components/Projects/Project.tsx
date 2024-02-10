import { useState } from "react";
import { BsYoutube, BsGithub } from "react-icons/bs";
import { easeInOut, motion as m } from "framer-motion";
import "./project.css";

interface ProjectProps {
    img: string;
    title: string;
    title_des: string;
    img_des: string;
    description: JSX.Element;
    youtube?: { link: string; title: string }[];
    github?: string;
}

export default function Project({
                                    img,
                                    title,
                                    title_des,
                                    img_des,
                                    description,
                                    youtube,
                                    github,
                                }: ProjectProps) {
    const [isClick, setIsClick] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <div className="project">
            <div
                className="background"
                onClick={() => setIsClick(true)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <img src={img} alt={title} />
                {isHover && (
                    <>
                        <m.div
                            className="click-me-mate"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 0.3, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: 0.6, ease: easeInOut }}
                        ></m.div>
                        <m.p
                            className="click-me"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: easeInOut }}
                        >
                            Click
                            <br />
                            me
                        </m.p>
                    </>
                )}
            </div>
            <p className="title">{title.toUpperCase()}</p>
            {isClick && (
                <div className="detail">
                    <div className="mate" onClick={() => setIsClick(false)}></div>
                    <div className="project-card">
                        <button onClick={() => setIsClick(false)}>close</button>
                        <p className="title-detail">PROJECT DETAIL</p>
                        <m.img
                            src={img_des}
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: 0.6, ease: easeInOut }}
                        />
                        <m.h2
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: easeInOut }}
                        >
                            {title_des}
                        </m.h2>
                        <m.div
                            className="content"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: easeInOut }}
                        >
                            {description}
                            {youtube && (
                                <p>To see more about my project. Let's check out my Youtube video:</p>
                            )}
                            {youtube &&
                                youtube.map((item, index) => (
                                    <a href={item.link} key={index} className="youtube-link">
                                        <p>
                                            <BsYoutube className="icon" /> {item.title}
                                        </p>
                                    </a>
                                ))}
                            {github && (
                                <a className="github-link" href={github}>
                                    <p>
                                        <BsGithub className="github-icon" /> Check out the code on my
                                        Github{" "}
                                    </p>
                                </a>
                            )}
                        </m.div>
                    </div>
                </div>
            )}
        </div>
    );
}
