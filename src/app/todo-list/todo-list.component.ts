import { Component, NgModule, ElementRef, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { TaskPopupComponent } from './popup/popup.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { CookieService } from 'ngx-cookie-service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todolist',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  title = 'Tasks';
  tasks: Task[] = [];
  currentTask: Task = null;
  TaskComponent = TaskPopupComponent;

  constructor(private ref: ElementRef, private cookies: CookieService) {
    const tasksJSON = cookies.get('tasks');
    if (tasksJSON) { this.tasks = JSON.parse(tasksJSON); }
  }

  @ViewChild('popup', { read: ElementRef, static: false }) popup: ElementRef;
  @ViewChild('form', undefined) form: TaskFormComponent;

  showDetails(task: Task, event: MouseEvent) {
    this.currentTask = task;
  }
  onPopupClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target === this.popup.nativeElement) {
      this.currentTask = null;
    }
  }

  onTaskChanged(task: Task) {
    this.cookies.set('tasks', JSON.stringify(this.tasks));
  }

  onDropped(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.onTaskChanged(this.tasks[event.currentIndex]);
  }

  removeTask(task: Task) {
    const i = this.tasks.indexOf(task);
    this.tasks.splice(i, 1);
    this.onTaskChanged(task);
  }

  ngOnInit() {
    this.form.onSubmit = (task) => {
      this.tasks.push(task);

      console.log(JSON.stringify(this.tasks));
      this.cookies.set('tasks', JSON.stringify(this.tasks));
    };
  }
}
