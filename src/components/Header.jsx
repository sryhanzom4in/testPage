import React from "react";

export default function Header() {
    return (
        <header className="flex justify-center bg-[#2563EB] text-[#E2E8F0] font-[Unbounded]  w-screen h-[60px]">
            <div className="flex justify-around items-center font-normal h-full w-[80%] ">
                <div className="font-bold text-[18px]">#ПобеждаемКомандой</div>
                <div className="">Технология</div>
                <div>Преимущества</div>
                <div>Программа</div>
                <div>Форматы</div>
                <div>Для корпоратов</div>
                <div>Контакты</div>
                <button className="bg-[#FAFAFA] text-[#2563EB] rounded-2xl w-[10%] h-[50%]">Демо</button>
            </div>
        </header>
    );
}
