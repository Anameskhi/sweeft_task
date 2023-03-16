import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFriend } from '../interfaces/friend.interface';
import { IUser } from '../interfaces/user.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  getAllUsers():Observable<IUser[]>{
    return this.get<IUser[]>('users')
  }

  getAllFriends():Observable<IFriend[]>{
    return this.get<IFriend[]>('friends')

  }

  getCurrentUser(id: number): Observable<IUser>{
    return this.get<IUser>(`users/${id}`)
  }

 

}
