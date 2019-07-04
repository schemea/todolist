import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskPopupComponent } from './todo-list/popup/popup.component';
import { TaskFormComponent } from './todo-list/task-form/task-form.component';
import { CookieService } from 'ngx-cookie-service';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskPopupComponent,
    TaskFormComponent
  ],
  exports: [
    TaskPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClickOutsideModule,
    DragDropModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
