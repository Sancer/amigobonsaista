import { BonsaiService } from '../../services/bonsai.service';
import { Bonsai } from '../../models/bonsai.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bonsai-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  idBonsai: string;
  bonsai: Bonsai;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bonsaiService: BonsaiService
  ) { }

  ngOnInit() {
    this.getIdBonsai();
  }


  getIdBonsai(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idBonsai = params['id'];
      this.getBonsai();
    });
  }

  getBonsai(): void {
    this.bonsaiService.getBonsai(this.idBonsai)
      .subscribe(
        data => {
          this.bonsai = data;
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
