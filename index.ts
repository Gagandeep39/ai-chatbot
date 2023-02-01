require('dotenv').config();
import { openAi } from './src/connection/openai-connection';
import { telegramBot } from './src/connection/telegram-connection';

// INitialize dot env

// telegramBot.start((ctx) => ctx.reply('Welcome, to the telegramBot!'));
// telegramBot.help((ctx) => ctx.reply('This is help Section'));
// telegramBot.command('oldschool', (ctx) => ctx.reply('Hello'));
// telegramBot.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date().getTime() - start.getTime();
//   console.log('Response time: %sms', ms);
// });
// // Repond to any geral text
// telegramBot.on('message', async (ctx) => {

// });
// telegramBot.launch();
console.log('Started Telegram telegramBot');
openAi
  .createCompletion({
    model: 'text-davinci-001',
    prompt:
      "Hello",
    temperature: 0.4,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((res) => {
    console.log(res.data.choices[0].text);
  });
