import React from "react";

export default function WhoComes() {
    return (
        <div className="bg-[#2563EB] w-full flex flex-col items-center justify-center font-[Unbounded] text-white h-auto mt-24 pb-20">
            <div className="w-[69%] flex flex-col items-center text-center text-4xl gap-5">
                <div className="mt-15">
                    Кто обычно приходит к нам на программу <br /> “Путь через перемены”?
                </div>
                <div className="font-[Unbounded] flex gap-10">
                    <div className="relative h-[400px] bg-[#2f6ced] rounded-3xl flex flex-col text-center justify-center items-center gap-[85px]  w-[33%] shadow-2xl pb-15">
                        <div className="absolute top-0 left-0  text-[140px] opacity-50 w-full h-[150px] text-[#C3DCF980]">30%</div>
                        <div className="z-1 text-3xl mt-40 font-bold">Собственники</div>
                        <div className="text-xl ">
                            Собственникам бизнеса и топ-менеджерам, которые поддерживают все изменения <br /> в компании
                        </div>
                    </div>
                    <div className="relative h-[400px] bg-[#2f6ced] rounded-3xl flex flex-col text-center justify-center items-center gap-[85px] w-[33%]  shadow-2xl pb-15  ">
                        <div className="absolute top-0 left-0  text-[140px] opacity-50 w-full h-[150px] text-[#C3DCF980]">50%</div>
                        <div className="z-1 text-3xl mt-40 font-bold">Руководители</div>
                        <div className="text-xl ">
                            Собственникам бизнеса и топ-менеджерам, которые поддерживают все изменения <br /> в компании
                        </div>
                    </div>
                    <div className="relative h-[400px] bg-[#2f6ced] rounded-3xl flex flex-col text-center justify-center items-center gap-[85px] w-[33%] shadow-2xl pb-15">
                        <div className="absolute top-0 left-0  text-[140px] opacity-50 w-full h-[150px] text-[#C3DCF980]">20%</div>
                        <div className="z-1 text-3xl mt-40 font-bold">HR</div>
                        <div className="text-xl ">
                            Собственникам бизнеса и топ-менеджерам, которые поддерживают все изменения <br /> в компании
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
