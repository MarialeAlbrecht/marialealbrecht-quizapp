console.clear();

const form = document.querySelector('[data-js="form"]');
const textarea1 = document.querySelector('[data-js="your-question"]');
const textcounter1 = document.querySelector('[data-js="character-counter1"]');
const textarea2 = document.querySelector('[data-js="your-answer"]');
const textcounter2 = document.querySelector('[data-js="character-counter2"]');
const taginput = document.querySelector('[data-js="tags"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const card = document.createElement("section");
  card.classList.add("card");

  const question = document.createElement("h2");
  question.classList.add("question");
  question.textContent = data["your-question"];

  const answer = document.createElement("p");
  answer.classList.add("answer");
  answer.textContent = data["your-answer"];

  const tag = document.createElement("section");
  tag.classList.add("tag");
  tag.textContent = data["tag"];

  card.append(question);
  card.append(answer);
  card.append(tag);

  form.after(card);

  textcounter1.textContent = "150 characters left";
  textcounter2.textContent = "150 characters left";
  event.target.reset();
});

textarea1.addEventListener("input", (event) => {
  const remaining = 150 - event.target.value.length;
  textcounter1.textContent = remaining + " characters left";
  event.target.reset();
});

textarea2.addEventListener("input", (event) => {
  const remaining = 150 - event.target.value.length;
  textcounter2.textContent = remaining + " characters left";
});
