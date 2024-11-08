const maxRating = 5;
var currentRating = 0;
Array.from({ length: maxRating }, (_, i) => {
  const ratingContainer = document.getElementById("rating");
  const button = document.createElement("button");
  button.id = `ratingButton${i + 1}`;
  button.innerText = i + 1;
  button.addEventListener("click", () => {
    setRating(i + 1);
  });
  ratingContainer.appendChild(button);
});
document.getElementsByClassName("container2")[0].style.display = "none";
const setRating = (num) => {
  Array.from({ length: maxRating }, (_, i) => {
    const button = document.getElementById(`ratingButton${i + 1}`);
    if (!button) return;
    button.style.backgroundColor = "#262f38";
    button.removeEventListener("mouseover", handleMouseOver);
    button.removeEventListener("mouseout", handleMouseOut);
    if (i + 1 === num) {
      button.style.backgroundColor = "white";
    } else {
      button.addEventListener("mouseover", handleMouseOver);
      button.addEventListener("mouseout", handleMouseOut);
    }
  });

  currentRating = num;
};
const handleMouseOver = (event) => {
  event.target.style.backgroundColor = "#fc7613";
};

const handleMouseOut = (event) => {
  event.target.style.backgroundColor = "#262f38";
};

const handleSubmit = () => {
  if (currentRating === 0) {
    alert("Please select a rating");
  } else {
    document.getElementsByClassName("container")[0].style.display = "none";
    document.getElementsByClassName("container2")[0].style.display = "flex";
    document.getElementById("ratingValue").innerText = currentRating;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ratingValue").innerText = currentRating;
  console.log("rating");
});
