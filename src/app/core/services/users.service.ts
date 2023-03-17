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
    return this.get<IUser[]>(`users?_start=${pageCount}&_limit=10`)
  }

  getAllFriends():Observable<IFriend[]>{
    return this.get<IFriend[]>(`friends?page=`)

  }

  getCurrentUser(id: number): Observable<IUser>{
    return this.get<IUser>(`users/${id}`)
  }

 

}
