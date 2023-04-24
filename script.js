const envi =require("dotenv").config()
const apiKey = "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"; // Replace with your actual API key
 // Replace with the name of the model you want to use

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    prompt: 'The quick brown fox',
    max_tokens: 5,
    model: 'text-davinci-002',
  })
};

fetch('https://api.openai.com/v1/completions', requestOptions)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

