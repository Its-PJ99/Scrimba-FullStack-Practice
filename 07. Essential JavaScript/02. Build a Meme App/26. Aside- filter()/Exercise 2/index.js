const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function(age){
/*
Challenge:
1. Get rid of the if statement and reduce the 
   logic in this function to just one line 
   of code.
*/
    if (age >= 18){
        return true
    }
})

console.log(adults)