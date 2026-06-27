// ===================================
// Begin Adventure Button
// ===================================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    launchConfetti();

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

});

// ===================================
// Scroll Animations
// ===================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

document.querySelectorAll(".hidden").forEach(section=>{

observer.observe(section);

});

// ===================================
// Dinosaur Easter Eggs
// ===================================

const dino=document.getElementById("dino");

const dinoText=document.getElementById("dinoText");

let clicks=0;

const messages=[

"🦕 Rawr! Happy Birthday!",

"🌸 You're officially sixteen!",

"🦖 Dino Fact: You're awesome.",

"💚 Sending prehistoric hugs.",

"✨ Adventure awaits!",

"♾️ Best Friends Forever!"

];

dino.addEventListener("click",()=>{

clicks++;

dino.style.transform=`scale(${1.1+Math.random()*0.3}) rotate(${Math.random()*20-10}deg)`;

setTimeout(()=>{
dino.style.transform="";
},300);

if(clicks<5){

dinoText.innerHTML=messages[Math.floor(Math.random()*messages.length)];

}

else{

dinoText.innerHTML="🏆 Congratulations! You unlocked the <strong>Official Dino Best Friend Certificate</strong> 🦖💚";

}

});

// ===================================
// Floating Sparkles
// ===================================

setInterval(()=>{

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*window.innerWidth+"px";

sparkle.style.top="-20px";

sparkle.style.fontSize=(10+Math.random()*25)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.opacity="0.8";

sparkle.style.transition="all 5s linear";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.top=window.innerHeight+"px";

sparkle.style.opacity="0";

},100);

setTimeout(()=>{

sparkle.remove();

},5200);

},350);

// ===================================
// Confetti
// ===================================

function launchConfetti(){

for(let i=0;i<180;i++){

const confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="10px";

confetti.style.height="10px";

confetti.style.background=

["#ff69b4","#ffd700","#87cefa","#98fb98","#ffb6c1","#dda0dd"][Math.floor(Math.random()*6)];

confetti.style.left=Math.random()*window.innerWidth+"px";

confetti.style.top="-20px";

confetti.style.borderRadius="50%";

confetti.style.pointerEvents="none";

confetti.style.transition="all 4s ease-out";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=`translateY(${window.innerHeight+100}px) rotate(${Math.random()*720}deg)`;

confetti.style.opacity="0";

},50);

setTimeout(()=>{

confetti.remove();

},4000);

}

}

// ===================================
// Typewriter Effect
// ===================================

const title=document.querySelector(".title");

const original=title.innerText;

title.innerText="";

let i=0;

function typeWriter(){

if(i<original.length){

title.innerHTML+=original.charAt(i);

i++;

setTimeout(typeWriter,90);

}

}

window.onload=typeWriter;