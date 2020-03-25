
document.addEventListener("click",function(){

  // SETTING FIRST DICE IMAGE DYNAMIC
  var randomNumber1=Math.floor(Math.random()*6)+1;
  var path1="images/dice"+randomNumber1+".png";
  document.getElementsByClassName("img1")[0].setAttribute("src",path1);

  // SETTING SECOND DICE IMAGE DYNAMIC
  var randomNumber2=Math.floor(Math.random()*6)+1;
  var path2="images/dice"+randomNumber2+".png";
  document.getElementsByClassName("img2")[0].setAttribute("src",path2);

  // COMPARING BOTH RANDOM NUMBER
  if(randomNumber1>randomNumber2)
     document.querySelector("h1").innerHTML="🚩Player 1 wins !";
  else if (randomNumber1<randomNumber2)
     document.querySelector("h1").innerHTML="Player 2 wins !🚩";
  else
     document.querySelector("h1").innerHTML="Draw !";

  document.querySelector("button").textContent="Play again";
})
