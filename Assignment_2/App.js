// Question_1:

function Addition(num_1) {
    return function(num_2) {
      return num_1 + num_2;
    }
  }

  const add = Addition(5);
  console.log(add(10)); // Output: 15
  console.log(add(20)); // Output: 25
  