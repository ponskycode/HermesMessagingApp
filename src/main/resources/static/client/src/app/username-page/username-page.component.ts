import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-username-page',
  templateUrl: './username-page.component.html',
  styleUrls: ['./username-page.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class UsernamePageComponent {
  username: string = '';

  constructor(private router: Router, private chatService: ChatService) {}

  onSubmit() {
    this.chatService.connect(this.username, (message: string) => {
      // Handle incoming messages in chat component
    });
    this.router.navigate(['/chat']);
  }
}
