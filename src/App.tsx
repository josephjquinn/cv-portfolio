import './App.css';
import {Navbar} from "./components/Navbar/Navbar.tsx"
import {Home} from "./components/Home/Home.tsx"
import {About} from "./components/About/About.tsx"
import {Projects} from "./components/Projects/Projects.tsx"
import {Skills} from "./components/Skills/Skills.tsx"




import React from "react";
import Contact from "./components/Contact/Contact.tsx";
const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    );
}

export default App;

