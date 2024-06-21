//OpenAI Dependency
import OpenAI from "openai";
// Dependencies for callable functions.
const {onCall, HttpsError} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions/v2");

const openAI_key = defineString("OPENAI_API_KEY");
const openAI = new OpenAI();
//Calls the OpenAI API with user input text and gives endpoint response
exports.askGPT = onCall((request) => {

});