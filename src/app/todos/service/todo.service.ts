import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

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
  }
