import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/pages/login/login.component';
import { MesaTramiteComponent } from './sistema/pages/mesa-tramite/mesa-tramite.component'
import { AdminPageComponent } from './sistema/pages/admin-page/admin-page.component';
import { ServerPageComponent } from './sistema/pages/server-page/server-page.component';
import { DialogDniComponent } from './sistema/componentes/dialog-dni/dialog-dni.component';
import { DialogEmailComponent } from './sistema/componentesEmail/dialog-email/dialog-email.component';
import { DialogInfoComponent } from './sistema/componentesInfo/dialog-info/dialog-info.component';


const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'mesa-tramite', component: MesaTramiteComponent },
  { path: 'server-page', component: ServerPageComponent },
  { path: 'admin-page', component: AdminPageComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
