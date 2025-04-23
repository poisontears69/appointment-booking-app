import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {
  currentDate: Date = new Date();
  viewMode: 'day' | 'week' | 'month' = 'month';

  clinics = [
    { name: 'HealthConnect Clinic A' },
    { name: 'Wellness Center B' },
    { name: 'Downtown Medical' }
  ];

  queuedPatients = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Albert King' },
    { name: 'Rachel Green' },
    { name: 'Chris Rock' }
  ];

  constructor() {}

  ngOnInit(): void {}

  get currentMonth(): string {
    return this.currentDate.toLocaleString('default', { month: 'long' });
  }

  get currentYear(): number {
    return this.currentDate.getFullYear();
  }

  setViewMode(mode: 'day' | 'week' | 'month'): void {
    this.viewMode = mode;
  }

  goToToday(): void {
    this.currentDate = new Date();
  }

  next(): void {
    this.updateDate(1);
  }

  previous(): void {
    this.updateDate(-1);
  }

  private updateDate(step: number): void {
    const newDate = new Date(this.currentDate);

    switch (this.viewMode) {
      case 'day':
        newDate.setDate(newDate.getDate() + step);
        break;
      case 'week':
        newDate.setDate(newDate.getDate() + step * 7);
        break;
      case 'month':
        newDate.setMonth(newDate.getMonth() + step);
        break;
    }

    this.currentDate = newDate;
  }
}
