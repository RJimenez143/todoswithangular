import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class UserModule { }
