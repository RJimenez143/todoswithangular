import { Injectable } from "@angular/core";
import { Users } from "./model/users";
import { TodoService } from "../todos/service/todo.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  firstName: string;
  lastName: string;
  occupation: string;
  profilePicture: string;

  constructor(private todoService: TodoService) {}
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
    },
    {
      id: "6",
      firstName: "Riche",
      lastName: "Jimenez",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "7",
      firstName: "Rolito",
      lastName: "Valles",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "8",
      firstName: "Vannesa",
      lastName: "Pasaan",
      occupation: "Manager",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "9",
      firstName: "Karen",
      lastName: "Carabuena",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: "10",
      firstName: "Jayson",
      lastName: "Custodio",
      occupation: "Software Tester",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    }
  ];
  getUsers() {
    return this.userData;
  }

  getAllUsers(page: number, pageSize: number): Users[] {
    return this.userData.slice((page - 1) * pageSize, page * pageSize);
  }

  getPageUsers(page: number, pageSize: number, searchText: string): Users[] {
    const filteredUsers = this.userData.filter(user => {
      return (
        user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText)
      );
    });
    return filteredUsers.slice((page - 1) * pageSize, page * pageSize);
  }

  onUpdate(user: Users): Users {
    const updateUser = this.updateUser(user.id);
    updateUser.firstName = user.firstName;
    updateUser.lastName = user.lastName;
    updateUser.occupation = user.occupation;
    updateUser.profilePicture = user.profilePicture;
    return updateUser;
  }

  updateUser(id: string): Users {
    const updateUser = this.userData.filter(userToFind => {
      return userToFind.id === id;
    });
    return updateUser[0];
  }

  getUserById(id: string) {
    const found = this.userData.filter(foundUser => {
      return (foundUser.id = id);
    });

    return found[0];
  }

  addUser(user: Users): Users {
    //increment id with the id of the last element
    var userId: string = (
      parseInt(this.userData[this.userData.length - 1].id) + 1
    ).toString();
    user.id = userId;
    this.userData.push(user);
    return user;
  }

  deleteTodo() {}
}
