require('dotenv').config();
import { initializeTelegram } from './src/service/telegram';
import { initializeWhatsApp } from './src/service/whatsapp';

const telegramEnabled = process.env.DISABLE_TELEGRAM === 'false';
const whatsappEnabled = process.env.DISABLE_WHATSAPP === 'false';

try {
  if (telegramEnabled) initializeTelegram();
  if (whatsappEnabled) initializeWhatsApp();
} catch (error) {
  console.log(error);
}
