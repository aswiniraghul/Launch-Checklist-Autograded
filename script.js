// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) { 

        event.preventDefault();
        let h2 = document.getElementById("launchStatus");
        let list = document.getElementById('faultyItems');
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        
        if (validateInput(pilot.value) == "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty") {
            h2.style.visibility = "hidden"; 
            list.style.visibility = "hidden";
            alert("All fields are required!");
        } else if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number" || validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
            h2.style.visibility = "hidden";
            list.style.visibility = "hidden"; 
            alert("Make sure to enter valid information for each field!");
        }
    }) 

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
 });