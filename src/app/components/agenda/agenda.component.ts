import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'spa-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  events: string[] = [];

  addEvent(text: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${text} ${event.value.toLocaleDateString()}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
