function uppg7() {
  // skapa en funktion som tar in två tal som argument
  // funktionen ska returnera summan av talen
  // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

  function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }

  return addNumbers(5, 10);
}

console.log(uppg7());

module.exports = { uppg7 };
