// alert("Enter the name of the Player1");
let player1=prompt("Enter the name of the player 1");
document.querySelectorAll(".name")[0].innerHTML=player1;
let player2 = prompt("Enter the name of the player 2");
document.querySelectorAll(".name")[1].innerHTML=player2;



var n1 = Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;
// console.log(n);
var n2 = Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;
if(n1==1)
{
    document.querySelectorAll("img ")[0].setAttribute("src","dice1.png");
}
if(n1==2)
{
    document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
}
if(n1==3)
{
    document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
}

if(n1==4)
{
    document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
}

if(n1==5)
{
    document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
}

if(n1==6)
{
    document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
}

if(n2==1)
{
    document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
}
if(n2==2)
{
    document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
}
if(n2==3)
{
    document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
}
if(n2==4)
{
    document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
}
if(n2==5)
{
    document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
}
if(n2==6)
{
    document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
}

if(n1>n2)
{
    document.querySelectorAll(".header h1")[1].innerHTML=player1+ " Wins the Game 🏆";
}
if(n2>n1)
{
    document.querySelectorAll(".header h1")[1].innerHTML=player2+" Wins the Game 🏆";
}
if(n1==n2)
{
    document.querySelectorAll(".header h1")[1].innerHTML="Oppss!!! Draw ";
}