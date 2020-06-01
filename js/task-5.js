let countryName = prompt("Введите название страны доставки: ");

countryName = countryName.toLowerCase();

let countryPrice;

switch (countryName) {
  case "китай":
    countryPrice = 100;
    console.log(
      `Доставка в ${countryName} будет стоить ${countryPrice} кредитов`
    );
    break;

  case "чили":
    countryPrice = 250;
    console.log(
      `Доставка в ${countryName} будет стоить ${countryPrice} кредитов`
    );
    break;

  case "австралия":
    countryPrice = 170;
    console.log(
      `Доставка в ${countryName} будет стоить ${countryPrice} кредитов`
    );
    break;

  case "индия":
    countryPrice = 80;
    console.log(
      `Доставка в ${countryName} будет стоить ${countryPrice} кредитов`
    );
    break;

  case "ямайка":
    countryPrice = 120;
    console.log(
      `Доставка в ${countryName} будет стоить ${countryPrice} кредитов`
    );
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
