let credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

let amount = prompt('Сколько нужно дроидов? ');

if (amount === null) {
  console.log('Отменено пользователем');
} else {
  amount = Number(amount);
  totalPrice = pricePerDroid * amount;

  if (totalPrice > credits ) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(`Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов.`)
  }
}



