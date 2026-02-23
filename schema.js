// This file defines the layout and settings for each External.
const schemas = {
    // Matcha (Beta) Schema based on DH.json
    "matcha_beta": {
        "aimbot": [
            { id: "aimbot_Checked", label: "Enable Aimbot", type: "toggle", default: true },
            { id: "aimbotkey", label: "Aimbot Keybind (Code)", type: "number", default: 548 },
            { id: "aimbotsmooth", label: "Smoothness", type: "slider", min: 0.1, max: 20, step: 0.1, default: 1.0 },
            { id: "predict_Checked", label: "Enable Prediction", type: "toggle", default: false },
            { id: "predictx", label: "Prediction X", type: "slider", min: 0, max: 20, step: 0.01, default: 0.0001 },
            { id: "fovfloat", label: "FOV Size", type: "slider", min: 10, max: 800, step: 1, default: 162.8 }
        ],
        "silentaim": [
            { id: "silentaim_Checked", label: "Enable Silent Aim", type: "toggle", default: false },
            { id: "fovsilent_Checked", label: "Show Silent FOV", type: "toggle", default: false },
            { id: "fovsilentval", label: "Silent FOV Size", type: "slider", min: 10, max: 500, step: 1, default: 100 },
            { id: "predictsilent_Checked", label: "Enable Silent Predict", type: "toggle", default: false },
            { id: "psilentx", label: "Predict X", type: "slider", min: 0, max: 20, step: 0.1, default: 0.165 }
        ],
        "visuals": [
            { id: "espbox_Checked", label: "ESP Box", type: "toggle", default: true },
            { id: "espname_Checked", label: "ESP Names", type: "toggle", default: true },
            { id: "espdistance_Checked", label: "ESP Distance", type: "toggle", default: false },
            { id: "healthcheck_Checked", label: "Health Bar", type: "toggle", default: false },
            { id: "fovcircle_Checked", label: "Show FOV Circle", type: "toggle", default: true }
        ],
        "movement": [
            { id: "speedhack_Checked", label: "Speedhack", type: "toggle", default: false },
            { id: "speedhackvalue", label: "Speed Hack Value", type: "slider", min: 0, max: 3000, step: 1, default: 1921 },
            { id: "flight_Checked", label: "Flight", type: "toggle", default: false },
            { id: "noclip_Checked", label: "Noclip", type: "toggle", default: false }
        ],
        "misc": [
            { id: "teamcheck_Checked", label: "Team Check", type: "toggle", default: false },
            { id: "knifecheck_Checked", label: "Knife Check", type: "toggle", default: false },
            { id: "triggerbot_Checked", label: "Triggerbot", type: "toggle", default: false }
        ]
    },

    // Matcha (Normal) Schema based on the CFG you sent earlier
    "matcha_normal": {
        "aimbot": [
            { id: "aimbot", label: "Enable Aimbot", type: "toggle", default: true },
            { id: "aimbot_range", label: "Aimbot Range", type: "slider", min: 10, max: 1000, step: 1, default: 150 },
            { id: "fov", label: "Aimbot FOV", type: "slider", min: 10, max: 500, step: 1, default: 90 },
            { id: "smoothness", label: "Enable Smoothness", type: "toggle", default: true },
            { id: "smoothness_x", label: "Smoothness X", type: "slider", min: 0, max: 100, step: 0.1, default: 15 },
            { id: "smoothness_y", label: "Smoothness Y", type: "slider", min: 0, max: 100, step: 0.1, default: 15 },
            { id: "prediction", label: "Prediction", type: "toggle", default: true },
            { id: "prediction_x", label: "Prediction X", type: "slider", min: 0, max: 20, step: 0.1, default: 13.5 },
            { id: "aimbot_wallcheck", label: "Wall Check", type: "toggle", default: true },
            { id: "team_check", label: "Team Check", type: "toggle", default: true }
        ],
        "silentaim": [
            { id: "silent_aim", label: "Enable Silent Aim", type: "toggle", default: true },
            { id: "silent_fov_on", label: "Show Silent FOV", type: "toggle", default: true },
            { id: "silent_fov", label: "Silent FOV Size", type: "slider", min: 10, max: 500, step: 1, default: 80 },
            { id: "silent_smoothing", label: "Silent Smoothing", type: "slider", min: 0, max: 100, step: 0.1, default: 18 },
            { id: "silent_prediction", label: "Prediction", type: "toggle", default: true },
            { id: "silent_prediction_x", label: "Prediction X", type: "slider", min: 0, max: 20, step: 0.1, default: 13.5 }
        ],
        "visuals": [
            { id: "esp", label: "Master ESP", type: "toggle", default: true },
            { id: "box", label: "ESP Box", type: "toggle", default: true },
            { id: "name_esp", label: "ESP Names", type: "toggle", default: true },
            { id: "healthbar", label: "Health Bar", type: "toggle", default: true },
            { id: "esp_glow", label: "ESP Glow", type: "toggle", default: false }
        ],
        "movement": [
            { id: "speed", label: "Enable Speed", type: "toggle", default: false },
            { id: "speed_amount", label: "Speed Amount", type: "slider", min: 1, max: 500, step: 1, default: 16 },
            { id: "fly", label: "Enable Fly", type: "toggle", default: false },
            { id: "noclip", label: "Noclip", type: "toggle", default: false }
        ],
        "misc": [
            { id: "triggerbot", label: "Triggerbot", type: "toggle", default: false },
            { id: "streamproof", label: "Streamproof", type: "toggle", default: true }
        ]
    }
};
