import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    NgbModule
    
  ]
})
export class TodoModule { }
