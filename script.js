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
{question:"Capital of Maharashtra?",options:["Nagpur","Mumbai","Pune","Nashik"],answer:"Mumbai"},
{question:"Capital of Uttar Pradesh?",options:["Kanpur","Lucknow","Agra","Varanasi"],answer:"Lucknow"},
{question:"Capital of Bihar?",options:["Patna","Gaya","Muzaffarpur","Bhagalpur"],answer:"Patna"},
{question:"Capital of Punjab?",options:["Ludhiana","Amritsar","Chandigarh","Patiala"],answer:"Chandigarh"},
{question:"Capital of Haryana?",options:["Gurugram","Faridabad","Chandigarh","Panipat"],answer:"Chandigarh"},
{question:"Capital of Assam?",options:["Dispur","Guwahati","Silchar","Tezpur"],answer:"Dispur"},
{question:"Capital of Kerala?",options:["Kochi","Kozhikode","Thiruvananthapuram","Kannur"],answer:"Thiruvananthapuram"},
{question:"Capital of Tamil Nadu?",options:["Madurai","Chennai","Coimbatore","Salem"],answer:"Chennai"},
{question:"Capital of Karnataka?",options:["Mysuru","Hubli","Bengaluru","Mangalore"],answer:"Bengaluru"},
{question:"Capital of Telangana?",options:["Warangal","Hyderabad","Nizamabad","Karimnagar"],answer:"Hyderabad"},
{question:"Capital of Andhra Pradesh?",options:["Amaravati","Visakhapatnam","Vijayawada","Kurnool"],answer:"Amaravati"},
{question:"Capital of Odisha?",options:["Cuttack","Puri","Bhubaneswar","Rourkela"],answer:"Bhubaneswar"},
{question:"Capital of Chhattisgarh?",options:["Bilaspur","Raipur","Durg","Korba"],answer:"Raipur"},
{question:"Capital of Jharkhand?",options:["Ranchi","Jamshedpur","Dhanbad","Bokaro"],answer:"Ranchi"},
{question:"Capital of Madhya Pradesh?",options:["Indore","Bhopal","Gwalior","Jabalpur"],answer:"Bhopal"},
{question:"Capital of Goa?",options:["Panaji","Margao","Vasco","Mapusa"],answer:"Panaji"}
];{question:"Capital of Sikkim?",options:["Gangtok","Namchi","Gyalshing","Pelling"],answer:"Gangtok"},
{question:"Capital of Arunachal Pradesh?",options:["Itanagar","Tawang","Pasighat","Ziro"],answer:"Itanagar"},
{question:"Capital of Nagaland?",options:["Dimapur","Kohima","Mokokchung","Wokha"],answer:"Kohima"},
{question:"Capital of Manipur?",options:["Imphal","Thoubal","Churachandpur","Bishnupur"],answer:"Imphal"},
{question:"Capital of Mizoram?",options:["Aizawl","Lunglei","Champhai","Kolasib"],answer:"Aizawl"},
{question:"Capital of Tripura?",options:["Agartala","Udaipur","Dharmanagar","Kailashahar"],answer:"Agartala"},
{question:"Capital of Meghalaya?",options:["Shillong","Tura","Jowai","Nongstoin"],answer:"Shillong"},
{question:"Capital of Himachal Pradesh?",options:["Shimla","Manali","Dharamshala","Solan"],answer:"Shimla"},
{question:"Capital of Uttarakhand?",options:["Dehradun","Haridwar","Nainital","Rishikesh"],answer:"Dehradun"},
{question:"Capital of Jammu and Kashmir?",options:["Srinagar","Jammu","Leh","Anantnag"],answer:"Srinagar"},
{question:"Capital of Ladakh?",options:["Leh","Kargil","Srinagar","Jammu"],answer:"Leh"},
{question:"Capital of West Bengal?",options:["Kolkata","Howrah","Durgapur","Siliguri"],answer:"Kolkata"},
{question:"Capital of Delhi?",options:["New Delhi","Delhi","Noida","Gurugram"],answer:"New Delhi"},
{question:"National Animal of India?",options:["Tiger","Lion","Elephant","Leopard"],answer:"Tiger"},
{question:"National Bird of India?",options:["Peacock","Parrot","Sparrow","Crow"],answer:"Peacock"},
{question:"National Flower of India?",options:["Rose","Lotus","Sunflower","Lily"],answer:"Lotus"},
{question:"National Fruit of India?",options:["Apple","Banana","Mango","Orange"],answer:"Mango"},
{question:"National Tree of India?",options:["Neem","Banyan","Peepal","Mango"],answer:"Banyan"},
{question:"National River of India?",options:["Yamuna","Ganga","Godavari","Narmada"],answer:"Ganga"},
{question:"Which is the largest river in India?",options:["Ganga","Brahmaputra","Godavari","Krishna"],answer:"Ganga"},
{question:"Which state has the largest population?",options:["Maharashtra","Uttar Pradesh","Bihar","Rajasthan"],answer:"Uttar Pradesh"},
{question:"Which state is famous for Backwaters?",options:["Kerala","Goa","Tamil Nadu","Odisha"],answer:"Kerala"},
{question:"Which state is known for the Gir Lion?",options:["Gujarat","Rajasthan","Madhya Pradesh","Punjab"],answer:"Gujarat"},
{question:"Which city is known as the City of Lakes?",options:["Udaipur","Jaipur","Bhopal","Nainital"],answer:"Udaipur"},
{question:"Which city is called the Pink City?",options:["Jaipur","Jodhpur","Agra","Lucknow"],answer:"Jaipur"}

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