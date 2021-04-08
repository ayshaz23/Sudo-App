import { DataTransferService } from 'src/app/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  message
  message2
  constructor(public dataService: DataTransferService) { }

  ngOnInit() {
    this.message = this.dataService.getMessage()
    this.getData()

  }

  getData(){
    this.message2 = this.dataService.on<string>().subscribe(
      data =>
      {
        this.message2 = data
        console.log(this.message2)
      }
    )
  }

}
