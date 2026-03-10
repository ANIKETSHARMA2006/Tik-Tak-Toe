const buttons = document.querySelectorAll(".btn");
const ul=document.querySelector(".li");
const win=document.querySelector(".win");
const restart=document.querySelector(".restart");
// variable to manage state
let click=true;
let notwin=true;
//funtion to handel the click and show the output
function handleClick(btn,num){

    if(btn.textContent !== "") return;

    if (notwin) {
        const li= document.createElement("li")
    if (click===true) {
        btn.textContent="X";
        btn.style.color = "#f22f2f";
        winner(num);
        click=!click;
        li.textContent= `Box ${num} is clicked by user X`;
        ul.appendChild(li);

    }
    else{
        btn.textContent="O";
        btn.style.color = "#49ef49";
        winner(num);
        click=!click;
        li.textContent= ` Box ${num} is clicked by user O`;
        ul.appendChild(li);
    }

   

    }
    
}
let x="";
let O="";
// fuction the diclair the winner
const winPatterns = [
 [1,2,3],
 [4,5,6],
 [7,8,9],
 [1,4,7],
 [2,5,8],
 [3,6,9],
 [1,5,9],
 [3,5,7]
];

let movesX = [];
let movesO = [];

function winner(num){

    if(click){
        movesX.push(num);

        for(let pattern of winPatterns){
            if(pattern.every(p => movesX.includes(p))){
                win.textContent = "USER X IS THE WINNER 🥳";
                notwin = false;
                restart.style.opacity=1;
            }
        }

    } else {

        movesO.push(num);

        for(let pattern of winPatterns){
            if(pattern.every(p => movesO.includes(p))){
                win.textContent = "USER O IS THE WINNER 🥳";
                notwin = false;
                restart.style.opacity=1;
            }
        }

    }

}
//event listener and loop to listen the event on every element
let i=0;
buttons.forEach((btn,i)=>{
    btn.addEventListener("click",()=>handleClick(btn,i+1));
    
});
restart.addEventListener("click",()=>{
    location.reload();
})