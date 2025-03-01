document.querySelectorAll(".vdo").forEach(vdo => {
    let video = vdo.querySelector("video");
    let playPauseBtn = vdo.querySelector(".playPause");

    playPauseBtn.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause";
        } else {
            video.pause();
            playPauseBtn.textContent = "Play";
        }
    });
});


document.querySelectorAll(".short1 video").forEach(video => {
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

