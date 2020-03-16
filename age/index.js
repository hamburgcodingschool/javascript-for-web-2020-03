const people = [
  { name: "Helmut", age: "65" },
  { name: "Teresa", age: "33" },
  { name: "Jonas", age: "28" },
  { name: "Joachim", age: "72" },
  { name: "Herbert", age: "66" },
  { name: "Lukas", age: "31" }
];

const populatePeople = array => {
  const content = document.getElementById("content");
  for (let i = 0; i < array.length; i++) {
    const person = array[i];
    const html = generateDiv(person);
    const div = document.createElement("div");
    div.innerHTML = html;
    content.append(div.firstChild);
  }
};

const generateDiv = person => {
  if (person.age < 65) {
    return `<div class="person green">${person.name}</div>`;
  } else {
    return `<div class="person red">${person.name}</div>`;
  }
};

populatePeople(people);
