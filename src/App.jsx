import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ConsultBanner from "./components/ConsultBanner";
import Advantages from "./components/Advantages";
import Stats from "./components/Stats";
import Trust from "./components/Trust/Trust";
function App() {
    return (
        <>
            <Header />
            <div className="w-screen h-full">
                <div className="flex justify-center">
                    <div className="w-7xl">
                        <ConsultBanner />
                        <Advantages />
                        <Stats />
                        <Trust />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
