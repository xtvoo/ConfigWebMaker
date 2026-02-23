// Get Elements
const externalSelect = document.getElementById("external-select");
const settingsContainer = document.getElementById("settings-container");
const tabsButtons = document.querySelectorAll(".tab-btn");
const currentTabTitle = document.getElementById("current-tab-title");
const exportBtn = document.getElementById("export-btn");
const configNameInput = document.getElementById("config-name");
const presetBtns = document.querySelectorAll(".preset-btn");

// Preset definitions map
const presets = {
    legit: {
        aimbot_range: 100, fov: 55, smoothness_x: 22.0, smoothness_y: 22.0,
        silent_fov: 45, silent_smoothing: 22.0, speed: false, fly: false,
        noclip: false, triggerbot: false, esp_glow: false
    },
    semi_legit: {
        aimbot_range: 154, fov: 120, smoothness_x: 18.0, smoothness_y: 18.0,
        prediction_x: 13.5, prediction_y: 13.5, silent_fov: 110, silent_smoothing: 18.0,
        speed: false, fly: false, noclip: false, triggerbot: false
    },
    rage: {
        aimbot_range: 10000, fov: 1000, smoothness_x: 0, smoothness_y: 0,
        silent_fov: 1000, silent_smoothing: 0, speed: true, speed_amount: 150,
        fly: true, fly_amount: 50, noclip: true, triggerbot: true, triggerbot_delay_ms: 1,
        esp_glow: true, box: true, name_esp: true
    },
    movement: {
        speed: true, speed_amount: 350, fly: true, fly_amount: 100,
        noclip: true, infjump: true, clicktp: true, desync: true
    }
};

// Global state holding current values for the selected external
let currentValues = {};
let currentExternal = externalSelect.value;
let currentTab = "aimbot";

// Initialize UI
function init() {
    loadExternal(currentExternal);

    // Event Listeners for tabs
    tabsButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabsButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentTab = e.target.getAttribute("data-tab");
            currentTabTitle.innerText = e.target.innerText;
            renderSettings();
        });
    });

    // Event Listener for external dropdown change
    externalSelect.addEventListener("change", (e) => {
        currentExternal = e.target.value;
        loadExternal(currentExternal);
    });

    // Event Listener for export
    exportBtn.addEventListener("click", exportConfig);

    // Event Listeners for presets
    presetBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const presetName = e.target.getAttribute("data-preset");
            if (presets[presetName]) {
                // Apply preset values over current ones
                Object.keys(presets[presetName]).forEach(key => {
                    if (currentValues[key] !== undefined) {
                        currentValues[key] = presets[presetName][key];
                    }
                });
                renderSettings();
            }
        });
    });
}

// Load the schema for the selected external and set default values
function loadExternal(externalKey) {
    currentValues = {}; // Reset values
    const schema = schemas[externalKey];

    // Seed defaults across all tabs so our full object has everything
    for (const tab in schema) {
        schema[tab].forEach(setting => {
            currentValues[setting.id] = setting.default;
        });
    }

    renderSettings();
}

// Render the UI for the current tab
function renderSettings() {
    settingsContainer.innerHTML = "";
    const schema = schemas[currentExternal][currentTab];

    if (!schema) {
        settingsContainer.innerHTML = "<p>No settings configured for this tab yet.</p>";
        return;
    }

    schema.forEach(setting => {
        const card = document.createElement("div");
        card.className = "setting-card";

        if (setting.type === "toggle") {
            card.innerHTML = `
                <div class="toggle-wrapper">
                    <h4>${setting.label}</h4>
                    <label class="switch">
                        <input type="checkbox" id="${setting.id}" ${currentValues[setting.id] ? "checked" : ""}>
                        <span class="slider"></span>
                    </label>
                </div>
            `;
            const input = card.querySelector('input');
            input.addEventListener('change', (e) => {
                currentValues[setting.id] = e.target.checked;
            });

        } else if (setting.type === "slider") {
            card.innerHTML = `
                <h4>${setting.label}</h4>
                <div class="range-container">
                    <input type="range" id="${setting.id}" min="${setting.min}" max="${setting.max}" step="${setting.step}" value="${currentValues[setting.id]}">
                    <div class="range-info">
                        <span class="range-min">${setting.min}</span>
                        <span id="${setting.id}-val" style="color: var(--accent); font-weight: 600;">${currentValues[setting.id]}</span>
                        <span class="range-max">${setting.max}</span>
                    </div>
                </div>
            `;
            const input = card.querySelector('input');
            const valDisplay = card.querySelector(`#${setting.id}-val`);
            input.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                currentValues[setting.id] = val;
                valDisplay.innerText = val;
            });
        } else if (setting.type === "number") {
            card.innerHTML = `
                <h4>${setting.label}</h4>
                <input type="number" id="${setting.id}" class="input-field" value="${currentValues[setting.id]}">
            `;
            const input = card.querySelector('input');
            input.addEventListener('input', (e) => {
                currentValues[setting.id] = parseFloat(e.target.value);
            });
        }

        settingsContainer.appendChild(card);
    });
}

// Export the JSON config
function exportConfig() {
    let name = configNameInput.value.trim();
    if (!name) name = "MyConfig";

    // Convert currentValues to formatted JSON
    // If we need to mix with a raw template, we would Object.assign(template, currentValues) here
    const jsonStr = JSON.stringify(currentValues, null, 4);

    // Create download link
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;

    // Automatically select the correct file extension based on the external
    if (currentExternal.includes('beta')) {
        a.download = `${name}.json`;
    } else {
        a.download = `${name}.cfg`;
    }

    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Start app
init();
