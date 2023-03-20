import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFriend } from '../interfaces/friend.interface';
import { IUser } from '../interfaces/user.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  createUsers(body:IUser):Observable<IUser>{
    return this.post<IUser>('users',body)
  }
  
  getAllUsers(pageCount:number):Observable<IUser[]>{
    return this.get<IUser[]>(`users?_page=${pageCount}`)
  }

  getAllFriends( pageCount: number, userId: number):Observable<IFriend[]>{
    return this.get<IFriend[]>(`friends?_page=${pageCount}&userId=${userId}`)

  }

  getCurrentUser(id: number): Observable<IUser>{
    return this.get<IUser>(`users/${id}`)
  }

  deleteUser(id: number):Observable<IFriend>{
    return this.delete<IFriend>(`users/${id}`)
  }

 

}
