let credits = 23580;
const pricePerDroid = 3000;

let amount = prompt("Сколько нужно дроидов?");

let totalPrice = pricePerDroid * amount;

if (amount === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  amount = Number(amount);
  totalPrice = pricePerDroid * amount;
  credits -= totalPrice;
  console.log(
    `Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов`
  );
}
