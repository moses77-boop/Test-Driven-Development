function fizzbuzz(number){
    if(number % 5 === 0){
        return "buzz";
    } else if (number % 15 === 0){
        return "fizzbuzz";
    }
    return "fizz";
};

export {fizzbuzz};