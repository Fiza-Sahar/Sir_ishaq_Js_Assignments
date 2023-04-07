// Question_01


let num_1 = prompt("Enter the first number");
let num_2 = prompt("Enter the first number");


if (num_1 > num_2) {
  console.log(num_1 + " is larger than  " + num_2);

} 
else if (num_2 > num_1) {
  console.log(num_2 + " is larger than " + num_1);

} 
else {
  console.log("Both numbers are equal");
}

// Question_02:


let num = prompt("Enter a number:"); 

if (num > 0) {
  alert( " The sign of number "  + num + " is +");
} 

else if (num < 0) {
    alert( " The sign of number "  + num + " is -");
} 
else {
  alert( num +  " is neither positive nor negative");
}

// Question_03:

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));
let num4 = Number(prompt("Enter the fourth number:"));
let num5 = Number(prompt("Enter the fifth number:"));

let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}
if (num4 > largest) {
  largest = num4;
}
if (num5 > largest) {
  largest = num5;
}
console.log("The largest number is: " + largest);



// Question_04:

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
  

// Question_05:

const Input = prompt("Enter your number:");
if (Input >= 100) {
  grade = "A";
} else if (Input >= 90) {
  grade = "B";
} else if (Input >= 80) {
  grade = "C";
} else if (Input >= 70) {
  grade = "D";
} else if (Input >= 60) {
  grade = "F";
} 
alert("Your grade is " + grade);

// Question_06:

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

// Question_07:
  
let  x, y, z;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    z = z + (" * ");        
      }
 console.log(z);
 z = '';    
}
