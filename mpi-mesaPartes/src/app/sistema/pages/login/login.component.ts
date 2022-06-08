import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/auth.service';
import { Swal2Service } from 'src/app/servicios/swal2.service';
import { TokenStorageService } from 'src/app/shared/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  loading!: boolean;
  errorMessage = '';
  isLoginFailed = false;
  isLoggedIn = false;

  constructor(
    private fb: FormBuilder,
    private authService: LoginService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private swal2Service: Swal2Service
  ) {
    this.loading = false;
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    //console.log(this.isLoggedIn)
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.router.navigate(['server-page']);
      //this.username = user.user.cCredUsuario;
    } else {
      this.router.navigate(['login']);
    }
  }
  onSubmit() {
    this.loading = true;
    this.authService.login(this.formLogin.value).subscribe(
      (data: any) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data);
        window.location.reload();
      },
      (err: any) => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.loading = false;
        if (err.status == 401) {
          this.swal2Service.alertaToast(
            '¡Acceso Denegado!',
            err.error.error,
            'warning',
            5000
          );
        }
        if (err.status == 403) {
          this.swal2Service.alertaToast(
            '¡Acceso Prohibido!',
            err.error.error,
            'warning',
            5000
          );
        }

        if (err.error.password.length) {
          this.swal2Service.alertaToast(
            '¡Atención!',
            err.error.password[0],
            'warning',
            5000
          );
        }
      }
    );
  }

  onLogOut() {
    this.loading = true;
  }
}
