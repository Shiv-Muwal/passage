$('.slider1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay:true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: function (slider, i) {
    return '<div><img src="./assets/images/svg/Arrow1.svg"/><img src="./assets/images/svg/Arrow2.svg" /></div>';
  }
});

const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
const navLink = document.querySelectorAll(".nav_link");
let index_remove = document.querySelectorAll(".index_remove");
navLink.forEach(a => a.addEventListener("click", () => {
  menulist.classList.toggle("show");
  document.body.classList.remove("overflow-hidden");
  menuicon.classList.toggle("show");
}));
menuicon.addEventListener("click", () => {
  menulist.classList.toggle("show");

  document.body.classList.toggle("overflow-hidden");
  menuicon.classList.toggle("show");
  index_remove.classList.toggle("z-n1")

});