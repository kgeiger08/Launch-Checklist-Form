// Write your JavaScript code here!

window.addEventListener("load", function() {
   
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     
      response.json().then(function(json) {
   
         let missionTarget = document.getElementById("missionTarget");
         let index = 2;

         missionTarget.innerHTML = `
                    <h2>Mission Destination</h2>
                        <ol>
                           <li>Name: ${json[index].name}</li>
                           <li>Diameter: ${json[index].diameter}</li>
                           <li>Star: ${json[index].star}</li>
                           <li>Distance from Earth: ${json[index].distance}</li>
                           <li>Number of Moons: ${json[index].moons}</li>
                        </ol>
                        <img src="${json[index].image}"></img>
                        `;
                        // index = (index + 1) % json.length; --working on bonus
                });
            });
   
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {

       let pilotInput = document.querySelector("input[name=pilotName]");
       let copilotInput = document.querySelector("input[name=copilotName");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel");
       let cargoMassInput = document.querySelector("input[name=cargoMass");
       let faultyItemsList = document.getElementById("faultyItems");
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let launchStatus = document.getElementById("launchStatus");

       if(pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
           alert("All Fields Required");
           event.preventDefault();
       } else if(!isNaN(pilotInput.value) || !isNaN(copilotInput.value)) {
         alert("Invalid Entry. Must be a name for Pilot Name & Copilot Name.");
         event.preventDefault();
      } else if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
          alert("Invalid Entry. Must be a number for Fuel Level & Cargo Mass.");
          event.preventDefault();
       } else {
            pilotStatus.innerHTML = `Pilot ${pilotInput.value} is Ready`;
            copilotStatus.innerHTML = `Copilot ${copilotInput.value} is Ready`;

            if(fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
               let fuelStatus = document.getElementById("fuelStatus");
               fuelStatus.innerHTML = `${fuelLevelInput.value} liters is not enough fuel for the journey.`;
               let cargoStatus = document.getElementById("cargoStatus");
               cargoStatus.innerHTML = `${cargoMassInput.value} kilograms is too much mass for the shuttle to take off.`;
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               launchStatus.style.color = "red";

            }  else if(fuelLevelInput.value < 10000 && cargoMassInput.value < 10000) {
                  let fuelStatus = document.getElementById("fuelStatus");
                  fuelStatus.innerHTML = `${fuelLevelInput.value} liters is not enough fuel for the journey.`;
                  let cargoStatus = document.getElementById("cargoStatus");
                  cargoStatus.innerHTML = `${cargoMassInput.value} kilograms is low enough for the shuttle to take off.`;
                  launchStatus.innerHTML = `Shuttle not ready for launch`;
                  launchStatus.style.color = "red";
                  
            } else if(fuelLevelInput.value > 10000 && cargoMassInput.value > 10000) {
                  let fuelStatus = document.getElementById("fuelStatus");
                  fuelStatus.innerHTML = `${fuelLevelInput.value} liters is high enough fuel for the journey.`;
                  let cargoStatus = document.getElementById("cargoStatus");
                  cargoStatus.innerHTML = `${cargoMassInput.value} kilograms is too much mass for the shuttle to take off.`;
                  launchStatus.innerHTML = `Shuttle not ready for launch`;
                  launchStatus.style.color = "red";

            } else if(fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
                  let fuelStatus = document.getElementById("fuelStatus");
                  fuelStatus.innerHTML = `${fuelLevelInput.value} liters is high enough fuel for the journey.`;
                  let cargoStatus = document.getElementById("cargoStatus");
                  cargoStatus.innerHTML = `${cargoMassInput.value} kilograms is low enough for the shuttle to take off.`;
                  launchStatus.innerHTML = `Shuttle is ready for launch`;
                  launchStatus.style.color = "green";
   
            };

            faultyItemsList.style.visibility = "visible";
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
