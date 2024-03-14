let user = document.getElementById('user')
let pc = document.getElementById('pc')
let result = document.getElementById('result')
let yourscore = 0;
let aiscore = 0 ;

// Checking if there is a score stored in local storage
if (localStorage.getItem('yourscore')) {
    
    yourscore = parseInt(localStorage.getItem('yourscore'));
    document.getElementById('user-score').textContent = yourscore;
} else {
    

    localStorage.setItem('yourscore', yourscore);
}

if (localStorage.getItem('aiscore')) {
    
    aiscore = parseInt(localStorage.getItem('aiscore'));
    document.getElementById('pc-score').textContent = aiscore;
} else {

    localStorage.setItem('aiscore', aiscore);
}


function choose(input){
    //display img on onclick
    user.innerHTML =  '<div class="' + input + '"><img src="images/icon-' + input + '.png" alt="' + input + '"></div>'
    //remove margin-top from paper to display it in center and scale it.
    var userImage = document.getElementById('user').querySelector('img');
    userImage.style = "margin-top : 0; transform : scale(1.5);";

    //to display pc choice
    const choice = ['rock', 'scissor', 'paper']
    const pcchoice = Math.floor(Math.random() * 3)
    let pcchoose = choice[pcchoice]

    
    pc.innerHTML =  '<div class="' + pcchoose + '"><img src="images/icon-' + pcchoose + '.png" alt="' + pcchoose + '"></div>'

    //remove margin-top from paper to display it in center and scale it.
    var pcImage = document.getElementById('pc').querySelector('img');
     pcImage.style = "margin-top : 0; transform : scale(1.5);";


    //fix rules button in bottom after onclk
    let rulesButtons = document.getElementsByClassName('rules-button');

    
    for (let i = 0; i < rulesButtons.length; i++) {
        rulesButtons[i].style.marginTop = '15.25vh';
    }

    //hide starting page and show display 
    show('play');
    hide('game');
    hide('rulebook')

    //Game Logic
if (input == pcchoose){
    result.innerHTML = '<div>tie</div>';
}
else if ( 
    (input == 'rock' && pcchoose == 'scissor') ||
    (input == 'paper' && pcchoose == 'rock') ||
    (input == 'scissor' && pcchoose == 'paper')
){
    setTimeout(function() {
        
    }, 1000);
    result.innerHTML = '<div>you win</div>';
    //show next button on win
    document.getElementById('nextbtn').style.display="block";

    setTimeout(function() {
        
    }, 2000);
    //apply styles
    userImage.style = 'margin-top:0;z-index:-1;transform:scale(1.5);box-shadow: 0 0 0 30px rgba(39,155,39), 0 0 0 45px rgba(29, 168, 43, 0.79), 0 0 0 60px rgba(46, 154, 37, 0.39);';

    //increase score
    yourscore +=1;
    localStorage.setItem('yourscore', yourscore)
    let userscore = document.getElementById('user-score');
    userscore.textContent = yourscore;
    console.log(yourscore)
    
    
}

else{
    result.innerHTML = '<div>you lost</div>';

    //apply styles
    pcImage.style = 'margin-top:0;z-index:-1;transform:scale(1.5);box-shadow: 0 0 0 30px rgba(39,155,39), 0 0 0 45px rgba(29, 168, 43, 0.79), 0 0 0 60px rgba(46, 154, 37, 0.39);';
    
    //increase score
    aiscore +=1
    localStorage.setItem('aiscore', aiscore)
    let pcscore = document.getElementById('pc-score');
    pcscore.textContent = aiscore;
    
    
}
}

function playagain(){
    show('game')
    hide('play')
    hide('rulebook')
    pc.innerHTML='';
    //hide next button 
    document.getElementById('nextbtn').style.display="none";
        //fix rules button to original position
        let rulesButtons = document.getElementsByClassName('rules-button');

    
        for (let i = 0; i < rulesButtons.length; i++) {
            rulesButtons[i].style.marginTop = '10vh';
        }
}

function ruleshow(){
    document.getElementById('rulebook').style.display = 'block';
}

function hiderulebook(){
    document.getElementById('rulebook').style.display ='none';
}

//to show element with id
function show(id){
    document.getElementById(id).style = "display:flex; flex-direction: row";
}

//to hide element with id
function hide(id){
    document.getElementById(id).style.display = "none";
}