function uppg6() {
  // Skapa en array med namn som du döper till names
  // Loopa igenom arrayen och skriv ut alla namn i konsolen

  const names = ["Isabelle", "Alex", "Pelle", "Alice"];

  names.forEach(function (name) {
    console.log(name);
  });
}

uppg6();

module.exports = { uppg6 };
