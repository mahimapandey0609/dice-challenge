var n;
var n1;
document.querySelector("button").addEventListener("click",dice);
function dice() {
    player1();
    player2();
    if (n > n1) {
        document.querySelector("h1").innerHTML = "Player 1 winner";

    }
    else if(n<n1){
        document.querySelector("h1").innerHTML = "Player 2 winner";
    }
    else{
        document.querySelector("h1").innerHTML = "game draw";
    }


}
function player1(){

     n = Math.random();
    n=n*6;
    n= Math.floor(n)+1;
    
    if(n===1){
        document.querySelector(".img1").setAttribute("src", " images.png")
    }
    else if(n==2){
        document.querySelector(".img1").setAttribute("src","images (1).png");
    }
    else if(n==3){
        document.querySelector(".img1").setAttribute("src","download (1).png");
    }
    else if(n==4){
        document.querySelector(".img1").setAttribute("src","download (2).png");
    }
    else if(n==5){
        document.querySelector(".img1").setAttribute("src","images (2).png");
    }
    else{
        document.querySelector(".img1").setAttribute("src","download.png");
    }   
}
 
    function player2() {
     n1 = Math.random();
    n1=n1*6;
    n1= Math.floor(n1)+1;
    if(n1===1){
        document.querySelector(".img2").setAttribute("src"," images.png")
    }
    else if(n1==2){
        document.querySelector(".img2").setAttribute("src","images (1).png");
    }
    else if(n1==3){
        document.querySelector(".img2").setAttribute("src","download (1).png");
    }
    else if(n1==4){
        document.querySelector(".img2").setAttribute("src","download (2).png");
    }
    else if(n1==5){
        document.querySelector(".img2").setAttribute("src","images (2).png");
    }
    else{
        document.querySelector(".img2").setAttribute("src","download.png");
    }   
    
}

