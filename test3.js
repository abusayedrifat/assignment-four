
//problem-5
function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr)) {
        const  arrays = [];
        for (const array of arr) {
            if (array < 3000) {
                arrays.push(array);
            }
            else if(array >= 3000){
                const finalAmount = array - array*0.2;
                arrays.push(finalAmount)
            }
        }
        let sum = 0
        for (const arra of arrays) {
            sum = sum+arra;
        }
        const savings = sum -livingCost
    if (savings > 0) {
        return savings
    } 
    else {
     return 'earn more'   
      }
    } 
    
    else {
        typeof livingCost !== 'number'
        return 'invalid input'
    }
}
    const livingCost = 'asd';
    const arr = [900 , 2700 , 3400];
    const output = monthlySavings(arr,livingCost);
    console.log(output);