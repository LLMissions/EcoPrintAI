<!--
  README.md – EcoPrint AI by LL Missions

  Updates:
  - 📸 Screenshots section added (MVP UI only, obfuscated)
  - 🔒 IP disclaimer inserted to protect proprietary logic
  - 🛡️ Copyright footer added

  Maintainer Notes:
  - Screenshots must be added manually to /assets/ folder:
    - assets/ecoprint-popup-blurred.png
    - assets/eco-output-blurred.png
  - Keep formula and backend logic minimal for IP protection
  - Reach out to Adrian Young via GitHub for collab/licensing

  Last updated: June 28, 2025
-->
# 🌱 EcoPrint AI – Sustainable Prompt Usage Estimator

**EcoPrint AI** is an open-source browser extension by [LL Missions](https://github.com/LLMissions) that estimates the carbon footprint of AI-generated text prompts in real-time. Built to promote transparency and sustainability in large language model (LLM) usage, EcoPrint AI empowers users to understand and reduce their environmental impact.

---

## 🔍 What It Does

- Calculates estimated CO₂ emissions from AI prompt usage
- Uses token count and model type to estimate energy consumption
- Returns output in kg CO₂e using standard carbon conversion metrics
- Lightweight Chrome popup UI for quick, transparent insights

---

## 🚀 Features (v1.0)

- ✅ Token-based CO₂e calculator
- ✅ Model dropdown: GPT-3.5, GPT-4, Claude 3
- ✅ Clean, simple UI (Chrome extension)
- ✅ MVP-ready architecture for scaling

---

## 🖼️ Screenshots (MVP Preview)

> UI only – final formula and backend logic withheld to protect IP

### 🔘 Extension Popup
![Extension UI](assets/ecoprint-popup-blurred.png)

### ♻️ Example Output (Obfuscated)
![Carbon Estimate Output](assets/eco-output-blurred.png)

---

## 📦 Installation

1. [Download the latest release](https://github.com/LLMissions/EcoPrintAI/releases)
2. Unzip `ecoprint-ai-extension.zip`
3. Open `chrome://extensions/` in your Chrome browser
4. Enable **Developer Mode**
5. Click **Load Unpacked**
6. Select the `ecoprint-ai-extension/` folder

---

## 🧠 How It Works

```js
CO2e = (tokens / 1000) * modelFactor * emissionsPerKWh
```

---

⚠️ Disclaimer
The current version of the EcoPrint AI Carbon Calculator only supports text-based prompts. It does not yet account for image, audio, or video generation prompts, which typically consume more energy. Support for multimedia prompts will be added in a future release.

---

## 🧰 Hackathon Submission – Bolt.new

This project was submitted to the [Bolt.new Hackathon](https://bolt.new) and is built to raise awareness about the carbon footprint of AI interactions.

### 🔨 What Was Built
- 🧠 The **landing page** for EcoPrint AI was created with [Bolt Builder](https://bolt.new)
- 🌐 Hosted live at [https://ecoprintai.net](https://ecoprintai.net) via [Netlify](https://www.netlify.com/)
- 🧪 The core MVP logic (carbon prompt calculator) was built in JavaScript and is currently implemented as a browser extension
- ⚙️ Future premium versions will be hosted directly inside Bolt with added backend functionality and subscription support

---

⚠️ **IP Notice**  
This project contains proprietary logic and calculation methods developed by LL Missions. Core formulas and backend architecture are partially redacted from public view to protect intellectual property. For collaboration or licensing inquiries, contact Adrian Young via GitHub.

---

## 🎯 Challenge Participation

This submission qualifies for the following Bolt.new sponsor challenges:

- ✅ **Custom Domain Challenge**  
  - Domain `ecoprintai.net` purchased via [IONOS](https://www.ionos.com/) using [Entri](https://entri.app)

- ✅ **Deploy Challenge**  
  - Hosted via [Netlify](https://www.netlify.com) and connected directly to the Bolt.new project

- 🚧 **RevenueCat – Make More Money Challenge** *(in progress)*  
  - Planning to integrate [RevenueCat](https://www.revenuecat.com) to enable subscription tiers for premium EcoPrint features inside Bolt

---

## 💬 Want to Collaborate?

This project is solo-built by [Adrian Young](https://github.com/LLMissions). If you’re a dev, climate advocate, or just someone with good vibes and clean code, feel free to fork, PR, or reach out.

---
© 2025 LL Missions. All rights reserved.