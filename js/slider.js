function showSlides() {
    // Using slideIndex static variable to retain value between calls
    // The first time (and only the first time) it is initialized with 0
    if (typeof showSlides.slideIndex == 'undefined')
        showSlides.slideIndex = 0;
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    showSlides.slideIndex++;
    if (showSlides.slideIndex > slides.length) {
        showSlides.slideIndex = 1;
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[showSlides.slideIndex-1].style.display = "block";  
    dots[showSlides.slideIndex-1].className += " active";
    setTimeout(showSlides, 1000); // Change image every 2 seconds
}
