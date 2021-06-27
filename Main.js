var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");
var slider4 = document.querySelector(".slider4");
var slider5 = document.querySelector(".slider5");
var slider6 = document.querySelector(".slider6");
var value1 = document.querySelector("#value1");
var value2 = document.querySelector("#value2");
var value3 = document.querySelector("#value3");
var value4 = document.querySelector("#value4");
var value5 = document.querySelector("#value5");
var value6 = document.querySelector("#value6");


value1.innerHTML = slider1.value;
slider1.oninput = function() {
    value1.innerHTML = this.value;
}

value2.innerHTML = slider2.value;
slider2.oninput = function() {
    value2.innerHTML = this.value;
}

value3.innerHTML = slider3.value;
slider3.oninput = function() {
    value3.innerHTML = this.value;
}

value4.innerHTML = slider4.value;
slider4.oninput = function() {
    value4.innerHTML = this.value;
}

value5.innerHTML = slider5.value;
slider5.oninput = function() {
    value5.innerHTML = this.value;
}

value6.innerHTML = slider6.value;
slider6.oninput = function() {
    value6.innerHTML = this.value;
}
