import { Component } from '@angular/core';
import { UserInterface } from './types/user.interface';
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: UserInterface[] = []
  
  constructor( private usersService: UsersService ) {}
  
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users
    })
  }

  removeUser(id: string): void {
    this.usersService.removeUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id)
    })
  }

  addUser(name: string): void {
    this.usersService.addUser(name).subscribe(newUser => {
      this.users.push(newUser)
    })
  }
}
