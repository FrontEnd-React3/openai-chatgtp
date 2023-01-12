import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-i2zCpP7gWEGozTOZikoO9mf3",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
async function callApi() {
  const response = await openai.createCompletion({
    "model": "text-davinci-003",
    "prompt": "Say this is a test",
    "max_tokens": 7,
    "temperature": 0
  });
  console.log(response.data.choices[0].text)
}
callApi()