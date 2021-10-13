
var readLineSync=require('readline-sync')
var userName=readLineSync.question("What's your name?")
console.log(" welcome " +userName+ " to Do You Know Rishabh?")
var score=0

function play(question,answer){
var userAnswer=readLineSync.question(question)
if(userAnswer.toLowerCase()===answer.toLowerCase())
{
  console.log("right")
score++
}
else{
  console.log("wrong")
}
console.log("current score:",score)
console.log("--------------")
}
var questions=[{
  question:"where do rishabh live",
  answer:"bangalore"
},{question:"which college  do rishabh study",
  answer:"jssateb"},
  {question:"what is rishabh's favourite sports",
  answer:"cricket"},
   {question:"what is rishabh's favourite programming language",
  answer:"javascript"},
  {question:"who is rishabh favouite cricketer",
  answer:"michael clarke"}
]
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("your score is "+score)