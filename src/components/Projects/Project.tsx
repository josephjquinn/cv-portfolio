import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { easeInOut, motion as m } from "framer-motion";
import "./project.css";

interface ProjectProps {
  img: string;
  title: string;
  subtitle: string;
  img_des: string;
  description: JSX.Element;
  stack?: string;
  github?: string;
}

export default function Project({
  img,
  title,
  subtitle,
  img_des,
  description,
  stack,
  github,
}: ProjectProps) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    if (isClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isClick]);

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
              Click me
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
            <div className={"proj-intro"}>
              <m.h2
                style={{
                  marginRight: "10px",
                }}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                transition={{ delay: 0.2, duration: 0.6, ease: easeInOut }}
              >
                {subtitle}
              </m.h2>

              <m.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                transition={{ delay: 0.2, duration: 0.6, ease: easeInOut }}
              >
                {github && (
                  <a
                    className="github-link"
                    href={github}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <BsGithub
                      className="github-icon"
                      style={{ marginTop: "21px", marginRight: "5px" }}
                    />
                    <div>
                      <p>Github</p>
                    </div>
                  </a>
                )}
              </m.div>
            </div>

            {stack && (
              <m.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                transition={{ delay: 0.2, duration: 0.6, ease: easeInOut }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "0px",
                  }}
                >
                  <h2
                    style={{
                      fontWeight: "bold",
                      marginRight: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Tech Stack:
                  </h2>
                  <h2 style={{ flexWrap: "wrap" }}>{stack}</h2>
                </div>
              </m.div>
            )}

            <m.div
              className="content"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeInOut }}
            >
              {description}
            </m.div>
          </div>
        </div>
      )}
    </div>
  );
}
