import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UsersModule { }
