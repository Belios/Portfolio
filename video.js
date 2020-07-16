
var video = document.getElementById("hero_video");
var button = document.querySelector("button");
var source = document.createElement('source');

source.setAttribute('src', 'media/drivingcar.mp4');

video.appendChild(source);
video.play();

setTimeout(function() {
    video.pause();

    source.setAttribute('src', 'media/car-transition.mp4');

    video.load();
    video.play();
}, 3000);


function skip(){
    button.setTimeout();
    button.style = "";
}

// function loadAnotherVideo() {
//     var video = document.getElementsByTagName('video')[0];
//     var sources = video.getElementsByTagName('source');
//     sources[0].src = 'media/drivingcar.mp4';
//     sources[1].src = 'media/car-transition.mp4';
//     video.load();
// }
