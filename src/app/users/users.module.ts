import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersRoutingModule } from './users-routing.module';
import { UpdateModalComponent } from './update-modal/update-modal.component';



@NgModule({
  declarations: [UsersComponent, UpdateModalComponent,DeleteModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    UsersRoutingModule
  ],
  entryComponents:[
    UpdateModalComponent,
    DeleteModalComponent
  ]
})
export class UsersModule { }
