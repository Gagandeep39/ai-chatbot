import { telegramBot } from './src/connection/telegram-connection';

// INitialize dot env
require('dotenv').config();

telegramBot.start((ctx) => ctx.reply('Welcome, to the telegramBot!'));
telegramBot.help((ctx) => ctx.reply('This is help Section'));
telegramBot.command('oldschool', (ctx) => ctx.reply('Hello'));
telegramBot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date().getTime() - start.getTime();
  console.log('Response time: %sms', ms);
});
// Repond to any geral text
telegramBot.on('message', (ctx) => ctx.reply('This is a generic query'));
telegramBot.launch();
console.log('Started Telegram telegramBot');
