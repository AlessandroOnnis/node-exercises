"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMulterMiddleware = exports.multerOption = void 0;
const multer_1 = __importDefault(require("multer"));
//import di multer
//creazione di uno storage
const storage = multer_1.default.diskStorage({
    destination: "uploads/"
});
//il nostro setting di multer
exports.multerOption = {};
//export dell'inizializzazione
const initMulterMiddleware = () => {
    return (0, multer_1.default)({ storage, ...exports.multerOption });
};
exports.initMulterMiddleware = initMulterMiddleware;
//# sourceMappingURL=multer.js.map