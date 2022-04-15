let userInput = prompt("Please choose from 1. Deposit Money 2. Withdraw Money");


if(userInput == `Deposit Money`){
    console.log("How much would you like to deposit?")
}

else if (userInput == `Your new balance is`){
    console.log("$100.00")
}

else if (userInput == `Withdraw Money`){
    console.log("How much would you like to withdraw?")
}

else if (userInput == `Your new balance is`){
    console.log("$300")
}

else{
    alert("Positive balance. You got monnneeeyy!!")
    alert("Negative balance. Low Funds")
}
