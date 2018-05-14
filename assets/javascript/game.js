$(document).ready(function () {

    var random = Math.floor(Math.random() * 50 + 19);//makes a randon number 
    console.log(random);
    $('#randomNumber').text(random);//shows random number 

    var playerTotal = 0,
        wins1 = 0,
        losses1 = 0,
        
       gem1 = Math.floor(Math.random() * 5 + 1),
        gem2 = Math.floor(Math.random() * 9 + 1),
        gem3 = Math.floor(Math.random() * 10 + 1),
        gem4 = Math.floor(Math.random() * 4 + 2);//random numbers lol dont know thats its going to show =)

    $("#wins").text(wins1);
    $("#losses").text(losses1);


    function reset() {
        random = Math.floor(Math.random() * 50 + 19);
        gem1 = Math.floor(Math.random() * 5 + 1);
        gem2 = Math.floor(Math.random() * 9 + 1);
        gem3 = Math.floor(Math.random() * 10 + 1);
        gem4 = Math.floor(Math.random() * 4 + 2);
        playerTotal = 0;
        $('#finalScore').text(playerTotal);
        $('#randomNumber').text(random);//reset function
    }

    function winner() {
        wins1++;
        $('#wins').text(wins1);
        reset();
        alert('yay');
    }// adds to the winner
    console.log(winner);
    function loser() {
        losses1++;
        $('#losses').text(losses1);
        reset();
    }//add to the loser lol
    console.log(loser);
    $("#one").on('click',function(){
        playerTotal=playerTotal+gem1;
        $('#finalScore').text(playerTotal);
        if(playerTotal==random){
            winner();
        }else if(playerTotal>random){
            loser();
        }
    })
    $("#two").on('click',function(){
        playerTotal=playerTotal+gem2;
        $('#finalScore').text(playerTotal);
        if(playerTotal==random){
            winner();
        }else if(playerTotal>random){
            loser();
        }
    })
    $("#three").on('click',function(){
        playerTotal=playerTotal+gem3;
        $('#finalScore').text(playerTotal);
        if(playerTotal==random){
            winner();
        }else if(playerTotal>random){
            loser();
        }
    })
    $("#four").on('click',function(){
        playerTotal=playerTotal+gem4;
        $('#finalScore').text(playerTotal);
        if(playerTotal==random){
            winner();
        }else if(playerTotal>random){
            loser();
        }
    })






});