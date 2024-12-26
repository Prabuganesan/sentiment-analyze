const { SentimentAnalyze } = require('./dist/sentiment-analyze');

const analyzer = new SentimentAnalyze();
const result = analyzer.analyze('I love programming but hate bugs.');
console.log(result);
