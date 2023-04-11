//задача 1

let language = 'мандаринский'; // замените это на нужный язык

switch (language) {
  case 'китайский':
  case 'мандаринский':
    console.log('Наибольшее количество носителей языка!');
    break;
  case 'испанский':
    console.log('2-е место по количеству носителей языка');
    break;
  case 'английский':
    console.log('3-е место');
    break;
  case 'хинди':
    console.log('4-е место');
    break;
  case 'арабский':
    console.log('5-й язык по количеству носителей');
    break;
  default:
    console.log('Отличный язык тоже :D');
    break;
}

//2 задача

let pop = 33;
let country = pop > 33 ? "Население Португалии ниже среднего" : "Население Португалии выше среднего";
console.log(country);

population = 13; // временно изменяем население для проверки
country = population > 33 ? "Население Португалии выше среднего" : "Население Португалии ниже среднего";
console.log(country); 

population = 130; // еще раз временно изменяем население для проверки
message = population > 33 ? "Население Португалии выше среднего" : "Население Португалии ниже среднего";
console.log(message); // выводим сообщение в консоль

population = 33;

//3 задача

let ArmanHeight = 1.69;
let ArmanWeight = 78;
let KuatHeight = 1.95;
let KuatWeight = 92;

// расчет ИМТ
let armansBMI1 = ArmanWeight / (ArmanHeight ** 2);
let kuatsBMI1 = KuatWeight / (KuatHeight ** 2);

console.log("ИМТ Армана (данные 1): " + armansBMI1);
console.log("ИМТ Куата (данные 1): " + kuatsBMI1);

// сравнение ИМТ по первым данным и создание булевской переменной
let armanHigherBMI1 = armansBMI1 > kuatsBMI1;
console.log("Арман имеет более высокий ИМТ чем Куат (данные 1): " + armanHigherBMI1);

// Данные 2
let armansWeight2 = 95; 
let armansHeight2 = 1.88; 
let kuatsWeight2 = 85;
let kuatsHeight2 = 1.76; 

// расчет ИМТ по вторым данным
let armansBMI2 = armansWeight2 / (armansHeight2 ** 2);
let kuatsBMI2 = kuatsWeight2 / (kuatsHeight2 ** 2);

console.log("ИМТ Армана (данные 2): " + armansBMI2);
console.log("ИМТ Куата (данные 2): " + kuatsBMI2);

// сравнение ИМТ по вторым данным и создание булевской переменной
let armanHigherBMI2 = armansBMI2 > kuatsBMI2;
console.log("Арман имеет более высокий ИМТ чем Куат (данные 2): " + armanHigherBMI2);

//4 задача
console.log(`ИМТ ${armansBMI1} ИМТ Армана выше, чем у Куата!, либо "ИМТ Куата ${kuatsBMI1} выше, чем у Армана!`);
console.log(`ИМТ ${armansBMI2} ИМТ Армана выше, чем у Куата!, либо "ИМТ Куата ${kuatsBMI2} выше, чем у Армана!`);

//5 задача

const almatyScores1 = [96, 108, 89];
const astanaScores1 = [88, 91, 110];

const almatyScores2 = [97, 112, 101];
const astanaScores2 = [109, 95, 123];

const almatyScores3 = [97, 112, 101];
const astanaScores3 = [109, 95, 106];

const almatyAvg1 = almatyScores1.reduce((total, score) => total + score, 0) / almatyScores1.length;
const astanaAvg1 = astanaScores1.reduce((total, score) => total + score, 0) / astanaScores1.length;

const almatyAvg2 = almatyScores2.reduce((total, score) => total + score, 0) / almatyScores2.length;
const astanaAvg2 = astanaScores2.reduce((total, score) => total + score, 0) / astanaScores2.length;

const almatyAvg3 = almatyScores3.reduce((total, score) => total + score, 0) / almatyScores3.length;
const astanaAvg3 = astanaScores3.reduce((total, score) => total + score, 0) / astanaScores3.length;

if (almatyAvg1 === astanaAvg1 && almatyAvg1 >= 100 && astanaAvg1 >= 100) {
  console.log("It's a draw!");
} else if (almatyAvg1 > astanaAvg1 && almatyAvg1 >= 100) {
  console.log("Almaty wins!");
} else if (astanaAvg1 > almatyAvg1 && astanaAvg1 >= 100) {
  console.log("Astana wins!");
} else {
  console.log("No team wins the trophy.");
}

if (almatyAvg2 === astanaAvg2 && almatyAvg2 >= 100 && astanaAvg2 >= 100) {
  console.log("It's a draw!");
} else if (almatyAvg2 > astanaAvg2 && almatyAvg2 >= 100) {
  console.log("Almaty wins!");
} else if (astanaAvg2 > almatyAvg2 && astanaAvg2 >= 100) {
  console.log("Astana wins!");
} else {
  console.log("No team wins the trophy.");
}

if (almatyAvg3 === astanaAvg3 && almatyAvg3 >= 100 && astanaAvg3 >= 100) {
  console.log("It's a draw!");
} else if (almatyAvg3 > astanaAvg3 && almatyAvg3 >= 100) {
  console.log("Almaty wins!");
} else if (astanaAvg3 > almatyAvg3 && astanaAvg3 >= 100) {
  console.log("Astana wins!");
} else {
  console.log("No team wins the trophy.");
}

//6 задача

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;
console.log(`Счет составил ${bill}, чаевые - ${tip}, итоговая стоимость - ${total}`);

let bill1 = 40;
let tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
let total1 = bill1 + tip1;
console.log(`Счет составил ${bill1}, чаевые - ${tip1}, итоговая стоимость - ${total1}`);

let bill2 = 430;
let tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
let total2 = bill2 + tip2;
console.log(`Счет составил ${bill2}, чаевые - ${tip2}, итоговая стоимость - ${total2}`);