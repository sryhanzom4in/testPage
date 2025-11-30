import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoNataliyaN from "./assets/nataliyaN.svg";
import photoMarinaB from "./assets/marinaB.svg";
import photoOlgaG from "./assets/olgaG.svg";
import photoIngaG from "./assets/ingaG.svg";
import arrowleft from "./assets/arrowleft.svg";
import arrowright from "./assets/arrowright.svg";
const reviews = [
    {
        photo: photoNataliyaN,
        name: "Наталья Нургалиева",
        position: "и.о. начальника отдела персонала ОАО “Сбербанк России”, “Восток-запад”",
        review: "“Для нас диалоговый инструмент (карты #ПобеждаемКомандой) оказался очень полезным. Это нестандартный подход в бизнес-среде, который вызывает интерес у персонала и “снимает блоки” в разговоре. Инструмент позволяет неформально обсудить...",
    },
    {
        photo: photoMarinaB,
        name: "Марина Боброва",
        position: "Руководитель по подбору, обучению и развитию персонала. Кавказский филиал ПАО “Мегафон”",
        review: "“Я очень довольна этой методикой, с точки зрения оценки результата и его полезности для наших специалистов. Легко, открыто и в интересной форме получаем самую полезную информацию о важном в работе профессионального руководителя. Это содержательная изюминка...",
    },
    {
        photo: photoOlgaG,
        name: "Ольга Гайдышева",
        position: "зам. директора по администрированию 2Гис - Дальний Восток",
        review: "“Я очень довольна этой методикой, с точки зрения оценки результата и его полезности“Была задача понять уровень вовлеченности и готовности сотрудников к изменениям. Технология #ПобеждаемКомандой (мобильное приложение) позволила нам быстро провести диагностику ...",
    },
    {
        photo: photoIngaG,
        name: "Инга Герасименко",
        position: "Директор по персоналу БАРС-груп, Казань",
        review: "“Польза конкретно этого инструмента (карты #Побеждаем командой и мобильное приложение) в том, что вопросы очень хорошо переработаны и сформулированы. Нам, как ИТ-компании такие формулировки подходят идеально, потому что мы не можем себе позволить общаться...",
    },
];

export default function Reviews() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className=" absolute bottom-0 left-0 z-1" onClick={onClick}>
                <img src={arrowleft} alt="" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className="absolute bottom-0 left-25" onClick={onClick}>
                <img src={arrowright} alt="" />
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 1000,
        prevArrow: <SampleNextArrow />,
        nextArrow: <SamplePrevArrow />,
        arrows: true,
        draggable: false,
    };
    return (
        <div className="w-screen h-full">
            <div className="flex justify-center">
                <div className="w-[85%]">
                    <div className="font-[Unbounded] mt-24">
                        <div className="text-4xl font-bold mb-10 ml-5">Отзывы</div>
                        <div className="relative ">
                            <Slider {...settings}>
                                {reviews.map((el) => (
                                    <div>
                                        <div className="bg-[#FFFFFF] h-96 w-[95%] mb-20 rounded-3xl">
                                            <div className=" flex w-[95%] flex-row justify-center items-center h-full">
                                                <div className="w-[90%] h-[90%] ml-5 mr-5">
                                                    <img className="" src={el.photo} alt="" />
                                                </div>
                                                <div className="flex flex-col justify-around h-full">
                                                    <div>
                                                        <div className="text-[#2563EB] text-2xl font-bold">{el.name}</div>
                                                        <div className="text-xs">{el.position}</div>
                                                    </div>
                                                    <div className="text-xl">{el.review}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
