import React, {useState } from "react"
import "./Navbar.css"
import Link from "react-scroll/modules/components/Link";
import {FaBars, FaTimes} from "react-icons/fa";
// import resumePDF from "../../assets/JosephQuinnResume.pdf";


export const Navbar: React.FC = () => {
    const [isShowNav, setIsShowNav] = useState(false);
    const openResume = () => {
        // window.open(resumePDF, "_blank");
    };
    return(
        <div className="navbar" style={{
            zIndex: `${isShowNav ? "10000" : "100"} `
        }}>
            <h1 className="intro" style={{marginLeft:"15px"}}>Joseph Quinn</h1>
            <div className={`nav-menu ${isShowNav ? "responsive_nav" : ""}`}>
                <div className="nav-link">
                    <Link className="nav-item" to="home" onClick={() => setIsShowNav(false)} spy={true} smooth={true}
                          offset={0} duration={600}>HOME</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="about" onClick={() => setIsShowNav(false)} spy={true} smooth={true}
                          offset={0} duration={600}>ABOUT</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="project-content" onClick={() => setIsShowNav(false)} spy={true}
                          smooth={true} offset={-50} duration={600}>PROJECTS</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="skill-page" spy={true} onClick={() => setIsShowNav(false)}
                          smooth={true} offset={-50} duration={600}>SKILLS</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="contact" onClick={() => setIsShowNav(false)} spy={true} smooth={true}
                          offset={-50} duration={600}>CONTACT</Link>
                </div>
                <div className="nav-link">
                    <a
                        className="nav-item"
                        href="#"
                        style={{textDecoration:"none", color:"black"}}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsShowNav(false);
                            openResume();
                        }}
                    >
                        RESUME
                    </a>
                </div>
                <button onClick={() => setIsShowNav(false)} className="nav-btn nav-close-btn"><FaTimes/></button>
            </div>
            <button onClick={() => setIsShowNav(true)} className="nav-btn"><FaBars/></button>
        </div>
    );
}