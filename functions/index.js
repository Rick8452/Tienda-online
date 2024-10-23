const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

// Usando onRequest en una función de HTTP
exports.myFunction = functions.https.onRequest((request, response) => {
    logger.log("Request received:", request.body); // Usa logger
    response.send("Hello from Firebase!"); // Responde al cliente
});

// Si necesitas exportar otra función, hazlo así
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     logger.info("Hello logs!", {structuredData: true});
//     response.send("Hello from Firebase!");
// });
