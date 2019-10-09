import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './users/users.service';
import { TodoService } from './todos/service/todo.service';
import { TodosRoutingModule } from './todos/todos-routing.module';
import { UsersRoutingModule } from './users/users-routing.module';
import { ToastService } from './app/toast.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    TodosModule,
    UsersModule,
    NgbModule,
    TodosRoutingModule,
    UsersRoutingModule,
    NgbToastModule
  ],
  providers: [UsersService, TodoService, ToastService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
