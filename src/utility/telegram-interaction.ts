import { generateCompletion } from './generate-completion';

export const responseUsingOpenAi = async (ctx: any) => {
  const { text } = ctx.message as any;
  let res = await generateCompletion(text);
  return ctx.reply(res);
};
