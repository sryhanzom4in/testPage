import React from "react";

export default function FormatsInteractions() {
    return (
        <div className="bg-[#2563EB] rounded-[20px] p-[50px] mt-20 max-w-7xl mx-auto mb-20 flex flex-col gap-8 font-[Unbounded]" id="formats">
            <div className="text-white/70 w-[250px] textRegular h-[25px] flex justify-center items-center bg-white/10 rounded-full text-[10px] tracking-widest border border-white/10">
                <p>ФОРМАТЫ ВЗАИМОДЕЙСТВИЯ</p>
            </div>

            <div className="text-white text-[28px] sm:text-[32px] lg:text-[36px] font-bold ">Выберите конфигурацию под свои задачи</div>

            <div className="flex flex-col textLight lg:flex-row gap-5">
                <p className="text-[16px] text-white max-w-full lg:max-w-[48%]">
                    Индивидуальные и корпоративные условия рассчитываем отдельно.
                    <br /> Поможем собрать программу под ваш запрос.
                </p>
                <p className="text-[16px] text-white max-w-full lg:max-w-[48%]">
                    Гарантируем возврат 100% стоимости,
                    <br /> если решение не подойдёт
                    <br /> после первой недели.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 bg-white/10 rounded-3xl border border-white/10 p-6 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="text-white  text-[18px] font-bold">
                            Программа
                            <br />
                            «Путь через перемены»
                        </div>
                        <div className="text-white  text-[30px] mt-2 font-bold">65 000 ₽</div>
                        <p className="text-white textLight text-[14px] mt-3">
                            8 недель практики для лидеров
                            <br /> и команд с трекером и живыми
                            <br /> встречами.
                        </p>
                        <ul className="flex flex-col gap-3 list-disc ml-5 textLight mt-6 text-white text-[15px]">
                            <li>Гибридный формат: онлайн + офлайн сессии</li>
                            <li>Трекер сопровождения и индивидуальная обратная связь</li>
                            <li>Работа в мини-группах и доступ к сообществу</li>
                        </ul>
                    </div>
                    <button className=" mt-6 rounded-3xl cursor-pointer border border-white/10 w-full py-2 text-white" onClick={() => scrollTo("contact")}>
                        Отправить заявку
                    </button>
                </div>

                <div className="flex-1 bg-white/10 rounded-3xl border border-white/10 p-6 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="text-white  text-[18px] font-bold">
                            Годовая подписка <br />
                            на цифровой сервис
                        </div>
                        <div className="text-white  text-[30px] mt-2 font-bold">30 000 ₽</div>
                        <p className="text-white textLight text-[14px] mt-3">
                            ИИ-ассистент и аналитика
                            <br /> для одной команды
                            <br /> (до 15 человек).
                        </p>
                        <ul className="flex flex-col gap-3 list-disc ml-5 textLight mt-6 text-white text-[15px]">
                            <li>Регулярная диагностика состояния команды</li>
                            <li>Инструменты повышения вовлечённости</li>
                            <li>Доступ к рекомендациям по действиям в реальном времени</li>
                        </ul>
                    </div>
                    <button className=" mt-6 rounded-3xl border cursor-pointer border-white/10 w-full py-2 text-white" onClick={() => scrollTo("contact")}>
                        Получить консультацию
                    </button>
                </div>

                <div className="flex-1 bg-white/10 rounded-3xl border border-white/10 p-6 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="text-white  text-[18px] font-bold">
                            Карты «Побеждаем
                            <br />
                            командой»
                        </div>
                        <div className="text-white  text-[30px] mt-2 font-bold">55 000 ₽</div>
                        <p className="text-white textLight text-[14px] mt-3">
                            7 колод с инструкциями <br />и сценарием для самостоятельных
                            <br /> диалоговых сессий.
                        </p>
                        <ul className="flex flex-col gap-3 list-disc textLight ml-5 mt-6 text-white text-[15px]">
                            <li>Пошаговые сценарии и вопросы</li>
                            <li>Рабочие тетради и чек-листы</li>
                            <li>Доставка и поддержка по внедрению</li>
                        </ul>
                    </div>
                    <button className=" mt-6 rounded-3xl border cursor-pointer border-white/10 w-full py-2 text-white" onClick={() => scrollTo("contact")}>
                        Предзаказать набор
                    </button>
                </div>
            </div>
        </div>
    );
}
