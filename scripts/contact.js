export function contactFunctionality() {
  toggleCheckbox();

  // Toggle custom checkbox selection
  function toggleCheckbox() {
    const checkbox = document.getElementById("consent-checkbox");

    checkbox.addEventListener("click", () => {
      checkbox.classList.toggle("checked");
    });
  }
}
