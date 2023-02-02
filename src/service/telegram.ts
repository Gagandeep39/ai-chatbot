import { telegramBot } from '../connection/telegram-connection';
import { responseUsingOpenAi } from '../utility/telegram-interaction';

export function initializeTelegram() {
  // INitialize dot env

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
  console.log('Started Telegram telegramBot');
}
