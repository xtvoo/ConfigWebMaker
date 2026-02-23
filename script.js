// Get Elements
const externalSelect = document.getElementById("external-select");
const settingsContainer = document.getElementById("settings-container");
const tabsButtons = document.querySelectorAll(".tab-btn");
const currentTabTitle = document.getElementById("current-tab-title");
const exportBtn = document.getElementById("export-btn");
const configNameInput = document.getElementById("config-name");

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
