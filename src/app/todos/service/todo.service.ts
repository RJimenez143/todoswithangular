import { Injectable } from '@angular/core';
import { Todos } from '../model/todos';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  name: string;
  description: string;
  status: string;
  owner: string;
  constructor() { }

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

  ];
    getTodos(){
      return this.todoData;
    }
    
    onUpdate(todo: Todos): Todos{
     const found = this.getTodoById(todo.id);
     found.name = todo.name;
     found.description = todo.description;
     found.owner = todo.owner;

     return found;

    }

    getTodoById(id: string){
      const found = this.todoData.filter(foundTodo => {
        return foundTodo.id = id;
      })

      return found[0];
    }
     
    addTodo(todo: Todos): Todos{
      //get the id of the last element of array todoData then add 1
      let lastId: string = (parseInt(this.todoData[this.todoData.length - 1].id) + 1).toString();
      todo.id = lastId;
      this.todoData.push(todo);
      console.log(todo);
      return todo;
    }

    deleteTodo(){

    }
  }
