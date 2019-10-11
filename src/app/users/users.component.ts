import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UsersService } from "./users.service";
import { UpdateModalComponent } from "./update-modal/update-modal.component";
import { Users } from "./model/users";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  title = "Users";
  searchText: string;
  filteredData: any[];
  collectionSize: number = 3;
  pageSize: number = 5;
  page: number;
  users: Users[];
  userLength: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private service: UsersService
  ) {
    // this.filteredData = this.service.getUsers();
  }

  ngOnInit() {
    // console.log('[UsersComponent] On Init!');«
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const page = params.get("page");
      const search = params.get("search");
      this.page = params.has(page) ? parseInt(page) : 1;
      this.searchText = search ? search : null;
      this.onPageChange();
    });
  }
  loadUsers() {
    this.users = this.service.getAllUsers(this.page, this.pageSize);
    this.collectionSize = this.service.getUsers().length;
  }

  loadFilteredUsers() {
    const searchText = this.searchText.toLowerCase();
    this.users = this.service.getPageUsers(
      this.page,
      this.pageSize,
      searchText
    );
    this.collectionSize = this.service.getPageUsers(
      this.page,
      this.pageSize,
      searchText
    ).length;
  }
  onSearch() {
    const searchText = this.searchText.toLowerCase();
    if (searchText) {
      this.users = this.service.getUsers().filter(user => {
        return (
          user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText) ||
          user.profilePicture.toLowerCase().includes(searchText)
        );
      });
    } else {
      this.users = this.service.getUsers();
    }
  }

  onUpdate(user: Users) {
    const modal = this.modalService.open(UpdateModalComponent);
    modal.componentInstance.user = user;

    console.log(user);

    modal.result.then(result => {});
  }

  onDelete(user) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  onPageChange() {
    if (this.searchText) {
      this.router.navigate(["/users"], {
        queryParams: { page: this.page, search: this.searchText }
      });
      this.loadFilteredUsers();
      this.userLength = this.collectionSize;
    } else {
      this.router.navigate(["/users"], {
        queryParams: { page: this.page }
      });
      this.loadUsers();
    }
  }
}
