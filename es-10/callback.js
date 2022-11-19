const fsPack = require("node:fs");

fsPack.writeFile("message.txt", "Sono un file poco utile, per ora...", () => console.log("la callback dice no"));