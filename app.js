const roomTimes = {
    "Titanic": {
        "Su": ["10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45", "22:15", "23:45"],
        "Mo": ["10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45", "22:15", "23:45"],
        "Tu": ["10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45", "22:15", "23:45"],
        "We": ["10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45", "22:15", "23:45"],
        "Th": ["10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45", "22:15", "23:45"],
        "Fr": ["01:15", "10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45", "22:15", "23:45"],
        "Sa": ["01:15", "10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45", "22:15", "23:45"]
    },
    "Ghost Hunters": {
        "Su": ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Mo": ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Tu": ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "We": ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Th": ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Fr": ["01:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Sa": ["01:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"]
    },
    "Altair Space Station": {
        "Su": ["09:45", "11:10", "12:40", "14:10", "15:40", "17:10", "18:40", "20:10", "21:40", "23:10"],
        "Mo": ["09:45", "11:10", "12:40", "14:10", "15:40", "17:10", "18:40", "20:10", "21:40", "23:10"],
        "Tu": ["09:45", "11:10", "12:40", "14:10", "15:40", "17:10", "18:40", "20:10", "21:40", "23:10"],
        "We": ["09:45", "11:10", "12:40", "14:10", "15:40", "17:10", "18:40", "20:10", "21:40", "23:10"],
        "Th": ["09:45", "11:10", "12:40", "14:10", "15:40", "17:10", "18:40", "20:10", "21:40", "23:10"],
        "Fr": ["00:40", "02:05", "09:45", "11:10", "12:40", "14:10", "15:40", "17:10", "18:40", "20:10", "21:40", "23:10"],
        "Sa": ["00:40", "02:05", "09:45", "11:10", "12:40", "14:10", "15:40", "17:10", "18:40", "20:10", "21:40", "23:10"]
    },
    "Motel Panorama": {
        "Su": ["01:00", "02:15", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Mo": ["01:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Tu": ["01:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "We": ["01:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Th": ["01:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Fr": ["01:00", "02:15", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
        "Sa": ["01:00", "02:15", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"]
    }
};


const pricingRules = {
    "Titanic": { 2: 150, 3: 140, 4: 130, 5: 120, 6: 110, 7: 110, 8: 110 },
    "Ghost Hunters": { 2: 150, 3: 140, 4: 130, 5: 120, 6: 110, 7: 110, 8: 110 },
    "Altair Space Station": { 2: 150, 3: 140, 4: 130, 5: 120, 6: 110, 7: 110, 8: 110 },
    "Motel Panorama": { 2: 180, 3: 150, 4: 140, 5: 130, 6: 120, 7: 120, 8: 120 }
};

// Function to update available times based on selected room and day
function updateAvailableTimes() {
    const room = document.getElementById("room").value; // Get selected room
    const day = document.getElementById("day").value; // Get selected day
    const timeSelect = document.getElementById("time"); // Reference to time dropdown

    // Clear previous time options
    timeSelect.innerHTML = "<option value='' disabled selected>Select time</option>";

    // Check if there are available times for the selected room and day
    if (roomTimes[room] && roomTimes[room][day]) {
        roomTimes[room][day].forEach(time => {
            const option = document.createElement("option");
            option.value = time;
            option.text = time;
            timeSelect.appendChild(option);
        });
    } else {
        // If no data is available, add a message
        const option = document.createElement("option");
        option.value = "";
        option.text = "No available times";
        timeSelect.appendChild(option);
    }
}


// Event listeners to update available times when room or day is changed
document.getElementById("room").addEventListener("change", updateAvailableTimes);
document.getElementById("day").addEventListener("change", updateAvailableTimes);
document.addEventListener("DOMContentLoaded", () => {
    updateAvailableTimes();
});

// Function to calculate cost
function calculateCost() {
    const room = document.getElementById("room").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const players = parseInt(document.getElementById("players").value);

    // Check if time is selected
    if (!time) {
        Toastify({
            text: "Please Select a Time.",
            duration: 3000, // Duration in milliseconds
            gravity: "top", // Position
            position: "center", 
            style: {
                background: "#e236369e"
            },
            stopOnFocus: true, // Notification remains if focused
        }).showToast();
        return; // Terminate function if no time is selected
    }

    let pricePerPerson = pricingRules[room][Math.min(players, 6)];
    let explanation = "";
    let effectivePlayers = players; // Actual number of players for calculation

      // Apply additional rules based on time
    const hour = parseInt(time.split(":")[0]);

    // General rule for nighttime hours (00:00 - 04:00) for all rooms
    if (players === 2 && (hour >= 0 && hour < 4)) {
        explanation = ".בין השעות 00:00 עד 04:00 נדרשים לפחות 3 שחקנים, לכן החיוב הוא עבור 3 שחקנים";
        pricePerPerson = pricingRules[room][3];
        effectivePlayers = 3;
    } else if ((room === "Titanic" || room === "Ghost Hunters" || room === "Altair Space Station") && hour >= 23 && players === 2) {
        explanation = ".לאחר 23:00 נדרשים לפחות 3 שחקנים, לכן החיוב הוא עבור 3 שחקנים";
        pricePerPerson = pricingRules[room][3];
        effectivePlayers = 3; // Consider minimum 3 players for calculation
    } else if (room === "Motel Panorama") {
        if ((["Su", "Mo", "Tu", "We"].includes(day) && hour >= 23 && players === 2) ||
            (day === "Th" && hour >= 19 && players === 2) ||
            (["Fr", "Sa"].includes(day) && players === 2)) {
            explanation = "נדרשים לפחות 3 שחקנים בזמן זה, לכן החיוב הוא עבור 3 שחקנים.";
            pricePerPerson = pricingRules[room][3];
            effectivePlayers = 3;  // Consider minimum 3 players for calculation
        }
    }

    // Calculate total cost
    const totalCost = pricePerPerson * effectivePlayers; // Take into account adjusted number of players
    document.getElementById("calculatedPrice").innerText = `${totalCost} ₪`;
    document.getElementById("priceExplanation").innerText = explanation || `מחיר לשחקן: ${pricePerPerson} ₪, מספר שחקנים: ${players}`;
}

document.querySelector("button[type='reset']").addEventListener("click", function () {
    // Clearing the fields for the result and explanation
    document.getElementById("calculatedPrice").innerText = "";
    document.getElementById("priceExplanation").innerText = "";
    // Reset the player count to the default value (2)
    const playerInput = document.getElementById("players");
    playerInput.value = 2;
    updatePlayerCountDisplay();  // Update the display text to reflect the default value
});

// Function to update the player count display based on the range input value
function updatePlayerCountDisplay() {
    const players = document.getElementById("players").value;
    document.getElementById("playerCountDisplay").innerText = players;
}

// Call the updatePlayerCountDisplay when the page loads to set the default value
document.addEventListener("DOMContentLoaded", () => {
    updatePlayerCountDisplay();
});
