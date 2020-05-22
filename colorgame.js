var numcolors=6;
var colors=guessrandomcolors(numcolors);
var squares=document.querySelectorAll(".square");
var selectedcolor=selectcolor();
var colorDisplay=document.getElementById('colorDisplay');
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebutton=document.querySelectorAll(".mode");
colorDisplay.textContent=selectedcolor;
for(var i=0;i<modebutton.length;i++)
{
	modebutton[i].addEventListener("click",function(){
       modebutton[0].classList.remove("selected");
       modebutton[1].classList.remove("selected");
       this.classList.add("selected");
       if(this.textContent==="Easy")
       {
       	numcolors=3;
       }else{numcolors=6;}
       reset();
	});
}
function reset()
{
	colors=guessrandomcolors(numcolors);
 selectedcolor=selectcolor();
 colorDisplay.textContent=selectedcolor;
 for(var i=0;i<squares.length;i++)
 {  if(colors[i]){
 	squares[i].style.display="block";
 	squares[i].style.backgroundColor=colors[i];}
 	else
 	{squares[i].style.display="none";
 	}
 }
 h1.style.backgroundColor="steelblue";
 messageDisplay.textContent="";
 resetbutton.textContent="NEW COLORS";
}
resetbutton.addEventListener("click",function(){
 reset();
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
         if(this.style.backgroundColor===selectedcolor)
         {
         	messageDisplay.textContent="correct!!";
         	changeColor(selectedcolor);
         	h1.style.backgroundColor=selectedcolor;
         	resetbutton.textContent="Play again?";
         }
         else{
         	this.style.backgroundColor="#232323";
         	messageDisplay.textContent="try again!";
         }
	});
}

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor= color;
	}
}
function selectcolor()
{
	var selected=Math.floor(Math.random() * colors.length);
	return colors[selected];
}
function guessrandomcolors(num)
{
	var arr=[]; //make an array
    for(i=0;i<num;i++)
    {
       arr.push(randomcolor());
    }
     return arr;
}
function randomcolor()
{
	var r= Math.floor(Math.random() * 256);//select red color
	var g= Math.floor(Math.random() * 256);//select green color
	var b= Math.floor(Math.random() * 256);//select blue color
	return ("rgb("+ r +", "+ g +", "+ b +")");
}
//ANOTHER METHOD OF DOING >>>>>>
// var easybutton=document.querySelector("#Easybtn");
// var hardbutton=document.querySelector("#Hardbtn");
// easybutton.addEventListener("click",function(){
//  hardbutton.classList.remove("selected");
//  easybutton.classList.add("selected");
//  numcolors=3;
//  colors=guessrandomcolors(numcolors);
//  selectedcolor=selectcolor();
//  colorDisplay.textContent=selectedcolor;
//  for(var i=0;i<squares.length;i++)
//  {
//  	if(colors[i])
//  	{
//  		squares[i].style.backgroundColor=colors[i];
//  	}else{
//  		squares[i].style.display="none";
//  	}
//  }
//  messageDisplay.textContent="";
// });
 
// hardbutton.addEventListener("click",function(){
//   hardbutton.classList.add("selected");
//  easybutton.classList.remove("selected");
//  numcolors=6;
//  colors=guessrandomcolors(6);
//  selectedcolor=selectcolor();
//  colorDisplay.textContent=selectedcolor;
//  for(var i=0;i<squares.length;i++)
//  {
//  	squares[i].style.backgroundColor=colors[i];
//  	squares[i].style.display="block";
//  }
// messageDisplay.textContent="";
// });