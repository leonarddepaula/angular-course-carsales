import { AlertService } from './../../resources/services/alert.service';
import { LoginService } from './../../resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService, private alertService: AlertService) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.alertService.info('Funcionalidade ainda não implementada!')
        console.log(data);
      },
      (httpError) => {
        this.alertService.error(httpError.error.message)
        // console.error(httpError);
      }
    );
  }
}
