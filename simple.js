let resources = {
    emergencySupplies: 100,
    funding: 50000,
};

function evacuate() {
    // Logic for evacuation decision
    if (resources.emergencySupplies > 0) {
        console.log("Evacuation initiated!");
        resources.emergencySupplies -= 10; // Cost of evacuation
        updateResourceStatus();
    } else {
        console.log("Not enough resources for evacuation.");
    }
}

function prepareResources() {
    console.log("Preparing resources...");
    resources.emergencySupplies += 20; // Gaining more supplies
    updateResourceStatus();
}

function updateResourceStatus() {
    document.getElementById("resource-status").innerText = `Emergency Supplies: ${resources.emergencySupplies}`;
}

// Event listeners for buttons
document.getElementById("evacuate-button").addEventListener("click", evacuate);
document.getElementById("prepare-button").addEventListener("click", prepareResources);
function categorizeHurricane(windSpeed) {
    if (windSpeed < 74) return "Tropical Storm";
    if (windSpeed < 95) return "Category 1";
    if (windSpeed < 110) return "Category 2";
    if (windSpeed < 130) return "Category 3";
    if (windSpeed < 157) return "Category 4";
    return "Category 5";
}
function holdTownMeeting() {
    // Randomly generate community feedback
    const feedback = Math.random() > 0.5 ? "Support Evacuation" : "Oppose Evacuation";
    console.log(`Community Feedback: ${feedback}`);
}
