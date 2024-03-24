/* TO DO: Logic to calculate BMI for Metric

Metric: divide weight in kg by height in cm squared, and multiply the result by 10,000




TO DO: Logic to calculate BMI for imperial

*/
let heightInCM = ''
let weightinKG = ''

console.log(heightInCM)


/* document.getElementById('height-cm').addEventListener('input', function (event) {
    heightInCM = event.target.value;
    console.log(heightInCM); // Or perform any other action with the value
});

document.getElementById('weight-kg').addEventListener('input', function (event) {
    weightinKG = event.target.value;
    console.log(weightinKG); // Or perform any other action with the value
}); */

//This function grabs the Metric section for values. It looks for a height and weight input and returns the values as they are added to the console. I'll use these values to do the BMI calculation for Metric

const calcBMIMetric = () => {
    const elements = document.getElementsByClassName('height-weight-metric');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('input', function (event) {
            heightinCM = document.getElementById('height-cm').value;
            weightinKG = document.getElementById('weight-kg').value;
            console.log(`Height: ${heightinCM}`)
            console.log(`Weight: ${weightinKG}`)
        })
    }

}

calcBMIMetric()

//CREATE a function that takes in calcBMIMetric() and uses those values to calculate the BMI. May rename function to bmiMetricValues since no calculation is being done there.