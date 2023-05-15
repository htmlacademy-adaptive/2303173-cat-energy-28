const slider = document.querySelector(".compare-slider__slider input");
const dragLine = document.querySelector(".compare-slider__slider .compare-slider__drag-line");
const img = document.querySelector(".compare-slider__images .compare-slider__image-second");
const imgFirst = document.querySelector(".compare-slider__images .compare-slider__image-first");

const mySuperFunc = ()=>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
    imgFirst.style.width = 100 - sliderVal + "%";
}

slider.oninput = mySuperFunc
mySuperFunc()