var rand1= Math.floor((Math.random()*6)+1)
var rand2= Math.floor((Math.random()*6)+1)

document.querySelectorAll("img")[0].setAttribute("src","dice"+rand1+".png")
document.getElementById("img2").src="dice"+rand2+".png"

if (rand1>rand2){
document.querySelector("h1").innerHTML="🚩player 1 won the game"
}
else if(rand2>rand1){
  document.querySelector("h1").innerHTML="🚩Player 2 won the game"
}
else{
  document.querySelector("h1").innerHTML="Draw Match"
}