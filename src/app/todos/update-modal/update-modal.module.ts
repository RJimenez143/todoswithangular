import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateModalComponent } from './update-modal.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UpdateModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UpdateModalModule { }
