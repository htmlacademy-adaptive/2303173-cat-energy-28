const slider = document.querySelector(".slider input");
const dragLine = document.querySelector(".slider .drag-line");
const img = document.querySelector(".images .img-2");
const imgFirst = document.querySelector(".images .img-1");

const mySuperFunc = ()=>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
    imgFirst.style.width = 100 - sliderVal + "%";
}

slider.oninput = mySuperFunc
mySuperFunc()

// setInterval(() => {
//     const color = document.body.style.backgroundColor;
//     document.body.style.backgroundColor = color === 'red' ? 'transparent' : 'red'
//   }, 100);
