const input = document.getElementById('inputn1');
const button = document.getElementById('button1');
const won = document.getElementById('won');


const input2 = document.getElementById('inputn2');
const button2 = document.getElementById('button2');


const number1 = document.getElementById('score1');
const number2 = document.getElementById('score22');

const attemps = document.getElementById('score');
const attemps2 = document.getElementById('score2');

let num = Math.floor(Math.random()*3)+1
console.log(num);
 let x = 0;
 let y = 0;
let won1 = false;
let won2 = false;
let guessnumber;
let guessnumber2;

function randomnumber(){

    num = Math.floor(Math.random()*10)+1
    if(guessnumber === num){
        number1.textContent='Correct';
        won1 = true;
    }
    else{
        won1 = false;
         number1.textContent="try again";         
    }   
}

function randomnumber2(){

    num = Math.floor(Math.random()*10)+1
    if(guessnumber2 === num){
        number2.textContent='Correct';
        won2 = true;
    }
    else{
        won2 = false;
         number2.textContent="try again";         
    }   
}
function one(){    
   guessnumber = 1;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }    
}
function two(){    
    guessnumber = 2;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function three(){    
    guessnumber = 3;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function four(){    
    guessnumber = 4;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function five(){    
    guessnumber = 5;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function six(){    
    guessnumber = 6;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function seven(){    
    guessnumber = 7;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function eight(){    
    guessnumber = 8;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function nine(){    
    guessnumber = 9;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}
function ten(){    
    guessnumber = 10;
    if(won1 === false){
        x++;
        attemps.textContent = "Attempts :"+ x;
        randomnumber();
    }
}

function sone(){    
    guessnumber2 = 1;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }    
 }
 function stwo(){    
     guessnumber2 = 2;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function sthree(){    
     guessnumber2 = 3;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function sfour(){    
     guessnumber2 = 4;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function sfive(){    
     guessnumber2 = 5;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function ssix(){    
     guessnumber2 = 6;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function sseven(){    
     guessnumber2 = 7;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function seight(){    
     guessnumber2 = 8;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function snine(){    
     guessnumber2 = 9;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function sten(){    
     guessnumber2 = 10;
     if(won2 === false){
         y++;
         attemps2.textContent = "Attempts :"+ y;
         randomnumber2();
     }
 }
 function result(){
    if(x>y){
        won.textContent = "won : "+ input2.value;
    }
    else if(x === 0 && y === 0){
        won.textContent  = "No Result";
    } 
   
    else{
        won.textContent = "won : "+input.value;
    }
 }
 const xx = document.getElementById('xx');
 const yy = document.getElementById('yy');

 let save = 1;
 function save(){
    if(save === 1){
    xx.textContent = "name-saved 👍";
    save++;
    }
    else{
    yy.textContent = "name-saved 👍";
    }
 }









