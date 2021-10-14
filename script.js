//Initialize elements
let masterPlay = document.getElementById('master-play');
let audioElement = new Audio('/music/1.mp3');
let progressBar = document.getElementById('progressbar');
let song = Array.from(document.getElementsByClassName('song'));
let songIndex = 0;

//Array of song detais
let songs = [
    { songName: 'Cradles', songDetail: 'Sun Urban', songCover: '/covers/b25b5f585ab8e5850f0ce0aa21efd70a.jpg', filePath: '/music/1.mp3' },
    { songName: 'On & On', songDetail: 'Cartoon', songCover: '/covers/on-on-feat-daniel-levi-1586947008-oeI24in2Ga.jpg', filePath: '/music/2.mp3' },
    { songName: 'Mortals', songDetail: 'Warriyo, Laura Brehm', songCover: '/covers/download.jfif', filePath: '/music/3.mp3' },
    { songName: 'Invisible', songDetail: 'Julius Dreisig, Zeus X Crona', songCover: '/covers/invisible-1586956245-t2ybbYq7Q8.jpg', filePath: '/music/4.mp3' },
    { songName: 'Fade', songDetail: 'Alan Walker', songCover: '/covers/Fade.jpg', filePath: '/music/5.mp3' },
    { songName: 'Heroes Tonight', songDetail: 'Janji', songCover: '/covers/636abfa689d37616ef605452df51f240.1000x1000x1.jpg', filePath: '/music/6.mp3' },
    { songName: 'Blank', songDetail: 'Disfigure', songCover: '/covers/ab67616d0000b273e69690edce628fc2542b2306.jfif', filePath: '/music/7.mp3' },
    { songName: 'Symbolism', songDetail: 'Electro-Light', songCover: '/covers/symbolism-1586946494-AS4ubK6R0G.jpg', filePath: '/music/8.mp3' },
    { songName: 'Sky High', songDetail: 'Elektronomia Nightcore', songCover: '/covers/sky-high-1586948777-5GCUk56GqG.jpg', filePath: '/music/9.mp3' },
    { songName: 'Why We Lose', songDetail: 'Cartoon', songCover: '/covers/artwork-440x440.jpg', filePath: '/music/10.mp3' }
]

song.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].songCover;
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songName;
    element.getElementsByClassName("song-artist")[0].innerText = songs[i].songDetail;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.src = "/icons/pause-circle-regular.svg";
        document.getElementsByClassName('playing-gif')[songIndex].style.opacity = '100';
    }
    else {
        removeAllGifs();
        audioElement.pause();
        masterPlay.src = "/icons/play-circle-regular.svg";
    }
})

audioElement.addEventListener('timeupdate', () => {
    //Update progressbar
    console.log(audioElement.currentTime);
    let progress = ((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})
progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
    console.log(audioElement.currentTime);
})

// let makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('mini-player')).forEach(element => {
//         element.src = "/icons/play-circle-regular.svg";
//     })
// }

// Array.from(document.getElementsByClassName('mini-player')).forEach(element => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         element.src = "/icons/pause-circle-regular.svg";
//         songIndex = parseInt(element.id);
//         audioElement.currentTime = 0;
//         audioElement.src = `/music/${songIndex + 1}.mp3`;
//         audioElement.play();
//         masterPlay.src = "/icons/pause-circle-regular.svg";
//         document.getElementById('music-image').src = songs[songIndex].songCover;
//         document.getElementById('songName').innerText = songs[songIndex].songName;
//         document.getElementById('song-art').innerText = songs[songIndex].songDetail;
//     })
// })
let removeAllGifs = () => {
    Array.from(document.getElementsByClassName('playing-gif')).forEach(element => { element.style.opacity = '0' });
}
let removeHover = () => {
    Array.from(document.getElementsByClassName('song')).forEach(element => { element.style.backgroundColor = "#070707" });
}
Array.from(document.getElementsByClassName('song')).forEach(element => {
    element.addEventListener('click', () => {
        songIndex = parseInt(element.id);
        audioElement.currentTime = 0;
        audioElement.src = `/music/${songIndex + 1}.mp3`;
        audioElement.play();
        masterPlay.src = "/icons/pause-circle-regular.svg";
        document.getElementById('music-image').src = songs[songIndex].songCover;
        document.getElementById('songName').innerText = songs[songIndex].songName;
        document.getElementById('song-art').innerText = songs[songIndex].songDetail;
        removeAllGifs();
        document.getElementsByClassName('playing-gif')[songIndex].style.opacity = '100';
        removeHover();
        document.getElementsByClassName('song')[songIndex].style.backgroundColor = "rgba(111, 111, 111, 0.3)";
    })
})
document.getElementById('forward').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `/music/${songIndex + 1}.mp3`;
    audioElement.play();
    masterPlay.src = "/icons/pause-circle-regular.svg";
    document.getElementById('music-image').src = songs[songIndex].songCover;
    document.getElementById('songName').innerText = songs[songIndex].songName;
    document.getElementById('song-art').innerText = songs[songIndex].songDetail;
    removeAllGifs();
    document.getElementsByClassName('playing-gif')[songIndex].style.opacity = '100';
    removeHover();
    document.getElementsByClassName('song')[songIndex].style.backgroundColor = "rgba(111, 111, 111, 0.3)";
})
document.getElementById('backward').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.currentTime = 0;
    audioElement.src = `/music/${songIndex + 1}.mp3`;
    audioElement.play();
    masterPlay.src = "/icons/pause-circle-regular.svg";
    document.getElementById('music-image').src = songs[songIndex].songCover;
    document.getElementById('songName').innerText = songs[songIndex].songName;
    document.getElementById('song-art').innerText = songs[songIndex].songDetail;
    removeAllGifs();
    document.getElementsByClassName('playing-gif')[songIndex].style.opacity = '100';
    removeHover();
    document.getElementsByClassName('song')[songIndex].style.backgroundColor = "rgba(111, 111, 111, 0.3)";
})