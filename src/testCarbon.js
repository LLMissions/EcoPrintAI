// testCarbon.js
require('dotenv').config(); // <-- This must be the very first line

console.log("Dotenv loaded."); // Add this line

const { estimateCarbonFootprint } = require('./carbonInterface');

async function runTest() {
  console.log("Running carbon footprint estimation test...");

  // Add a check here before calling the function
  if (process.env.CARBON_INTERFACE_API_KEY) {
      console.log("API Key loaded successfully from .env!");
      // console.log("API Key (first 5 chars):", process.env.CARBON_INTERFACE_API_KEY.substring(0, 5) + '...'); // For security, only show partial key
  } else {
      console.log("API Key NOT found in process.env after dotenv load.");
  }

  try {
    const testItems = [
      { type: "carbon_kg", value: 100 },
    ];

    const result = await estimateCarbonFootprint("us", "il", testItems);

    console.log("------------------------------------------");
    console.log("SUCCESS! Carbon Footprint Estimate:");
    console.log(`ID: ${result.id}`);
    console.log(`Type: ${result.type}`);
    console.log("Attributes:", result.attributes);
    console.log(`Carbon (kg): ${result.attributes.carbon_kg}`);
    console.log("------------------------------------------");

  } catch (error) {
    console.error("------------------------------------------");
    console.error("TEST FAILED:");
    console.error(error.message);
    if (error.stack) {
        console.error("Stack Trace:", error.stack);
    }
    console.error("------------------------------------------");
  }
}

runTest();