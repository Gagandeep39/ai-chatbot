import axios from 'axios';
import body_parser from 'body-parser';
import express, { Request, Response } from 'express';
import { generateCompletion } from '../utility/generate-completion';
export const expressServer = express().use(body_parser.json()); // creates express http server

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
expressServer.get('/webhook', (req: Request, res: Response) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
   **/
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

// Accepts POST requests at /webhook endpoint
expressServer.post('/webhook', async (req: Request, res: Response) => {
  const token = process.env.WHATSAPP_TOKEN;

  // Check the Incoming webhook message
  console.log(JSON.stringify(req.body, null, 2));

  const reqMessageObject = req.body.entry[0].changes[0].value;
  let phone_number_id = reqMessageObject.metadata.phone_number_id;

  // When the input is not a message
  if (!reqMessageObject.messages) {
    return res.status(200).send('No message found');
  }
  let from = reqMessageObject.messages[0].from; // extract the phone number from the webhook payload
  let msg_body = reqMessageObject.messages[0].text.body; // extract the message text from the webhook payload
  let body = await generateCompletion(msg_body);

  const ackData = {
    messaging_product: 'whatsapp',
    status: 'read',
    message_id: reqMessageObject.messages[0].id,
  };
  const resData = {
    messaging_product: 'whatsapp',
    to: from,
    text: { body },
  };
  const url = `https://graph.facebook.com/v15.0/${phone_number_id}/messages`;
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  // Mark as read
  axios.post(url, ackData, headers);
  // Respond
  axios.post(url, resData, headers);
  res.sendStatus(200);
});
