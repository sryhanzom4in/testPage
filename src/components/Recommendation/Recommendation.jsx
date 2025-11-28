import React from "react";
import firstImage from "./assets/firstImage.png";
import secondImage from "./assets/secondImage.png";
import thirdImage from "./assets/thirdImage.png";
import fourthImage from "./assets/fourthImage.jpg";
export default function Recommendation() {
    return (
        <div className="w-full flex flex-col items-center font-[Unbounded] text-center gap-5">
            <div className="font-bold text-[36px]">
                Образовательная программа <br />
                “Путь через перемены”
            </div>
            <div className="text-[#2563EB] text-[24px]">по технологии #ПобеждаемКомандой</div>
            <div className="w-full flex flex-row flex-wrap justify-start text-[16px]">
                <div className="w-[25%] text-center flex items-center justify-center">Подходит как для оффлайн, так и для распределенных команд. </div>
                <img className="w-[25%] rounded-2xl" src={firstImage} alt="" />
                <div className="w-[25%] text-center flex items-center justify-center">Учитесь из любой точки мира вместе с командой!</div>
                <img className="w-[25%] rounded-2xl" src={secondImage} alt="" />
                <img className="w-[25%] rounded-2xl" src={thirdImage} alt="" />
                <div className="w-[25%] text-center flex items-center justify-center">Для сотрудников разных специализаций и поколений.</div>
                <img className="w-[25%] rounded-2xl" src={fourthImage} alt="" />
                <div className="w-[25%] text-center flex items-center justify-center">
                    Будь вместе! <br /> Будь с командой!
                </div>
            </div>
            <div className="font-bold text-[36px] mt-[73px]">Открытая группа стартует 13 октября</div>
            <button className="bg-[#111F3D] text-[#FFFFFF] w-[640px] h-20 rounded-[30px]">Оставить заявку</button>
        </div>
    );
}
