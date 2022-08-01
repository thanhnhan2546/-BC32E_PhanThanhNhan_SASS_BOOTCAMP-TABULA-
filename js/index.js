document.querySelector("#btnMenu").onclick = () => {
  document.querySelector("#menuBar").style.animation = "fadeRight 1s";
  document.querySelector("#menuBar").style.display = "block";

  document.querySelector("body").style.flexDirection = "row";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("#headerContainer").style.margin = "0";
  document.querySelector("#btnMenu").style.display = "none";
  document.querySelector(".close").style.display = "block";
};
document.querySelector(".close").onclick = () => {
  document.querySelector("#menuBar").style.display = "none";
  document.querySelector("body").style.flexDirection = "column-reverse";
  document.querySelector("body").style.overflow = "visible";
  document.querySelector("#headerContainer").style.margin = "0 auto";
  document.querySelector("#btnMenu").style.display = "block";
  document.querySelector(".close").style.display = "none";
};
