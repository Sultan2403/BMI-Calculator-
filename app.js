const button = document.getElementById("btn");
const result = document.getElementById("result");

// window.addEventListener("keydown"), function calculate

button.addEventListener("click", function calculate() {
    // Variables for calculations

    const clientName = document.getElementById("name").value;
    const clientWeight = parseFloat(document.getElementById("weight").value);
    const clientHeight = parseFloat(document.getElementById("height").value);
    let isHighRisk;
    let BMI_Category;
    let Health_Advice;

    // Logic and shii
    if (clientName === "" || clientHeight === "" || isNaN(clientHeight) || isNaN(clientWeight) || clientHeight <= 0 || clientWeight <= 0) {
        result.innerHTML = "⚠️ Please enter a valid name, weight and/or height.";
        return;
    }

    const BMI = ((clientWeight) / (clientHeight * clientHeight)).toFixed(2);

    // BMI Category

    if (BMI < 18.5) {
        BMI_Category = "⚠️ Under Weight";
    }

    else if (BMI >= 18.5 && BMI < 25) {
        BMI_Category = "✅ Normal Weight";
    }

    else if (BMI >= 25) {
        BMI_Category = "⚠️ Over Weight";
    }
    else if (BMI >= 30) {
        BMI_Category = "⚠️ Obese"
    }

    // High Health Risk Section

    if (BMI_Category === "⚠️ Over Weight") {
        isHighRisk = "⚠️ Yes";
    }

    else {
        isHighRisk = "✅ No";
    }

    if (isHighRisk === "⚠️ Yes") {
        Health_Advice = `⚠️ Dear ${clientName}, You are overweight and need to lose some weight. Consider heading to the gym! :)`;
    }

    else if (isHighRisk === "✅ No" && BMI_Category === "✅ Normal Weight") {
        Health_Advice = `✅ Dear ${clientName}, You are really healthy. Keep up your current lifestyle! :)`;
    }

    else if (BMI_Category === "⚠️ Under Weight") {
        Health_Advice = `⚠️ Dear ${clientName}, You are under weight and need to lose some weight`;
    }

    else if (BMI_Category === "⚠️ Obese") {
        Health_Advice = `⚠️ Dear ${clientName}, You are obese and should seek immediate medical attention! Call us on +23412345633 and we will help you get back in shape`
    }

    result.innerHTML = `Name: <strong>${clientName}</strong> <br/> 
    BMI : ${BMI} <br/>
    Weight Class: <strong><span id="BMI-Category-Color">${BMI_Category}</span ></strong > <br/>
    High Health Risk: ${isHighRisk}<br/>
    Health Advice: ${Health_Advice}
    `

    let BMI_Color = document.getElementById("BMI-Category-Color")

    if (BMI_Category === "⚠️ Under Weight") {
        BMI_Color.style.color = "rgb(255, 165, 0)";
    }

    else if (BMI_Category === "✅ Normal Weight") {
        BMI_Color.style.color = "rgba(31, 90, 19, 1)";
    }

    else if (BMI_Category === "⚠️ Over Weight") {
        BMI_Color.style.color = "#ff0000";
    }
})


