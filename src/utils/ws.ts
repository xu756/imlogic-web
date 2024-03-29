// import Crypoto from './crypto';
import { Message } from '@/model';

export class WebSocketService {
  private ws: WebSocket | null = null;
  private readonly url: string;
  public data: Message;
  public event = new EventTarget();

  constructor(url: string) {
    this.url = url;
    this.data = {} as Message;
  }

  connect(): void {
    this.ws = new WebSocket(this.url);
    this.ws.onopen = () => {
      console.log('WebSocket connected');
    };
    this.ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      this.data = data;
      console.log(data);
      // this.event.dispatchEvent(new Event('message'));
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
    };
    this.ws.onerror = () => {
      console.log('WebSocket error');
    };
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  send(data: Message): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
      console.error('WebSocket is not connected');
    }
  }
}
