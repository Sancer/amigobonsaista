import { environment } from '../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { BonsaiService } from '../../services/bonsai.service';
import { DetailComponent } from './detail.component';
import { LoadingComponent } from '../loading/loading.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      declarations: [
        DetailComponent,
        LoadingComponent,
        LoadingComponent
      ],
      providers: [
        BonsaiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
