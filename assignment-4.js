//problem-1
function calculateMoney(ticketSale){
    if (ticketSale <= 0) {
        return 'Invalid Number'
    }
    else{
        return ticketSale*120 - 500 - 50*8;
    }
    
}

//problem-2
function checkName(babyName) {
    
    if (typeof babyName != 'string') {
        return 'invalid'
    }
    
    const checkLetter =  ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastLetter = babyName.toLowerCase().charAt(babyName.length-1);
    if (checkLetter.includes(lastLetter)) {
        return 'Good Name'
        
    } 
    else {
       return "Bad Name" 
    }
}


//problem-3
function checkInvalids(arr){

    const output = [];
    for(const arrays of arr){
     if (typeof arrays === 'number') {
         output.push(arrays);  
       }
    }
    return output
}
// const arra =[29 ,38, 47, 'rifat', 'emon', 'arju', 'sifat', -34];
// console.log(checkInvalids(arra));


//problem-4
function password(obj){
    if (obj.birthYear < 999) {
        return 'invalid'
    }
    else{
        const site = obj.siteName;
 const password = site[0].toUpperCase()+ site.slice(1) + "#" + obj.name + "@" + obj.birthYear;
 return password;
    }
}
const obj = {
    name:'kolimoddin',
    siteName:'google',
    birthYear:1935
}
// const output = password(obj);
// console.log(output);


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
    // const livingCost = 5000;
    // const arr = [1000 , 2000 , 2500];
    // const output = monthlySavings(arr,livingCost);
    // console.log(output);