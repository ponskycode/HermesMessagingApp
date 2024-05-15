import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ChatPageComponent {
  messages: string[] = [];
  message: string = '';
  connecting: boolean = true;

  constructor(private chatService: ChatService) {
    this.chatService.connect('username', (message: string) => {
      this.connecting = false;
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}
