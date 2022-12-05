// first

const sec = document.getElementById("registration");
let btnShow = document.querySelectorAll("#show");
let btnCode = document.querySelectorAll("#code");
let title = document.querySelectorAll("h3");

sec.addEventListener("mouseover" , function first(e) {
   btnShow[0].classList.remove("show");
   btnShow[0].classList.add("show1");
   btnCode[0].classList.remove("code");
   btnCode[0].classList.add("code1");
   title[0].classList.add("title");
})

sec.addEventListener("mouseleave" , function leave(){
    btnShow[0].classList.remove("show1");
    btnShow[0].classList.add("show");
    btnCode[0].classList.remove("code1");
   btnCode[0].classList.add("code");
   title[0].classList.remove("title");
})


//two

const sec2 = document.getElementById("registration1");

sec2.addEventListener("mouseover" , function two(e) {
    btnShow[1].classList.remove("show");
    btnShow[1].classList.add("show1");
    btnCode[1].classList.remove("code");
    btnCode[1].classList.add("code1");
    title[1].classList.add("title");
 })
 
 sec2.addEventListener("mouseleave" , function leave2(){
     btnShow[1].classList.remove("show1");
     btnShow[1].classList.add("show");
     btnCode[1].classList.remove("code1");
    btnCode[1].classList.add("code");
    title[1].classList.remove("title");
 })

 //three

 const sec3 = document.getElementById("registration2");

sec3.addEventListener("mouseover" , function three() {
    btnShow[2].classList.remove("show");
    btnShow[2].classList.add("show1");
    btnCode[2].classList.remove("code");
    btnCode[2].classList.add("code1");
    title[2].classList.add("title");
 })
 
 sec3.addEventListener("mouseleave" , function leave3(){
     btnShow[2].classList.remove("show1");
     btnShow[2].classList.add("show");
     btnCode[2].classList.remove("code1");
    btnCode[2].classList.add("code");
    title[2].classList.remove("title");
 })


//four 

const sec4 = document.getElementById("registration3");

sec4.addEventListener("mouseover" , function four() {
    btnShow[3].classList.remove("show");
    btnShow[3].classList.add("show1");
    btnCode[3].classList.remove("code");
    btnCode[3].classList.add("code1");
    title[3].classList.add("title");
 })
 
 
 sec4.addEventListener("mouseleave" , function leave4(){
   btnShow[3].classList.remove("show1");
   btnShow[3].classList.add("show");
   btnCode[3].classList.remove("code1");
  btnCode[3].classList.add("code");
  title[3].classList.remove("title");
})

//five

const sec5 = document.getElementById("registration4");

sec5.addEventListener("mouseover" , function five() {
    btnShow[4].classList.remove("show");
    btnShow[4].classList.add("show1");
    btnCode[4].classList.remove("code");
    btnCode[4].classList.add("code1");
    title[4].classList.add("title");
 })
 
 
 sec5.addEventListener("mouseleave" , function leave5(){
   btnShow[4].classList.remove("show1");
   btnShow[4].classList.add("show");
   btnCode[4].classList.remove("code1");
  btnCode[4].classList.add("code");
  title[4].classList.remove("title");
})

//six

const sec6 = document.getElementById("registration5");

sec6.addEventListener("mouseover" , function six() {
    btnShow[5].classList.remove("show");
    btnShow[5].classList.add("show1");
    btnCode[5].classList.remove("code");
    btnCode[5].classList.add("code1");
    title[5].classList.add("title");
 })
 
 
 sec5.addEventListener("mouseleave" , function leave6(){
   btnShow[5].classList.remove("show1");
   btnShow[5].classList.add("show");
   btnCode[5].classList.remove("code1");
  btnCode[5].classList.add("code");
  title[5].classList.remove("title");
})



 // media 
 console.log(btnCode)