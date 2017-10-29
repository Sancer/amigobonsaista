import { User } from '../user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  usersCollection: AngularFireList<any>;
  usersCollectionName = 'users';

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.usersCollection = db.list(this.usersCollectionName);
  }

  signup(user: User) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(
        data => {
          console.log(data);
          user.id = data.uid;
          this.setUser(user);
        },
        error => {
          console.log(error);
        }
      ).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  signin(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        data => {
          return data;
        },
        error => {
          console.log(error);
        }
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  singout() {
    this.afAuth.auth.signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  private setUser(user: User) {
    const secureDataUser = this.secureUserData(user);
    console.log(user);
    console.log(secureDataUser);
    this.usersCollection.set(user.id, secureDataUser);
  }

  private singinToken(token: string) {
    this.afAuth.auth.signInWithCustomToken(token)
      .then(
        data => data,
        error => console.log(error)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  private secureUserData(user: User) {
    return {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
    };
}

}
