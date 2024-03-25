



/*TO DO: Logic to calculate BMI for imperial

*/



/* document.getElementById('height-cm').addEventListener('input', function (event) {
    heightInCM = event.target.value;
    console.log(heightInCM); // Or perform any other action with the value
});

document.getElementById('weight-kg').addEventListener('input', function (event) {
    weightinKG = event.target.value;
    console.log(weightinKG); // Or perform any other action with the value
}); */
let heightInCM;
let weightInKG;

//This function calculates the BMI for metric values
const calcBMIMetric = (heightInCM, weightInKG) => {
    const heightInMeters = parseFloat(heightInCM) / 100
    console.log(`Height in Meters: ${heightInMeters}`)
    const bmi = parseFloat(weightInKG) / (heightInMeters * heightInMeters)
    console.log(`BMI: ${bmi}`)
    return bmi
}

//Add in a function that displays BMI to the UI for Metric only

const updateBMIMetric = (bmi) => {

    const displayBMI = document.getElementsByClassName("calc-bmi")[0]
    console.log(displayBMI)
    if (!isNaN(bmi)) {
        displayBMI.textContent = `${bmi.toFixed(2)}`
    } else
        displayBMI.textContent = ''
}

//This function grabs the Metric section for values. It looks for a height and weight input and returns the values as they are added to the console.
const metricBMIValues = () => {
    const elements = document.getElementsByClassName('height-weight-metric');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('input', function (event) {
            let heightInCM = parseFloat(document.getElementById('height-cm').value)
            let weightinKG = parseFloat(document.getElementById('weight-kg').value)
            const bmi = calcBMIMetric(heightInCM, weightinKG)
            updateBMIMetric(bmi)
        })
    }

}
//calling the metricBMIValues function so it starts reading values when the page loads
metricBMIValues()



