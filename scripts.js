let slideIndex = 1;

function pressButton(n) {
    displaySlides(slideIndex +=n);
}

function displaySlides(n) {
    let i;
    let slides = document.getElementsByClassName('banner');

    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    
    for(i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.opacity = 1;
    slides[slideIndex-1].className +=' active';

}

