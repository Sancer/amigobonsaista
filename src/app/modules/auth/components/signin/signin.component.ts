import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'bonsai-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent  {
  user: User;

  constructor(
    private authService: AuthService
  ) { }

  onSubmit(signinForm: NgForm) {
    if (signinForm.valid) {
      this.user = signinForm.value;
      this.authService.signin(this.user.email, this.user.password);
    }
  }

}
