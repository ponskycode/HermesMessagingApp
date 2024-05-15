import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any;
  private messageCallback: (message: string) => void;

  connect(username: string, onMessageReceived: (message: string) => void) {
    const socket = new SockJS('/ws');
    this.stompClient = Stomp.over(socket);
    this.messageCallback = onMessageReceived;

    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/public', (message: any) => {
        onMessageReceived(message.body);
      });
      this.stompClient.send('/app/chat.addUser', {}, JSON.stringify({ sender: username, type: 'JOIN' }));
    }, (error: any) => {
      console.error('Error: ' + error);
    });
  }

  sendMessage(message: string) {
    this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify({ content: message, type: 'CHAT' }));
  }
}
