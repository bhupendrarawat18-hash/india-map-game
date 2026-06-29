const questions = [
{question:"Which state is called the Pink City?",options:["Rajasthan","Punjab","Kerala","Gujarat"],answer:"Rajasthan"},
{question:"Capital of India?",options:["Mumbai","Delhi","Jaipur","Lucknow"],answer:"Delhi"},
{question:"Which state has the Taj Mahal?",options:["Bihar","Uttar Pradesh","Rajasthan","Madhya Pradesh"],answer:"Uttar Pradesh"},
{question:"Which state is famous for Tea Gardens?",options:["Assam","Goa","Punjab","Haryana"],answer:"Assam"},
{question:"Which state is known as God's Own Country?",options:["Kerala","Goa","Punjab","Sikkim"],answer:"Kerala"},
{question:"Largest state of India?",options:["Rajasthan","UP","MP","Gujarat"],answer:"Rajasthan"},
{question:"Smallest state of India?",options:["Goa","Sikkim","Punjab","Tripura"],answer:"Goa"},
{question:"Capital of Rajasthan?",options:["Jaipur","Jodhpur","Udaipur","Ajmer"],answer:"Jaipur"},
{question:"Capital of Gujarat?",options:["Ahmedabad","Gandhinagar","Surat","Rajkot"],answer:"Gandhinagar"},
{question:"Capital of Maharashtra?",options:["Nagpur","Mumbai","Pune","Nashik"],answer:"Mumbai"}
];

let score=0;
let current=0;

questions.sort(()=>Math.random()-0.5);

function loadQuestion(){

document.getElementById("question").innerHTML=questions[current].question;

let btn=document.querySelectorAll("#options button");

for(let i=0;i<4;i++){

btn[i].innerHTML=questions[current].options[i];

btn[i].onclick=function(){

checkAnswer(questions[current].options[i]);

}

}

document.getElementById("result").innerHTML="";

}

function checkAnswer(ans){

let buttons=document.querySelectorAll("#options button");

buttons.forEach(b=>b.disabled=true);

if(ans===questions[current].answer){

score++;

document.getElementById("result").innerHTML="✅ Correct";

}else{

document.getElementById("result").innerHTML="❌ Correct Answer : "+questions[current].answer;

}

document.getElementById("score").innerHTML=score;

}

function nextQuestion(){

current++;

let buttons=document.querySelectorAll("#options button");

buttons.forEach(b=>b.disabled=false);

if(current>=questions.length){

document.getElementById("question").innerHTML="🎉 Quiz Finished";

document.getElementById("options").innerHTML="";

document.getElementById("result").innerHTML="Final Score : "+score+" / "+questions.length+"<br><br><button onclick='location.reload()'>Restart Quiz</button>";

return;

}

loadQuestion();

}

loadQuestion();