import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bonsai-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private loading = true;
  private success = false;
  private fail = false;
  private saving = false;
  private user: User;
  private subscrition: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser(): void {
    this.subscrition = this.authService.getUser().subscribe(
      user => {
        this.user = user; this.loading = false;
      },
      error => { console.warn('error: getUser', error); }
    );
  }

  onSubmit(profileForm: NgForm) {
    if (profileForm.valid && !this.saving) {
      const newData = { ...this.user, ...profileForm.value };
      this.authService.updateUser(newData).then(
        data => { this.onSuccess(); },
        error => { this.onFail(); }
      );
      this.user = newData;
      this.saving = true;
    }
  }

  private onSuccess(): void {
    setTimeout(() => {
      this.success = true,
      this.saving = false;
      this.resetOnSaved();
    }, 1500);
  }

  private onFail(): void {
    setTimeout(() => {
      this.fail = true,
      this.saving = false;
      this.resetOnSaved();
    }, 1500);
  }

  private resetOnSaved(): void {
    setTimeout(() => {
      this.fail = this.success = false;
    }, 5000);
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }
}
