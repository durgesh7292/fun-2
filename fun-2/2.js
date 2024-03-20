function calculateTotalValue() {
  let totalValue = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalValue += arguments[i];
  }
  console.log(`The total cart value is ${totalValue}`);
  return totalValue;
}

calculateTotalValue(125, 20, 30);
