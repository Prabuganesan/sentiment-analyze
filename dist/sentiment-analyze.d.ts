export declare class SentimentAnalyze {
    private sentiment;
    constructor();
    /**
     * Analyze a single text for sentiment.
     */
    analyze(text: string): {
        score: number;
        comparative: number;
        positive: string[];
        negative: string[];
    };
    /**
     * Analyze multiple texts and return aggregated results.
     */
    batchAnalyze(texts: string[]): {
        averageScore: number;
        totalScore: number;
        results: Array<{
            text: string;
            score: number;
            comparative: number;
        }>;
    };
    /**
     * Detect emotion categories based on text.
     */
    detectEmotion(text: string): {
        emotion: string;
        score: number;
    };
}
