import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { UsernamePageComponent } from './username-page/username-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

export const routes: Routes = [
  { path: '', component: UsernamePageComponent },
  { path: 'chat', component: ChatPageComponent }
];

export const appRoutingProviders = [
  provideRouter(routes)
];
