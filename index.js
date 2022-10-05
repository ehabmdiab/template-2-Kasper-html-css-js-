const menu = document.getElementsByClassName("toggle-menu");
const ul = document.getElementsByClassName("ul");

// on menu click display ul block
menu[0].addEventListener("click", function () {
  ul[0].style.display = "flex";
  ul[0].style.flexDirection = "column";
  ul[0].style.position = "absolute";
  ul[0].style.left = "0";
  ul[0].style.width = "100%";
  ul[0].style.zIndex = "1";
  ul[0].style.backgroundColor = "rgba(0, 0, 0,0.5)";
  ul[0].style.top = "100%";
});

// on ul click display ul none after the first click
if (window.matchMedia("(max-width: 995px)").matches) {
  ul[0].addEventListener("click", function () {
    ul[0].style.display = "none";
  });
}
