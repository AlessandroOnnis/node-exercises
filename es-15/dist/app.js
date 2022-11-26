"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const app = (0, express_1.default)();
function getPlanets() {
    const planets = [
        { name: 'Mercury' },
        { name: 'Venus' }
    ];
    return planets;
}
app.get('/', (req, res) => {
    res.send('There are planets?');
});
//curl localhost:3000 -v
app.get('/planets', (req, res) => {
    const planets = getPlanets();
    res.json(planets);
});
//curl localhost:3000/planets -v
exports.default = app;
//# sourceMappingURL=app.js.map