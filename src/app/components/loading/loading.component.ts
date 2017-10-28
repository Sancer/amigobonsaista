import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bonsai-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() loading: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
