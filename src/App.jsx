import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ConsultBanner from "./components/ConsultBanner/ConsultBanner.jsx";
import Advantages from "./components/Advantages/Advantages.jsx";
import Stats from "./components/Stats";
import Trust from "./components/Trust/Trust";
import Recommendation from "./components/Recommendation/Recommendation";
import WhatsInside from "./components/WhatsInside/WhatsInside";
import QuoteChuhutina from "./components/QuoteChuhutina/QuoteChuhutina.jsx";
import Track from "./components/Track.jsx";
import Problems from "./components/Problems/Problems.jsx";
import QuoteDmitrieva from "./components/QuoteDmitrieva/QuoteDmitrieva.jsx";
import Examples from "./components/Examples.jsx";
import WhoComes from "./components/WhoComes.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
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
                        <QuoteChuhutina />
                        <Track />
                        <Problems />
                        <QuoteDmitrieva />
                        <Examples />
                    </div>
                </div>
            </div>
            <WhoComes />
            <Reviews />
        </>
    );
}

export default App;
