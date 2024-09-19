let playBtn = document.getElementById("play");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let boxes = document.querySelectorAll('.box');

let count =0;
let interval = null;
function generateRandomColor()
{
    let red = Math.trunc(Math.random()*255);
    let green = Math.trunc(Math.random()*255);
    let blue = Math.trunc(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
};

playBtn.addEventListener("click",()=>{
    if(interval == null)
        {
            interval = setInterval(()=>{
                boxes[count].style.background = generateRandomColor();
                count++;
                if(count>=boxes.length)
                    {
                        count =0
                        boxes.forEach(ele =>{
                            ele.style.background= 'white';
                        })
                    }
            },100)
        }
})

stopBtn.addEventListener("click",()=>{
    clearInterval(interval);
    interval = null;
})

resetBtn.addEventListener("click",()=>{
    clearInterval(interval);
    interval = null;
    boxes.forEach(ele =>{
        ele.style.background="white";
    })
    count = 0
})