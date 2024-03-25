
/*TO DO: Logic to calculate BMI for imperial

*/

let heightInCM;
let weightInKG;

//declaring variables for classification and weight range

const classification = document.querySelector('.classification')
const weightRange = document.querySelector('.weight-range')

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
            if (bmi >= 18.5 && bmi <= 24.9) {
                classification.textContent = 'at a healthy weight'
            }
        })
    }

}
//calling the metricBMIValues function so it starts reading values when the page loads
metricBMIValues()

////////LOGIC for IMPERIAL VALUES BMI ///////////
let feet;
let inches;
let pounds;

const calcBMIImperial = (feet, inches, pounds) => {
    let heightInches = parseFloat(feet * 12 + inches)
    const bmi = ((parseFloat(pounds) * 703) / heightInches) / heightInches
    return bmi
}

const imperialBMIValues = () => {
    const elements = document.getElementsByClassName('height-weight-imperial');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('input', function (event) {
            let heightInFt = parseFloat(document.getElementById('height-ft').value)
            let heightInInches = parseFloat(document.getElementById('height-inch').value)
            let weightInPounds = parseFloat(document.getElementById('weight').value)
            const bmi = calcBMIImperial(heightInFt, heightInInches, weightInPounds)
            updateBMIMetric(bmi)
        })
    }

}

imperialBMIValues()

////LOGIC for radio buttons////

//I need logic so if metric is selected, imperial options are hidden and vice versa

const metricSelection = document.getElementById('hw-metric')
const imperialSelection = document.getElementById('hw-imperial')

///
imperialSelection.classList.toggle('hidden')

const radioButtonCheck = () => {
    const radioButtons = document.getElementsByName('metric-imperial')

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            if (radioButtons[i].id == 'imperial') {
                metricSelection.classList.toggle('hidden')
                imperialSelection.classList.remove('hidden')
            } else if (radioButtons[i].id == 'metric') {
                imperialSelection.classList.toggle('hidden')
                metricSelection.classList.remove('hidden')
            }
        }
    }
}

////Event listener that checks for a "change" in radio button selection

const radioButtons = document.getElementsByName('metric-imperial')

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', radioButtonCheck)
}

///function call to run the radiobuttoncheck
radioButtonCheck()
