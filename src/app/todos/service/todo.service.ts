import { Injectable } from "@angular/core";
import { Todos } from "../model/todos";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  name: string;
  description: string;
  status: string;
  owner: string;
  constructor() {}

  todoData = [
    {
      id: "1",
      name: "Inventory System",
      description: "Creating inventory system for truste",
      status: "In-Progress",
      owner: "1"
    },
    {
      id: "2",
      name: "Unit Testing",
      description: "Creating unit testing",
      status: "Open",
      owner: "2"
    },
    {
      id: "3",
      name: "Vannesa Pasaan",
      description: "Cooks food",
      status: "Open",
      owner: "3"
    },
    {
      id: "4",
      name: "Karen Carabuena",
      description: "Do the Laundry",
      status: "Open",
      owner: "4"
    },
    {
      id: "5",
      name: "Jayson Rosales",
      description: "Wash the dishes",
      status: "Open",
      owner: "5"
    },
    {
      id: "6",
      name: "Unit Testing",
      description: "Creating unit testing",
      status: "Open",
      owner: "6"
    },
    {
      id: "7",
      name: "Vannesa Pasaan",
      description: "Cooks food",
      status: "Open",
      owner: "7"
    },
    {
      id: "8",
      name: "Karen Carabuena",
      description: "Do the Laundry",
      status: "Open",
      owner: "8"
    },
    {
      id: "9",
      name: "Vannesa Pasaan",
      description: "Cooks food",
      status: "Open",
      owner: "9"
    },
    {
      id: "10",
      name: "Karen Carabuena",
      description: "Do the Laundry",
      status: "Open",
      owner: "10"
    }
  ];
  getTodos() {
    return this.todoData;
  }
  getAllTodos(page: number, pageSize: number): Todos[] {
    return this.todoData.slice((page - 1) * pageSize, page * pageSize);
  }

  getPageTodos(page: number, pageSize: number, searchText: string): Todos[] {
    const filteredTodos = this.todoData.filter(todo => {
      return (
        todo.name.toLowerCase().includes(searchText) ||
        todo.description.toLowerCase().includes(searchText) ||
        todo.status.toLowerCase().includes(searchText) ||
        todo.owner.toLowerCase().includes(searchText)
      );
    });
    return filteredTodos.slice((page - 1) * pageSize, page * pageSize);
  }

  onUpdate(todo: Todos): Todos {
    const updateTodo = this.updateTodo(todo.id);
    updateTodo.name = todo.name;
    updateTodo.description = todo.description;
    updateTodo.status = todo.status;
    updateTodo.owner = todo.owner;
    return updateTodo;
  }

  updateTodo(id: string): Todos {
    const updateTodo = this.todoData.filter(todoToFind => {
      return todoToFind.id === id;
    });
    return updateTodo[0];
  }

  getTodoById(id: string) {
    const found = this.todoData.filter(foundTodo => {
      return (foundTodo.id = id);
    });

    return found[0];
  }

  addTodo(user: Todos): Todos {
    //increment id with the id of the last element
    var userId: string = (
      parseInt(this.todoData[this.todoData.length - 1].id) + 1
    ).toString();
    user.id = userId;
    this.todoData.push(user);
    return user;
  }

  deleteTodo() {}
}
