import React from "react";

export default function WhatsInside() {
    return (
        <>
            <div className="bg-[#2563EB] absolute w-screen h-[1240px] left-0"></div>
            <div className=" flex flex-col justify-center items-center font-[Unbounded] mt-[100px] h-[1240px] text-white">
                <div className="text-[36px] w-full text-center h-[105px] flex justify-center items-center ">Что внутри технологии?</div>
                <div className="w-full h-[1280px] flex justify-start flex-wrap flex-row gap-7">
                    <div className="w-[47%] h-[70%] bg-white opacity-5 rounded-4xl border border-white border-opacity-10">
                        <div>
                            <div>Набор карт “Побеждаем командой” и сценарии проведения диалоговых командных сессий</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="w-[50%] h-[70%] flex flex-col gap-7">
                        <div className="w-full h-[70%] bg-white opacity-5 rounded-4xl"></div>
                        <div className="w-full h-[30%] bg-white opacity-5 rounded-4xl"></div>
                    </div>
                    <div className="w-full h-[30%] rounded-4xl bg-white opacity-5"></div>
                </div>
            </div>
        </>
    );
}
