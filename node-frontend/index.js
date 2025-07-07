const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNinu(question) {
    axios.post("http://localhost:5000/ask", { prompt: question })
        .then(res => {
            console.log("Ninu:", res.data.response);
            rl.prompt();
        })
        .catch(err => {
            console.error("Error:", err.message);
            rl.prompt();
        });
}

console.log("Welcome to Ninu AI! Type your question:");
rl.setPrompt("> ");
rl.prompt();

rl.on("line", (line) => {
    if (line.trim().toLowerCase() === "exit") {
        rl.close();
        return;
    }
    askNinu(line.trim());
});
