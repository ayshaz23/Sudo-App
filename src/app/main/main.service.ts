import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public htppClient: HttpClient) { }


  getData(){
    return this.htppClient.get('https://jsonplaceholder.typicode.com/comments?postId=1')
  }
}
