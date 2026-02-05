var butoni1 = document.getElementById("btn1");

butoni1.onclick = function (){
    alert("You clicked the button!");
}

var butoni1 = document.querySelector('button');

butoni1.onclick = function() {
    alert('hello');
}

butoni1.addEventListener


    alert('hello');


ourElement.addEventListner('click', funksioni1);
ourElement.addEventListner('click', funksioni2);

var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');

button2.onmouseover = function(){
    alert('hello');
}

button3.onmouseleave = function(){
    alert('goodbye');
}

button4.onmousewheel = function(){
    alert('rotate');
}

var v_button = document.getElementById("btn1");

v_button.onclick = function(){
    v_text.style.color = "red";
    v_text.style.backgroundcolor = "lightgrey";
    v_text.style.textalign = "center";
    v_text.style.fontsize = "100px";
    v_text.style.padding = "20px";
}

v_text.onmouseover = function(){
    v_text.style.cssText = "color : red; background-color: lightgrey; padding: 20px; font-size:100px;"
}

v_text.onclick = function(){
    v_text.setAttribute("class", "test");
}