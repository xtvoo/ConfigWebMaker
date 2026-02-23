const schemas = {
    // Matcha (Beta) Schema map based on test configg.cfg
    "matcha_beta": {
        "aimbot": [
            { id: "aimbot", label: "Enable Aimbot", type: "toggle", default: true },
            { id: "aimkey", label: "Aimbot Keybind (Code)", type: "number", default: 5 },
            { id: "aimbot_hitpart", label: "Target Part (0=Head, 1=Torso)", type: "number", default: 0 },
            { id: "aimbot_range", label: "Aimbot Range", type: "slider", min: 10, max: 10000, step: 10, default: 10000 },
            { id: "aimbot_wallcheck", label: "Wall Check", type: "toggle", default: true },
            { id: "team_check", label: "Team Check", type: "toggle", default: true },
            { id: "healthcheck", label: "Health Check", type: "toggle", default: true },
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
            { id: "silent_wallcheck", label: "Silent Wall Check", type: "toggle", default: true },
            { id: "silent_teamcheck", label: "Silent Team Check", type: "toggle", default: true },
            { id: "silent_healthcheck", label: "Silent Health Check", type: "toggle", default: true },
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
            { id: "esp", label: "Master ESP Toggle", type: "toggle", default: true },
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
            { id: "damage_reticles", label: "Damage Reticles", type: "toggle", default: true }
        ]
    },

    "matrix": {
        "aimbot": [
            { id: "aimbot_Checked", label: "Enable Aimbot", type: "toggle", default: true },
            { id: "aimbotkey", label: "Aimbot Keybind (Code)", type: "number", default: 658 },
            { id: "partaimbot", label: "Target Part (0=Head, 1=Torso)", type: "number", default: 0 },
            { id: "predict_Checked", label: "Enable Prediction", type: "toggle", default: true },
            { id: "predictx", label: "Prediction X", type: "slider", min: 0, max: 20, step: 0.1, default: 0.0001 },
            { id: "predicty", label: "Prediction Y", type: "slider", min: 0, max: 20, step: 0.1, default: 0.0001 },
            { id: "aimbotsmooth", label: "Smoothness", type: "slider", min: 0.1, max: 20, step: 0.1, default: 1.0 },
            { id: "toggleaimbot_Checked", label: "Toggle Mode", type: "toggle", default: true },
            { id: "aimbotsticky_Checked", label: "Sticky Aim", type: "toggle", default: true },
            { id: "shake_Checked", label: "Aim Shake", type: "toggle", default: false },
            { id: "shakex", label: "Shake X Min", type: "slider", min: -50, max: 50, step: 1, default: -20 },
            { id: "shakey", label: "Shake Y Min", type: "slider", min: -50, max: 50, step: 1, default: 20 },
            { id: "shakexx", label: "Shake X Max", type: "slider", min: -50, max: 50, step: 1, default: -20 },
            { id: "shakeyy", label: "Shake Y Max", type: "slider", min: -50, max: 50, step: 1, default: 20 },
            { id: "fovcircle_Checked", label: "Show Aimbot FOV", type: "toggle", default: true },
            { id: "fovfloat", label: "FOV Size", type: "slider", min: 10, max: 1000, step: 1, default: 1000 }
        ],
        "silentaim": [
            { id: "silentaim_Checked", label: "Enable Silent Aim", type: "toggle", default: true },
            { id: "silentaim_keyBind", label: "Silent Aim Keybind", type: "number", default: 0 },
            { id: "fovsilent_Checked", label: "Show Silent FOV", type: "toggle", default: true },
            { id: "fovsilentval", label: "Silent FOV Size", type: "slider", min: 10, max: 1000, step: 1, default: 1000 },
            { id: "predictsilent_Checked", label: "Enable Silent Predict", type: "toggle", default: true },
            { id: "psilentx", label: "Predict X", type: "slider", min: 0, max: 20, step: 0.1, default: 10 },
            { id: "psilenty", label: "Predict Y", type: "slider", min: 0, max: 20, step: 0.1, default: 10 },
            { id: "nearpartsilent_Checked", label: "Nearest Part Aiming", type: "toggle", default: true }
        ],
        "visuals": [
            { id: "espbox_Checked", label: "ESP Box", type: "toggle", default: true },
            { id: "espfilled_Checked", label: "Filled Box", type: "toggle", default: true },
            { id: "espname_Checked", label: "ESP Names", type: "toggle", default: true },
            { id: "espdistance_Checked", label: "ESP Distance", type: "toggle", default: true },
            { id: "esphealth_Checked", label: "ESP Health", type: "toggle", default: true },
            { id: "espsnap_Checked", label: "Snaplines", type: "toggle", default: true },
            { id: "espbone_Checked", label: "Skeleton/Bone ESP", type: "toggle", default: true },
            { id: "limitdistance_Checked", label: "Limit ESP Distance", type: "toggle", default: true },
            { id: "limitdistancevalue", label: "Max ESP Distance", type: "slider", min: 0, max: 10000, step: 10, default: 10000 }
        ],
        "movement": [
            { id: "speedhack_Checked", label: "Speedhack", type: "toggle", default: true },
            { id: "speedhack_keyBind", label: "Speed Keybind (Default V)", type: "number", default: 0 },
            { id: "speedhackvalue", label: "Speed Value", type: "slider", min: 0, max: 5000, step: 1, default: 5000 },
            { id: "flight_Checked", label: "Flight", type: "toggle", default: true },
            { id: "flightspeed", label: "Flight Speed", type: "slider", min: 0, max: 100, step: 1, default: 10 },
            { id: "noclip_Checked", label: "Noclip", type: "toggle", default: true },
            { id: "noclipspeed", label: "Noclip Speed", type: "slider", min: 0, max: 100, step: 1, default: 10 },
            { id: "teleport_Checked", label: "Teleport Menu", type: "toggle", default: true },
            { id: "teleportspin_Checked", label: "Teleport Spin", type: "toggle", default: true },
            { id: "teleportrad", label: "Teleport Radius", type: "slider", min: 0, max: 50, step: 0.1, default: 10 },
            { id: "teleportspeed", label: "Teleport Speed", type: "slider", min: 0, max: 50, step: 0.1, default: 10 }
        ],
        "misc": [
            { id: "knife_Checked", label: "Knife Check", type: "toggle", default: false },
            { id: "knockdh_Checked", label: "Knock Check", type: "toggle", default: true },
            { id: "triggerbot_Checked", label: "Triggerbot", type: "toggle", default: true },
            { id: "triggerbotinterval", label: "Triggerbot Delay", type: "slider", min: 0, max: 5000, step: 1, default: 5000 },
            { id: "triggerbothitx", label: "Triggerbot Hit X", type: "slider", min: 0, max: 50, step: 1, default: 20 },
            { id: "triggerbothity", label: "Triggerbot Hit Y", type: "slider", min: 0, max: 50, step: 1, default: 20 },
            { id: "visualhitbox_Checked", label: "Visual Hitbox", type: "toggle", default: false },
            { id: "nosleep_Checked", label: "Anti Sleep", type: "toggle", default: true }
        ]
    }
};
