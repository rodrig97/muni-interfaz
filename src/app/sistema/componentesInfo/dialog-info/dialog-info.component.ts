import { Component, Inject, Injectable, INJECTOR, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MPVService } from 'src/app/servicios/mpv.service';
import { environment } from 'src/environments/environment';
import { formMesaTramite } from '../../formularios/dialogInfo';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {
  //backendapi = environment.backendApi;
  submitted: boolean = false;
  formMesaTramite: FormGroup = formMesaTramite;
  //documentos: any = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any = [],
    public modalBaseDialogRef: MatDialogRef<DialogInfoComponent>,
    private MPVService:MPVService) {
    //this.getAllDataMPV();
    console.log(this.data)
    this.formMesaTramite.patchValue(this.data);
   }

   ngOnInit(): void {
    
  }

}
