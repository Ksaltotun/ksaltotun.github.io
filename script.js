const data = [
    {
        "country": "Австра­лия",
        "suecide": "11.7",
        "money": "54910"
    },
    {
        "country": "Австрия",
        "suecide": "11.4",
        "money": "51300"
    },
    {
        "country": "Азербай­джан",
        "suecide": "2.6",
        "money": "4480"
    },
    {
        "country": "Албания",
        "suecide": "5.6",
        "money": "5240"
    },
    {
        "country": "Алжир",
        "suecide": "3.3",
        "money": "3970"
    },
    {
        "country": "Ангола",
        "suecide": "8.9",
        "money": "3050"
    },
    {
        "country": "Антигуа и Барбуда",
        "suecide": "0.5",
        "money": "16660"
    },
    {
        "country": "Аргентина",
        "suecide": "9.1",
        "money": "11200"
    },
    {
        "country": "Армения",
        "suecide": "5.7",
        "money": "4680"
    },
    {
        "country": "Афгани­стан",
        "suecide": "6.4",
        "money": "540"
    },
    {
        "country": "Багам­ские Острова",
        "suecide": "1.6",
        "money": "31780"
    },
    {
        "country": "Бангла­деш",
        "suecide": "6.1",
        "money": "1940"
    },
    {
        "country": "Барбадос",
        "suecide": "0.4",
        "money": "17380"
    },
    {
        "country": "Бахрейн",
        "suecide": "5.7",
        "money": "22110"
    },
    {
        "country": "Беларусь",
        "suecide": "21.4",
        "money": "6280"
    },
    {
        "country": "Белиз",
        "suecide": "5.9",
        "money": "4450"
    },
    {
        "country": "Бельгия",
        "suecide": "15.7",
        "money": "47350"
    },
    {
        "country": "Бенин",
        "suecide": "15.7",
        "money": "1250"
    },
    {
        "country": "Болгария",
        "suecide": "7.9",
        "money": "9410"
    },
    {
        "country": "Боливия",
        "suecide": "12.9",
        "money": "3530"
    },
    {
        "country": "Босния и Герцего­вина",
        "suecide": "6.4",
        "money": "6150"
    },
    {
        "country": "Ботсвана",
        "suecide": "11.5",
        "money": "7660"
    },
    {
        "country": "Брази­лия",
        "suecide": "6.1",
        "money": "9130"
    },
    {
        "country": "Бруней",
        "suecide": "4.5",
        "money": "32230"
    },
    {
        "country": "Буркина Фасо",
        "suecide": "14.8",
        "money": "790"
    },
    {
        "country": "Бурунди",
        "suecide": "15.0",
        "money": "280"
    },
    {
        "country": "Бутан",
        "suecide": "11.6",
        "money": "2970"
    },
    {
        "country": "Вануату",
        "suecide": "5.4",
        "money": "3170"
    },
    {
        "country": "Велико­британия",
        "suecide": "7.6",
        "money": "42370"
    },
    {
        "country": "Венгрия",
        "suecide": "13.6",
        "money": "16140"
    },
    {
        "country": "Вене­суэла",
        "suecide": "3.8",
        "money": "13080"
    },
    {
        "country": "Вьетнам",
        "suecide": "7.0",
        "money": "2540"
    },
    {
        "country": "Габон",
        "suecide": "9.6",
        "money": "7210"
    },
    {
        "country": "Гаити",
        "suecide": "12.2",
        "money": "790"
    },
    {
        "country": "Гайана",
        "suecide": "30.2",
        "money": "5180"
    },
    {
        "country": "Гамбия",
        "suecide": "10.0",
        "money": "740"
    },
    {
        "country": "Гана",
        "suecide": "8.7",
        "money": "2220"
    },
    {
        "country": "Гвате­мала",
        "suecide": "2.9",
        "money": "4610"
    },
    {
        "country": "Гвинея",
        "suecide": "10.5",
        "money": "950"
    },
    {
        "country": "Гвинея-Бисау",
        "suecide": "7.4",
        "money": "820"
    },
    {
        "country": "Германия",
        "suecide": "9.1",
        "money": "48520"
    },
    {
        "country": "Гондурас",
        "suecide": "3.4",
        "money": "2390"
    },
    {
        "country": "Гренада",
        "suecide": "1.7",
        "money": "9980"
    },
    {
        "country": "Грен­ландия",
        "suecide": "82.3",
        "money": "34800"
    },
    {
        "country": "Греция",
        "suecide": "3.8",
        "money": "20320"
    },
    {
        "country": "Грузия",
        "suecide": "6.7",
        "money": "4740"
    },
    {
        "country": "Дания",
        "suecide": "9.2",
        "money": "63240"
    },
    {
        "country": "Демо­крати­ческая Респу­блика Конго",
        "suecide": "9.7",
        "money": "520"
    },
    {
        "country": "Джибути",
        "suecide": "8.5",
        "money": "3540"
    },
    {
        "country": "Домини­кана",
        "suecide": "10.5",
        "money": "8090"
    },
    {
        "country": "Египет",
        "suecide": "4.4",
        "money": "2690"
    },
    {
        "country": "Замбия",
        "suecide": "11.3",
        "money": "1450"
    },
    {
        "country": "Зимбабве",
        "suecide": "19.1",
        "money": "1390"
    },
    {
        "country": "Израиль",
        "suecide": "5.2",
        "money": "43290"
    },
    {
        "country": "Индия",
        "suecide": "16.5",
        "money": "2130"
    },
    {
        "country": "Индо­незия",
        "suecide": "3.7",
        "money": "4050"
    },
    {
        "country": "Иордания",
        "suecide": "3.7",
        "money": "4300"
    },
    {
        "country": "Ирак",
        "suecide": "4.1",
        "money": "5740"
    },
    {
        "country": "Иран",
        "suecide": "4.0",
        "money": "5420"
    },
    {
        "country": "Ирландия",
        "suecide": "10.9",
        "money": "62210"
    },
    {
        "country": "Испания",
        "suecide": "6.1",
        "money": "30390"
    },
    {
        "country": "Италия",
        "suecide": "5.5",
        "money": "34460"
    },
    {
        "country": "Йемен",
        "suecide": "9.8",
        "money": "940"
    },
    {
        "country": "Кабо-Верде",
        "suecide": "15.1",
        "money": "3630"
    },
    {
        "country": "Казах­стан",
        "suecide": "22.8",
        "money": "8810"
    },
    {
        "country": "Камбоджа",
        "suecide": "5.9",
        "money": "1480"
    },
    {
        "country": "Камерун",
        "suecide": "19.5",
        "money": "1500"
    },
    {
        "country": "Канада",
        "suecide": "10.4",
        "money": "46370"
    },
    {
        "country": "Катар",
        "suecide": "5.8",
        "money": "63410"
    },
    {
        "country": "Кения",
        "suecide": "5.6",
        "money": "1750"
    },
    {
        "country": "Кипр",
        "suecide": "4.5",
        "money": "27710"
    },
    {
        "country": "Кирибати",
        "suecide": "15.2",
        "money": "3350"
    },
    {
        "country": "Китай",
        "suecide": "8.0",
        "money": "10410"
    },
    {
        "country": "Колумбия",
        "suecide": "7.0",
        "money": "6510"
    },
    {
        "country": "Комор­ские Острова",
        "suecide": "11.1",
        "money": "1420"
    },
    {
        "country": "Конго",
        "suecide": "9.3",
        "money": "1750"
    },
    {
        "country": "Коста-Рика",
        "suecide": "7.5",
        "money": "4640"
    },
    {
        "country": "Кот-д’Ивуар",
        "suecide": "23.0",
        "money": "2290"
    },
    {
        "country": "Куба",
        "suecide": "10.1",
        "money": "7480"
    },
    {
        "country": "Кувейт",
        "suecide": "2.2",
        "money": "34290"
    },
    {
        "country": "Кыргыз­стан",
        "suecide": "9.1",
        "money": "1240"
    },
    {
        "country": "Лаос",
        "suecide": "9.3",
        "money": "2570"
    },
    {
        "country": "Латвия",
        "suecide": "17.2",
        "money": "17730"
    },
    {
        "country": "Лесото",
        "suecide": "28.9",
        "money": "1360"
    },
    {
        "country": "Либерия",
        "suecide": "13.4",
        "money": "580"
    },
    {
        "country": "Ливан",
        "suecide": "3.2",
        "money": "7600"
    },
    {
        "country": "Ливия",
        "suecide": "5.5",
        "money": "7640"
    },
    {
        "country": "Литва",
        "suecide": "25.7",
        "money": "18990"
    },
    {
        "country": "Маврикий",
        "suecide": "7.3",
        "money": "12740"
    },
    {
        "country": "Маври­тания",
        "suecide": "7.5",
        "money": "1660"
    },
    {
        "country": "Мада­гаскар",
        "suecide": "6.9",
        "money": "520"
    },
    {
        "country": "Маке­дония",
        "suecide": "6.2",
        "money": "5910"
    },
    {
        "country": "Малави",
        "suecide": "7.8",
        "money": "380"
    },
    {
        "country": "Малай­зия",
        "suecide": "6.2",
        "money": "11200"
    },
    {
        "country": "Мали",
        "suecide": "8.9",
        "money": "880"
    },
    {
        "country": "Мальдивы",
        "suecide": "2.7",
        "money": "9650"
    },
    {
        "country": "Мальта",
        "suecide": "6.5",
        "money": "27290"
    },
    {
        "country": "Марокко",
        "suecide": "3.1",
        "money": "3190"
    },
    {
        "country": "Мексика",
        "suecide": "5.2",
        "money": "9430"
    },
    {
        "country": "Микро­незия",
        "suecide": "11.3",
        "money": "3400"
    },
    {
        "country": "Мозамбик",
        "suecide": "8.4",
        "money": "480"
    },
    {
        "country": "Молдова",
        "suecide": "13.4",
        "money": "3930"
    },
    {
        "country": "Монголия",
        "suecide": "13.3",
        "money": "3780"
    },
    {
        "country": "Мьянма",
        "suecide": "8.1",
        "money": "1390"
    },
    {
        "country": "Намибия",
        "suecide": "11.5",
        "money": "5060"
    },
    {
        "country": "Непал",
        "suecide": "9.6",
        "money": "1090"
    },
    {
        "country": "Нигер",
        "suecide": "9.0",
        "money": "560"
    },
    {
        "country": "Нигерия",
        "suecide": "17.3",
        "money": "2030"
    },
    {
        "country": "Нидер­ланды",
        "suecide": "9.6",
        "money": "53200"
    },
    {
        "country": "Никарагуа",
        "suecide": "11.9",
        "money": "1910"
    },
    {
        "country": "Новая Зелан­дия",
        "suecide": "11.6",
        "money": "42670"
    },
    {
        "country": "Объе­динён­ные Арабские Эмираты",
        "suecide": "2.7",
        "money": "43470"
    },
    {
        "country": "Оман",
        "suecide": "3.5",
        "money": "15330"
    },
    {
        "country": "Пакистан",
        "suecide": "3.1",
        "money": "1530"
    },
    {
        "country": "Папуа — Новая Гвинея",
        "suecide": "7.0",
        "money": "2780"
    },
    {
        "country": "Парагвай",
        "suecide": "9.3",
        "money": "5510"
    },
    {
        "country": "Перу",
        "suecide": "5.1",
        "money": "6740"
    },
    {
        "country": "Польша",
        "suecide": "13.4",
        "money": "15200"
    },
    {
        "country": "Порту­галия",
        "suecide": "8.6",
        "money": "23080"
    },
    {
        "country": "Россия",
        "suecide": "26.5",
        "money": "11260"
    },
    {
        "country": "Руанда",
        "suecide": "11.0",
        "money": "820"
    },
    {
        "country": "Румыния",
        "suecide": "8.0",
        "money": "12630"
    },
    {
        "country": "Сальва­дор",
        "suecide": "13.5",
        "money": "4000"
    },
    {
        "country": "Самоа",
        "suecide": "5.4",
        "money": "4180"
    },
    {
        "country": "Сан-Томе и Принсипи",
        "suecide": "3.1",
        "money": "1960"
    },
    {
        "country": "Саудов­ская Аравия",
        "suecide": "3.4",
        "money": "22850"
    },
    {
        "country": "Свази­ленд",
        "suecide": "16.7",
        "money": "3590"
    },
    {
        "country": "Сейшель­ские Острова",
        "suecide": "8.3",
        "money": "16870"
    },
    {
        "country": "Сенегал",
        "suecide": "11.8",
        "money": "1450"
    },
    {
        "country": "Сент-Винсент и Гренадины",
        "suecide": "2.4",
        "money": "7460"
    },
    {
        "country": "Сент-Люсия",
        "suecide": "7.3",
        "money": "11020"
    },
    {
        "country": "Сербия",
        "suecide": "10.9",
        "money": "7020"
    },
    {
        "country": "Сингапур",
        "suecide": "7.9",
        "money": "59590"
    },
    {
        "country": "Сирия",
        "suecide": "2.4",
        "money": "1820"
    },
    {
        "country": "Словакия",
        "suecide": "10.1",
        "money": "19320"
    },
    {
        "country": "Словения",
        "suecide": "13.3",
        "money": "25750"
    },
    {
        "country": "Соломо­новы Острова",
        "suecide": "5.9",
        "money": "2050"
    },
    {
        "country": "Сомали",
        "suecide": "8.3",
        "money": "130"
    },
    {
        "country": "Судан",
        "suecide": "9.5",
        "money": "590"
    },
    {
        "country": "Суринам",
        "suecide": "23.2",
        "money": "5540"
    },
    {
        "country": "Сьерра-Леоне",
        "suecide": "16.1",
        "money": "500"
    },
    {
        "country": "Таджики­стан",
        "suecide": "3.3",
        "money": "1030"
    },
    {
        "country": "Таиланд",
        "suecide": "12.9",
        "money": "7260"
    },
    {
        "country": "Танзания",
        "suecide": "9.6",
        "money": "1080"
    },
    {
        "country": "Тимор-Лешти",
        "suecide": "6.4",
        "money": "1890"
    },
    {
        "country": "Того",
        "suecide": "16.6",
        "money": "690"
    },
    {
        "country": "Тонга",
        "suecide": "4.0",
        "money": "4300"
    },
    {
        "country": "Трини­дад и Тобаго",
        "suecide": "12.9",
        "money": "16890"
    },
    {
        "country": "Тунис",
        "suecide": "3.2",
        "money": "3360"
    },
    {
        "country": "Туркмени­стан",
        "suecide": "7.2",
        "money": "6740"
    },
    {
        "country": "Турция",
        "suecide": "7.2",
        "money": "9610"
    },
    {
        "country": "Уганда",
        "suecide": "20.0",
        "money": "780"
    },
    {
        "country": "Узбеки­стан",
        "suecide": "7.4",
        "money": "1800"
    },
    {
        "country": "Украина",
        "suecide": "18.5",
        "money": "3370"
    },
    {
        "country": "Уругвай",
        "suecide": "16.5",
        "money": "16230"
    },
    {
        "country": "Фиджи",
        "suecide": "5.5",
        "money": "5860"
    },
    {
        "country": "Филип­пины",
        "suecide": "3.7",
        "money": "3850"
    },
    {
        "country": "Финлян­дия",
        "suecide": "13.8",
        "money": "49580"
    },
    {
        "country": "Франция",
        "suecide": "12.1",
        "money": "42400"
    },
    {
        "country": "Хорватия",
        "suecide": "11.5",
        "money": "14910"
    },
    {
        "country": "Цент­рально-Афри­кан­ская Респуб­лика",
        "suecide": "11.6",
        "money": "520"
    },
    {
        "country": "Чад",
        "suecide": "15.5",
        "money": "700"
    },
    {
        "country": "Черногория",
        "suecide": "7.9",
        "money": "9010"
    },
    {
        "country": "Чехия",
        "suecide": "10.5",
        "money": "22000"
    },
    {
        "country": "Чили",
        "suecide": "9.7",
        "money": "15010"
    },
    {
        "country": "Швеция",
        "suecide": "11.7",
        "money": "55840"
    },
    {
        "country": "Шри-Ланка",
        "suecide": "14.2",
        "money": "4020"
    },
    {
        "country": "Эквадор",
        "suecide": "7.2",
        "money": "6080"
    },
    {
        "country": "Экватори­альная Гвинея",
        "suecide": "22.0",
        "money": "6460"
    },
    {
        "country": "Эритрея",
        "suecide": "13.8",
        "money": "600"
    },
    {
        "country": "Эстония",
        "suecide": "14.4",
        "money": "23220"
    },
    {
        "country": "Эфиопия",
        "suecide": "11.4",
        "money": "850"
    },
    {
        "country": "Южная Африка",
        "suecide": "12.8",
        "money": "6040"
    },
    {
        "country": "Южная Корея",
        "suecide": "20.2",
        "money": "33720"
    },
    {
        "country": "Южный Судан",
        "suecide": "6.1",
        "money": "1090"
    },
    {
        "country": "Ямайка",
        "suecide": "2.0",
        "money": "5250"
    },
    {
        "country": "Япония",
        "suecide": "14.3",
        "money": "41690"
    }
]

const canvas = document.getElementById('canvasId'); 
 
const ctx = canvas.getContext('2d');





ctx.fillStyle = "black"; 
ctx.lineWidth = 1; 
ctx.font = "14px serif";

ctx.moveTo(30, 10);
ctx.lineTo(30, 850);
ctx.lineTo(62900, 850);
ctx.fillText("Суициды на 1000 жителей", 40, 20);
ctx.fillText("Годовой доход на человека", 70, 890);
ctx.stroke();

ctx.moveTo(30, 850);
ctx.font = "12px serif";
for (let i = 0; i < 40; i++){
    ctx.fillText(i, 15, 850 - 25 * i); 
}

for (let i = 0; i < 63000; i += 100){
    ctx.fillText(i, 30 + i, 860); 
}


ctx.fillStyle = 'black';

for(let i of data){
    ctx.fillText(i.country, (+i.money) + 5, 850 - (+i.suecide) * 25);
    ctx.fillRect((+i.money), 850 - (+i.suecide) * 25, 5, 5);
}

