import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

import { Bonsai } from '../models/bonsai.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BonsaiService {
  bonsaiCollection: AngularFireList<any>;
  bonsaiCollectionName = 'bonsais';

  constructor(
    private db: AngularFireDatabase
  ) {
    this.bonsaiCollection = db.list(this.bonsaiCollectionName);
  }

  getListBonsai(): Observable<Bonsai[]> {
    return this.bonsaiCollection.snapshotChanges().map(changes => {
      return changes.map(data => ({ id: data.payload.key, ...data.payload.val() }));
    });
  }

  getBonsai(idBonsai: string): Observable<Bonsai> {
    return this.db.object(`${this.bonsaiCollectionName}/${idBonsai}`).snapshotChanges()
      .map(data => {
        return { id: data.payload.key, ...data.payload.val() };
      }
    );
  }

  // addItem(newName: string) {
  //   this.itemsRef.push({ text: newName });
  // }
  // updateItem(key: string, newText: string) {
  //   this.itemsRef.update(key, { text: newText });
  // }
  // deleteItem(key: string) {
  //   this.itemsRef.remove(key);
  // }
  // deleteEverything() {
  //   this.itemsRef.remove();
  // }

}
