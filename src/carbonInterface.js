// At the very top of your file, assuming this is a Node.js environment
// and you've installed dotenv: npm install dotenv
require('dotenv').config();

const fetch = require('node-fetch');

/**
 * Estimates the carbon footprint for a given country, state, and an array of items.
 *
 * @param {string} country - The country for the estimate (e.g., "us").
 * @param {string} state - The state for the estimate (e.g., "il").
 * @param {Array<Object>} items - An array of objects, each containing a 'type' and 'value'.
 * Example: [{ type: "carbon_kg", value: 100 }]
 * @returns {Promise<Object>} A promise that resolves to the carbon footprint estimate data.
 * @throws {Error} If the API request fails, or the response structure is unexpected.
 */
async function estimateCarbonFootprint(country, state, items) {
  // 1. Validate inputs early
  if (!country || typeof country !== 'string') {
    throw new Error('Country must be a non-empty string.');
  }
  if (!state || typeof state !== 'string') {
    throw new Error('State must be a non-empty string.');
  }
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Items must be a non-empty array.');
  }
  if (!process.env.CARBON_INTERFACE_API_KEY) {
    throw new Error('CARBON_INTERFACE_API_KEY is not defined in your .env file.');
  }
  if (!process.env.CARBON_INTERFACE_API_URL) {
      console.warn("CARBON_INTERFACE_API_URL is not defined in .env. Using default URL.");
  }

  // Use environment variable for the API URL
  const API_BASE_URL = process.env.CARBON_INTERFACE_API_URL || "https://www.carboninterface.com/api/v1/estimates";
  const API_KEY = process.env.CARBON_INTERFACE_API_KEY;

  const requestBody = {
    type: "estimates",
    country: country,
    state: state,
    data: items.map(item => ({
        type: item.type,
        // Ensure values are numbers, as API likely expects them
        value: Number(item.value)
    }))
  };

  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        // Ensure correct Authorization header format: 'Bearer YOUR_API_KEY'
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/json" // Explicitly request JSON response
      },
      body: JSON.stringify(requestBody),
    });

    // 2. Check if the response was successful (HTTP status 2xx)
    if (!response.ok) {
      let errorBody = {};
      try {
        // Attempt to parse error details from the response body
        errorBody = await response.json();
      } catch (jsonError) {
        // If parsing fails, the body might not be JSON, or it's empty
        console.error("Failed to parse error response body as JSON:", jsonError);
        // Fallback to text if JSON parsing fails
        try {
            errorBody = await response.text();
        } catch (textError) {
            errorBody = "Could not read response body.";
        }
      }

      // Construct a more informative error message
      const errorMessage = `Carbon Interface API request failed with status ${response.status}: ${response.statusText}`;
      console.error("API Error Response:", errorBody); // Log the full error body for debugging
      throw new Error(`${errorMessage}. Details: ${JSON.stringify(errorBody)}`);
    }

    // 3. Parse the JSON response
    const data = await response.json();

    // 4. Validate the structure of the successful response
    // Based on Carbon Interface docs, a successful estimate has a 'data' object with 'id', 'type', and 'attributes'.
    // The attributes then contain the carbon estimates.
    if (!data || !data.data || !data.data.id || !data.data.type || !data.data.attributes) {
      console.error("Carbon Interface API response had unexpected structure:", data);
      throw new Error("Unexpected successful response structure from Carbon Interface API.");
    }

    // You might want to return the whole data object or just the attributes
    return data.data; // Returning the 'data' object which contains 'id', 'type', and 'attributes'

  } catch (error) {
    // Catch any network errors or errors thrown from the above checks
    console.error("Error in estimateCarbonFootprint:", error.message);
    throw new Error(`Failed to estimate carbon footprint: ${error.message}`);
  }
}

module.exports = {
  estimateCarbonFootprint,
};