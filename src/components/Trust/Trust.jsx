import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dns from "./assets/DNS.png";

export default function Trust() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 25000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: -1,
    };
    return (
        <>
            <div className="font-[Unbounded] text-[36px] font-bold mt-[120px]">С 2012 года нам доверяют</div>
            <div>
                <Slider {...settings}>
                    <div className="w-[260px] h-[200px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={dns} alt="" />
                        </div>
                    </div>
                    <div className="w-[260px] h-[200px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={dns} alt="" />
                        </div>
                    </div>
                    <div className="w-[260px] h-[200px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={dns} alt="" />
                        </div>
                    </div>
                    <div className="w-[260px] h-[200px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={dns} alt="" />
                        </div>
                    </div>
                    <div className="w-[260px] h-[200px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={dns} alt="" />
                        </div>
                    </div>
                    <div className="w-[260px] h-[200px]">
                        <div className="w-full h-full flex justify-center items-center">
                            <img src={dns} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}
