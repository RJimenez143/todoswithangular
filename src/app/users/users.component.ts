import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'Users';

  searchText: string;
  filteredData: any[];

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private service: UsersService
  ) {
    this.filteredData = this.service.getUsers();
  }

  ngOnInit() {
    console.log('[UsersComponent] On Init!');

    // Get the user id from URL
    this.activatedRoute.paramMap.subscribe(
      // Callback function
      (paramMap: ParamMap) => {
        console.log('User ID!!!');
        const userId = paramMap.get('userId');

        if (userId) {
          // Filter todos by owner (user id)
          this.filteredData = this.service.getUsers().filter((user) => {
            return user.id === userId;
          });
        }
      }
    );
    
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.service.getUsers().filter((user) => {
        return user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText);
      });
    }
    else {
      this.filteredData = this.service.getUsers();
    }
  }

  onUpdate(user) {
    console.log('Update');
    console.log(user);
  }

  onDelete(user) {
    console.log('Delete');
    console.log(user);
  }
 
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
