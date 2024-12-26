A lightweight and easy-to-use npm package for performing sentiment analysis on text. Analyze the positivity, negativity, or neutrality of any string input with ease.

**🌟 Features**

Simple and intuitive API for sentiment analysis.
Returns detailed sentiment results (score, comparative, positive words, negative words).
Lightweight and efficient.

**📦 Installation**

Install the package via npm:
```
npm install sentiment-analyze
```

**🚀 Usage**

Here's how to use the sentiment-analyze package in your Node.js project:

**Example**
```
// Import the SentimentAnalyzer
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

**📊 Output Format**

The result object contains the following fields:

score: Overall sentiment score (positive or negative).
comparative: Comparative score relative to the text length.
positive: Array of positive words detected.
negative: Array of negative words detected.


**🔧 Methods**

```
analyze(text: string)
Analyzes the sentiment of the given text.

Parameters
text (string): The text to analyze.
```
Returns
An object containing:

-score: Sentiment score (number).

-comparative: Comparative sentiment score (number).

-positive: Array of positive words (string[]).

-negative: Array of negative words (string[]).


**🛠️ Development**

Clone the repository to contribute or make changes:

```
git clone https://github.com/<your-username>/sentiment-analyze.git
cd sentiment-analyze
npm install
```

To build the package:

```
npx tsc
```

To test the package:
```
node test.js
```

**📝 License**

This project is licensed under the MIT License. See the LICENSE file for details.

