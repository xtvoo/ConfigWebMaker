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
            { id: "fovfloat", label: "FOV Size", type: "slider", min: 10, max: 800, step: 1, default: 162.8 }
        ],
        "silentaim": [
            { id: "silentaim_Checked", label: "Enable Silent Aim", type: "toggle", default: false },
            { id: "silentaim_keyBind", label: "Silent Aim Keybind", type: "number", default: 0 },
            { id: "fovsilent_Checked", label: "Show Silent FOV", type: "toggle", default: false },
            { id: "fovsilentval", label: "Silent FOV Size", type: "slider", min: 10, max: 500, step: 1, default: 100 },
            { id: "predictsilent_Checked", label: "Enable Silent Predict", type: "toggle", default: false },
            { id: "psilentx", label: "Predict X", type: "slider", min: 0, max: 1, step: 0.001, default: 0.165 },
            { id: "psilenty", label: "Predict Y", type: "slider", min: 0, max: 1, step: 0.001, default: 0.165 }
        ],
        "visuals": [
            { id: "espbox_Checked", label: "ESP Box", type: "toggle", default: true },
            { id: "espfilled_Checked", label: "Filled Box", type: "toggle", default: false },
            { id: "espname_Checked", label: "ESP Names", type: "toggle", default: true },
            { id: "espdistance_Checked", label: "ESP Distance", type: "toggle", default: false },
            { id: "esphealth_Checked", label: "ESP Health", type: "toggle", default: false },
            { id: "espsnap_Checked", label: "Snaplines", type: "toggle", default: false }
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
    },

    // Matcha (Normal - Ultimate/Master) Schema map based on test configg.cfg
    "matcha_normal": {
        "aimbot": [
            { id: "aimbot", label: "Enable Aimbot", type: "toggle", default: true },
            { id: "aimkey", label: "Aimbot Keybind", type: "number", default: 5 },
            { id: "aimbot_hitpart", label: "Target Part (0=Head, 1=Torso)", type: "number", default: 0 },
            { id: "aimbot_range", label: "Aimbot Range", type: "slider", min: 10, max: 10000, step: 10, default: 10000 },
            { id: "aimbot_wallcheck", label: "Wall Check", type: "toggle", default: true },
            { id: "fov", label: "Aimbot FOV", type: "slider", min: 10, max: 1000, step: 1, default: 100 },
            { id: "fov_filled", label: "FOV Filled", type: "toggle", default: false },
            { id: "fov_glow", label: "FOV Glow", type: "toggle", default: false },
            { id: "smoothness", label: "Enable Smoothness", type: "toggle", default: true },
            { id: "smoothness_x", label: "Smoothness X", type: "slider", min: 0, max: 100, step: 0.1, default: 100 },
            { id: "smoothness_y", label: "Smoothness Y", type: "slider", min: 0, max: 100, step: 0.1, default: 100 },
            { id: "prediction", label: "Prediction", type: "toggle", default: true },
            { id: "prediction_x", label: "Prediction X", type: "slider", min: 0, max: 20, step: 0.1, default: 20 },
            { id: "prediction_y", label: "Prediction Y", type: "slider", min: 0, max: 20, step: 0.1, default: 20 },
            { id: "sticky_aim", label: "Sticky Aim", type: "toggle", default: true },
            { id: "target_strafe", label: "Target Strafe", type: "toggle", default: true }
        ],
        "silentaim": [
            { id: "silent_aim", label: "Enable Silent Aim", type: "toggle", default: true },
            { id: "silentkey", label: "Silent Aim Keybind", type: "number", default: 5 },
            { id: "silent_hitpart", label: "Target Part (0=Head, 1=Torso)", type: "number", default: 0 },
            { id: "silent_fov_on", label: "Show Silent FOV", type: "toggle", default: true },
            { id: "silent_fov", label: "Silent FOV Size", type: "slider", min: 10, max: 1000, step: 1, default: 915 },
            { id: "silent_fov_filled", label: "Silent FOV Filled", type: "toggle", default: true },
            { id: "silent_fov_glow", label: "Silent FOV Glow", type: "toggle", default: true },
            { id: "silent_smoothing", label: "Silent Smoothing", type: "slider", min: 0, max: 100, step: 0.1, default: 22 },
            { id: "silent_prediction", label: "Prediction", type: "toggle", default: true },
            { id: "silent_prediction_x", label: "Prediction X", type: "slider", min: 0, max: 20, step: 0.1, default: 20 },
            { id: "silent_prediction_y", label: "Prediction Y", type: "slider", min: 0, max: 20, step: 0.1, default: 20 },
            { id: "silent_sticky_aim", label: "Sticky Aim", type: "toggle", default: true }
        ],
        "visuals": [
            { id: "esp", label: "Master ESP", type: "toggle", default: true },
            { id: "box", label: "ESP Box", type: "toggle", default: true },
            { id: "filledbox", label: "Filled ESP Box", type: "toggle", default: true },
            { id: "name_esp", label: "ESP Names", type: "toggle", default: true },
            { id: "namestyle", label: "Name Style (0=User, 1=Display)", type: "number", default: 0 },
            { id: "healthbar", label: "Health Bar", type: "toggle", default: true },
            { id: "health_text", label: "Health Text", type: "toggle", default: true },
            { id: "distance_esp", label: "Distance", type: "toggle", default: true },
            { id: "esp_glow", label: "ESP Glow", type: "toggle", default: true },
            { id: "skeleton", label: "Skeleton ESP", type: "toggle", default: true },
            { id: "head_dot", label: "Head Dot", type: "toggle", default: true },
            { id: "oof_arrow", label: "OOF Arrows", type: "toggle", default: true },
            { id: "chams", label: "Chams", type: "toggle", default: true },
            { id: "chams_filled", label: "Chams Filled", type: "toggle", default: true },
            { id: "radar", label: "Radar", type: "toggle", default: true }
        ],
        "movement": [
            { id: "speed", label: "Enable Speed", type: "toggle", default: true },
            { id: "speed_amount", label: "Speed Amount", type: "slider", min: 1, max: 500, step: 1, default: 16 },
            { id: "fly", label: "Enable Fly", type: "toggle", default: true },
            { id: "fly_amount", label: "Fly Amount", type: "slider", min: 1, max: 500, step: 1, default: 10 },
            { id: "noclip", label: "Noclip", type: "toggle", default: true },
            { id: "infjump", label: "Infinite Jump", type: "toggle", default: true },
            { id: "desync", label: "Desync", type: "toggle", default: true },
            { id: "clicktp", label: "Click TP", type: "toggle", default: true }
        ],
        "misc": [
            { id: "hitbox_extend", label: "Hitbox Extender", type: "toggle", default: true },
            { id: "hitbox_size", label: "Hitbox Size", type: "slider", min: 1, max: 100, step: 1, default: 20 },
            { id: "triggerbot", label: "Triggerbot", type: "toggle", default: true },
            { id: "triggerbot_delay_ms", label: "Triggerbot Delay (ms)", type: "slider", min: 0, max: 1000, step: 1, default: 5 },
            { id: "timer_manipulation", label: "Timer Manipulation", type: "toggle", default: true },
            { id: "lag_notifier", label: "Lag Notifier", type: "toggle", default: true },
            { id: "clocktime", label: "World Time", type: "toggle", default: true },
            { id: "custom_sky", label: "Custom Sky", type: "toggle", default: true },
            { id: "damage_reticles", label: "Damage Reticles", type: "toggle", default: true },
            { id: "team_check", label: "Aimbot Team Check", type: "toggle", default: true },
            { id: "healthcheck", label: "Aimbot Health Check", type: "toggle", default: true }
        ]
    }
};
