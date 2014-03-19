// JavaScript Document
$("h1").hide().fadeIn(3000);
$("#guess_sentence").hide().fadeIn(5000);
$("#guessContainer").hide().fadeIn(5000);

//global variables--computer generated guess, and guess log 
var answer= Math.floor((Math.random() * 100)+1); 
var guessArray=[]; 
var index = 0; 

//user clicks submit button and guess is registered by computer
$("#guess").keyup(function(event){
    if(event.keyCode == 13){
            $("#submit").click();
    }
});

$("#submit").click( function(){

			var guess= +$("#guess").val(); 
			
			guessArray.push(guess);
  
//prints out the answer and user guesses
			$("#answer").text("Answer:" + " "+ answer);
			
			 $("#guessArrayPrint").text("You guessed: " + guessArray.join(', '));



   if ( guess == "" || guess == null || guess < 0 ) {
   	
	alert ("Please input a number from 1 to 100");
	
  	}
  
   
  else if (answer === guess){

       $("#statement").text("Woo Hoo Right Answer!");
       $("#guessContainer").css("background","#FFCC00");
       $("#guessContainer").css("box-shadow","0 0 0 6px #FF9900, 0 0 0 12px #FFFF00");
       $("#guessContainer").effect("bounce",{times:3},"slow");

        }
  else {
       var currentDifference= Math.abs(answer-guess);
		
		   
			//if-else statement comparing current guess range to answer	  
		   if (index === 0)  {   
				 
                if ( currentDifference >=1 && currentDifference <= 10){
               		$("#statement").text("Ouch! You're hot!");
                   $("#guessContainer").css("background","#c0392b");
                   $("#guessContainer").css("box-shadow","0 0 0 6px #e74c3c, 0 0 0 12px #e67e22");
                   $("#guess").val('');
                }
				
             	else if ( currentDifference >=11 && currentDifference <= 20){
               		$("#statement").text("Warmer");
                   $("#guessContainer").css("background","#c0392b");
                   $("#guessContainer").css("box-shadow","0 0 0 6px #e74c3c, 0 0 0 12px #e67e22");
                   $("#guess").val('');
                }
				
           		else if ( currentDifference >=21 && currentDifference <= 40){
               		$("#statement").text("Warm");
                   $("#guessContainer").css("background","#c0392b");
                   $("#guessContainer").css("box-shadow","0 0 0 6px #e74c3c, 0 0 0 12px #e67e22");
                   $("#guess").val('');
                }
				
            	else if ( currentDifference >=41 && currentDifference <= 50){
               		$("#statement").text("Lukewarm");
                   $("#guessContainer").css("background","#c0392b");
                   $("#guessContainer").css("box-shadow","0 0 0 6px #e74c3c, 0 0 0 12px #e67e22");
                   $("#guess").val('');
                }
				
                else {
              		$("#statement").text("Brr! You're cold!");
                  $("#guessContainer").css("background","#2980b9");
                  $("#guessContainer").css("box-shadow","0 0 0 6px #3498db, 0 0 0 12px #3498db");
                  $("#guess").val('');
                }
		   }
		  
		  else { 
        //if-else statement comparing current guess to previous guess
		  	var prevguess= guessArray[index-1];	  
        	console.log(prevguess);
       		var previousDiff = Math.abs(answer- prevguess);
				
				if( previousDiff > currentDifference){
                           $("#statement").text("Warming Up");
                           $("#guessContainer").css("background","#c0392b");
                   		   $("#guessContainer").css("box-shadow","0 0 0 6px #e74c3c, 0 0 0 12px #e67e22");
                   		   $("#guess").val('');
                  }
                           
                else {
                            $("#statement").text("BRRR...Colder");
                            $("#guessContainer").css("background","#75b9e7");
                            $("#guessContainer").css("box-shadow","0 0 0 6px #3498db, 0 0 0 12px #3498db");
                            $("#guess").val('');
				  }
                
				}
    	index++;
   

  		}
              
});

//restarts a new game
$("#newGame").click(function(){

 	window.location.href = "http://cdpn.io/leEqf";
 
}
                    );
  

