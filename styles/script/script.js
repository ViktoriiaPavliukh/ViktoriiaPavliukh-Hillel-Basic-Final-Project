let windowWidth = window.innerWidth;

if (windowWidth > 1019) {
  // only one - first element
  let titleFirst = document.querySelector(".slide .title");
  console.log(titleFirst);

  // All elements
  let titles = document.querySelectorAll(".slide .title");
  console.log(titles);

  titles.forEach((elem) => {
    // console.log(elem);
    elem.addEventListener("click", () => {
      titles.forEach((elem) => elem.parentNode.classList.remove("active"));
      // console.log(elem.parentNode);
      elem.parentNode.classList.add("active");
    });
  });

  // titles.forEach((elem, index, arr) => {
  //     console.log(elem, index, arr);
  // })
} else {
  let dots = document.querySelectorAll(".slider .dot");
  let slides = document.querySelectorAll(".slider .slide");

  console.log(slides);

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      dots.forEach((elem) => elem.classList.remove("active"));
      dot.classList.add("active");

      slides.forEach((elem) => elem.classList.remove("active"));
      let index = dot.getAttribute("data-index");
      slides[index].classList.add("active");
    });
  });
}

let buttonNsame = document.getElementById("modqalBtn");
let modalName = document.getElementById("modal");
let closeBtn = document.getElementById("modalClose");

buttonNsame.addEventListener("click", () => {
  modalName.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  modalName.classList.remove("visible");
});
