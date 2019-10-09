import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from './users.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { Users } from './model/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  searchText: string;
  filteredData: any[];
  collectionSize: number=3;
  pageSize: number = 2;
  page: number=1;
  todoLength: number;
  users: Users[];
  userLength: number;

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
        const pageQ = paramMap["page"];
        const searchQ = paramMap["search"];
        this.page = pageQ ? parseInt(pageQ) : 1;
        this.searchText = searchQ ? searchQ : null;
        this.onPageChange();

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

  onUpdate(user: Users) {
    const modal=this.modalService.open(UpdateModalComponent);
    modal.componentInstance.user = user;

    console.log(user);

    modal.result.then(result => {
      
    })
    
  }

  onDelete(user) {
    const index = this.filteredData.indexOf(user);
    this.filteredData.splice(index, 1);
  }
 
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  onPageChange() {
    if (this.searchText) {
      this.router.navigate(["/users"], {
        queryParams: { page: this.page, search: this.searchText }
      });
    }
}}
