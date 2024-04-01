import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "myPin",
        message: "Enter You Pin Code",
        type: "number"
    }
]);
if (pinAnswer.myPin === myPin) {
    console.log("correct pin code!!!");
    let operatorAns = await inquirer.prompt([
        {
            message: "What you want to Do?",
            type: "list",
            name: "operator",
            choices: ["withdraw", "check balance"],
        }
    ]);
    if (operatorAns.operator === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter You Amount",
                type: "number"
            }
        ]);
        //=, -=, +=
        myBalance -= amountAns.amount;
        console.log("Thank You For Using MBBS Bank ATM, Your Reamining Balance is:" + myBalance);
    }
    else if (operatorAns.operator === "check balance") {
        console.log("Your Current Balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code");
}
