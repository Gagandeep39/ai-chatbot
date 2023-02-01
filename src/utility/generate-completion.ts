import { openAi } from '../connection/openai-connection';

export const generateCompletion = async (prompt: string): Promise<string> => {
  const res = await openAi.createCompletion({
    model: 'text-davinci-001',
    prompt,
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return res.data.choices[0].text!;
};
