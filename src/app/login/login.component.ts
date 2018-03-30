import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public password: string;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onLogin(form) {
    if (this.loginService.isPasswordValid(form.password)) {
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/chuck-jokes']);
    }
  }
}
