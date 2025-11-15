console.log("Hello world");

const display = document.getElementById("display");


function calcnum(input) {
   
//  const button = document.getElementsByClassName("button")

//   let one = 1;
//   let two = 2;
//   let three = 3;
//   let four = 4;
//   let five = 5;
//   let six = 6;
//   let seven = 7;
//   let eight = 8;
//   let nine = 9;
//   let zero = 0;



 
 display.value += input;

  console.log("number input");
}

function operation(input) {

  display.value += input;

  

    console.log("operation input");
}

function clearDisplay() {
  document.getElementById("myForm").reset();

  console.log("display cleared");
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value= 'Villa'
    }
}



// *TODO*
// - pretty CSS
// - evil calc if time (randomize numbers) - check!