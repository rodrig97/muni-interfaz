import { Component, OnInit, ViewChild } from '@angular/core';
import * as FileSaver from 'file-saver';
//import * as jsPDF from 'jspdf';
//import * as autoTable from 'jspdf-autotable';
//import * as data from '../../assets/products-SVGAnimatedLengthList.json';
import { SortEvent } from 'primeng/api';
//import { DocumentosService } from 'src/app/servicios/documentos.service';
import { MPVService } from 'src/app/servicios/mpv.service';
import { environment } from 'src/environments/environment';
import { DialogEmailComponent } from '../../componentesEmail/dialog-email/dialog-email.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  
} from '@angular/material/dialog';
import { DialogInfoComponent } from '../../componentesInfo/dialog-info/dialog-info.component';
import { DialogSisgComponent } from '../../componentesSisgedo/dialog-sisg/dialog-sisg.component';
import { TokenStorageService } from 'src/app/shared/token/token.service';
import { ComponentesPdfsComponent } from '../../componentes-pdfs/componentes-pdfs.component';


@Component({
  selector: 'app-server-page',
  templateUrl: './server-page.component.html',
  styleUrls: ['./server-page.component.scss'],
})
export class ServerPageComponent implements OnInit {
  
  backendpdfs = environment.backendpdfs;
  first = 0;
  rows = 10;

  cols: any = [];
  exportColumns: any = [];
  documentos: any = [];


  constructor(private MPVService: MPVService, private dialog: MatDialog,
    private DialogInfoComponent:DialogInfoComponent,private tokenStorageService:TokenStorageService) {
    
    this.getAllDataMPV();
  }

  getAllDataMPV() {
    this.MPVService.getAllDataMPV().subscribe(
      (data: any) => {
        this.documentos = data.data;
        for (let i = 0; i < this.documentos.length; i++) {
          if (this.documentos[i]['documentos'].length) {
            typeof this.documentos[i]['documentos'] === 'string' ?  this.documentos[i]['documentos'] = JSON.parse(
              this.documentos[i]['documentos']
            ) : '';
          }
        }
        console.log(this.documentos);
      },
      (err: any) => {}
    );
  }


  ngOnInit(): void {

    this.cols = [
      { width:2, type: 'text', field: 'tipo_documento', header: 'Tipo Doc.' },
      { width:2, type: 'text', field: 'ndocumento', header: 'Nro' },
      { width:7, type: 'text', field: 'asunto', header: 'Asunto' },
      { width:3, type: 'json', field: 'documentos', header: 'PDF' },
      { width:2, type: 'text', field: 'nombres', header: 'Solicitante' },
      { width:2, type: 'text', field: 'ndoc', header: 'RUC/DNI' },
      { width:2, type: 'text', field: 'expe_id', header: 'Sisgedo' },
      { width:2, type: 'date', field: 'created_at', header: 'Fecha' },
      { width:2, type: 'time', field: 'created_at', header: 'Hora' },
      { width:2, type: 'accion', field: 'expe_id', header: 'Accion' },
    ];

    this.exportColumns = this.cols.map((col: any) => ({
      width:col.width,
      type:col.type,
      title: col.header,
      dataKey: col.field,
    }));
  }

  exportPdf() {
    console.log(this.exportColumns)
    let title = 'Reporte de Mesa de Partes';
    
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {

        const doc = new jsPDF.default('l', 'cm');
        this.exportColumns = this.exportColumns.filter((i:any)=>i.type!=='json' && i.title!=='Accion' && i.type!=='date' && i.type!=='time')
        let column='';
        document.write(title);
        for(let i=0; i<this.exportColumns.length;i++){
          column+=i+':{columnWidth:'+Number(this.exportColumns[i]['width'])+'},';
        }
        (doc as any).autoTable(this.exportColumns, this.documentos, {
          styles:{fontSize:9},
          columnStyles: { 
            column
          },
        });
        doc.save('mpvPdf');
      });
    });
  }

  exportPdfSpecific(fila: any) {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'cm');
        (doc as any).autoTable(this.exportColumns, fila);
        doc.save('mpvPdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.documentos);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'documentos');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  clear(table: any) {
    table.clear();
  }

  customSort(event: SortEvent) {
    console.log(event);
    //event.slice(data1, data2);
    event.data?.sort((data1:any, data2:any) => {
      let value1 = data1.event.field;
      let value2 = data2.event.field;
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return Number(event.order) * result;
    });
  }

  openDialog(data:any) {
    const dialogRef = this.dialog.open(DialogEmailComponent, {
      width: '500px',
      data:data
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialog1(data:any) {
    //console.log(data)
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      width: '800px',
      data:data
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialog2(data:any){
    const dialogRef = this.dialog.open(DialogSisgComponent,{
      width: '800px',
      data:data
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllDataMPV();
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  displayBasic!: boolean;
  data_documentos:any=[]
  openDocumentos(data:any){
    this.displayBasic = true;
    this.data_documentos=data;
    /*const dialogRef = this.dialog.open(ComponentesPdfsComponent,{
      width: '800px',
      data:data
    });
    dialogRef.afterClosed().subscribe((result) => {
      
    });*/
  }

}