import './App.css';
import {Navbar} from "./components/Navbar/Navbar.tsx"
import {Home} from "./components/Home/Home.tsx"
import {About} from "./components/About/About.tsx"


import React from "react";
const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
        </div>
    );
}

export default App;

