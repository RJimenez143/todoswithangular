import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'todos/:userId',
    component: TodosComponent
  },
  {
    path: 'todo/:id',
    component: TodoComponent
  },
  {
    path: 'todo/new',
    component: TodoComponent
  },
  {
    path: 'users/:userId',
    component: UsersComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'user/new',
    component: UserComponent
  },


  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}