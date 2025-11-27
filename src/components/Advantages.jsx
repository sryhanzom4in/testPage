import React from "react";
import compassIcon from "../assets/compassIcon.svg";
import usersIcon from "../assets/usersIcon.svg";
import trophyIcon from "../assets/trophyIcon.svg";
import breakingLine from "../assets/breakingLine.svg";
export default function Advantages() {
    return (
        <>
            <div className="font-[Unbounded] text-[32px] font-normal">
                <div className="h-[140px] text-center font-[Unbounded] text-[32px] font-normal">
                    Мы помогаем собственникам, первым лицам компаний <br /> и их командам пройти через изменения и неопределённость <br /> к новым целям.
                </div>
            </div>
            <div className="flex items-center gap-10">
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px] after:content-[url('../assets/breakingLine.svg')]">
                    <img src={compassIcon} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%]">пройти через неопределённость</div>
                </div>
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px]">
                    <img src={usersIcon} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%]">сохранить себя и лучших людей в команде</div>
                </div>
                {/* <div className="w-0 h-[110px] border border-dashed border-[#2563EB]"></div> */}
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px]">
                    <img src={trophyIcon} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%] h-[60px]">
                        получить тот <br /> результат, ради которого начали перемены
                    </div>
                </div>
            </div>
        </>
    );
}
