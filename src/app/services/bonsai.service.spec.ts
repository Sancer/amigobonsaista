import { environment } from '../../environments/environment';
import { TestBed, inject } from '@angular/core/testing';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { BonsaiService } from './bonsai.service';

describe('BonsaiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      ],
      providers: [
        BonsaiService,
        AngularFireDatabase
      ],
    });
  });

  it('should be created', inject([BonsaiService], (service: BonsaiService) => {
    expect(service).toBeTruthy();
  }));
});
