import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.less'
})
export class MessagesComponentDoctor {
  contacts = [
    { name: 'John Doe', lastMessage: 'Hey, how are you?' },
    { name: 'Jane Smith', lastMessage: 'See you soon!' },
    { name: 'Clinic Admin', lastMessage: 'Appointment confirmed.' }
  ];

  messages = [
    { text: 'Hi there!', sent: true, timestamp: '10:00 AM' },
    { text: 'Hello, doctor!', sent: false, timestamp: '10:01 AM' }
  ];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        sent: true,
        timestamp: new Date().toLocaleTimeString()
      });
      this.newMessage = '';
    }
  }

  triggerFileUpload() {
    const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
    fileInput?.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  }
}
