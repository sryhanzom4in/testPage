import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ConsultBanner from "./components/ConsultBanner";
import Advantages from "./components/Advantages";
import Stats from "./components/Stats";
import Trust from "./components/Trust/Trust";
import Recommendation from "./components/Recommendation/Recommendation";
import WhatsInside from "./components/WhatsInside/WhatsInside";
import Quote from "./components/Quote/Quote";
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
                        <Recommendation />
                    </div>
                </div>
            </div>
            <WhatsInside />
            <div className="w-screen h-full">
                <div className="flex justify-center">
                    <div className="w-7xl">
                        <Quote />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
