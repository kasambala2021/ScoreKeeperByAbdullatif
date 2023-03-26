const  scoreboard = document.querySelector('#scoreboard');
const playerOne = document.querySelector('#p1')
const playerTwo = document.querySelector('#p2')
const pp1 = document.querySelector('#playerOneScore')
const pp2 = document.querySelector('#playerTwoScore')
const options = document.querySelectorAll('option');
const rst = document.querySelector('#resetbutton');
let finalscore;
let score1 = parseInt(pp1.innerText);
let score2 = parseInt(pp2.innerText);
disableButtons()

scoreboard.addEventListener('change',function(){
    try{
        finalscore = options[scoreboard.value].innerText
        scoreboard.disabled=true;
        enableButtons()}
    catch(e){
        alert('Enter appropriate value of PLAY UP TO')
    }

})
rst.addEventListener('click',function(){
    scoreboard.value = 'Total points'
    scoreboard.disabled=false;
    
    disableButtons()
    clearValues()
})
playerOne.addEventListener('click',function(){
    score1 +=1;
    pp1.innerText = score1.toString();
    console.log(score1.toString())
    winner()
})
playerTwo.addEventListener('click',function(){
    score2 +=1;
    pp2.innerText = score2.toString();
    console.log(pp2.innerText)
    winner()
})
function winner(){
    if(score1 == finalscore){
        pp1.innerText = 'winner'
        pp2.classList.replace("text-success","text-danger")
        disableButtons()
    }
    else if(score2 == finalscore){
        pp2.innerText = 'winner'
        pp1.classList.replace("text-primary","text-danger")
        disableButtons()
    }
    else{
        
    }
}
function disableButtons(){
    playerOne.disabled = true;
    playerTwo.disabled = true;
}
function enableButtons(){
    playerOne.disabled = false;
    playerTwo.disabled = false;
}
function clearValues(){
    score1 = 0;
    pp1.innerText = score1
    pp1.classList.replace("text-danger","text-primary")
    score2 = 0;
    pp2.innerText = score2
    pp2.classList.replace("text-danger","text-success")
}
