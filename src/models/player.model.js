"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.playerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.playerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true }
});
exports.Player = mongoose_1.default.model('Player', exports.playerSchema);
