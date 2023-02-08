import { generateCompletion } from './generate-completion';

export const responseUsingOpenAi = async (ctx: any) => {
  const { text } = ctx.message as any;
  let res = await generateCompletion(text);
  // Split string if string length exceeds 2000 and Append 'Telegram Limit Exceeded' to the end
  if (res.length > 2000) {
    res =
      res.split('').splice(0, 2000).join('') +
      '\nTelegram Limit Exceeded. Original Text Length: ' +
      res.length;
  }

  return ctx.reply(res);
};
