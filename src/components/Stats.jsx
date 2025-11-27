import React from "react";

export default function Stats() {
    return (
        <div className="font-[Unbounded] flex gap-4">
            <div className="relative w-[415px] h-[400px] bg-[#FFFFFF] rounded-[20px] flex flex-col text-center pt-[90px] pb-[30px]  justify-center items-center gap-[85px]">
                <div className="absolute top-0 left-0  text-[140px] opacity-50 w-full h-[150px] text-[#C3DCF980]">84%</div>
                <div className="text-[20px] font-medium w-[350px] h-[50%] z-1">84% компаний проваливают цифровую трансформацию</div>
                <div className="text-[16px] w-[311px] h-[50%]">Помогаем снизить риск провала изменений за счет работы по технологии “Побеждаем командой”</div>
            </div>
            <div className="relative w-[415px] h-[400px] bg-[#FFFFFF] rounded-[20px] flex flex-col text-center pt-[90px] pb-[30px]  justify-center items-center gap-[85px]">
                <div className="absolute top-0 left-0  text-[140px] opacity-50 w-full h-[150px] text-[#C3DCF980]">№1</div>
                <div className="text-[20px] font-medium w-[350px] h-[50%] z-1">Управление изменениями - навык №1, которым хотят овладеть руководители</div>
                <div className="text-[16px] w-[311px] h-[50%]">Обучаем инструментам системного управления изменениями в бизнесе</div>
            </div>
            <div className="relative w-[415px] h-[400px] bg-[#FFFFFF] rounded-[20px] flex flex-col text-center pt-[90px] pb-[30px] justify-center items-center gap-[85px]">
                <div className="absolute top-0 left-0  text-[140px] opacity-50 w-full h-[150px] text-[#C3DCF980]">25%</div>
                <div className="text-[20px] font-medium w-[350px] h-[50%] z-1">До 25% прибыли теряется из-за накопленной усталости от изменений, выгорания и снижения вовлеченности</div>
                <div className="text-[16px] w-[311px] h-[50%]">Проводим диагностику состояния команд, развиваем вовлеченность и навыки здоровой коммуникации</div>
            </div>
        </div>
    );
}
