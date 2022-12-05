let html = document.getElementById("html");
let css = document.getElementById("css");
let b5 = document.getElementById("b5");
let js = document.getElementById("js");
let rs = document.getElementById("rs");
let wp = document.getElementById("wp");
let php = document.getElementById("php");

// HTML

html.addEventListener("mouseover" , function(){
    html.style.backgroundImage = "url(images/html.jpg)";
    html.style.backgroundRepeat = "no-repeat";
    html.style.backgroundPosition = "center";
    html.style.backgroundSize = "cover";
    html.style.transition = "ease-in 2s"
})


// CSS

css.addEventListener("mouseover" , function(){
    css.style.backgroundImage = "url(images/css.png)";
    css.style.backgroundRepeat = "no-repeat";
    css.style.backgroundPosition = "center";
    css.style.backgroundSize = "cover";
    css.style.transition = "ease-in 2s"
})


//boostrap

b5.addEventListener("mouseover" , function(){
    b5.style.backgroundImage = "url(images/boostrap.jpg)";
    b5.style.backgroundRepeat = "no-repeat";
    b5.style.backgroundPosition = "center";
    b5.style.backgroundSize = "cover";
    b5.style.transition = "ease-in 2s"
})


//js javascript

js.addEventListener("mouseover" , function(){
    js.style.backgroundImage = "url(images/js.png";
    js.style.backgroundRepeat = "no-repeat";
    js.style.backgroundPosition = "center";
    js.style.backgroundSize = "250px";
    js.style.transition = "ease-in 2s"
})


//rs responsive

rs.addEventListener("mouseover" , function(){
    rs.style.backgroundImage = "url(images/responsive.jpg";
    rs.style.backgroundRepeat = "no-repeat";
    rs.style.backgroundPosition = "center";
    rs.style.backgroundSize = "260px";
    rs.style.transition = "ease-in 2s"
})

//wordpress

wp.addEventListener("mouseover" , function(){
    wp.style.backgroundImage = "url(images/wordpress.png";
    wp.style.backgroundRepeat = "no-repeat";
    wp.style.backgroundPosition = "center";
    wp.style.backgroundSize = "230px";
    wp.style.transition = "ease-in 2s"
})

//php

php.addEventListener("mouseover" , function(){
    php.style.backgroundImage = "url(images/php.png";
    php.style.backgroundRepeat = "no-repeat";
    php.style.backgroundPosition = "center";
    php.style.backgroundSize = "270px";
    php.style.transition = "ease-in 2s"
})



// studii
//change bg at studied

function changeBg(){

const images = [
    "url(images/1.jpg)",
    "url(images/2.jpg)",
    "url(images/3.jpg)",
    "url(images/4.jpg)",
    "url(images/5.jpg)",
]

const studied = document.getElementById("studii");
const bg = images[Math.floor(Math.random() * images.length)];

studied.style.backgroundImage = bg;
};

setInterval(changeBg , 1500);

