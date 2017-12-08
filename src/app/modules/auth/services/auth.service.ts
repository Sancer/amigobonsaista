import { User } from '../user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private usersCollection: AngularFireList<any>;
  private usersCollectionName = 'users';
  private currentUser: User;
  private user = new Subject<User>();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.usersCollection = db.list(this.usersCollectionName);

    if (this.isAuthenticated()) {
      this.getUserDataBase(this.getCurrentUserUid()).subscribe(
        user => {
          this.user.next(user);
        },
        error => { console.warn('error: ', error); }
      );
    }

    this.user.asObservable().subscribe(
      user => { this.currentUser = user; }
    );
  }

  signup(user: User) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(
      data => {
        if (data.uid) {
            user.id = data.uid;
            this.setUser(user);
          }
        },
        error => {
          console.log(error);
        }
      ).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  signin(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        data => {
          if (data.uid) {
            this.getUserDataBase(data.uid).subscribe(
              user => { this.user.next(user); },
              error => { console.warn('error: ', error); }
            );
            localStorage.setItem('isLoggedIn', data.uid);
            this.router.navigate(['/']);
          }
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
    localStorage.removeItem('isLoggedIn');
    this.user.next(undefined);
    return this.afAuth.auth.signOut();
  }

  getUser(): Observable<User> {
    setTimeout(() => {
      if (this.currentUser) {
        this.user.next(this.currentUser);
      }
    }, 0);
    return this.user.asObservable();
  }

  isAuthenticated(): boolean {
    return (localStorage.getItem('isLoggedIn')) ? true : false;
  }

  getCurrentUserUid() {
    if (this.isAuthenticated()) {
      return localStorage.getItem('isLoggedIn');
    }
  }

  public updateUser(user: User) {
    const secureDataUser = this.secureUserData(user);
    const userRef = this.db.object(`${this.usersCollectionName}/${user.id}`);
    return userRef.update(secureDataUser);
  }

  private setUser(user: User) {
    const secureDataUser = this.secureUserData(user);
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

  private getUserDataBase(idUser): Observable<User> {
    return this.db.object(`${this.usersCollectionName}/${idUser}`).snapshotChanges()
      .map(data => { return { id: data.payload.key, ...data.payload.val() };
      }
    );
  }

}
