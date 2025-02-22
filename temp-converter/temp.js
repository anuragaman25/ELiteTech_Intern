document.addEventListener("DOMContentLoaded", function() {
    loadPreferences();
    
    // Listen for "Enter" key inside the input field
    document.getElementById("temperature").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission (if any)
            convertTemperature();   // Call the conversion function
        }
    });

    // Dark Mode Toggle
    document.getElementById("darkModeToggle").addEventListener("click", function() {
        toggleDarkMode();
    });
});

function convertTemperature() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result = document.getElementById('result');
    let emojiDisplay = document.getElementById("emojiDisplay");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid number.";
        emojiDisplay.innerText = "🌡️"; // Default emoji
        return;
    }

    let convertedTemp;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemp = temp - 273.15;
        convertedUnit = 'Celsius';
    }
    
    result.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)} °${convertedUnit}`;

    // 🔥❄️🌡️ Change Emoji Based on Temperature
    if (convertedTemp > 30) {
        emojiDisplay.innerText = "🔥"; // Hot
    } else if (convertedTemp < 10) {
        emojiDisplay.innerText = "❄️"; // Cold
    } else {
        emojiDisplay.innerText = "🌡️"; // Moderate
    }

    // Save last entered temperature and unit
    localStorage.setItem("lastTemperature", temp);
    localStorage.setItem("lastUnit", unit);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    let isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem("darkMode", isDarkMode);
}

function copyResult() {
    let resultText = document.getElementById('result').innerText;
    if (resultText) {
        navigator.clipboard.writeText(resultText);
        alert("Copied: " + resultText);
    }
}

function loadPreferences() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    let lastTemp = localStorage.getItem("lastTemperature");
    let lastUnit = localStorage.getItem("lastUnit");

    if (lastTemp !== null && lastUnit !== null) {
        document.getElementById("temperature").value = lastTemp;
        document.getElementById("unit").value = lastUnit;
    }
}
