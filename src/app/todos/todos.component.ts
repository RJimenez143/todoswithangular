import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';

  searchText: string;
  filteredData: any[];
 

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private service: TodoService
  ) {
    this.filteredData = this.service.getTodos();
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
          this.filteredData = this.service.getTodos().filter((todo) => {
            return todo.owner === userId;
          });
        }
      }
    );
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.service.getTodos().filter((todo) => {
        return todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText)
      });
    }
    else {
      this.filteredData = this.service.getTodos();
    }
  }

  onUpdate(todo) {
    const index = this.filteredData.indexOf(todo.id);
    this.filteredData.push(index,1);
   
  }

  onDelete(todo) {
    const index = this.filteredData.indexOf(todo);
    this.filteredData.splice(index, 1);
  
  }
  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  public id: number;
  public name: string;
  public year: number;
  public rows: Array<{id: number, name: string, year: number}> = [];

  newTodo() {
    this.rows.push( {id: this.id, name: this.name, year: this.year } );

    

  }
}
