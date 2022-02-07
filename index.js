const lang = document.querySelector('.switch-lng');
const eng = lang.querySelector('.eng');
const rus = lang.querySelector('.rus');

eng.addEventListener('click', () => {
    eng.style.color= "#bdae82";
    rus.style.color= "#FFFFFF";
})
rus.addEventListener('click', () => {
    rus.style.color= "#bdae82";
    eng.style.color= "#FFFFFF";
})

// Portfolio
const btnPortfolio = document.querySelector('#portfolio');
const winter = btnPortfolio.querySelector('.winter');
const spring = btnPortfolio.querySelector('.spring');
const summer = btnPortfolio.querySelector('.summer');
const autumn = btnPortfolio.querySelector('.autumn');

winter.addEventListener('click', fotoPort1);
spring.addEventListener('click', fotoPort2);
summer.addEventListener('click', fotoPort3);
autumn.addEventListener('click', fotoPort4);

function fotoPort1() {
        winter.style.backgroundColor = "#BDAE82";
        winter.style.color = "black";
        btnPortfolio.querySelector('#winter').style.display = "flex";

        spring.style.backgroundColor = "rgba(0, 0, 0, 0)"
        spring.style.color = "#BDAE82";
        btnPortfolio.querySelector('#spring').style.display = "none";

        summer.style.backgroundColor = "rgba(0, 0, 0, 0)"
        summer.style.color = "#BDAE82";
        btnPortfolio.querySelector('#summer').style.display = "none";

        autumn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        autumn.style.color = "#BDAE82";
        btnPortfolio.querySelector('#autumn').style.display = "none";
}

function fotoPort2() {
        spring.style.backgroundColor = "#BDAE82";
        spring.style.color = "black";
        btnPortfolio.querySelector('#spring').style.display = "flex";

        winter.style.backgroundColor = "rgba(0, 0, 0, 0)"
        winter.style.color = "#BDAE82";
        btnPortfolio.querySelector('#winter').style.display = "none";

        summer.style.backgroundColor = "rgba(0, 0, 0, 0)"
        summer.style.color = "#BDAE82";
        btnPortfolio.querySelector('#summer').style.display = "none";

        autumn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        autumn.style.color = "#BDAE82";
        btnPortfolio.querySelector('#autumn').style.display = "none";
}

function fotoPort3(){
        summer.style.backgroundColor = "#BDAE82";
        summer.style.color = "black";
        btnPortfolio.querySelector('#summer').style.display = "flex";
        
        winter.style.backgroundColor = "rgba(0, 0, 0, 0)"
        winter.style.color = "#BDAE82";
        btnPortfolio.querySelector('#winter').style.display = "none";

        spring.style.backgroundColor = "rgba(0, 0, 0, 0)"
        spring.style.color = "#BDAE82";
        btnPortfolio.querySelector('#spring').style.display = "none";

        autumn.style.backgroundColor = "rgba(0, 0, 0, 0)"
        autumn.style.color = "#BDAE82";
        btnPortfolio.querySelector('#autumn').style.display = "none";
}

function fotoPort4(){
        autumn.style.backgroundColor = "#BDAE82";
        autumn.style.color = "black";
        btnPortfolio.querySelector('#autumn').style.display = "flex";

        winter.style.backgroundColor = "rgba(0, 0, 0, 0)"
        winter.style.color = "#BDAE82";
        btnPortfolio.querySelector('#winter').style.display = "none";

        spring.style.backgroundColor = "rgba(0, 0, 0, 0)"
        spring.style.color = "#BDAE82";
        btnPortfolio.querySelector('#spring').style.display = "none";

        summer.style.backgroundColor = "rgba(0, 0, 0, 0)"
        summer.style.color = "#BDAE82";
        btnPortfolio.querySelector('#summer').style.display = "none";
}

// Video-player

const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.viewer');

const playBtn = videoPlayer.querySelector('.play-btn');
const poster = videoPlayer.querySelector('.poster');
const controlPlay = videoPlayer.querySelector('.play');
const controlVol = videoPlayer.querySelector('.volume');
const progresBar = videoPlayer.querySelector('.progres');
const progresVol = videoPlayer.querySelector('.volume-progres');

video.addEventListener('click', toggleVideo);
video.addEventListener('timeupdate', updateProgres);
playBtn.addEventListener('click', toggleVideo);
controlPlay.addEventListener('click', toggleVideo);
poster.addEventListener('click', toggleVideo);
controlVol.addEventListener('click', toggleVol);
progresBar.addEventListener('input', setProgres);
progresVol.addEventListener('input', setProgresVol);

function toggleVideo() {
    if(video.paused){
        videoPlayer.querySelector('.poster').style.visibility = "hidden";
        video.play();
        controlPlay.style.backgroundImage = "url(assets/video-player/svg/pause.svg)";
        playBtn.style.visibility = "hidden";
    }else{
        videoPlayer.querySelector('.poster').style.visibility = "hidden";
        video.pause();
        controlPlay.style.backgroundImage = "url(assets/video-player/svg/play.svg)";
        playBtn.style.visibility = "visible";  
    }
}

function toggleVol(){
    if (video.muted === false) {    
        video.muted = true;
        videoPlayer.querySelector('.volume').style.backgroundImage = "url(assets/video-player/svg/mute.svg)";
    } else {
        video.muted = false;
        videoPlayer.querySelector('.volume').style.backgroundImage = "url(assets/video-player/svg/volume.svg)";
    }
}

function updateProgres(){
    progresBar.value = (video.currentTime / video.duration)*100;
    videoPlayer.querySelector('.progres').style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progresBar.value}%, #c8c8c8 ${progresBar.value}%, #c8c8c8 100%)`;
}

function setProgres(){
    video.currentTime = (progresBar.value * video.duration)/100;
    videoPlayer.querySelector('.progres').style.background = `linear-gradient(to right, bdae82 0%, #bdae82 ${ video.currentTime}%, #c8c8c8 ${ video.currentTime}%, #c8c8c8 100%)`;
}

function setProgresVol(){
    video.volume = progresVol.value / 100;
    progresVol.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progresVol.value}%, #c8c8c8 ${progresVol.value}%, #c8c8c8 100%)`;
}


