let slideIndex = 0;
showSlides();
let slideIndex1 = 0;
showSlides1();
let slideIndex2 = 0;
showSlides2();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}
    slides[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 2000); // Change image every 2 seconds
  }

  function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
  }