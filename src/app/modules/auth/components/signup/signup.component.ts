import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { User } from '../../user.model';

@Component({
  selector: 'bonsai-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      this.user = signupForm.value;
      this.authService.signup(this.user);
    }
  }
}
