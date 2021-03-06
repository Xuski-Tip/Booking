import React, {useState} from 'react';
import FooterInfo from "../FooterInfo";
import HeaderUpper from "../HeaderUpper";
import {Collapse} from "reactstrap";

const Leadership = () => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const openModal = () => {
        setOpen(!open);
    };
    const openModal2 = () => {
        setOpen2(!open2);
    };


    return (
        <>
            <HeaderUpper/>

            <div className="container">
                <div className="row">
                    <h3 className="w-100 mt-5 text-center">
                        Rahbariyat
                    </h3>
                    <div className="col-12 mt-4 d-flex">
                        <img className="object" src="/images/azolar/rahbar.jpg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">
                                Tahrir kengashi raisi:
                            </h5>
                            <h3>Akmal Saidov</h3>

                            <button type="button" className="btn btn-primary" onClick={openModal}>Tarjimai hol</button>
                            <Collapse isOpen={open}>
                                Акмал Холматович Саидов – 1958 йилда Тошкент вилоятининг Зангиота қишлоғида туғилган.
                                Миллати – ўзбек. Маълумоти – олий. 1981 йилда Мирзо Улуғбек номидаги Ўзбекистон Миллий
                                университетининг ҳуқуқшунослик факультетини имтиёзли диплом билан тамомлаган. 1981-1984
                                йилларда собиқ иттифоқ Фанлар академиясининг Давлат ва ҳуқуқ институти аспирантурасида
                                ўқиб, 1984 йили номзодлик диссертациясини ёқлаган. 1990 йилда – юридик фанлар доктори
                                илмий даражасини, 1993 йилда халқаро ва қиёсий ҳуқуқ профессори илмий унвонини олган.
                                2017 йилдан Ўзбекистон Республикаси Фанлар академиясининг ҳақиқий аъзоси.
                                1985-1992 йилларда Фалсафа ва ҳуқуқ институтининг катта илмий ходими, сектор мудири ва
                                директори, 1986-1987 йилларда Ўзбекистон Фанлар академияси Президиумининг Фалсафа,
                                иқтисод ва юридик фанлар бўлими илмий котиби, 1989-1991 йилларда Ўзбекистон Ёшлар
                                ташкилотлари қўмитаси раиси, 1992-1993 йилларда Ўзбекистон Республикаси Президенти
                                ҳузуридаги Жаҳон муаммолари институти директори, 1993-1994 йилларда Тошкент Давлат
                                юридик институти ректори лавозимларида фаолият юритган.

                                А.Х.Саидов 1994-1996 йилларда Ўзбекистон Республикасининг Франциядаги Фавқулодда ва
                                мухтор элчиси, шунингдек, Ўзбекистоннинг ЮНЕСКО ҳузуридаги Доимий вакили сифатида
                                фаолият кўрсатган. Фавқулодда ва мухтор элчи мартабасига эга.

                                Ўзбекистон Республикаси Президентининг Фармонига мувофиқ, 1996 йил октябрь ойидан буён
                                Инсон ҳуқуқлари бўйича Ўзбекистон Республикаси Миллий маркази директори лавозимида
                                ишламоқда.

                                А.Х.Саидовнинг Парламентаризм соҳасида қарийб 30 йиллик амалий тажрибаси бор.
                                Истиқлолнинг ўтган даврида 5 маротаба миллий парламент депутатлигига сайланган. 1999
                                йилдан бери парламентнинг Демократик институтлар, нодавлат ташкилотлар ва фуқароларнинг
                                ўзини ўзи бошқариш органлари қўмитаси раиси ҳисобланади. Айни пайтда Ўзбекистон
                                Республикаси Олий Мажлиси ҳузуридаги Нодавлат нотижорат ташкилотларини ва фуқаролик
                                жамиятининг бошқа институтларини қўллаб-қувватлаш жамоат фондининг маблағларини бошқариш
                                бўйича парламент комиссиясининг раиси ҳамдир.

                                А.Х.Саидов 2019 йил 17 октябрда Белград шаҳрида (Сербия) бўлиб ўтган Парламентлараро
                                иттифоқнинг 141-Ассамблеясида мустақил Ўзбекистон тарихида илк бор 2020-2023 йиллар
                                оралиғидаги муддатга ушбу ташкилот Ижроия қўмитасининг аъзоси этиб сайланди.

                                ИҲТ Ташқи ишлар вазирлари кенгашининг 2017 йил 10-11 июль кунлари Кот д’Ивуарда бўлиб
                                ўтган 44-сессиясида ИҲТнинг Инсон ҳуқуқлари бўйича мустақил доимий комиссияси таркибига
                                Осиё қитъасидан Ўзбекистон вакили сифатида аъзо бўлган. Бир йилдан сўнг ИҲТ
                                Комиссиясининг раиси этиб сайланган.

                                “Ўзбекистон – Бельгия” депутатлар гуруҳи раиси, Ўзбекистон-Франция парламентлари дўстлик
                                гуруҳи раҳбари ҳамда “Ўзбекистон – Европа Иттифоқи” парламентлараро ҳамкорлик бўйича
                                қўмита аъзоси ҳисобланади.

                                А.Х.Саидов Конституциявий ҳуқуқ халқаро ассоциациясининг ҳақиқий аъзоси, Халқаро қиёсий
                                ҳуқуқ академиясининг мухбир-аъзоси, Франция Қиёсий қонуншунослик жамиятининг хорижий
                                аъзоси, Осиё ва Тинч океани минтақаси юристлари халқаро ассоциацияси ва Россия халқаро
                                ҳуқуқ ассоциацияси аъзоси, Париж-1 Сорбонна Университетининг таклиф этилган
                                профессоридир.

                                Қиёсий ҳуқуқшунослик, халқаро ҳуқуқ, конституциявий ҳуқуқ, инсон ҳуқуқлари, давлат ва
                                ҳуқуқ назарияси ва тарихи бўйича 30 та дарслик ҳамда ўқув қўлланмалари, 300 дан ортиқ
                                рисола ва илмий мақолалар муаллифидир. Асарлари АҚШ, Буюк Британия, Австрия, Германия,
                                Франция, Польша, Бельгия, Россия, Хитой, Ҳиндистон, Жанубий Корея, Япония ва бошқа
                                давлатларда чоп этилган. У 100 дан ортиқ халқаро илмий анжуманларда қатнашган.

                                1998 йилда “Ўзбекистон белгиси” кўкрак нишони, 2002 йилда – “Меҳнат шуҳрати”, 2006 йилда
                                – “Дўстлик” ва 2017 йилда “Эл-юрт ҳурмати” орденлари билан тақдирланган.

                                Оилали. Икки нафар фарзанди бор. <p style={{cursor:"pointer"}} className="text-primary" onClick={openModal}>orqaga</p>
                            </Collapse>

                        </div>
                    </div>
                    <div className="col-12 mt-4 d-flex ">
                        <img className="object" src="/images/ErkinErnazarov.jpeg" alt="Error"/>
                        <div className="ml-4 rahbar">
                            <h5 className="rahbar">
                                Bosh muharrir:
                            </h5>
                            <h3>
                                Erkin Ernazarov
                            </h3>
                            <button type="button" className="btn btn-primary" onClick={openModal2}>Tarjimai hol</button>
                            <Collapse isOpen={open2}>
                                hello
                            </Collapse>

                        </div>
                    </div>
                </div>
            </div>

            <FooterInfo/>
        </>
    );
};

export default Leadership;