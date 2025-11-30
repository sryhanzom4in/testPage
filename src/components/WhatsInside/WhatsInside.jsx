import React from "react";
import bad1 from "./assets/bad1.png";
import good1 from "./assets/good1.png";
import bad2 from "./assets/bad2.png";
import good2 from "./assets/good2.png";
import bad3 from "./assets/bad3.png";
import good3 from "./assets/good3.png";
import bad4 from "./assets/bad4.png";
import good4 from "./assets/good4.png";
import phone from "./assets/phone.png";
import highfive from "./assets/highfive.png";
export default function WhatsInside() {
    return (
        <div className="bg-[#2563EB] w-full flex flex-col items-center font-[Unbounded] text-white pb-24 h-auto">
            <div className="text-[36px] font-bold text-center h-[105px] flex justify-center items-center">Что внутри технологии?</div>
            <div className="w-full max-w-7xl h-[1243px] flex justify-start flex-wrap flex-row gap-7">
                <div className="w-[47%] h-[70%] bg-[#2f6ced] rounded-3xl border border-[#447aec] shadow-2xl shadow-[#2054c5]">
                    <div className="flex flex-col justify-center items-center w-full h-[90%]">
                        <div className="text-center w-[80%] font-bold text-[28px]">Набор карт "Побеждаем командой" и сценарии проведения диалоговых командных сессий</div>
                        <div className="flex flex-row w-[80%] flex-wrap justify-center gap-5 mt-8">
                            <div className="flex gap-[5px]">
                                <img className="w-[90px] h-[130px]" src={bad1} alt="" />
                                <img className="w-[90px] h-[130px]" src={good1} alt="" />
                            </div>
                            <div className="flex gap-[5px]">
                                <img className="w-[90px] h-[130px]" src={bad2} alt="" />
                                <img className="w-[90px] h-[130px]" src={good2} alt="" />
                            </div>
                            <div className="flex gap-[5px]">
                                <img className="w-[90px] h-[130px]" src={good3} alt="" />
                                <img className="w-[90px] h-[130px]" src={bad3} alt="" />
                            </div>
                            <div className="flex gap-[5px]">
                                <img className="w-[90px] h-[130px]" src={good4} alt="" />
                                <img className="w-[90px] h-[130px]" src={bad4} alt="" />
                            </div>
                        </div>
                        <div className="text-[22px] font-normal flex items-center justify-center w-[80%] mt-10">
                            <ul className="flex flex-col gap-5 list-disc font-normal w-full">
                                <li>выявить и описать проблемы, о которых обычно принято умалчивать</li>
                                <li>справиться с противоречиями и преодолеть кризис в команде</li>
                                <li>сформировать качественные горизонтальные связи, командную ответственность и "мы-мышление"</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-[70%] flex flex-col gap-7">
                    <div className="w-full h-[70%] bg-[#2f6ced] border border-[#447aec] rounded-3xl shadow-2xl shadow-[#2054c5]">
                        <div className="flex flex-col w-full h-full justify-around items-center ">
                            <div className="text-[28px] text-center">
                                ИИ-ассистент для команд <br />- диагностика вовлеченности <br />и готовности к изменениям
                            </div>
                            <div className="w-[80%] h-[55%] flex flex-row gap-5">
                                <div className="w-[70%] flex justify-center items-center">
                                    <ol className="list-disc text-[22px] flex flex-col gap-5">
                                        <li>оценить потенциал команды</li>
                                        <li>определить точки напряжения и сопротивления </li>
                                        <li>
                                            мгновенная аналитика и рекомендации для команды, руководителя, <br />а также для 
                                            <br /> HR и собственника
                                        </li>
                                    </ol>
                                </div>
                                <img src={phone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[30%] bg-[#2f6ced] border border-[#447aec] rounded-3xl shadow-2xl shadow-[#2054c5] text-2xl text-center flex flex-col items-center justify-center gap-5 ">
                        <div>
                            Бизнес-игра <br /> "Побеждаем командой"
                        </div>
                        <div>В разработке!</div>
                    </div>
                </div>
                <div className="w-full h-[27%] rounded-3xl bg-[#2f6ced] border border-[#447aec] shadow-2xl shadow-[#2054c5] flex justify-center items-center">
                    <div className="w-[50%] flex ">
                        <div className="flex flex-col justify-center items-center gap-10">
                            <div className="text-2xl w-[80%] font-bold">
                                Сообщество выпускников <br /> и студентов
                            </div>
                            <ol className="text-[18px] w-[80%] list-disc flex flex-col gap-5">
                                <li>поддерживающая среда</li>
                                <li>база знаний</li>
                                <li>доступ к экспертам в узких нишах</li>
                                <li>обмен опытом, разбор кейсов, расширение насмотренности</li>
                            </ol>
                        </div>
                    </div>
                    <div className="w-[50%] h-[80%]">
                        <img className="w-[95%] h-full rounded-3xl" src={highfive} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
