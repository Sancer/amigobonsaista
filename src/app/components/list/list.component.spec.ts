import { LoadingComponent } from '../loading/loading.component';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../../environments/environment';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { ThumbComponent } from '../thumb/thumb.component';
import { ListComponent } from './list.component';
import { BonsaiService } from '../../services/bonsai.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      declarations: [
        ListComponent,
        ThumbComponent,
        LoadingComponent
      ],
      providers: [
        BonsaiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
