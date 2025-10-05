document.querySelector("button").onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    document.querySelector("header .navbar-collapse").classList.add("active");
    document.querySelector("header .navbar-nav").classList.add("active");
  } else {
    document
      .querySelector("header .navbar-collapse")
      .classList.remove("active");
    document.querySelector("header .navbar-nav").classList.remove("active");
  }
};
