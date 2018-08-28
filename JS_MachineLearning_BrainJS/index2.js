const brain = require('brain.js');
const data = require('./data.json');

// Long-short term memory training

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 2000
});

const output = network.run('I fixed the power supply'); // run unknow text should learn from data

console.log(`Category: ${output}`);