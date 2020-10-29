// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
       let pilotInput = document.querySelector("input[name=pilotName]");
       let copilotInput = document.querySelector("input[name=copilotName");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel");
       let cargoMassInput = document.querySelector("input[name=cargoMass");

       if(pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
           alert("All Fields Required");
           event.preventDefault();
       };

       if(!isNaN(pilotInput.value) || !isNaN(copilotInput.value)) {
         alert("Invalid Entry. Must be a name for Pilot Name & Copilot Name.");
         event.preventDefault();
      }

       if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
          alert("Invalid Entry. Must be a number for Fuel Level & Cargo Mass.");
          event.preventDefault();
       }

   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
