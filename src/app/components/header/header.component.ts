
import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/auth/user.model';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
  selector: 'bonsai-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  private loading = true;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser(): void {
    this.authService.getUser().subscribe(
      user => { this.user = user, this.loading = false; },
      error => { console.warn('error: getUser', error); }
    );
  }

}
