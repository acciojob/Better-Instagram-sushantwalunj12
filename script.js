let draggedItem = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
}

function drop(event) {
  event.preventDefault();
  let droppedItem = event.target;
  let tempBackground = draggedItem.style.backgroundImage;
  draggedItem.style.backgroundImage = droppedItem.style.backgroundImage;
  droppedItem.style.backgroundImage = tempBackground;
}

const images = document.querySelectorAll(".image");
images.forEach((image) => {
  image.addEventListener("dragstart", drag);
  image.addEventListener("dragover", allowDrop);
  image.addEventListener("drop", drop);
});
