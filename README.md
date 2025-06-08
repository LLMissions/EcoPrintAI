# 🌱 EcoPrint AI – Sustainable Prompt Usage Estimator

**EcoPrint AI** is an open-source browser extension by [LL Missions](https://github.com/LLMissions) that estimates the carbon footprint of AI-generated text prompts in real-time. Built to promote transparency and sustainability in large language model (LLM) usage, EcoPrint empowers users to understand and reduce their environmental impact.

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

## 📦 Installation

1. [Download the latest release](https://github.com/LLMissions/EcoPrintAI/releases)
2. Unzip `ecoprint-extension.zip`
3. Open `chrome://extensions/` in your Chrome browser
4. Enable **Developer Mode**
5. Click **Load Unpacked**
6. Select the `ecoprint-extension/` folder

---

## 🧠 How It Works

```js
CO2e = (tokens / 1000) * modelFactor * emissionsPerKWh