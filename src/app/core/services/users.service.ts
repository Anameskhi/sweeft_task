import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFriend } from '../interfaces/friend.interface';
import { IUser } from '../interfaces/user.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  getAllUsers(pageCount:number):Observable<IUser[]>{
    return this.get<IUser[]>(`users?_page=${pageCount}`)
  }

  getAllFriends( pageCount: number):Observable<IFriend[]>{
    return this.get<IFriend[]>(`friends?_page=${pageCount}`)

  }

  getCurrentUser(id: number): Observable<IUser>{
    return this.get<IUser>(`users/${id}`)
  }

 

}
