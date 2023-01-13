const input = document.getElementById('input');//to get the input value
const checkBtn = document.getElementById('btn');//to get the btn
const score = document.getElementById('score');//toget score
const highScore = document.getElementById('highScore');//to get highscore
const answer = document.getElementById('answer');//to get answer location to update
const body=document.getElementById('body');
const againbtn=document.getElementById('again');
const content=document.getElementById('content');
const user=prompt(`Enter Your Name.....& Press START to Run`);

againbtn.addEventListener('click',()=>{
    random=Math.floor(Math.random() * 21)//floor for to reduce decimal & 21 is the range i given(0-20)
    input.value="";
    answer.innerText="?"
    score.innerText="20";
    highScore.innerText="0";
    againbtn.innerText="Again!";
    won.innerText="Guess My Number!";
    content.innerText="Start guessing...";
    body.style.backgroundColor="#222";
})//this is for reset all the things to starting position
checkBtn.addEventListener('click',()=>{
    // answer.innerText=input.value;//this is for to append answer to ? box
    const won=document.getElementById('won');
    if(random==input.value){
        answer.innerText=input.value;
        highScore.innerText=score.innerText;
        body.style.backgroundColor="green";
        content.innerText="# Correct Answer !!!";
        if(user!=""){
            won.innerText=`Congrats!! You Won the Match "${user}"`
        }
        else{
            won.innerText="You Won the Match";
        }
    }
    if(random>input.value){
        content.innerText="# Too Low !!";
    }
    if(random<input.value){
        content.innerText="# Too High !!";
    }
    if(score.innerText>0){
        if(input.innerText=''){
            alert("please Enter The Value.....buddy")
        }
        else{
            score.innerText-=1;
        }
    }
    else{
        alert("GAME OVER.....BETTER LUCK NEXT TIME");
    }
    
})

