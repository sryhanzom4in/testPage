import React from "react";
import iphone from "./assets/phone.svg";

export default function Contact() {
    return (
        <div className="bg-[#2563EB] rounded-[20px] p-[30px] mt-40 max-w-7xl mx-auto mb-20 flex justify-center gap-8 font-[Unbounded]" id="contact">
            <div className="relative bg-accent rounded-[26px] px-[5px] pt-[150px] pb-20 w-full">
                <div className="absolute left-1/2 top-[-90px] transform -translate-x-1/2 w-full flex justify-center">
                    <div className="bg-white relative border border-[#2563EB] flex flex-col justify-center items-center w-[90vw] max-w-[450px] h-auto min-h-[180px] p-6 rounded-[26px]">
                        <div className="font-bold text-[#2563EB] text-center text-4xl max-w-[300px]">
                            Связаться
                            <br />с командой
                        </div>
                        <img src={iphone} alt="" className="absolute right-[-120px] top--10 w-[100px] sm:w-[140px] md:w-40 hidden sm:block" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex flex-col gap-10 w-full lg:w-1/2">
                        <div className="text-white font-bold text-4xl">
                            Получите консультацию
                            <br />и доступ к демо-среде
                        </div>
                        <div className="text-white text-[20px]">
                            <p className="">
                                Оставьте контакты — в течение
                                <br /> рабочего дня обсудим
                                <br />
                                задачу, пришлём программу
                                <br /> и доступ к материалам.
                            </p>
                            <p className="mt-10">
                                Расскажем о скидках для команд
                                <br /> и корпоративных пакетов.
                            </p>
                            <ul className="flex flex-col gap-3 list-disc mt-4 text-white ml-5 text-[20px]">
                                <li>
                                    Демо на живой платформе
                                    <br /> с ИИ-ассистентом
                                </li>
                                <li>
                                    Индивидуальные условия
                                    <br /> и расчёт стоимости
                                </li>
                                <li>
                                    Доступ к аналитике
                                    <br /> и бенчмаркам программы
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-[#467AEE] rounded-[30px] p-7 flex flex-col gap-6 min-w-2xl lg:w-1/2">
                        <form action="" className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3 ">
                                <label className="text-white text-xs">ИМЯ</label>
                                <input type="text" required name="name" placeholder="Анна Смирнова" className="rounded-2xl p-4 w-full text-black bg-white placeholder-black-300" />
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <label className="text-white text-xs">КОМПАНИЯ ИЛИ ФОРМАТ</label>
                                <input type="text" required name="company" placeholder="Компания / Семейная команда" className="rounded-2xl p-4 w-full text-black bg-white placeholder-black-300" />
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <label className="text-white text-xs">КОНТАКТ</label>
                                <input type="text" required name="contact" placeholder="@username или +7" className="rounded-2xl p-4 w-full text-black bg-white placeholder-black-300" />
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <label className="text-white text-xs">КОММЕНТАРИЙ</label>
                                <textarea
                                    name="comment"
                                    placeholder="Расскажите, с каким запросом приходите"
                                    className="rounded-2xl p-4 w-full text-black bg-white placeholder-black-300 h-[120px]"
                                ></textarea>
                            </div>

                            <button type="submit" className="bg-[#0F172AE5] text-white textBold py-3 rounded-2xl mt-2">
                                Отправить заявку
                            </button>
                            <p className="text-xs text-white/70 textLight">
                                Нажимая на кнопку, вы соглашаетесь с обработкой персональных
                                <br /> данных и даете доступ к материалам программы.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
