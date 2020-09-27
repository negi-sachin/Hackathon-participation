let slideIndex = 0;
setSlide(slideIndex);

function moveSlide(m) {
    setSlide(slideIndex += m);
}

function setSlide(n) {
    const slides = document.getElementsByClassName('caro_image');
    const dots = document.getElementsByClassName('dot');
    if (n == -1)
        slideIndex = slides.length - 1;
    else if (n == slides.length)
        slideIndex = 0

    else slideIndex = n

    Array.from(slides).forEach(s => {
        s.style.display = "none"
    })
    Array.from(dots).forEach(d => {
        d.classList.remove("active_dot")
    })

    console.log(n, slideIndex, slides);
    slides[slideIndex].style.display = "block"
    dots[slideIndex].classList.add('active_dot')
}