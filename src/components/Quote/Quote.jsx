import React from "react";
import photo from "./assets/photo.png";

export default function Quote() {
    return (
        <div className="mt-[60px] min-h-[360px] bg-[#2563EB] rounded-3xl flex text-white font-[Unbounded]">
            <div className="w-[25%] relative">
                <img className="absolute left-8 top-8  max-h-[380px] max-w-[316px] rounded-3xl" src={photo} alt="" />
            </div>
            <div className="flex flex-col w-[70%] justify-center items-center gap-15">
                <div className="text-start text-xl">
                    “Управления изменениями - это отдельная область знаний. <br /> Не то же самое, что управление проектами или операционное управление. Это своего рода “буферная зона”, в которой
                    требуется особый сет навыков и компетенций для достижения успеха”.
                </div>
                <div className="text-start w-full">
                    <div className="text-3xl">Татьяна Чухутина </div>
                    <div className="text-xl">автор методики и основатель проекта #ПобеждаемКомандой.</div>
                </div>
            </div>
        </div>
    );
}
