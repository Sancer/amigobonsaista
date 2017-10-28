import { Component, Input, OnInit } from '@angular/core';
import { Bonsai } from '../../models/bonsai.model';

@Component({
  selector: 'bonsai-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.scss']
})
export class ThumbComponent implements OnInit {
  @Input() bonsai: Bonsai;

  constructor() { }

  ngOnInit() {
  }

}
