let randomNumber = Math.ceil(Math.random()*6);
let randomImage = "dice" + randomNumber + ".png";
let imagesource = "./images/"+randomImage;
let img= document.querySelectorAll("img")[0];
img.setAttribute("src" , imagesource );


let randomNumber2 = Math.ceil(Math.random()*6); 
let randomImage2 = "dice" + randomNumber2 + ".png";
let imagesource2 = "./images/"+randomImage2;
let img2= document.querySelectorAll("img")[1];
img2.setAttribute("src" , imagesource2 );


if(randomNumber>randomNumber2){
    console.log(document.getElementsByTagName("h1")[0]);
    document.getElementsByTagName("h1")[0].textContent="player 1 Wins 🚩";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").textContent="player 2 Wins 🚩";
}
else{
    document.querySelector("h1").textContent="Draw";
}

       