import { DataTransferService } from 'src/app/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  message = "Hey I am child 1"
  constructor(public dataService:DataTransferService) { }

  ngOnInit() {

    this.dataService.sendMessage(this.message)


  }

  sendData(){
    this.dataService.emit<string>('Hey, I am coming from sibling component')
  }

}
