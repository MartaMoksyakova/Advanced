// function getAdder() {
//      let result = 0; 
//      return function(x) {
//           result += x; 
//           console.log(result)
//          } 
//          return result;
//     };

// let sum = getAdder();

// sum(3)
// sum(5)
// sum(228)

//--------------2 варіант----------
function getAdder() {
    let result = 0; 
    function adder(x) {
         result += x; 
         console.log(result)
        } 
        return adder;
   };

let sum = getAdder();

sum(3)
sum(5)
sum(228)
