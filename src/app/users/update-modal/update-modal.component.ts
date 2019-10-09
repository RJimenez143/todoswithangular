import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../users.service';
import { Users } from '../model/users';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {
  @Input()
  user: Users;

  firstName: string;
  lastName: string;
  occupation: string;
  profilePicture: string;

  title: string;

  constructor(
    private active: NgbActiveModal,
    private userService: UsersService
  ) {}

  

  ngOnInit() {
    this.title = this.user ? "Update User" : "Add User";
    this.firstName = this.user ? this.user.firstName : "";
    this.lastName = this.user ? this.user.lastName : "";
    this.occupation = this.user ? this.user.occupation : "";
    this.profilePicture = this.user ? this.user.profilePicture : "";
  }

  submit() {
    if (this.user){
      let edit: Users = {
        id: this.user.id,
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        profilePicture: this.profilePicture
      }
    const res =  this.userService.onUpdate(edit);
    


  }else{
    let add: Users = {
      id: "",
      firstName: this.firstName,
      lastName: this.lastName,
      occupation: this.occupation,
      profilePicture: this.profilePicture
    }
    const res = this.userService.addUser(add);
  }
}
}
