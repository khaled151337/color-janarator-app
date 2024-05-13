/* loop

- initialization.
- condition.
- increment/decrement.

*/ 
function multiplicationTable (c){
    let a;
 for(a = 1; a <= 10; a++){
    let result = c * a;
    document.write(`${c} * ${a} =` + result , "; "); 
    };
 };

multiplicationTable(5); 


let arry = ["One", "Two", "Three", "I Got", "A", "Cegrette"];

arry.forEach(function (words){
    document.write(words);
});


let count = document.querySelector(".count");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");


inc.addEventListener("click", function() {
   
    if(a >= 5) {
       
       alert("Stop clicking...! You can't purches any more...");
        inc.style.backgroundColor = 'red';
        count.style.backgroundColor = 'red';
    
    } else{
        a++;
        count.innerHTML = a;
        dec.style.backgroundColor = "yellow";
        count.style.backgroundColor = 'antiquewhite';
    }
});

a = 1
dec.addEventListener("click", () => {
    
   

    if(a <= 1){
        count.innerHTML = a;
        dec.style.backgroundColor = "red";
        count.style.backgroundColor = 'red';
        alert("Stop clicking...! You have purchese atlist 1 pice...");
    } else{
        a--;
        count.innerHTML = a;
        inc.style.backgroundColor = 'yellow';
        count.style.backgroundColor = 'antiquewhite';
    }
});


let colorBox = document.querySelector(".color_box");
let button = document.querySelector(".chang_color");

button.addEventListener("click", function(){
   let red = Math.round(Math.random() * 255);
   let green = Math.round(Math.random() * 255);
   let blue = Math.round(Math.random() * 255);
   
   colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
});


//Range control rgb(red, green, blue);

function myColor() {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;

    let color = 'rgb('+ red +','+ green +','+ blue +')';
    document.body.style.backgroundColor = color;
    document.getElementById('box').value = color;
}

document.getElementById('red').addEventListener('input', myColor);
document.getElementById('green').addEventListener('input', myColor);
document.getElementById('blue').addEventListener('input', myColor);