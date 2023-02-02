import { expressServer } from '../connection/express-connection';

export function initializeWhatsApp() {
  console.log('Started WhatsApp Server');

  expressServer.listen(process.env.PORT || 1337, () =>
    console.log('Whats App webhook is listening')
  );
}
