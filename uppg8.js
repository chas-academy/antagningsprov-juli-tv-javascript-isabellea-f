function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument

  const people = [
    { name: "Lukas", age: 25 },
    { name: "Ellen", age: 30 },
    { name: "Pelle", age: 50 },
    { name: "Alice", age: 18 },
    { name: "Daniel", age: 32 },
  ];

  function ageCheck(arr) {
    for (let person of arr) {
      if (person.age > 30) {
        console.log(person.name);
      }
    }
  }

  ageCheck(people);
}

uppg8();

module.exports = { uppg8 };
