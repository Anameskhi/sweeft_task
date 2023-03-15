import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFriend } from '../core/interfaces/friend.interface';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit{
 constructor(
  private activate: ActivatedRoute,
  private userService: UsersService
 ){}
 userFriends?: IFriend[]
 id?:number

 ngOnInit(): void {
  this.id = this.activate.snapshot.params['id']
  this.getUsersFriends()
  
 }

 getUsersFriends(){
  this.userService.getAllFriends().subscribe( res => {
    const userFriend = res.filter(user => user.userId == this.id)
    this.userFriends = userFriend
  })
 }
}

