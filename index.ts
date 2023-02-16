require('dotenv').config();
import cron from 'node-cron';
import { keepRenderAwake } from './src/service/keep-alive';
import { initializeTelegram } from './src/service/telegram';
import { initializeWhatsApp } from './src/service/whatsapp';

const telegramEnabled = process.env.DISABLE_TELEGRAM === 'false';
const whatsappEnabled = process.env.DISABLE_WHATSAPP === 'false';

// Cron job to run every 10 minutes
cron.schedule('*/10 * * * *', () => keepRenderAwake());

try {
  if (telegramEnabled) initializeTelegram();
  if (whatsappEnabled) initializeWhatsApp();
} catch (error) {
  console.log(error);
}
