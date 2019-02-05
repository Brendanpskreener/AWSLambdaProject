const _ = require('lodash');

exports.handler = async (event) => {
  const word = _.get(event, 'pathParameters.word')
  let reversed;
  if (word) {
    reversed = reverse(word)
  }
  const response = {
      statusCode: 200,
      body: JSON.stringify(reversed),
  };
  return response;
};

function reverse (word)  {
  let characters = word.split('')
  let wordLength = characters.length
  let reversedWord = []
  for ( let i = wordLength - 1; i >= 0; i-- ) {
    reversedWord.push(characters[i])
  }
  return reversedWord.join('')
}
