import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { PideService } from 'src/app/servicios/pide.service';
import { Swal2Service } from 'src/app/servicios/swal2.service';
import { MPVService } from 'src/app/servicios/mpv.service';
import { formMesaTramite } from '../../formularios/mesa-tramite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesa-tramite',
  templateUrl: './mesa-tramite.component.html',
  styleUrls: ['./mesa-tramite.component.scss'],
})
export class MesaTramiteComponent implements OnInit {
  formMesaTramite: FormGroup = formMesaTramite;
  submitted: boolean = false;
  //$request: Request;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value))
    );
   
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  constructor(
    private PideService: PideService,
    private MPVService: MPVService,
    private Swal2Service: Swal2Service,
    private router: Router
  ) {}
  searchDni() {
    if (this.formMesaTramite.value.nroDNI.length >= 8 && this.formMesaTramite.value.nroVerifDNI != '' && this.formMesaTramite.value.nroVerifDNI.length == 1) {
      this.PideService.searchDni(this.formMesaTramite.value.nroDNI, this.formMesaTramite.value.nroVerifDNI).subscribe(
        (resp: any) => {
          let data = JSON.parse(resp.data);
          //console.log(data);
          if (resp.validated) {
            
              this.formMesaTramite.controls['nombres'].setValue( data.prenombres + ' ' + data.apPrimer + ' ' + data.apSegundo)
          } else {
            this.Swal2Service.alertaToast('ATENCIÓN', resp.mensaje, 'warning');
            this.formMesaTramite.controls['nombres'].setValue(null)
       
          }
        },
        (error: any) => {}
      );
    } else {
      this.formMesaTramite.controls['nombres'].setValue(null)
    }
  }

  saveTramiteSGD() {
    (req: Request) => {
      this.MPVService.saveTramiteSGD(req);
    };
  }

  EnviarDocumento() {
    this.submitted = true;
    if (this.formMesaTramite.valid) {
      this.MPVService.saveTramiteSGD(this.formMesaTramite.value).subscribe(
        (resp: any) => {
          console.log(resp);
          //this.router.navigate(['./admin-page']);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this.Swal2Service.alertaToast(
        'ATENCIÓN',
        'Debe de completar todos los campos',
        'warning'
      );
    }
  }
  //
}
