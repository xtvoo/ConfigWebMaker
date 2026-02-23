const externalSelect = document.getElementById("external-select");
const settingsContainer = document.getElementById("settings-container");
const tabsButtons = document.querySelectorAll(".tab-btn");
const currentTabTitle = document.getElementById("current-tab-title");
const exportBtn = document.getElementById("export-btn");
const configNameInput = document.getElementById("config-name");
const presetBtns = document.querySelectorAll(".preset-btn");

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

let currentValues = {};
let currentExternal = externalSelect.value;
let currentTab = "aimbot";

function init() {
    loadExternal(currentExternal);

    tabsButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabsButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentTab = e.target.getAttribute("data-tab");
            currentTabTitle.innerText = e.target.innerText;
            renderSettings();
        });
    });

    externalSelect.addEventListener("change", (e) => {
        currentExternal = e.target.value;
        loadExternal(currentExternal);
    });

    exportBtn.addEventListener("click", exportConfig);

    presetBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const presetName = e.target.getAttribute("data-preset");
            if (presets[presetName]) {
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

function loadExternal(externalKey) {
    currentValues = {};
    const schema = schemas[externalKey];

    for (const tab in schema) {
        schema[tab].forEach(setting => {
            currentValues[setting.id] = setting.default;
        });
    }

    renderSettings();
}

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

function exportConfig() {
    let name = configNameInput.value.trim();
    if (!name) name = "MyConfig";

    const jsonStr = JSON.stringify(currentValues, null, 4);

    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;

    if (currentExternal === 'matcha_beta') {
        a.download = `${name}.cfg`;
    } else {
        a.download = `${name}.json`;
    }

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

init();
