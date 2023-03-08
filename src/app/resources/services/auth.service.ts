import { ResponseLogin } from './../models/ResponseLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginResponse: ResponseLogin | undefined;

  public clear(): void {
    this.loginResponse = undefined;
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginResponse?.jwt);
  }
  //constructor() { }
}
