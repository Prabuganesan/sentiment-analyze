import Sentiment from 'sentiment';

export class SentimentAnalyze {
    private sentiment: Sentiment;

    constructor() {
        this.sentiment = new Sentiment();
    }

    /**
     * Analyze a single text for sentiment.
     */
    analyze(text: string): { 
        score: number; 
        comparative: number; 
        positive: string[]; 
        negative: string[]; 
    } {
        const result = this.sentiment.analyze(text);
       

        return {
            score: result.score,
            comparative: result.comparative,
            positive: result.positive,
            negative: result.negative
        };
    }

    /**
     * Analyze multiple texts and return aggregated results.
     */
    batchAnalyze(texts: string[]): { 
        averageScore: number; 
        totalScore: number; 
        results: Array<{ text: string; score: number; comparative: number }> 
    } {
        let totalScore = 0;
        const results = texts.map(text => {
            const result = this.sentiment.analyze(text);
            totalScore += result.score;
            return {
                text,
                score: result.score,
                comparative: result.comparative,
            };
        });

        return {
            averageScore: totalScore / texts.length,
            totalScore,
            results,
        };
    }

    /**
     * Detect emotion categories based on text.
     */






    detectEmotion(text: string): { emotion: string; score: number } {
        // Perform sentiment analysis using the sentiment library
        const sentimentResult = this.sentiment.analyze(text);
        let score = sentimentResult.score; // Get the score from sentiment analysis
        
        const negativeWords = [
            'Angry', 'Sad', 'Upset', 'Miserable', 'Depressed', 'Hate', 'Frustrating', 'Lonely', 'Hurt', 'Disappointed', 'Worried', 'Guilty', 'Nervous', 'Hopeless', 'Stressed', 'Anxious', 'Terrible', 'Awful', 'Painful', 'Anger', 'Rage', 'Resentful', 'Grief', 'Fear', 'Sorrow', 'Pessimistic', 'Distressed', 'Jealous', 'Disgusted', 'Shameful', 'Ugly', 'Unhappy', 'Hopeless', 'Lousy', 'Nervous', 'Heartbroken', 'Abandoned', 'Betrayed', 'Miserable', 'Confused', 'Disillusioned', 'Insulted', 'Regretful', 'Disheartened', 'Insecure', 'Dejected', 'Defeated', 'Exhausted', 'Angry', 'Disturbed', 'Unwanted', 'Neglected', 'Frightened', 'Paranoid', 'Shattered', 'Unlucky', 'Rejected', 'Hurtful', 'Tragic', 'Desolate', 'Angry', 'Lamenting', 'Fuming', 'Hopelessness', 'Annoyed', 'Discontent', 'Broken', 'Depressing', 'Disheartened', 'Mournful', 'Frantic', 'Repulsed', 'Regretful', 'Tormented', 'Dismal', 'Livid', 'Negativity', 'Bitter', 'Aggressive', 'Miserable', 'Ashamed', 'Exasperated', 'Uncertain', 'Insecure', 'Worried', 'Distraught', 'Resentful', 'Agitated', 'Threatened', 'Disgusted', 'Toxic', 'Unfulfilled', 'Tense', 'Restless', 'Hopeless', 'Jaded', 'Desperate', 'Uneasy', 'Suffering', 'Unhappy', 'Displeased', 'Uncertain', 'Crushed', 'Paralyzed', 'Resigned', 'Abysmal', 'Dismayed', 'Dread', 'Apprehensive', 'Distressed', 'Lamentable', 'Desperate', 'Regret', 'Disillusionment', 'Shattered', 'Discomfort', 'Bleak', 'Grievous', 'Cynical', 'Frustrated', 'Resentment', 'Torment', 'Insufferable', 'Shocked', 'Fearful', 'Sickened', 'Troubled', 'Agony', 'Disturbing', 'Troublesome', 'Disconcerting', 'Ravaged', 'Turbulent', 'Horrible', 'Appalling', 'Crushed', 'Devastating', 'Scary', 'Disastrous', 'Painful', 'Sickening', 'Betrayal', 'Bitter', 'Shocking', 'Devastation', 'Exhausting', 'Excruciating', 'Crisis', 'Mourn', 'Injustice', 'Hurtful', 'Tragic', 'Uncertain', 'Regretful', 'Unfulfilling', 'Deflated', 'Disrupted', 'Persecuted', 'Anguish', 'Appalling', 'Doubtful', 'Perplexed', 'Apprehension', 'Pain', 'Burdened', 'Depressive', 'Disappointing', 'Heavy-hearted', 'Exhausted', 'Weak', 'Grief-stricken', 'Melancholy', 'Undone', 'Disturbing', 'Shamed', 'Embarrassed', 'Perplexed', 'Numb', 'Worried', 'Cynicism', 'Skeptical', 'Frantic', 'Despondent', 'Lonely', 'Rushed', 'Embittered', 'Torn', 'Disillusioned', 'Unstable', 'Rough', 'Despairing', 'Miserable', 'Hollow', 'Ashen', 'Paralyzed', 'Hurt', 'Confused', 'Tense', 'Weary', 'Despondent', 'Lost', 'Frantic', 'Defeated', 'Frightened', 'Overwhelmed', 'Shunned', 'Burned', 'Disgrace', 'Lackluster', 'Hollow', 'Shattered', 'Vulnerable', 'Dejected', 'Unappreciated', 'Spiteful', 'Repelled', 'Vexed', 'Shocked', 'Jaded', 'Hopelessness', 'Discontent', 'Abandoned', 'Defenseless', 'Disruptive', 'Paralyzed', 'Livid', 'Awkward', 'Resentful', 'Hostile', 'Troubled', 'Abandoned', 'Mourning'
        ];
    
        const positiveWords = [
           'Happy', 'Joyful', 'Excited', 'Love', 'Content', 'Grateful', 'Cheerful', 'Optimistic', 'Delighted', 'Blessed', 'Hopeful', 'Peaceful', 'Elated', 'Thrilled', 'Ecstatic', 'Grateful', 'Eager', 'Inspired', 'Jovial', 'Satisfied', 'Playful', 'Proud', 'Radiant', 'Wonderful', 'Thankful', 'Joyous', 'Motivated', 'Upbeat', 'Enthusiastic', 'Good', 'Fantastic', 'Positive', 'Supportive', 'Admire', 'Bright', 'Determined', 'Fond', 'Trustful', 'Faithful', 'Loving', 'Kind', 'Strong', 'Courageous', 'Vibrant', 'Confident', 'Serene', 'Uplifted', 'Creative', 'Fulfilled', 'Blessed', 'Successful', 'Victorious', 'Vibrant', 'Beautiful', 'Rejuvenated', 'Admirable', 'Inspired', 'Caring', 'Friendly', 'Calm', 'Harmonious', 'Grounded', 'Free', 'Balanced', 'Humble', 'Invigorated', 'Positive', 'Optimistic', 'Thankful', 'Peaceful', 'Refreshing', 'Powerful', 'Encouraged', 'Blessed', 'Energetic', 'Hopeful', 'Enthusiastic', 'Excited', 'Motivated', 'Fulfilled', 'Celebrated', 'Invigorating', 'Grateful', 'Encouraging', 'Rejoicing', 'Confident', 'Optimistic', 'Resilient', 'Joyous', 'Rewarding', 'Amazing', 'Peaceful', 'Vibrant', 'Cheerful', 'Kind-hearted', 'Blissful', 'Tender', 'Appreciative', 'Grateful', 'Hopeful', 'Self-assured', 'Harmonious', 'Triumphant', 'Pure', 'Bubbly', 'Light-hearted', 'Victorious', 'Successful', 'Serene', 'Bright', 'Invincible', 'Loving', 'Radiant', 'Wonderful', 'Proud', 'Vigorous', 'Empowered', 'Abundant', 'Contented', 'Succeeding', 'Fresh', 'Renewed', 'Noble', 'Diligent', 'Generous', 'Victorious', 'Magnificent', 'Secure', 'Thriving', 'Bright-eyed', 'Uplifted', 'Optimizing', 'Comforting', 'Exhilarated', 'Nurturing', 'Wise', 'Flourishing', 'Happiness', 'Luminous', 'Abundant', 'Elevated', 'Elevating', 'Appreciating', 'Encouraging', 'Kind-hearted', 'Optimistic', 'Faith-filled', 'Blessed', 'Exuberant', 'Encouraging', 'Rejuvenated', 'Vibrant', 'Uplifting', 'Fortunate', 'Exciting', 'Free-spirited', 'Open-minded', 'Refreshed', 'Successful', 'Balanced', 'Jubilant', 'Confident', 'Graceful', 'Sincere', 'Magnanimous', 'Rejoicing', 'Glowing', 'Composed', 'Cheerful', 'Jovial', 'Gracious', 'Lively', 'Euphoric', 'Inviting', 'Vivacious', 'Bright-spirited', 'Resplendent', 'Upbeat', 'Harmonized', 'Generous', 'Luminous', 'Altruistic', 'Radiating', 'Glorious', 'Comfortable', 'Rejoiceful', 'Optimized', 'Fulfilling', 'Flourishing', 'Nurturing', 'Serenity', 'Lively', 'Resilient', 'Passionate', 'Glistening', 'Vibrantly', 'Genuine', 'Tranquil', 'Uplifting', 'Inspirational', 'Unstoppable', 'Serenely', 'Vibrantly', 'Charming', 'Euphoric', 'Optimizing', 'Self-sufficient', 'Happy', 'Loving', 'Joyous', 'Blissful', 'Sociable', 'Supportive', 'Hopeful','Lovely','Joy'
        ];
    

        // Split the text into words
        const words = text.toLowerCase().split(/\s+/);

        // Iterate over the words and check for sentiment using the word lists
        words.forEach(word => {
            if (negativeWords.includes(word)) {
                score--; // Decrease score for negative words
            } else if (positiveWords.includes(word)) {
                score++; // Increase score for positive words
            }
        });

        // Determine the emotion based on the final score
        let emotion = 'neutral';
        if (score > 0) {
            emotion = 'happiness';
        } else if (score < 0) {
            emotion = 'sadness';
        }

        return { emotion: emotion, score: score };
    }
        
}
