let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener('keypress',(event)=>
{
    event.stopPropagation();
    console.log("Game Started");
})
// document.addEventListener('contextmenu', event => event.preventDefault());
