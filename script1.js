console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('song/p1.mp3')
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let timestamp = document.getElementsByClassName('timestamp')

let gif = document.getElementById('gif');
let songs = [
    {songName: "khairiyat", filepath:"song/p1.mp3"},
    {songName: "Muskurane", filepath:"song/p2.mp3"},
    {songName: "Channa Mereya", filepath:"song/p3.mp3"},
    {songName: "llahi", filepath:"song/p4.mp3"},
    {songName: "Suno- Na Sangmarmar", filepath:"song/p5.mp3"},
    {songName: "Shayad", filepath:"song/p6.mp3"},
    {songName: "Ghungroo", filepath:"song/p7.mp3"},
    {songName: "Nashe Si Chadh gayi", filepath:"song/p8.mp3"},
    {songName: "bekhayali", filepath:"song/p9.mp3"},
    {songName: "Sooraj dooba hai", filepath:"song/p10.mp3", },
]

songItems.forEach((element, i)=>{ 
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/p${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       
    })
})

    document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/p${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    // audioElement.autoplay();
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/p${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


audioElement.addEventListener("timestamp",()=>{
    //audioElement.src = `song/p${songIndex+=1}.mp3`;
    console.log(audioElement.src);
    // audioElement.play();
    //audioElement.src [songIndex += 1 ].play();
    // gif.style.opacity = 1;

})

// function nextTrack(){
//     if(songIndex < songs - 1)
//     songIndex += 1;
//     else songIndex = 0
// }
// audioElement.addEventListener("ended", nextTrack);

