import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TodoService } from "./service/todo.service";
import { UpdateModalComponent } from "./update-modal/update-modal.component";
import { DeleteModalComponent } from "./delete-modal/delete-modal.component";
import { Todos } from "./model/todos";
import { ToastService } from "../app/toast.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  title = "Todos";
  searchText: string;
  filteredData: any[];
  collectionSize: number = 3;
  pageSize: number = 5;
  page: number;
  todos: Todos[];
  todoLength: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private service: TodoService
  ) {}

  ngOnInit() {
    console.log("[TodosComponent] On Init!");
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const page = params["page"];
      const search = params["search"];
      this.page = page ? parseInt(page) : 1;
      this.searchText = search ? search : null;
      this.onPageChange();
    });
  }
  loadTodos() {
    this.todos = this.service.getAllTodos(this.page, this.pageSize);
    this.collectionSize = this.service.getTodos().length;
  }

  loadFilteredTodos() {
    const searchText = this.searchText.toLowerCase();
    this.todos = this.service.getPageTodos(
      this.page,
      this.pageSize,
      searchText
    );
    this.collectionSize = this.service.getPageTodos(
      this.page,
      this.pageSize,
      searchText
    ).length;
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.todos = this.service.getTodos().filter(todo => {
        return (
          todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText) ||
          todo.status.toLowerCase().includes(searchText)
        );
      });
    } else {
      this.todos = this.service.getTodos();
    }
  }

  onUpdate(todo: Todos) {
    const modal = this.modalService.open(UpdateModalComponent);
    modal.componentInstance.user = todo;

    modal.result.then(result => {
      if(result){
        this.onSearch();
      }
    });
  }

  onDelete(todo: Todos) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  onPageChange() {
    if (this.searchText) {
      this.router.navigate(["/todos"], {
        queryParams: { page: this.page, search: this.searchText }
      });
      this.loadFilteredTodos();
      this.todoLength = this.collectionSize;
    } else {
      this.router.navigate(["/todos"], {
        queryParams: { page: this.page }
      });
      this.loadTodos();
    }
  }
}
