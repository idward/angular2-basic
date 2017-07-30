import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  @Input() itemCount:number;

  constructor() { }

  ngOnInit() {
  }

}
