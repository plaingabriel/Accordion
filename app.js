const items = document.getElementsByClassName("accordion__item");

function toggleContent(position) {
  const item = items[position];

  if (item.classList.contains("active")) {
    item.classList.remove("active");
  } else {
    item.classList.add("active");
  }
}

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    toggleContent(i);
  });
}
