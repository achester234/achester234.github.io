const digits = document.querySelectorAll('.digits');

const xPositions = [0,0,0,0,0,0,0,0,0,0]
const yPositions = [0,0,0,0,0,0,0,0,0,0]
const xSpeeds = [1,-1,2,3,2,1,-2,3.5,-4.7,5];
const ySpeeds = [1,2,-1.5,3,-2.5,3,-3.5,4.5,4.5,-5];

const width = window.innerWidth - digits[0].offsetWidth;
const height = window.innerHeight - digits[0].offsetHeight;


function update(digit, i) {
    // right and left edge of screen
    if (xPositions[i] >= width || xPositions[i] < 0) { 
        xSpeeds[i] *= -1
    }
    // Bottom and Top of screen edges
    if (yPositions[i] >= height || yPositions[i] < 0) { 
        ySpeeds[i] *= -1
    }
    // changing x position when updating to get the divs to move left and right
    xPositions[i] =  xPositions[i] + xSpeeds[i];
    digit.style.left = xPositions[i] + 'px';
    // Changing y postion when updating to move it up and down
    yPositions[i] =  yPositions[i] + ySpeeds[i];
    digit.style.top = yPositions[i] + "px";
}


function loop() {
    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i]
        // calling the update fuction
        update(digit, i);
    }
    requestAnimationFrame(loop);
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    console.log("WORK")
    e.preventDefault();
    let phoneNumber = 'Your number: '
    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i]
        const singleDigit = digit.getElementsByTagName('input')[0].value
        console.log(singleDigit)
        if (singleDigit) {
            phoneNumber = phoneNumber + singleDigit
        } else {
            phoneNumber = phoneNumber + "_";
        }

        if (i == 2 || i == 5) {
            phoneNumber = phoneNumber + "-";
        }
    }
    document.getElementById('numberDisplay').innerHTML = phoneNumber
})

loop();




