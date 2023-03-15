import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../core/interfaces/user.interface';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  id?:number
  users?:IUser[]
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private usersService: UsersService
  ){}
  
  showUser(){
    // const id = this.activateRoute.snapshot.params['id']
    // this.router.navigate(['users-info/',id])

  }

  
  getAllUsers(){
    this.usersService.getAllUsers().subscribe(res=>{
     this.users = res
     console.log(res)
    })
  }
  ngOnInit(): void {
    this.getAllUsers()
      console.log(this.users)
  }
  
}
