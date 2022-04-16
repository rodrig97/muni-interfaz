import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  constructor(private LoginService: LoginService) { }
  //storage ; guardar sesion
  // injectable : loading
  ngOnInit(): void {
  }
  
  Authorization(){
    if(this.username != "" && this.password != "") {
      this.LoginService.login();
    }
  }
}
