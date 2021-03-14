document.querySelectorAll(".container").forEach((item, i) => {
  item.addEventListener("click", (event, i) => {
    alert(event.target.classList.toString().split(" ")[1]);
    event.stopPropagation()
  });
});
