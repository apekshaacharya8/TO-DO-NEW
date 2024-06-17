import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { ToDoService } from './service/todo.service';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { ToDoItemComponent } from './component/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatButton, MatCard, MatSliderModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    TodoListComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
