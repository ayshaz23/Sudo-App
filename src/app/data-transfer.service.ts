import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {


  public newMessage : string

  public _subject = new BehaviorSubject<any>('')

  constructor() { }

  emit<T>(data:T){
    this._subject.next(data)
  }

  on<T>(): Observable<T>{
    return this._subject.asObservable()
  }


  sendMessage(message){
    this.newMessage = message

  }

  getMessage(){
    return this.newMessage
  }

}
