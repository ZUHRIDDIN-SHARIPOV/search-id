const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "C" },
  { id: 3, name: "Charlie", grade: "B" },
  { id: 4, name: "Dave", grade: "A" },
  { id: 5, name: "Eve", grade: "B" },
];

const form = document.querySelector(".form");
const inputId = document.querySelector(".inputId");
const text = document.querySelector(".text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = Number(inputId.value);
  const selectedId = students.find((element) => element.id === id);
  if (selectedId) {
    text.innerHTML = `ID: ${selectedId.id} <br> Name: ${selectedId.name} <br> Grade: ${selectedId.grade}`;
  } else if (id === 0) {
    text.innerHTML = "";
  } else {
    text.innerHTML = "Siz qidirgan ID topilmadi.";
  }
});
