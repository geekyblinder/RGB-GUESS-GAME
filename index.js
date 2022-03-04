
var activebutton=document.querySelectorAll(".hard");
var boxx=document.querySelectorAll(".box");
var numb=6;
var colcontainer=[];
var head=document.querySelector(".header");
var r=document.querySelector("#result");
init();
var m;
function init()
{
set_color(numb);
if(colcontainer.length===6)
{
m=colcontainer[Math.floor(Math.random()*6)];
}
else
{
    m=colcontainer[Math.floor(Math.random()*3)];   
}
document.getElementById("rgb").innerHTML=m;
selectbox();
set_lvl();
}
function selectbox()
{
    for(var i=0;i<numb;i++)
    { 
    boxx[i].addEventListener("click",function(){
        var selectedbox=this.style.backgroundColor;
        if(selectedbox === m){
            r.textContent="Correct!";
            for(var j=0;j<numb;j++)
            {
            boxx[j].style.backgroundColor=m;}
            head.style.backgroundColor=m;
            document.querySelector(".new").textContent="Play Again";
                        }
            else{
                this.style.backgroundColor="#232323";
                r.textContent="TRY AGAIN";
            }
                        
        });
}}
function set_lvl()
{
    document.querySelector(".new").addEventListener("click",function(){
   set_color(numb);
   default_setting();
   m=colcontainer[Math.floor(Math.random()*numb)];
document.getElementById("rgb").innerHTML=m;
});

document.querySelector(".easy").addEventListener("click",function(){
    easylvl();
    default_setting();
     m=colcontainer[Math.floor(Math.random()*3)];
document.getElementById("rgb").innerHTML=m;
numb=3;
});

document.querySelector(".challenge").addEventListener("click",function(){
    hardlvl();
    default_setting();
    m=colcontainer[Math.floor(Math.random()*6)];
document.getElementById("rgb").innerHTML=m;
numb=6;
});


function easylvl()
{
    activebutton[0].style.backgroundColor="#232323";
    activebutton[1].style.backgroundColor="#232323";
    activebutton[2].style.backgroundColor="#232323";
    set_color(3);   
}


function hardlvl()
{
 set_color(6);
}}
function default_setting(){
    document.querySelector(".new").textContent="New Colors";
    document.querySelector(".header").style.backgroundColor="#008080";
    r.textContent="";
}
function set_color(t)
{
for(var i=0;i<t;i++)
{
var rgb_color1 =Math.floor(Math.random()*256);
var rgb_color2 =Math.floor(Math.random()*256);
var rgb_color3 =Math.floor(Math.random()*256);
var col = "rgb(" + rgb_color1 + ", " + rgb_color2 + ", " + rgb_color3 + ")";
colcontainer[i]=col;
boxx[i].style.backgroundColor = col;}
}
