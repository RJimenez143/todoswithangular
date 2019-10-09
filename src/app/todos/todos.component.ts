import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from './service/todo.service';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { Todos } from './model/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';
  searchText: string;
  filteredData: any[];
  collectionSize: number=3;
  pageSize: number = 2;
  page: number=1;
  todoLength: number;
  todos: Todos[];

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

  onUpdate(todo: Todos) {
    const modal=this.modalService.open(UpdateModalComponent);
    modal.componentInstance.todo = todo;

    console.log(todo);

    modal.result.then(result => {
      
    })
    
   
  }

  onDelete(todo: Todos) {
    const index = this.filteredData.indexOf(todo);
    this.filteredData.splice(index, 1);
  
  }
  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
