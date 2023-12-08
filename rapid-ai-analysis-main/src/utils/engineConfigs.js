import { Configuration, OpenAIApi } from "azure-openai";

const clarifyEngine = new OpenAIApi(
  new Configuration({
    apiKey: "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",
    azure: {
      apiKey: "685df1377271420b90c3e5d3cf990006",
      endpoint: "https://rapid-openai-node.openai.azure.com/",
      deploymentName: "rapid-bot-v-1-0",
    },
  })
);
const generalEngine = new OpenAIApi(
  new Configuration({
    apiKey: "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",
    azure: {
      apiKey: "685df1377271420b90c3e5d3cf990006",
      endpoint: "https://rapid-openai-node.openai.azure.com/",
      deploymentName: "rapid-bot-v-1-0",
    },
  })
);

const engineConfigs = {
  clarifyEngine,
  generalEngine,
};

export default engineConfigs;
