import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styles: []
})
export class NabvarComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.renewTokens();
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }

  login() {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}
