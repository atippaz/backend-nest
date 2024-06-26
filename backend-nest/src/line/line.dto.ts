export interface LineWebHookPayload {
  destination: string;
  events: Event[];
}

export interface Event {
  type: string;
  message: Message;
  webhookEventId: string;
  deliveryContext: DeliveryContext;
  timestamp: number;
  source: Source;
  replyToken: string;
  mode: string;
}

export interface Message {
  type: string;
  id: string;
  quotedMessageId: string;
  quoteToken: string;
  text: string;
}

export interface DeliveryContext {
  isRedelivery: boolean;
}

export interface Source {
  type: string;
  groupId: string;
  userId: string;
}
