document.querySelectorAll("[data-quick-check]").forEach((check, checkIndex) => {
  const form = check.querySelector("form");
  const choices = [...check.querySelectorAll("[data-choice]")];
  const feedback = check.querySelector("[data-feedback]");

  for (let index = choices.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [choices[index], choices[swapIndex]] = [choices[swapIndex], choices[index]];
  }

  const fieldset = check.querySelector("fieldset");
  choices.forEach((choice) => fieldset.append(choice));

  choices.forEach((choice, choiceIndex) => {
    const input = choice.querySelector("input");
    input.name = `quick-check-${checkIndex}`;
    input.value = String(choiceIndex);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = form.querySelector("input:checked");
    const answer = choices.find((choice) => choice.dataset.correct === "true");

    if (!selected) {
      feedback.textContent = "Choose one answer, then check it.";
      feedback.dataset.result = "retry";
      return;
    }

    const isCorrect = selected.closest("[data-choice]") === answer;
    feedback.textContent = isCorrect
      ? "Yes. Preview checks one chosen zoom and rotation before the full batch."
      : "Not quite. Look for the action that renders the current selection only.";
    feedback.dataset.result = isCorrect ? "correct" : "retry";
  });
});
