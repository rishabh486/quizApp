
var readLineSync=require('readline-sync')
var userName=readLineSync.question("What's your name?")
console.log(" welcome " +userName+ " to Do You Know Rishabh?")
var score=0

function play(question,answer){
var userAnswer=readLineSync.question(question)
if(userAnswer===answer)
{
score++
}
else{}
}
var questions=[{
  question:"where do u live",
  answer:"bangalore"
},{question:"which college  do u study",
  answer:"bangalore"},
  {question:"where do u live",
  answer:"bangalore"}
]
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("your score is "+score)