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


//auto invoke function
(function() { 
    document.addEventListener("mousemove", parallax);
    //elemen apa saja yang dikasih parallax
    const elem1 = document.querySelector(".img1")
    const elem2 = document.querySelector(".img2")
    const elem3 = document.querySelector(".img3")
    const elem4 = document.querySelector(".img4")

    //e = event --> lihat event listener diatas
    function parallax(e) {
        let w = window.innerWidth / 2; 
        let h = window.innerHeight / 2;
        //posisi mouse
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        //logic parallax
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let depth2 = `${50-(mouseX-w)*0.02}% ${50-(mouseY-h)*0.02}%`;
        let depth3 = `${50-(mouseX-w)*0.06}% ${50-(mouseY-h)*0.06}%`;
        let x = `${depth3}, ${depth2}, ${depth1}`;
        console.log(x);

        //implement ke element
        elem1.style.backgroundPosition = x;
        elem2.style.backgroundPosition = x;
        elem3.style.backgroundPosition = x;
        elem4.style.backgroundPosition = x;

    }   
})();
