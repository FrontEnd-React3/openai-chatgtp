//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

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-i2zCpP7gWEGozTOZikoO9mf3",
  apiKey: "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",
});
const openai = new OpenAIAPI(configuration);

async function callApi(){


const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
console.log(response.data.choices[0].text)
}
callApi()