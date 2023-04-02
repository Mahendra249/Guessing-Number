var msg1= document.getElementById("message1");
var msg2= document.getElementById("message2");
var msg3= document.getElementById("message3");
let clear = document.querySelector('#btn-red');
var buttons = document.querySelectorAll('.btn');
let restart = document.getElementById('btn-blue');
var answer =Math.floor(Math.random()*100) +1;
var no_of_guesses =0;
var guessed_nums=[];


buttons.forEach(function(button){
    var screen= document.getElementById("guess");
    button.addEventListener('click', function(e) {
        let value= e.target.dataset.num;
        screen.value += value;
    })
})

clear.addEventListener('click', function(e){
    var screen= document.getElementById("guess");
    screen.value= " ";
 })

 function replay(){
    window.location.reload();
 }



function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess <1 || user_guess > 100){
        alert("Please Enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses +=1;
        
        var s = document.getElementById("guess");
        if(user_guess < answer){
            msg1.textContent="Your Guess is too low";
            msg1.style.color="rgb(5 223 247)";
            msg1.style.fontSize="20px";
            s.style.background="rgb(5 223 247)";
            msg2.textContent="No. of Guesses : " + no_of_guesses;
            msg3.textContent=" Guessed numbers are : " + guessed_nums;
        }
       else if(user_guess  >answer){
            msg1.textContent="Your Guess is too High";
            msg1.style.color="yellow";
            msg1.style.fontSize="20px";
            s.style.background="yellow";
            msg2.textContent="No. of Guesses : " + no_of_guesses;
            msg3.textContent=" Guessed numbers are : " + guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent="Wow You are win!";
            msg1.style.color="rgb(9 241 52)";
            msg1.style.fontSize="20px";
            s.style.background="rgb(9 241 52)";
            msg2.textContent="The number was : " + answer;
            msg3.textContent=" You are Guessed it in  : " + no_of_guesses + " Guesses";
            
        }
    }
}
