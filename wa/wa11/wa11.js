const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [
    'images/mountains.jpeg', 
    'images/hike.jpeg',
    'images/campsite.jpeg',
    'images/stream.jpeg',
    'images/sunrise.jpeg'
]

/* Declaring the alternative text for each image file */
const altText = [
    'Picture of mountains', 
    'Picture of a hiking path', 
    'Picture of a campsite', 
    'Picture of a stream',
    'Picture of a building at sunrise'
]

displayedImage.setAttribute('src', images[0]);
displayedImage.setAttribute('alt', altText[0]);

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage)
    newImage.addEventListener('click', (e) => {
        displayedImage.setAttribute('src', e.target.src);
    })
}

btn.addEventListener('click', (e) => {
    if (btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})





// need event listener for the image (when it clicks the image)

// for (let i = 0; )