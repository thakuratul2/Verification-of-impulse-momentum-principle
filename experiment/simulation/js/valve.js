
const photo = document.getElementById("photo");
const video = document.getElementById("video");
const showVideoButton = document.getElementById("showVideoButton");

showVideoButton.addEventListener("click", function () {
    // Hide the photo
    photo.style.display = "none";
    // Show the video
    video.style.display = "block";
    // Start playing the video
    video.play();
});