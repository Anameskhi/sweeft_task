import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from '../interfaces/messages';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService{

  createMessage(body:IMessage):Observable<IMessage>{
    return this.post<IMessage>('messages',body)
  }

}
