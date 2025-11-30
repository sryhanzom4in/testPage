import React from "react";
import photo from "./assets/photo.png";
export default function QuoteDmitrieva() {
    return (
        <div className="mt-[60px] min-h-[360px] bg-[#2563EB] rounded-3xl flex text-white font-[Unbounded] flex-row-reverse">
            <div className="w-[25%] relative">
                <img className="absolute right-8 top-8  max-h-[380px] max-w-[316px] rounded-3xl" src={photo} alt="" />
            </div>
            <div className="flex flex-col w-[70%] justify-center items-center gap-15">
                <div className="text-start text-xl">
                    “Застрять в переменах - это как заблудиться в бескрайней тайге. <br /> И для нас главное достижение всегда - это найденный нашими клиентами путь через перемены к тем важным
                    результатам, ради которых эти перемены и были запущены изначально”.
                </div>
                <div className="text-start w-full">
                    <div className="text-3xl">Александра Дмитриева</div>
                    <div className="text-xl">
                        соавтор образовательной программы “Путь через перемены”, <br />
                        эксперт в образовании взрослых и внедрении изменений”.
                    </div>
                </div>
            </div>
        </div>
    );
}
