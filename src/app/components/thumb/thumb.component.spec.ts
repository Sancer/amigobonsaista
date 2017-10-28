import { environment } from '../../../environments/environment.prod';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbComponent } from './thumb.component';
import { AngularFireModule } from 'angularfire2';

describe('ThumbComponent', () => {
  let component: ThumbComponent;
  let fixture: ComponentFixture<ThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      declarations: [
        ThumbComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
