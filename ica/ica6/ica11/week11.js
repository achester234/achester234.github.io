

const x = 1;
const y = 2;

if (x==y) {
    console.log("SUCESS");
}

else {
    console.log("FAIL");
}

const btn = document.querySelector("button");
const canvas = doscument.querySelector("canvas");
const ctx = canvas.getContent("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}


function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height); //clear the screen every time
    for (let i = 0; i<100; i++) { 
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.arc
            random(canvas.width), random(canvas.height),random(50), 0, 2*Math.PI,);
}}

btn.addEventListener("click",draw);


//use looping code page for code
// make circles that are different sizes or make some sort of changes to how the circles appear
//translucency, color, ect
// supposed to be a bunch of circles on the page after you click the return button