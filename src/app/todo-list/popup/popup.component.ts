import { Component, Input, HostListener, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.less']
})
export class TaskPopupComponent {
  @Input() task: Task;
  @Output() taskChange = new EventEmitter<Task>();

  editing: 'title' | 'details';
  onClickOutside(el: HTMLElement) {
    console.log(el);
  }

  clear_editing(field: TaskPopupComponent['editing']) {
    if (this.editing === field) {
      this.editing = null;
      this.taskChange.emit(this.task);
    }
  }

  focus_input(div: HTMLElement) {
    const input = div.querySelector<HTMLElement>('input,textarea');
    if (input) {
      input.focus();
    }
  }
}
