function artist(image,artistname) {
    let html= `<div class="card">
    <button class="playbutton">
        <img src="fill.svg" alt="">
    </button>
    <div class="art">
    <img src="${image}" alt="" class="aimage">
    </div>
    <div class="details">
        <ul class="xyz">
            <li class="bold">${artistname}</li>
            <li class="artist opacity">Artist</li>
        </ul>
    </div>
 </div>`
  document.querySelector(".cardcontainer").innerHTML=document.querySelector(".cardcontainer").innerHTML+html;
    
 }
 artist("artist2img.jpeg","Arjit Singh")
 artist("artist3.jpeg","A.R.Rahman")
 artist("artist4.jpeg","Sachin Jiger")
 artist("artist5.jpeg","Anirudh Ravichander ")
 artist("artist6.jpeg","Vishal Mishra")
// 

 
//  console.log("hell")
// let audioElement=new Audio('songs/1.mp3')
// audioElement.play();
let index=0;
let audioElement=new Audio('songs/1.mp3')
let myProgressBar=document.getElementById("myprogressbar");
let masterPlay= document.getElementById("masterPlay")
let gif1= document.getElementById("gif1");
let masterSongName=document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName("firstsong"));
let songs=[
    {songName:"Aaj Ki Raat",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Soulmate-320",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Dekha Tenu",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Dil Tu Jaan Tu",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Ford-320",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Mahu O Mahi",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Sajni Re",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Khoobsurat",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Ishq",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Warriyo",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]
//play a song
//seeting image and cover
songItems.forEach((element,i) => {
    element.getElementsByClassName("cover")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
});

function changeImage() {
    let image= document.getElementById("masterPlay");
    if(image.src.match('/lastimg.svg')){
        image.src='/pause-stroke-rounded.svg'

    }
    else{
        image.src='/lastimg.svg'
    }
}
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       
      gif1.style.opacity=1;
     
        
    }
    else{
        gif1.style.opacity=0;
        audioElement.pause();
    }
      
    
})
//updating seek bar
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
//gana v us hisb se play ho
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
})



Array.from(document.getElementsByClassName("allclick")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        masterSongName.innerText=songs[index].songName;
        index=parseInt(e.target.id);
        audioElement.src=`songs/${index+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        gif1.style.opacity=1;
         changeImage();
    })
})
document.getElementById('next1').addEventListener('click',()=>{
    if(index>=9){
        index=0;
    }
    else{
        index += 1;
    }
    audioElement.src=`songs/${index+1}.mp3`
    audioElement.currentTime=0;
        audioElement.play();
        gif1.style.opacity=1;
        masterSongName.innerText=songs[index].songName;

})
document.getElementById('previous1').addEventListener('click',()=>{
    if(index<=0){
        index=0;
    }
    else{
        index -= 1;
    }
    audioElement.src=`songs/${index+1}.mp3`
    audioElement.currentTime=0;
        audioElement.play();
        gif1.style.opacity=1;
        audioElement.src=`songs/${index+1}.mp3`;
        masterSongName.innerText=songs[index].songName;

})