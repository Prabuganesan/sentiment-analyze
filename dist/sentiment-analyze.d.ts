export declare class SentimentAnalyze {
    private sentiment;
    constructor();
    analyze(text: string): {
        score: number;
        comparative: number;
        positive: string[];
        negative: string[];
    };
}
