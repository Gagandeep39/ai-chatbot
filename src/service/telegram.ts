import { TelegramError } from 'telegraf';
import { telegramBot } from '../connection/telegram-connection';
import { responseUsingOpenAi } from '../utility/telegram-interaction';
import fs from 'fs';
import path from 'path';
const lockFilePath = path.resolve(__dirname, 'bot.lock');

export function initializeTelegram() {
  try {
    // INitialize dot env
    fs.writeFileSync(lockFilePath, process.pid + '');
    // Your bot code goes here
  } catch (error) {
    console.error('Another instance of the bot is already running.');
    telegramBot.stop('SIGTERM');
    initializeTelegram();
  } finally {
    fs.unlinkSync(lockFilePath);
  }

  telegramBot.start((ctx) => ctx.reply('Welcome, to the telegramBot!'));
  telegramBot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date().getTime() - start.getTime();
    console.log('Response time: %sms', ms);
  });
  // Repond to any geral text
  telegramBot.on('message', responseUsingOpenAi);

  telegramBot.launch();
  console.log('Started Telegram telegramBot with PID: ', process.pid);
}
