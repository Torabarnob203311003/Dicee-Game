 let randomNumber1 =Math.floor(Math.random()*6)+1;// thats will generate random number 1-5

 let randomDiceeImage = "dice"  + randomNumber1 + ".png";// dicee1.png - dicee6.png

 let randomImageSource = "images/" + randomDiceeImage;  //src/dicee1.png - src/dicee6.png

 let image1 = document.querySelectorAll("img")[0];
 
 image1.setAttribute("src", randomImageSource);



  let randomNumber2 = Math.floor(Math.random()*6) +1 ;

 
 
  let randomImageSource2 = "images/dice" + randomNumber2  + ".png"  ;

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//  let randomNumber1 = Math.floor(Math.random()*6) +1 ;

//  let randomImageSource = "images/dice" +randomNumber1 + ".png";
//   document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);



//    let randomNumbers2 = Math.floor(Math.random()*6) + 1;
//    let randomImageSource2 = "images/dice"  +randomNumbers2  + ".png";
//    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

 if( randomNumber1 > randomNumber2){
     document.querySelector("h1").innerHTML = "🚩player 1 wins!"

 }
 else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🚩player 2 wins!"
 }
 else{
  document.querySelector("h1").innerHTML = "Draw!"
 }