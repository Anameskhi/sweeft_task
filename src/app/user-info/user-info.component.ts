import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IFriend } from '../core/interfaces/friend.interface';
import { IUser } from '../core/interfaces/user.interface';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  constructor(
    private activate: ActivatedRoute,
    private userService: UsersService,
    private activateRoute: ActivatedRoute,
    private router: Router

  ) { }

  form: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)])

  })

  get getEmail() {
    return this.form.get('email')
  }
  get getFullName() {
    return this.form.get('fullName')
  }
  get getMessage() {
    return this.form.get('message')
  }

  userFriends?: IFriend[]
  id!: number
  currUsr?: IUser
  sub$ = new Subject()
  loading = true


  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getUsersFriends()
      this.getCurrentUser()
    })
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

  getUsersFriends() {
    this.userService.getAllFriends()
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        setTimeout(() => {
          this.loading = false
        }, 1000)
        const userFriend = res.filter(user => user.userId == this.id)
        this.userFriends = userFriend
      })
  }

  getCurrentUser() {
    this.userService.getCurrentUser(this.id)
      .pipe(takeUntil(this.sub$))
      .subscribe(currentUsr => {
        console.log(currentUsr)
        this.currUsr = currentUsr
      })
  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return;
    console.log(this.form.value)
    this.form.reset()
  }

  showUser(id: number) {
    this.router.navigate(['user-info', id])
  }
}


