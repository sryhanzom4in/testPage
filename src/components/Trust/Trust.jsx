import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dns from "./assets/DNS.png";
import doubleGis from "./assets/2GIs.png";
import wolkswagen from "./assets/Wolkswagen.png";
import megaphone from "./assets/MegaPhone.png";
import yandex from "./assets/Yandex.png";
import kamaz from "./assets/KAMAZ.png";
import moscow from "./assets/Moscow.png";
import sber from "./assets/SBER.png";
import mailru from "./assets/MailRU.png";
import rostelecom from "./assets/RosTeleKom.png";
import checkboxIcon from "./assets/checkboxIcon.svg";
export default function Trust() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
    };
    const logosArray = [dns, doubleGis, wolkswagen, megaphone, yandex, kamaz, moscow, sber, mailru, rostelecom];
    return (
        <>
            <div className="font-[Unbounded] text-[36px] font-bold mt-[120px]">С 2012 года нам доверяют</div>
            <div className="mt-10">
                <Slider {...settings}>
                    {logosArray.map((el) => (
                        <div className="">
                            <div className="flex justify-center items-center w-[260px] h-[200px] bg-[#FFFFFF] rounded-2xl gap-[45px]">
                                <img className="grayscale-100" src={el} alt="" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="flex items-center gap-10 mt-[67px]">
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px] after:content-[url('../assets/breakingLine.svg')]">
                    <img src={checkboxIcon} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%]">Более 6000 диалоговых командных сессий и фокус-групп.</div>
                </div>
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px] beforeafter_image relative">
                    <img src={checkboxIcon} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%]">Более 300 внутренних лидерских конференций и сообществ</div>
                </div>
                {/* <div className="w-0 h-[110px] border border-dashed border-[#2563EB]"></div> */}
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px]">
                    <img src={checkboxIcon} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%] h-[60px]">260 управленцев прошли обучение.</div>
                </div>
            </div>
        </>
    );
}
