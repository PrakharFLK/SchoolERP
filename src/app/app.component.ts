import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Admin', url: '/folder/Inbox', icon: 'school' },
    { title: 'Session', url: '/folder/Outbox', icon: 'time' },
    { title: 'Classes', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Sections', url: '/folder/Archived', icon: 'clipboard' },
    { title: 'Staff/Teacher', url: '/folder/Trash', icon: 'person' },
    { title: 'Student', url: '/folder/Spam', icon: 'people' },
  ];
  public labels = ['Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
