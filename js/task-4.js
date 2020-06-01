let credits = 23580;
const pricePerDroid = 3000;

let amount = prompt("Сколько нужно дроидов?");

amount = Number(amount);

let totalPrice;

if (amount === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * amount;
}

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  totalPrice = pricePerDroid * amount;
  credits -= totalPrice;
  console.log(
    `Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов`
  );
}
