import { Injectable } from '@angular/core';
import { Users } from './model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  firstName: string;
  lastName: string;
  occupation: string;
  profilePicture: string;

  constructor() { }
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
  ];
  getUsers(){
    return this.userData;
  }


  onUpdate(user: Users): Users{
    const found = this.getTodoById(user.id);
    found.firstName = user.firstName;
    found.lastName = user.lastName;
    found.occupation = user.occupation;
    found.profilePicture = user.profilePicture

    return found;

   }

   getTodoById(id: string){
     const found = this.userData.filter(foundTodo => {
       return foundTodo.id = id;
     })

     return found[0];
   }
    
   addUser(user: Users): Users{
     //get the id of the last element of array todoData then add 1
     let lastId: string = (parseInt(this.userData[this.userData.length - 1].id) + 1).toString();
     user.id = lastId;
     this.userData.push(user);
     console.log(user);
     return user;
   }

   deleteTodo(){

   }
}
