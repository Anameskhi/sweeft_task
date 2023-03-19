import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IUser } from '../core/interfaces/user.interface';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  id?: number
  users: IUser[] = []
  loading = true
  page = 1;
  isLoading = false;

  sub$ = new Subject()
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  getAllUsers() {
    this.isLoading = true;
    this.usersService.getAllUsers(this.page)
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        setTimeout(() => {
          this.loading = false
        }, 1000)
        this.users = this.users.concat(res)
        console.log(res)
        this.isLoading = false;
      })
  }
  @HostListener('window:scroll', ['$event'])

  onScroll(event: any) {

    const position = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const maxHeight = document.documentElement.scrollHeight;
    if (position == maxHeight) {
      
      if (!this.isLoading) {
        this.page++; 
        this.getAllUsers(); 
      }
    }
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
