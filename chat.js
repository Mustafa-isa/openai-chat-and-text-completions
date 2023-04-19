
const API_KEY = "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"; // Replace with your OpenAI API key
const MODEL_ID = 'davinci'; // Use the ID of the GPT-4 language model: "text-davinci-004"

const prompt = 'Hello, how are you?';
const temperature = 0.5; // Controls the "creativity" of the AI's responses
const maxTokens = 50; // Maximum number of tokens (words) in the AI's response

fetch(`https://api.openai.com/v1/engines/${MODEL_ID}/completions`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
        'prompt': prompt,
        'temperature': temperature,
        'max_tokens': maxTokens
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));