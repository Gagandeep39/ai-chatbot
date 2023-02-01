// Import telegraf and initialize with a token
import { Telegraf } from 'telegraf';
// Initialize Morgan
import morgan from 'morgan';
morgan('dev');

// INitialize dot env
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);

bot.start((ctx) => ctx.reply('Welcome, to the bot!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.command('oldschool', (ctx) => ctx.reply('Hello'));
// bot.command('modern', ({ reply }) => reply('Yo'));
bot.command('hipster', Telegraf.reply('λ'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date().getTime() - start.getTime();
  console.log('Response time: %sms', ms);
});
// Repond to any geral text
bot.on('message', (ctx) => ctx.reply('This is a generic query'));
bot.launch();
console.log('Started Telegram Bot');
