// Задача 1
// С помощью условных операторов вывести на экран длину наибольшего отрезка
// из трех данных.

let a = "1 cm";
let b = "2 cm";
let c = "3 cm";

let result = a > b ? a : b > c ? b : c;
console.log(result);

// Задача 2
// Реализовать систему рекомендаций для пользователя опираясь на значение
// переменной, хранящей значение температуры в градусах Цельсия.
// ○ ниже -30: “Оставайтесь дома!”;
// ○ от -30 до -10 включительно: “Сегодня холодно”;
// ○ от -10 до +5 включительно: “Не холодно”;
// ○ от +5 до +15 включительно: “Тепло”;
// ○ от +15 до +25 включительно: “Очень тепло”;
// ○ от +25 до +35: “Жарко”;
// ○ выше либо равно +35: “Пекло!”;

let t = +50;

if (t < -30) {
  console.log("Оставайтесь дома!");
} else if (t >= -30 && t <= -10) {
  console.log("Сегодня холодно");
} else if (t > -10 && t <= +5) {
  console.log("Не холодно");
} else if (t > +5 && t <= +15) {
  console.log("Тепло");
} else if (t > +15 && t <= +25) {
  console.log("Очень тепло");
} else if (t > +25 && t <= +35) {
  console.log("Жарко");
} else {
  console.log("Пекло");
}

// Задача 3
// С помощью конструкции switch и переменной, хранящей роль пользователя
// (admin, manager, user …), выводить на экран информацию о пользователе
// (информацию любого типа, роль, дату рождения, любимый напиток и тд).

let userType = "user"; // manager, user

switch (userType) {
  case "admin":
    console.log("Администратор");
    break;
  case "manager":
    console.log("Менеджер");
    break;
  case "user":
    console.log("Пользователь");
    break;
}

// Задача 4

let result1 = null || 0 || "" || undefined; // undefined если все значения false, то возвращается значение последнего операнда.
let result2 = "яблоко" && true && null && 1; // null 
let result3 = 0 || true && "false" || null; // false
let result4 = 0 && true || "false" && null; // null
let result5 = !0 && !!1; // true
let result6 = !(null || !"апельсин" && true); // true

// Задача 5
// Вывести в консоль заданную строку N раз.

// в строку

let i = 0;
const lastNumber = 10;
let message = "";

while (++i <= lastNumber) {
  message += `message `;
}

console.log(message);

// в столбик

let p = 0;
const lastOrder = 10;
let links = "message";

while (++p <= lastOrder) {
  console.log(links);
}



