
let sliderCfg = {
    1: "@/../assets/jokeapi.png",
    2: "@/../assets/ti.png",
    3: "@/../assets/swapi.png",
}
let sliderImage = document.getElementById('slider_image');
let left = document.getElementById('left');
let right = document.getElementById('right');
let sin = 1;
let size = Object.keys(sliderCfg).length;
let path = sliderCfg[sin];

function update(){
    path = sliderCfg[sin];
    sliderImage.setAttribute("src", path);
}

left.onclick = function(){
    if (sin > 1){
        sin = sin - 1;
    } else{
        sin = 1;
    }
    update();
}
right.onclick = function(){
    if (sin < size){
        sin = sin + 1;
    } else{
        sin = size;
    }
    update();
}

update();