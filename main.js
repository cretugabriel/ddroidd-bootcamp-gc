// Declare API constants Endpoints
// Tested them using Postman

const countriesAndCitiesEndpoint = 'https://countriesnow.space/api/v0.1/countries';
const countriesAndStatesEndpoint = 'https://countriesnow.space/api/v0.1/countries/states';

const countrySelection = document.getElementById('country');
const citySelection = document.getElementById('city');
const stateSelection = document.getElementById('state');

let countriesData; // Declare a variable for storing the fetched countries data
let statesData; // Declare a variable for storing the fetched states data

// Fetch countries and populate the country select
fetch(countriesAndCitiesEndpoint)
    .then(response => response.json())
    .then(data => {
        if (data.error === false) {
            countriesData = data.data; // Store the fetched countries data
            countriesData.forEach(country => {
                const countryOption = document.createElement('option');
                countryOption.value = country.country;
                countryOption.textContent = country.country;
                countrySelection.appendChild(countryOption);
            });
        } else {
            throw new Error('Error fetching countries and cities data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Add event listener to country select
countrySelection.addEventListener('change', function () {
    const selectedCountry = countrySelection.value;

    // Clear existing city options
    citySelection.innerHTML = '';

    // Find the selected country object from stored data
    const selectedCountryData = countriesData.find(country => country.country === selectedCountry);

    // Populate city dropdown based on the selected country
    if (selectedCountryData && selectedCountryData.cities && selectedCountryData.cities.length > 0) {
        selectedCountryData.cities.forEach(city => {
            const cityOption = document.createElement('option');
            cityOption.value = city;
            cityOption.textContent = city;
            citySelection.appendChild(cityOption);
        });
    } else {
        // If no cities are available, display a fallback option
        const noCityOption = document.createElement('option');
        noCityOption.value = '';
        noCityOption.textContent = 'No cities available for the country selected.';
        citySelection.appendChild(noCityOption);
    }
});

//TODO: Add event listener to state select

//Validate form
function validateForm(){
    let firstNameValidation = document.getElementById("fname").value;
    let lastNameValidation = document.getElementById("lname").value;
    let phoneNumberValidation = document.getElementById("phoneNo").value;
    let emailValidation = document.getElementById('email').value;
    let address1Validation = document.getElementById('address1').value;
    let address2Validation = document.getElementById('address2').value;
    let countryValidation =  document.getElementById('country').value;
    let stateValidation = document.getElementById('state').value;
    let cityValidation = document.getElementById('city').value;
    let text;

    if (isNaN(phoneNumberValidation)){
        text = "Phone number not valid";
    }
    document.getElementById("errorMessagePhoneNumber").innerHTML = text;
}