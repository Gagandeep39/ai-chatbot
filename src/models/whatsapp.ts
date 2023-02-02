export interface WhatsApp {
  object: string;
  entry: Entry[];
}

export interface Entry {
  id: string;
  changes: Change[];
}

export interface Change {
  value: Value;
  field: string;
}

export interface Value {
  messaging_product: string;
  metadata: Metadata;
  // contacts: Contact[]; // Not Important
  messages?: Message[]; // only for message changes
  statuses?: Status[]; // only for status changes
}

export interface Metadata {
  display_phone_number: string;
  phone_number_id: string;
}

// When User Sends a message
export interface Message {
  from: string;
  id: string;
  timestamp: string;
  type: 'reaction' | 'text' | string;
  reaction?: Reaction;
  text?: Text;
}

export interface Reaction {
  message_id: string;
  emoji: string;
}

export interface Text {
  body: string;
}

// When Bussines Sends a Message
export interface Status {
  id: string;
  status: string;
  timestamp: string;
  recipient_id: string;
  conversation: Conversation;
  pricing: Pricing;
}

export interface Conversation {
  id: string;
  expiration_timestamp: string;
  origin: Origin;
}

export interface Origin {
  type: string;
}

export interface Pricing {
  billable: boolean;
  pricing_model: string;
  category: string;
}
