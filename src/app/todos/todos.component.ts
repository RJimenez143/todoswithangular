import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';

  searchText: string;
  
  todoData = [
    {
      id: "11",
      name: "Riche Jimenez",
      description: "Eats food",
      status: "Open",
      owner: "1"
    },
    {
      id: "12",
      name: "Rolito Valles",
      description: "Prepares food",
      status: "Open",
      owner: "2"
    },
    {
      id: "13",
      name: "Vannesa Pasaan",
      description: "Cooks food",
      status: "Open",
      owner: "3"
    },
    {
      id: "14",
      name: "Karen Carabuena",
      description: "Do the Laundry",
      status: "Open",
      owner: "4"
    },
    {
      id: "15",
      name: "Jayson Rosales",
      description: "Wash the dishes",
      status: "Open",
      owner: "5"
    }
    // {
    //   id: "16",
    //   name: "Kerr Opora",
    //   description: "Coding",
    //   status: "Open",
    //   owner: "6"
    // },
    // {
    //   id: "17",
    //   name: "John Ebarita",
    //   description: "Singing",
    //   status: "Open",
    //   owner: "7"
    // },
    // {
    //   id: "18",
    //   name: "Noel Rondina",
    //   description: "Dancing",
    //   status: "Open",
    //   owner: "8"
    // },
    // {
    //   id: "19",
    //   name: "Jayson Mancao",
    //   description: "Went to Supermarket",
    //   status: "Open",
    //   owner: "9"
    // },
    // {
    //   id: "20",
    //   name: "Rene Gomez",
    //   description: "Go Shopping",
    //   status: "Open",
    //   owner: "10"
    // },
  ];

  filteredData: any[];

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.filteredData = this.todoData;
  }

  ngOnInit() {
    console.log('[TodosComponent] On Init!');

    // Get the user id from URL
    this.activatedRoute.paramMap.subscribe(
      // Callback function
      (paramMap: ParamMap) => {
        console.log('User ID!!!');
        const userId = paramMap.get('userId');

        if (userId) {
          // Filter todos by owner (user id)
          this.filteredData = this.todoData.filter((todo) => {
            return todo.owner === userId;
          });
        }
      }
    );
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.todoData.filter((todo) => {
        return todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText)
      });
    }
    else {
      this.filteredData = this.todoData;
    }
  }

  onUpdate(todo) {
   console.log('update');
   console.log(todo)
   
  }

  onDelete(todo) {
  
  }
  

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
