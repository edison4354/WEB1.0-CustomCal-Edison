const display = document.querySelector('#display');

const videoLength = document.querySelector('#video-len');
const videoSpeed = document.querySelector('#video-speed');

const button = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let lenVid = parseFloat(videoLength.value);
    let speedVid = parseFloat(videoSpeed.value);

    let totalTime = lenVid / speedVid;
    display.innerHTML = "Video Length: " + totalTime.toFixed(2) + " Minutes"; 
    console.log(totalTime)
})