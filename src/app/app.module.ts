import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './sistema/pages/login/login.component';
import { MesaTramiteComponent } from './sistema/pages/mesa-tramite/mesa-tramite.component';
import { AreaService } from './servicios/areas.service';
import { FilesService } from './servicios/files.service';
import { ServerPageComponent } from './sistema/pages/server-page/server-page.component';
import {TableModule} from 'primeng/table';
import { ButtonModule } from "primeng/button";
//import { CustomerService } from './sistema/formularios/customerservice';
import {InputTextModule} from 'primeng/inputtext';
import { DialogDniComponent } from './sistema/componentes/dialog-dni/dialog-dni.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MesaTramiteComponent,
    ServerPageComponent,
    DialogDniComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [AreaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
