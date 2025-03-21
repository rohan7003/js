// Immediately Ivoked Function Expression (IIFE)

(function dkte() {
    // named iife
    console.log(`DB CONNECTED`);
}) ();

(() => {
    // unnamed iife
    console.log(`SERVER RUNNING`);  
}) ();

((name) => {
    console.log(`SERVER RUNNING ${name}`);  
}) ('SUCCESFULLY')