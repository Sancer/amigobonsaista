import { Bonsai } from '../../models/bonsai.model';
import { Component, OnInit } from '@angular/core';



import { BonsaiService } from '../../services/bonsai.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bonsai-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading = false;
  bonsais: Bonsai[];

  constructor(
    private bonsaiService: BonsaiService
  ) { }

  ngOnInit() {
    this.getListBonsais();
  }

  getListBonsais() {
    this.bonsaiService.getListBonsai()
      .subscribe(
        data => {
          this.bonsais = data;
          this.quitLoading();
        }
      );
  }

  private quitLoading(): void {
    if (this.loading) {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
}
