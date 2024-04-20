function imgSlider(anything){
    document.querySelector(".img-html").src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector(".ctn-skills-circle");
    circle.style.background = color;
}

function changeText(textTitle, textP, textSpan){
    const title = document.querySelector(".ctn-skills-box h3");
    const p = document.querySelector(".ctn-skills-box p");
    const span = document.querySelector(".ctn-skills-box span");

    title.textContent = textTitle;
    p.textContent = textP;
    span.textContent = textSpan;
}