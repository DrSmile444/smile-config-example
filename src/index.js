// Will be re-linted after applying smile-config
var i = 10





console.log(i)




// Sample code
let arrayOfGoods = [
  { type: "socks", color: "red", quantity: 10, priceForPair: "$3" },
  { type: "socks", color: "green", quantity: 5, priceForPair: "$10" },
  { type: "socks", color: "blue", quantity: 8, priceForPair: "$6" },
  { type: "hat", color: "red", quantity: 7, price: "$5" },
  { type: "hat", color: "green", quantity: 0, price: "$6" },
  { type: "socks", color: "blue", priceForPair: "$6" },
  { type: "socks", color: "red", quantity: 10, priceForPair: "$3" },
  { type: "socks", color: "white", quantity: 3, priceForPair: "$4" },
  { type: "socks", color: "green", priceForPair: "$10" },
  { type: "socks", color: "blue", quantity: 2, priceForPair: "$6" },
  { type: "hat", color: "green", quantity: 3, price: "$5" },
  { type: "hat", color: "red", quantity: 1, price: "$6" },
  { type: "socks", color: "blue", priceForPair: "$6" },
];
function showGoods(goods) {
  let someSocks = arrayOfGoods
    .filter((good) => good.type === "socks")

    .map((good) => good.quantity)
    .filter((quantity) => quantity !== undefined);
  let quantityOfSocks = someSocks.reduce((total, amount) => total + amount);
  console.log(`Socks - ${quantityOfSocks}`);

  let redHats = arrayOfGoods
    .filter((good) => good.type === "hat")
    .filter((good) => good.color === "red")

    .map((good) => good.quantity);
  let quantityOfHats = redHats.reduce((total, amount) => total + amount);
  console.log(`Red Hats - ${quantityOfHats}`);

  let redGoods = arrayOfGoods.filter((good) => good.color === "red");
  let costOfRedGoods = 0;
  redGoods
    .map((good) => good.priceForPair || good.price)
    .forEach(
      (price) => (costOfRedGoods = costOfRedGoods + +price.split("$")[1])
    );

  let greenGoods = arrayOfGoods.filter((good) => good.color === "green");
  let costOfGreenGoods = 0;
  greenGoods
    .map((good) => good.priceForPair || good.price)
    .forEach(
      (price) => (costOfGreenGoods = costOfGreenGoods + +price.split("$")[1])
    );

  let blueGoods = arrayOfGoods.filter((good) => good.color === "blue");
  let costOfBlueGoods = 0;
  blueGoods
    .map((good) => good.priceForPair || good.price)
    .forEach(
      (price) => (costOfBlueGoods = costOfBlueGoods + +price.split("$")[1])
    );
  console.log(
    `Red - ${costOfRedGoods}, Green - ${costOfGreenGoods}, Blue - ${costOfBlueGoods}`
  );

  let totalPrice = 0;
  const good = goods
    .map((good) => good.priceForPair || good.price)
    .forEach((price) => (totalPrice = totalPrice + +price.split("$")[1]));
  return totalPrice;
}
let total = showGoods(arrayOfGoods);
console.log(total);
