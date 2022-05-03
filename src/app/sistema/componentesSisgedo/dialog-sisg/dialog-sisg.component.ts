import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DependenciasService } from 'src/app/servicios/dependencias.service';
import { listOperacion } from '../../formularios/operacion';
import { QueryService } from 'src/app/servicios/query.service';
import { Swal2Service } from 'src/app/servicios/swal2.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MPVService } from 'src/app/servicios/mpv.service';


@Component({
  selector: 'app-dialog-sisg',
  templateUrl: './dialog-sisg.component.html',
  styleUrls: ['./dialog-sisg.component.scss'],
})
export class DialogSisgComponent implements OnInit {
  control = new FormControl();
  formOperacion: FormGroup = listOperacion;
  dependencias: any = [];
  json_operacion: any = [];

  //depe_id:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any = [],
    private DependenciasService: DependenciasService,
    private QueryService: QueryService,
    private Swal2Service: Swal2Service,
    private MPVService:MPVService,
    public modalBaseDialogRef: MatDialogRef<DialogSisgComponent>,
  ) {
    //console.log(this.data);
    this.formOperacion.patchValue(this.data);
    this.listDependencias();
  }

  ngOnInit(): void {}
  listDependencias() {
    this.DependenciasService.getdependencias().subscribe(
      (data: any) => {
        //console.log(data)
        this.dependencias = data;
      },
      (err: any) => {}
    );
  }

  filtrarDependencia() {
    const data = this.dependencias.filter(
      (i: any) => i.depe_id === Number(this.formOperacion.value.codigo)
    );
    data.length > 0
      ? this.formOperacion.controls['depe_id'].setValue(
          data[data.length - 1]['depe_id']
        )
      : this.formOperacion.controls['depe_id'].setValue(null);
  }

  filesToUpload: any;
  cDocumento: any;
  destinos: any = [];

  GuardarDestinos() {
    //console.log(this.formOperacion.value)
    //tabla: operacion
    let verificar = this.destinos.filter(
      (i: any) => i.dependencia === Number(this.formOperacion.value.depe_id)
    );
    if (verificar.length) {
      this.Swal2Service.alertaToast(
        'ATENCIÓN',
        'Debe de seleccionar otra dependencia.',
        'warning'
      );
    } else {
      let data = this.dependencias.filter(
        (i: any) => i.depe_id === Number(this.formOperacion.value.depe_id)
      );
      this.destinos.push({
        id: this.destinos.length,
        original: 'ORIGINAL',
        copia: this.formOperacion.value.oper_forma
          ? this.formOperacion.value.oper_forma
          : false, // oper_forma
        dependencia: this.formOperacion.value.depe_id, // depe_id
        dependencia_name: data[data.length - 1]['depe_nombre'], // depe_id
        proveido: this.formOperacion.value.oper_acciones, // oper_acciones

        //path_primary:this.cDocumento,
        //name_primary:this.nombreArchivo
      });
      //this.formOperacion.reset();
      this.formOperacion.controls['relacionado'].setValue(null);
      this.formOperacion.controls['codigo'].setValue(null);
      this.formOperacion.controls['depe_id'].setValue(null);
      this.formOperacion.controls['oper_forma'].setValue(null);
      this.formOperacion.controls['oper_acciones'].setValue(null);
    }
  }

  /*
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
                this.destinos.push({
                  path_primary:this.cDocumento,
                  name_primary:nombreArchivo
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
  }*/

  deleteArch(i: any) {
    this.destinos.splice(i, 1);
    //console.log(this.destinos);
  }

  EnviarOperacion() {
    //console.log(this.formMesaTramite);
    if (this.destinos.length > 0) {
      this.formOperacion.controls['destinos'].setValue(this.destinos);
      //console.log(1);
      this.MPVService.createExpedienteSisgedo(this.formOperacion.value).subscribe(
        (resp: any) => {
          if(resp.validated){
            this.Swal2Service.alertaToast(
              'Guardado',
              'Se guardó con éxito',
              'success'
            );
            this.modalBaseDialogRef.close();
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
}
