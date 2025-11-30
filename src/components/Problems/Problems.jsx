import React from "react";
import arrow from "./assets/arrow.svg";
import chartBar from "./assets/chartBar.svg";
import timer from "./assets/timer.svg";
export default function Problems() {
    return (
        <>
            <div className="font-[Unbounded] text-4xl font-normal mt-32">
                <div className="h-[140px] text-center font-[Unbounded] text-4xl font-normal">
                    Это позволяет <span className="text-[#2563EB] font-bold">защитить бизнес</span> от частых проблем, на которых теряются время и деньги при внедрении изменений
                </div>
            </div>
            <div className="flex items-center gap-10">
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px] after:content-[url('../assets/breakingLine.svg')]">
                    <img src={arrow} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%]">Ошибки в оценке рисков и потенциала команды</div>
                </div>
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px] beforeafter_image relative">
                    <img src={chartBar} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%] ">Неправильно установленные KPI и критерии успеха</div>
                </div>
                <div className="flex flex-col gap-0.5 justify-center items-center w-[400px] h-[200px]">
                    <img src={timer} alt="" />
                    <div className="font-[Unbounded] text-[20px] font-normal text-center w-[80%] h-[60px]">
                        Типичные ошибки <br />в дорожной карте - повороты не туда, спешка
                    </div>
                </div>
            </div>
        </>
    );
}
