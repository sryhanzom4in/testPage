import React from "react";
import { Fragment } from "react";
export default function ConsultBanner() {
    return (
        <>
            <div className="bg-[#2563EB] h-[400px] w-full flex justify-center rounded-4xl font-[Unbounded] relative mt-14 mb-[153px]">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-6 ">
                        <div className="text-[#E2E8F0] text-7xl text-center h-[99px] mt-15">
                            #ПобеждаемКомандой
                        </div>
                        <div className="text-[#E2E8F0] text-[32px] h-[73px] text-center">
                            Образовательная программа | ИИ-ассистент |
                            Сообщество
                        </div>
                    </div>
                </div>
                <div className="w-[450px] h-[200px] bg-[#FFFFFF] font-[Unbounded] rounded-3xl flex flex-col items-center justify-around absolute bottom-[-100px] left-[415px] border border-[#2563EB] ">
                    <div className="text-[20px] text-[#2563EB] f  w-[400px] text-center flex justify-center">
                        Технология создания вовлеченных команд и внедрения
                        изменений
                    </div>
                    <button className="text-[#FFFFFF] bg-[#2563EB] py-2.5 px-6.5 rounded-xl ">
                        Получить консультацию
                    </button>
                </div>
            </div>
        </>
    );
}
