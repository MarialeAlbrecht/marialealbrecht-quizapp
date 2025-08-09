document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card) => {
    const answer = card.querySelector(".Answer");
    const button = card.querySelector(".show-answer");

    if (answer && button) {
      answer.style.display = "none";

      button.addEventListener("click", () => {
        if (answer.style.display === "none") {
          answer.style.display = "block";
          button.textContent = "Hide Answer";
        } else {
          answer.style.display = "none";
          button.textContent = "Show Answer";
        }
      });
    }
  });
});
