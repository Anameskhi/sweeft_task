


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  get getFirstName(){
    return this.form.get('firstName')
  }
  get getLastName(){
    return this.form.get('lastName')
  }
  get getPicture(){
    return this.form.get('profilePic')
  }
  get getDescription(){
    return this.form.get('description')
  }

  form: FormGroup = new FormGroup(
    { 
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      profilePic: new FormControl('',Validators.required,),
      description: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
    })
    
  constructor(
    private usersService: UsersService,
    private toastAlert: NgToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid)return;

      console.log(this.form.value)
      if(this.form.valid){
        this.usersService.createUsers(this.form.value).subscribe(res=>{
          this.toastAlert.success({detail: "Success Message",summary:"User successfully created",duration:3000})
       this.router.navigate(['users'])
        })
      }
  }

}




