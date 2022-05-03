import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MPVService } from 'src/app/servicios/mpv.service';
import { environment } from 'src/environments/environment';
import { formMesaTramite } from '../../formularios/dialogEmail';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-dialog-email',
  templateUrl: './dialog-email.component.html',
  styleUrls: ['./dialog-email.component.scss']
})
export class DialogEmailComponent implements OnInit {
  enviado: boolean = false;
  formMesaTramite: FormGroup = formMesaTramite;
  //backendApi = environment.backendApi;
  dialogRef: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any = [],
  public modalBaseDialogRef: MatDialogRef<DialogEmailComponent>,
  private MPVService:MPVService) { 
    console.log(this.data)
    this.formMesaTramite.patchValue(this.data);
    }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMailCustom() {
    this.MPVService.sendMailCustom(this.formMesaTramite.value).subscribe(
      (resp: any) => {
        console.log(resp)
        if(resp.validated){
          console.log(`Correo fue enviado exitosamente a ${this.formMesaTramite.value.nombres}`);
        }
      },
      err => {
        console.log(err);
        this.enviado = false;
      }
    )
  }
}
