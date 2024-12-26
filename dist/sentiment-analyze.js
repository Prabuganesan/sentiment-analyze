"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentimentAnalyze = void 0;
const sentiment_1 = __importDefault(require("sentiment"));
class SentimentAnalyze {
    constructor() {
        this.sentiment = new sentiment_1.default();
    }
    analyze(text) {
        const result = this.sentiment.analyze(text);
        return {
            score: result.score,
            comparative: result.comparative,
            positive: result.positive,
            negative: result.negative,
        };
    }
}
exports.SentimentAnalyze = SentimentAnalyze;
