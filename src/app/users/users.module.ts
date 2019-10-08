import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';



@NgModule({
  declarations: [UsersComponent, DeleteModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UsersModule { }
