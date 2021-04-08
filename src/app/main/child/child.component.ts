import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

     @Input() childMessage: string;
     @Output() childButtonEvent = new EventEmitter();



  constructor(public dataService: DataTransferService) { }

  ngOnInit() {
  }



  clickHandler() {
    this.childButtonEvent.emit('Hey! I am coming from Child Component');
  }

}
