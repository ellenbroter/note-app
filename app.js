const submitButton = document.querySelector(".form-submit-button");
const userNote = document.querySelector(".form-input");
const diplaySection = document.querySelector(".display-notes-container");
const emptyListMessage = document.querySelector(".empty-list");
const emptyInput = document.querySelector(".empty-input");

const submitHandler = (event) => {
  event.preventDefault();
  if (!userNote.value) {
    emptyInput.classList.remove("hide");
    setTimeout(() => {
      emptyInput.classList.add("hide");
    }, 3000);
    return;
  } else {
    const displayList = document.createElement("ul");
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = userNote.value;
    diplaySection.append(displayList);
    displayList.append(listItem);
    userNote.value = "";
  }
};

submitButton.addEventListener("click", submitHandler);