import React from "react";
import { scrollTo } from "./nav.js";
export default function Footer() {
    return (
        <footer className="bg-[#2563EB] mt-20 pt-14 pb-10 sm:mt-24 sm:pt-16 sm:pb-12 font-[Unbounded]" id="contacts">
            <div className="container mx-auto px-4 flex flex-col gap-10">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:gap-16 xl:items-stretch">
                    <div className="flex flex-col w-full xl:w-auto order-2 xl:order-1 items-start text-left">
                        <div className="text-white font-bold text-4xl mb-6">#ПобеждаемКомандой</div>
                        <nav className="mb-8">
                            <ul className="flex flex-col  space-y-4 mt-5 text-white hover:text-white/80 transition  sm:text-lg">
                                <li className="list-none cursor-pointer" onClick={() => scrollTo("tech")}>
                                    Технология
                                </li>
                                <li className="list-none cursor-pointer" onClick={() => scrollTo("advantages")}>
                                    Преимущества
                                </li>
                                <li className="list-none cursor-pointer" onClick={() => scrollTo("program")}>
                                    Программа
                                </li>
                                <li className="list-none cursor-pointer" onClick={() => scrollTo("formats")}>
                                    Форматы
                                </li>
                                <li className="list-none cursor-pointer" onClick={() => scrollTo("corporate")}>
                                    Для корпоратов
                                </li>
                                <li className="list-none cursor-pointer" onClick={() => scrollTo("contacts")}>
                                    Контакты
                                </li>
                            </ul>
                        </nav>

                        <div className="flex justify-center text-[15px]">
                            <p className="text-white/70 mt-10 opacity-40">© 2025. Партнёрская сессия.</p>
                            <a href="https://partnership.expert/confidence" className="text-white/70 ml-20 mt-10 opacity-40">
                                Политика конфиденциальности
                            </a>
                        </div>
                        <p className="text-white/70 opacity-40">Все права защищены.</p>
                    </div>

                    <div className="flex w-full flex-col order-1 xl:order-2">
                        <div className="flex flex-col justify-center items-center text-center w-full py-6 xl:py-10">
                            <div className="text-white font-semibold tracking-widest text-4xl  mb-6">+7 962 222 55 82</div>
                            <a href="tel:+79622225582" className="font-semibold text-[#2563EB] text-3xl py-3 px-6 bg-white rounded-full w-[529px]">
                                Позвоните мне
                            </a>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-6 w-132 rounded-xl mx-auto">
                            <h3 className="text-white textMedium mb-4 text-[18px] text-start">Получайте новости и спецпредложения</h3>
                            <input type="email" placeholder="Ваш email" className="w-full px-4 bg-white py-3 textMedium rounded-2xl mb-3 pl-10 outline-none" />

                            <label className="flex items-center space-x-2 text-white text-sm mb-3">
                                <input type="checkbox" className="custom-checkbox" />
                                <span className=" text-[13px] ml-2">
                                    Я согласен с{" "}
                                    <a href="https://partnership.expert/confidence" className="text-gray-300">
                                        Политикой конфиденциальности
                                    </a>
                                </span>
                            </label>

                            <label className="flex items-center space-x-2 text-white text-sm mb-4">
                                <input class="custom-checkbox" type="checkbox" />
                                <span className="ml-2  text-[12px]">Я даю согласие на получение информационной рассылки</span>
                            </label>

                            <button className="w-full bg-[#111F3D] text-white cursor-pointer textMedium py-5 rounded-2xl text-sm">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
