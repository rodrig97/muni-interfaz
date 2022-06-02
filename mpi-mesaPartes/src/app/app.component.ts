import { AfterContentChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/token/token.service';
import { LoaderService } from './loader/loader.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mpi-mesa-partes';
  isLoggedIn = false;
  username: any;
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService,
    public loaderService: LoaderService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
      console.log(this.isLoggedIn)
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.username = user.user.cCredUsuario;
    } else {
      this.router.navigate(['login']);
    }
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }
}
