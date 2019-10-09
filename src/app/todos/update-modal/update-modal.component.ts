import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TodoService } from "../service/todo.service";
import { Todos } from "../model/todos";

@Component({
  selector: "app-update-modal",
  templateUrl: "./update-modal.component.html",
  styleUrls: ["./update-modal.component.scss"]
})
export class UpdateModalComponent implements OnInit {
  @Input()
  todo: Todos;

  name: string;
  description: string;
  status: string;
  owner: string;

  title: string;

  constructor(
    private active: NgbActiveModal,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.title = this.todo ? "Update Todo" : "Add Todo";
    this.name = this.todo ? this.todo.name : "";
    this.description = this.todo ? this.todo.description : "";
    this.status = this.todo ? this.todo.status : "";
    this.owner = this.todo ? this.todo.owner : "";
  }

  submit() {
    if (this.todo){
      let edit: Todos = {
        id: this.todo.id,
        name: this.name,
        description: this.description,
        status: this.status,
        owner: this.owner
      }
    const res =  this.todoService.onUpdate(edit);
    


  }else{
    let add: Todos = {
      id: "",
      name: this.name,
      description: this.description,
      status: this.status,
      owner: this.owner
    }
    const res = this.todoService.addTodo(add);
  }
}
}
