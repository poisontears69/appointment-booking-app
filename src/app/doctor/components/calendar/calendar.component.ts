import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  viewMode: string = 'month';
  calendarDays: any[] = [];
  currentMonth: string = '';
  currentYear: number = 0;
  clinics = [{ name: 'Clinic One' }, { name: 'Clinic Two' }];
  queuedPatients = [{ name: 'Jane Doe' }, { name: 'John Smith' }];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.updateCalendar();
  }

  updateCalendar() {
    this.currentMonth = this.currentDate.toLocaleString('default', { month: 'long' });
    this.currentYear = this.currentDate.getFullYear();
    this.calendarDays = this.calendarService.getMonthView(this.currentDate);
  }

  setViewMode(mode: string) {
    this.viewMode = mode;
  }

  previous() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateCalendar();
  }

  next() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateCalendar();
  }

  goToToday() {
    this.currentDate = new Date();
    this.updateCalendar();
  }
}
