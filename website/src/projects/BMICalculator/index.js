window.onload = () => {
    let button = document.querySelector("#calc_button");

        //bmi calculator
        button.addEventListener("click", calculateBMI);
};

function calculateBMI() {   
    //height input
    let height = parseInt(document.querySelector("#height").value);

    //weight input
    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid height.";

    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid weight.";

        var bmi = weight / ((height * height) / 10000).toFixed(0);
    if (bmi <=18.5) {
        result.innerHTML = "Your BMI is " + bmi + ", so you are underweight.";
        }
        
    if (bmi > 18.5 && bmi <= 24.9) {
        result.innerHTML = "Your BMI is " + bmi + ", so you have a normal weight.";
        }
    else if (bmi > 24.9) {
        result.innerHTML =  "Your BMI is " + bmi + ", so you are overweight.";
        }
}