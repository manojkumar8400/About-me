//                A Quiz Game


var readline = require('readline-sync');
score = 0

//  Welcome Code

var userName=readline.question("Enter your name ")
console.log("hello ",userName,",How know you about Manoj Kumar:")

// Use function & if else

function play(question,answer){
    var Answer=readline.question(question );
    if (Answer.toUpperCase()===answer.toUpperCase()){
        console.log('You are right')
        score+=1
    }else{
        console.log('You are wrong')
    }
};

// Data of Highscores

var highScore={
  'Bipin':5,
}

// Call Function

play("Where i am from?  \n","jhansi")

play("My favourite Avenger's superhero ?  \n","Ironman")

play("Where i am doing study ? \n","dharamshala")

play("What is he doing in Dharamshala ?  \n","Study")

play("which is my bollywood favorite movie ? \n","3 idiots")

// For Print Output

console.log(userName,"Your final Score is ",score)
console.log("High Score -:",highScore["Bipin"])

