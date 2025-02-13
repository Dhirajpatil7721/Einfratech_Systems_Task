import React from "react";
import bg from "../img/background.jpg";
import './Home.css'
import About from "../About/About";
import Service from "../Service/Service";

function Home() {
    return (
        <>
            <div id="home"
                className="h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h3 id="homeh3" className="text-lg md:text-2xl font-semibold">Tours & Travel</h3>
                <h1 id="homeh1" className="text-2xl md:text-5xl font-bold text-center mt-2 cssanimation leFadeIn random">
                    Discover Amazing Places With Us...
                </h1>

            </div>
            <About />
            <Service />
        </>
    );
}

export default Home;
