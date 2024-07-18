import inquirer from "inquirer";
// ASYNC FUNCTION: this function returns a promise. inside this function we can use await to atop the execution of the function.

let color = async () => {
    let trafficLight = ["Red" , "Yellow" , "Green"];
    console.log(trafficLight);
        console.log("On Red Light STOP🚦");
        console.log("On Yellow Light RADDY🏍");
        console.log("On Green Light GO🏎");
    }
color()