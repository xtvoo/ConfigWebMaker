const schemas = {
    // Matcha (Beta) Schema map based on DH.json
    "matcha_beta": {
        "aimbot": [
            { id: "aimbot_Checked", label: "Enable Aimbot", type: "toggle", default: true },
            { id: "aimbotkey", label: "Aimbot Keybind", type: "number", default: 548 },
            { id: "aimbotsmooth", label: "Smoothness", type: "slider", min: 0.1, max: 20, step: 0.1, default: 1.0 },
            { id: "toggleaimbot_Checked", label: "Toggle Mode", type: "toggle", default: true },
            { id: "predict_Checked", label: "Enable Prediction", type: "toggle", default: false },
            { id: "predictx", label: "Prediction X", type: "slider", min: 0, max: 1, step: 0.0001, default: 0.0001 },
            { id: "predicty", label: "Prediction Y", type: "slider", min: 0, max: 1, step: 0.0001, default: 0.0001 },
            { id: "partaimbot", label: "Target Part (0=Head, 1=Torso)", type: "number", default: 0 },
            { id: "aimbotsticky_Checked", label: "Sticky Aim", type: "toggle", default: true },
            { id: "shake_Checked", label: "Aim Shake", type: "toggle", default: false },
            { id: "fovcircle_Checked", label: "Show Aimbot FOV", type: "toggle", default: true },
            { id: "fovcircle_Color", label: "Aimbot FOV Color", type: "number", default: 4294967295 },
            { id: "fovfloat", label: "FOV Size", type: "slider", min: 10, max: 800, step: 1, default: 162.8 }
        ],
        "silentaim": [
            { id: "silentaim_Checked", label: "Enable Silent Aim", type: "toggle", default: false },
            { id: "silentaim_keyBind", label: "Silent Aim Keybind", type: "number", default: 0 },
            { id: "fovsilent_Checked", label: "Show Silent FOV", type: "toggle", default: false },
            { id: "fovsilentval", label: "Silent FOV Size", type: "slider", min: 10, max: 500, step: 1, default: 100 },
            { id: "fovsilent_Color", label: "Silent FOV Color", type: "number", default: 4278255873 },
            { id: "predictsilent_Checked", label: "Enable Silent Predict", type: "toggle", default: false },
            { id: "psilentx", label: "Predict X", type: "slider", min: 0, max: 1, step: 0.001, default: 0.165 },
            { id: "psilenty", label: "Predict Y", type: "slider", min: 0, max: 1, step: 0.001, default: 0.165 }
        ],
        "visuals": [
            { id: "espbox_Checked", label: "ESP Box", type: "toggle", default: true },
            { id: "espbox_Color", label: "ESP Box Color", type: "number", default: 4294967295 },
            { id: "espfilled_Checked", label: "Filled Box", type: "toggle", default: false },
            { id: "espname_Checked", label: "ESP Names", type: "toggle", default: true },
            { id: "espname_Color", label: "ESP Name Color", type: "number", default: 4294967295 },
            { id: "espdistance_Checked", label: "ESP Distance", type: "toggle", default: false },
            { id: "esphealth_Checked", label: "ESP Health", type: "toggle", default: false },
            { id: "espsnap_Checked", label: "Snaplines", type: "toggle", default: false },
            { id: "limitdistance_Checked", label: "Limit ESP Distance", type: "toggle", default: false },
            { id: "limitdistancevalue", label: "Max ESP Distance", type: "slider", min: 0, max: 5000, step: 10, default: 0 }
        ],
        "movement": [
            { id: "speedhack_Checked", label: "Speedhack", type: "toggle", default: false },
            { id: "speedhack_keyBind", label: "Speed Keybind (Default V)", type: "number", default: 86 },
            { id: "speedhackvalue", label: "Speed Value", type: "slider", min: 0, max: 5000, step: 1, default: 1921 },
            { id: "flight_Checked", label: "Flight", type: "toggle", default: false },
            { id: "noclip_Checked", label: "Noclip", type: "toggle", default: false },
            { id: "teleport_Checked", label: "Teleport Click/Look", type: "toggle", default: false }
        ],
        "misc": [
            { id: "teamcheck_Checked", label: "Team Check", type: "toggle", default: false },
            { id: "knockdh_Checked", label: "Knock Check", type: "toggle", default: false },
            { id: "knifecheck_Checked", label: "Knife Check", type: "toggle", default: false },
            { id: "triggerbot_Checked", label: "Triggerbot", type: "toggle", default: false },
            { id: "triggerbotinterval", label: "Triggerbot Delay", type: "slider", min: 0, max: 1000, step: 1, default: 0 },
            { id: "nosleep_Checked", label: "Anti Sleep", type: "toggle", default: true }
        ]
    }
};
