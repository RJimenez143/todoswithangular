import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodosRoutingModule } from './todos-routing.module';





@NgModule({
  declarations: [TodosComponent,
  UpdateModalComponent,
  DeleteModalComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    TodosRoutingModule,
    
  
  ],
  entryComponents:[
    UpdateModalComponent,
    DeleteModalComponent
  ]
})
export class TodosModule { }
