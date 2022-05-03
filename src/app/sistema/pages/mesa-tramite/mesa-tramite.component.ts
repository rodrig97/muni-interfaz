import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { PideService } from 'src/app/servicios/pide.service';
import { Swal2Service } from 'src/app/servicios/swal2.service';
import { MPVService } from 'src/app/servicios/mpv.service';
import { formMesaTramite } from '../../formularios/mesa-tramite';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogDniComponent } from '../../componentes/dialog-dni/dialog-dni.component';
import { QueryService } from 'src/app/servicios/query.service';

//import { Script } from 'vm';

@Component({
  selector: 'app-mesa-tramite',
  templateUrl: './mesa-tramite.component.html',
  styleUrls: ['./mesa-tramite.component.scss'],
})
export class MesaTramiteComponent implements OnInit {
  control1 = new FormControl();
  control2 = new FormControl();
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
    private router: Router,
    private dialog: MatDialog,
    private QueryService: QueryService
  ) {}
  searchDni() {
    if (
      this.formMesaTramite.value.nroDNI.length >= 8 &&
      this.formMesaTramite.value.nroVerifDNI != '' &&
      this.formMesaTramite.value.nroVerifDNI.length == 1
    ) {
      this.PideService.searchDniExterno(
        this.formMesaTramite.value.nroDNI,
        this.formMesaTramite.value.nroVerifDNI
      ).subscribe(
        (resp: any) => {
          if(Number(resp.codVerifica) ==  Number(this.formMesaTramite.value.nroVerifDNI)){
            this.formMesaTramite.controls['nombres'].setValue(
              resp.nombres + ' ' + resp.apellidoPaterno + ' ' + resp.apellidoMaterno
            );
          }
          else {
            this.Swal2Service.alertaToast('ATENCIÓN', 'Código verificador erróneo', 'warning');
            this.formMesaTramite.controls['nombres'].setValue(null);
          }
          //console.log(resp)
          
          /*let data = JSON.parse(resp.data);
          console.log(data);
          if (resp.validated) {
            this.formMesaTramite.controls['nombres'].setValue(
              data.prenombres + ' ' + data.apPrimer + ' ' + data.apSegundo
            );
          } else {
            this.Swal2Service.alertaToast('ATENCIÓN', resp.mensaje, 'warning');
            this.formMesaTramite.controls['nombres'].setValue(null);
          } */
        },
        (error: any) => {
          //console.log(error)
         
        }
      );
    } else {
      this.formMesaTramite.controls['nombres'].setValue(null);
    }
  }
  /*
  searchDniExterno() {
    if (
      this.formMesaTramite.value.nroDNI.length >= 8 &&
      this.formMesaTramite.value.nroVerifDNI != '' &&
      this.formMesaTramite.value.nroVerifDNI.length == 1
    ) {
      let code = this.getCode();
      console.log(code)
      /*this.PideService.searchDniExterno(
        this.formMesaTramite.value.nroDNI,
        this.formMesaTramite.value.nroVerifDNI
      ).subscribe(
        (resp: any) => {
          let data = JSON.parse(resp.data);
          console.log(data);
          if (resp.validated) {
            this.formMesaTramite.controls['nombres'].setValue(
              data.prenombres + ' ' + data.apPrimer + ' ' + data.apSegundo
            );
          } else {
            this.Swal2Service.alertaToast('ATENCIÓN', resp.mensaje, 'warning');
            this.formMesaTramite.controls['nombres'].setValue(null);
          }
        },
        (error: any) => {
          this.searchDniExterno();
        }
      );
    } else {
      this.formMesaTramite.controls['nombres'].setValue(null);
    }
  }
  getCode(){
    if (this.formMesaTramite.value.nroDNI != "" || this.formMesaTramite.value.nroDNI.length == 8) {
			let suma = 0;
			let hash = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
			suma = 5;
			for (let i = 2; i < 10; i++) {
				suma += (this.formMesaTramite.value.nroDNI[i-2] * hash[i]);
			}
			let entero = parseInt(suma / 11);

			$digito = 11 - (suma - $entero * 11);

			if ($digito == 10) {
				$digito = 0;
			} else if ($digito == 11) {
				$digito = 1;
			}
			return $digito;
		}
		return "";
  }*/
  /*
  saveTramiteSGD() {
    (req: Request) => {
      this.MPVService.saveTramiteSGD(req);
    };
  }
*/
  EnviarDocumento() {
    this.submitted = true;
    this.adjuntar_doc_princ.length > 0
      ? (this.adjuntar_doc_princ['anexos'] = this.anexos)
      : '';
    this.formMesaTramite.controls['adjuntar_doc_princ'].setValue(
      this.adjuntar_doc_princ
    );

    this.formMesaTramite.controls['anexos'].setValue(this.anexos);
    //console.log(this.formMesaTramite);
    if (this.formMesaTramite.valid) {
      this.MPVService.saveTramiteSGD(this.formMesaTramite.value).subscribe(
        (resp: any) => {
          console.log(resp);
          if (resp.validated) {
            //console.log(1);
            this.router.navigate(['./admin-page']);
          }
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogDniComponent, {
      width: '250px',
      data: { img: 'assets/img/verificadordni.jpg' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  filesToUpload: any;
  cDocumento: any;
  adjuntar_doc_princ: any = [];
  anexos: any = [];

  enviarArchivos(fileInput: any, tipo: any) {
    //console.log(this.data)
    let archivoFile = null;
    this.filesToUpload = <Array<File>>fileInput.target.files;

    if (this.filesToUpload.length) {
      archivoFile = this.filesToUpload[0];
      const nombreArchivo = this.filesToUpload[0].name;

      const dataFile = this.Swal2Service.objectToFormData({
        file: archivoFile,
      });
      this.QueryService.subirArchivo(dataFile).subscribe(
        (resp: any) => {
          this.cDocumento = null;
          if (resp) {
            this.cDocumento = resp;
            switch (Number(tipo)) {
              case 1:
                this.adjuntar_doc_princ.push({
                  path_primary: this.cDocumento,
                  name_primary: nombreArchivo,
                });

                break;
              case 2:
                this.anexos.push({
                  path_primary: this.cDocumento,
                  name_primary: nombreArchivo,
                });
                break;
              default:
                break;
            }
          }
        },
        (error: any) => {}
      );
    }
  }

  deleteArchivoAdj(item: any) {
    this.adjuntar_doc_princ.pop({
      item,
    });
  }

  deleteArchivoAn(item: any) {
    this.anexos.pop({
      item,
    });
  }
}
