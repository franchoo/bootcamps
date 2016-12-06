import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button type="button" class="btn {{class}} btn-lg" (click)="sendit()">{{display}}</button>',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() display:any
  @Input() class:string
  @Output() onReply=new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  sendit(){
    this.onReply.emit(this.display);
  }

}
