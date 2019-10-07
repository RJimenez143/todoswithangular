import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'Users';

  searchText: string;

  userData = [
    {
      id: "1",
      firstName: "Riche",
      lastName: "Jimenez",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "2",
      firstName: "Rolito",
      lastName: "Valles",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "3",
      firstName: "Vannesa",
      lastName: "Pasaan",
      occupation: "Manager",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "4",
      firstName: "Karen",
      lastName: "Carabuena",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "5",
      firstName: "Jayson",
      lastName: "Custodio",
      occupation: "Software Tester",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    }
    // {
    //   id: "6",
    //   firstName: "Adrian",
    //   lastName: "Sumagang",
    //   occupation: "Manager",
    //   profilePicture:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    // },
    // {
    //   id: "7",
    //   firstName: "John",
    //   lastName: "Ebarita",
    //   occupation: "Manager",
    //   profilePicture:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    // },
    // {
    //   id: "8",
    //   firstName: "Kerr",
    //   lastName: "Opora",
    //   occupation: "Manager",
    //   profilePicture:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    // },
    // {
    //   id: "9",
    //   firstName: "Noel",
    //   lastName: "Rondina",
    //   occupation: "Manager",
    //   profilePicture:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    // },
    // {
    //   id: "10",
    //   firstName: "Jayson",
    //   lastName: "Mancao",
    //   occupation: "General Manager",
    //   profilePicture:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    // }
  ];

  filteredData: any[];

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.filteredData = this.userData;
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
          this.filteredData = this.userData.filter((user) => {
            return user.id === userId;
          });
        }
      }
    );
    
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.userData.filter((user) => {
        return user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText);
      });
    }
    else {
      this.filteredData = this.userData;
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
