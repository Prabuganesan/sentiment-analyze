const { SentimentAnalyze } = require('./dist/sentiment-analyze');

const analyzer = new SentimentAnalyze();

// Test 1: Basic Sentiment Analysis
console.log('Test 1: Basic Sentiment Analysis');
const basicResult = analyzer.analyze('I love programming but hate bugs.');
console.log(basicResult);

// Test 2: Batch Analysis
console.log('\nTest 2: Batch Analysis');
const batchResult = analyzer.batchAnalyze([
    'I love programming.',
    'I hate bugs.',
    'Debugging is frustrating but rewarding.'
]);
console.log(batchResult);

// Test 3: Emotion Detection
console.log('\nTest 3: Emotion Detection');
const emotionResult = analyzer.detectEmotion('I feel good.');
console.log(emotionResult);
