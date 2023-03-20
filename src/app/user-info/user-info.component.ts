import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IFriend } from '../core/interfaces/friend.interface';
import { IUser } from '../core/interfaces/user.interface';
import { UsersService } from '../core/services/users.service';
import { NgToastService } from 'ng-angular-popup';
import { MessageService } from '../core/services/messaage.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit,OnDestroy {

  userFriends: IFriend[] = []
  id!: number
  currUsr?: IUser
  sub$ = new Subject()
  loading = true
  page = 1;
  isLoading = false;
  

  constructor(
    private userService: UsersService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private toastAlert: NgToastService,
    private messageService: MessageService

  ) { }

  form: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    textMessage: new FormControl('',
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
    return this.form.get('textMessage')
  }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];

      this.getCurrentUser()
      this.getUsersFriends()

    })
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

  getUsersFriends() {
    this.isLoading = true;
    this.userService.getAllFriends(this.page, this.id)
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        setTimeout(() => {
          this.loading = false
        }, 1000)
        this.userFriends = this.userFriends.concat(res)
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
        this.getUsersFriends();
      }
    }
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
    if(this.form.valid){
      this.messageService.createMessage(this.form.value).subscribe(res=>{
        this.toastAlert.success({detail: "Success Message",summary:"Your message has been sent successfully",duration:3000})
    
      })
      } 
    this.form.reset()
    this.router.navigate(['users'])
  }

  showUser(id: number) {
    this.router.navigate(['user-info', id])
  }

  delete(id: number){
    this.userService.deleteUser(id).subscribe(users=>{
      this.toastAlert.success({detail: "Success Message",summary:"User successfully deleted",duration:3000})
      this.router.navigate(['users'])
    })
   
  }
}


