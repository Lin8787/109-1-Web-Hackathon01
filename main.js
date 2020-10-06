var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'









//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}
function type(){

}

function add(){
	var input1 = document.getElementById("cal-input").value;
	document.getElementById("demo").innerHTML = input1;
}
function click(){
	//var elements = document.getElementsByClassName("date"); // get all elements
	//for(var i = 0; i < elements.length; i++){
	//	elements[i].style.backgroundColor = "black";
	//}
	document.getElementByClassName("date").style.color = "white";
}
var tds = document.querySelectorAll('.Cal-content-row table tr td');
tds.forEach(function(td){
  td.addEventListener('click', handleTDClick);
});

function handleTDClick(){
	document.querySelector("date").style.backgroundColor = "black";
}

//var bac=document.querySelector("button");
    /* Added the below line because default output of 
       `document.body.style.background` is "" . Therefore we 
        need to initialize it first .
    */
/*    document.td.style.background="white"; 
    bac.addEventListener("click", function(){
    if (document.td.style.background=="white"){
        document.td.style.background="black";
    }else if(document.td.style.background=="black"){
        document.td.style.background="white";
    }

    });*/
document.getElementById("cal-button").addEventListener("click", function() {
	var x =document.getElementById("cal-input").value; 
	document.getElementById("demo").innerHTML = x;
});
//[...document.getElementsByTagName("td")].forEach(td => td.addEventListener("click", s => s.target.style.color= "white"))
[...document.getElementsByTagName("td")].forEach(td => td.addEventListener("click", e => e.target.style.background= "black"))
//[...document.getElementsByTagName("td")].forEach(td => td.addEventListener("click", e => e.target.style.color= "white"))



