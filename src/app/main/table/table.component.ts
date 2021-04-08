import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public id
  public name
  public email
  public body
  public temp_data
  parentMessage : string;
  msgOnButtonClick: string;
  msgOnChildCompInit: string;

  constructor(public mainService:MainService, public dataService: DataTransferService) { }

  ngOnInit() {
    this.parentMessage ="I am coming from Parent Component";
    this.getData()
  }


  getData(){

    this.mainService.getData().subscribe(
      response =>  {
      console.log(response)
      this.temp_data = response
       this.temp_data.forEach(element => {
         this.name = element['name']
         console.log(this.name)
      });
      })


  }


  receivedMessageHandler(p) {
    this.msgOnButtonClick = p;
  }

  receiveAutoMsgHandler(p) {
    this.msgOnChildCompInit = p;
  }



}
