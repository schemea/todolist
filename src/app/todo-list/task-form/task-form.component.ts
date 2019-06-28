import { Component } from '@angular/core';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less']
})
export class TaskFormComponent {

  constructor() { }
  title: string;
  details: string;
  onSubmit = (task: Task) => { };
  onNgSubmit = (form: TaskFormComponent) => {
    this.onSubmit({
      title: this.title,
      details: this.details,
      done: false
    });
  }
}
