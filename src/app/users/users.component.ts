import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IUser } from '../core/interfaces/user.interface';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy{
  id?: number
  users?: IUser[]
  loading = true
  sub$ = new Subject()
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

 

  getAllUsers() {
    this.usersService.getAllUsers()
    .pipe(takeUntil(this.sub$))
    .subscribe(res => {
      setTimeout(()=>{
        this.loading = false
        },1000)
      this.users = res
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.getAllUsers()
    console.log(this.users)
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
