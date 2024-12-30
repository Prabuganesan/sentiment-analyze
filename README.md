A lightweight and easy-to-use npm package for performing sentiment analysis on text. Analyze the positivity, negativity, or neutrality of any string input with ease, and process multiple texts in batch for more efficient analysis.

**🌟 Features**

- **Simple and intuitive API** for sentiment analysis.
- Returns detailed sentiment results (score, comparative, positive words, negative words).
- **Batch analysis** for processing multiple texts at once.
- **Emotion detection** that categorizes sentiment as happiness, sadness, or neutral.
- Lightweight and efficient, with minimal dependencies.

## ❤️ Support My Work!
Maintaining this package requires effort and dedication. If this project helped you, consider buying me a coffee or supporting me via PayPal. Every donation helps keep this project alive!  

[![Support via PayPal](https://img.shields.io/badge/Support-PayPal.me-blue?style=for-the-badge&logo=paypal)](https://paypal.me/prabuganesan)


**📦 Installation**

Install the package via npm:
```
npm install sentiment-analyze
```

**🚀 Usage**

Here's how to use the sentiment-analyze package in your Node.js project:

**Example 1: Basic Sentiment Analysis**
```
// Import the SentimentAnalyze
const { SentimentAnalyze } = require('sentiment-analyze');

// Create an instance of SentimentAnalyzer
const analyzer = new SentimentAnalyze();

// Analyze a text string
const result = analyzer.analyze('I love programming but hate bugs.');

console.log(result);
// Output:
// {
//   score: 0,
//   comparative: 0,
//   positive: ['love'],
//   negative: ['hate']
// }
```

**Example 2: Batch Sentiment Analysis**
```
// Create an instance of SentimentAnalyzer
const analyzer = new SentimentAnalyze();

// Analyze multiple texts in batch
const batchResult = analyzer.batchAnalyze([
  'I am happy with my work.',
  'This is such a terrible day.',
  'I feel neutral about this.'
]);

console.log(batchResult);
// Output:
// [
//   { score: 2, comparative: 0.4, positive: ['happy'], negative: [] },
//   { score: -2, comparative: -0.4, positive: [], negative: ['terrible'] },
//   { score: 0, comparative: 0, positive: [], negative: [] }
// ]


```

**Example 3: Emotion Detection**
```
// Create an instance of SentimentAnalyzer
const analyzer = new SentimentAnalyze();

// Detect emotion in a sentence
const emotionResult = analyzer.detectEmotion('I am feeling great today!');
console.log(emotionResult);
// Output:
// {
//   emotion: 'happiness',
//   score: 2
// }

```


**📊 Output Format**

The result object contains the following fields:

*  score: Overall sentiment score (positive or negative)
*  comparative: Comparative score relative to the text length.
*  positive: Array of positive words detected.
*  negative: Array of negative words detected.


For emotion detection:

*  emotion: The detected emotion (happiness, sadness, or neutral).
*  score: A numeric score that indicates the overall sentiment intensity.


**🔧 Methods**

```
analyze(text: string)
```
Analyzes the sentiment of the given text.

Parameters:
*  text (string): The text to analyze.

Returns:

An object containing:

*  score: Sentiment score (number).
*  comparative: Comparative sentiment score (number).
*  positive: Array of positive words (string[]).
*  negative: Array of negative words (string[]).

```
batchAnalyze(texts: string[])
```
Analyzes an array of text strings in batch.

Parameters:
*  texts (string[]): An array of texts to analyze.

Returns:

An array of sentiment results for each text, each containing:

*  score: Sentiment score (number).
*  comparative: Comparative sentiment score (number).
*  positive: Array of positive words (string[]).
*  negative: Array of negative words (string[]).

```
detectEmotion(text: string)
```
Detects the emotion of the given text based on positive and negative word lists.

Parameters:
*  text (string): The text to analyze.

Returns:

An object containing:

*  emotion: The detected emotion (happiness, sadness, or neutral).
*  score: A numeric score indicating the overall sentiment intensity.



**📝 License**

This project is licensed under the MIT License. See the LICENSE file for details.

