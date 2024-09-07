import React, { useState } from "react";
import "./Navbar.css";
import Link from "react-scroll/modules/components/Link";
import { FaBars, FaTimes } from "react-icons/fa";
import resumePDF from "/Quinn_Joseph_Resume.pdf";

export const Navbar: React.FC = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const openResume = () => {
    window.open(resumePDF, "_blank");
  };

  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <div
      className="navbar"
      style={{
        zIndex: `${isShowNav ? "10000" : "100"} `,
      }}
    >
      <h1 className="intro" style={{ marginLeft: "15px" }}>
        Joseph Quinn
      </h1>
      <div className={`nav-menu ${isShowNav ? "responsive_nav" : ""}`}>
        <div className="nav-link">
          <Link
            className="nav-item"
            to="home"
            onClick={() => setIsShowNav(false)}
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            HOME
          </Link>
        </div>
        <div className="nav-link">
          <Link
            className="nav-item"
            to="about"
            onClick={() => setIsShowNav(false)}
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            ABOUT
          </Link>
        </div>
        <div className="nav-link">
          <Link
            className="nav-item"
            to="project-content"
            onClick={() => setIsShowNav(false)}
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
          >
            PROJECTS
          </Link>
        </div>
        <div className="nav-link">
          <Link
            className="nav-item"
            to="skill-page"
            spy={true}
            onClick={() => setIsShowNav(false)}
            smooth={true}
            offset={-50}
            duration={600}
          >
            SKILLS
          </Link>
        </div>
        <div className="nav-link">
          <Link
            className="nav-item"
            to="contact"
            onClick={() => setIsShowNav(false)}
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
          >
            CONTACT
          </Link>
        </div>
        <div className="nav-link">
          <a
            className="nav-item"
            href="#"
            style={{ textDecoration: "none", color: "black" }}
            onClick={(e) => {
              e.preventDefault();
              setIsShowNav(false);
              openResume();
            }}
          >
            RESUME
          </a>
        </div>
      </div>
      <button onClick={toggleDropDown} className="nav-btn">
        {isDropDown ? (
          <FaTimes style={{ fontSize: "1.2rem" }} />
        ) : (
          <FaBars style={{ fontSize: "1.2rem" }} />
        )}{" "}
        {/* Toggle between hamburger and close icon */}
      </button>
      {isDropDown && (
        <div
          className="ham-menu"
          style={{
            position: "absolute",
            top: "40px",
            right: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link
              className="nav-ham-item"
              to="home"
              onClick={() => setIsDropDown(false)}
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              HOME
            </Link>
            <Link
              className="nav-ham-item"
              to="about"
              onClick={() => setIsDropDown(false)}
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              ABOUT
            </Link>
            <Link
              className="nav-ham-item"
              to="skill-page"
              onClick={() => setIsDropDown(false)}
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              SKILLS
            </Link>
            <Link
              className="nav-ham-item"
              to="project-content"
              onClick={() => setIsDropDown(false)}
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              PROJECTS
            </Link>
            <Link
              className="nav-ham-item"
              to="contact"
              onClick={() => setIsDropDown(false)}
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              CONTACT
            </Link>
            <Link
              className="nav-ham-item"
              to="resume"
              onClick={() => setIsDropDown(false)}
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              RESUME
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
