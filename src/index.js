let array = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

array.sort((prev, next) => prev.health - next.health).reverse();

console.log(array);

export { array };
