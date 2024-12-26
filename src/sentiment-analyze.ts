import Sentiment from 'sentiment';

export class SentimentAnalyze {
    private sentiment: Sentiment;

    constructor() {
        this.sentiment = new Sentiment();
    }

    analyze(text: string): { score: number; comparative: number; positive: string[]; negative: string[] } {
        const result = this.sentiment.analyze(text);
        return {
            score: result.score,
            comparative: result.comparative,
            positive: result.positive,
            negative: result.negative,
        };
    }
}
