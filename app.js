const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    // Variables for calculations

    const clientName = document.getElementById("name").value;
    const clientWeight = parseFloat(document.getElementById("weight").value);
    const clientHeight = parseFloat(document.getElementById("height").value);
    let isHighRisk;
    let BMI_Category;
    let Health_Advice;

    // Logic and shii

    const BMI = (clientWeight) / (clientHeight * clientHeight);

    // BMI Category

    if (clientName === "" || clientHeight === "" || isNaN(clientHeight) || isNaN(clientWeight) || clientHeight <= 0 || clientWeight <= 0) {
        result.innerHTML = "⚠️ Please enter a valid name, weight and/or height.";
        return;
    }

    else if (BMI < 18.5) {
        BMI_Category = "Under Weight";
    }

    else if (BMI >= 18.5 && BMI < 25) {
        BMI_Category = "Normal Weight";
    }

    else if (BMI >= 25) {
        BMI_Category = "Over Weight";
    }

    // High Health Risk Section

    if (BMI_Category === "Over Weight" || clientWeight > 90) {
        isHighRisk = "Yes";
    }

    else {
        isHighRisk = "No";
    }

    if (isHighRisk === "Yes") {
        Health_Advice = `⚠️ You are ${BMI_Category} and need to lose some weight. Consider heading to the gym! :)`;
    }

    else if (isHighRisk === "No" && BMI_Category === "Normal Weight") {
        Health_Advice = "✅ You are really healthy. Keep up your current lifestyle! :)";
    }

    else if (BMI_Category === "Under Weight") {
        Health_Advice = `⚠️ You are under weight and need to lose some weight`;
    }

    result.innerHTML = `Name: <strong>${clientName}</strong> <br/> 
    BMI : ${BMI} <br/>
    Weight Class: <strong><span id="BMI-Category-Color">${BMI_Category}</span ></strong > <br/>
    High Health Risk: ${isHighRisk}<br/>
    Health Advice: ${Health_Advice}
    `

    let BMI_Color = document.getElementById("BMI-Category-Color")

    if (BMI_Category === "Under Weight") {
        BMI_Color.style.color = "orange";
    }

    else if (BMI_Category === "Normal Weight") {
        BMI_Color.style.color = "green";
    }

    else if (BMI_Category === "Over Weight") {
        BMI_Color.style.color = "red";
    }

})
