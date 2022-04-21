import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import * as autoTable from 'jspdf-autotable';
//import { CustomerService } from '../../formularios/customerservice';
//import { Customer } from '../../formularios/customer';
//import { ProductSmall } from '../../../assets/products-small';
//import * as data from '../../assets/products-SVGAnimatedLengthList.json';
import { SortEvent } from 'primeng/api';
//import { DocumentosService } from 'src/app/servicios/documentos.service';
import { MPVService } from 'src/app/servicios/mpv.service';
import { environment } from 'src/environments/environment';
//MPVService


@Component({
  selector: 'app-server-page',
  templateUrl: './server-page.component.html',
  styleUrls: ['./server-page.component.scss'],
})
export class ServerPageComponent implements OnInit {
  backendpdfs = environment.backendpdfs;
  first = 0;
  rows = 10;

  products: any = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      document: 'bamboo-watch.pdf',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      document: 'black-watch.pdf',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      document: 'blue-band.pdf',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      document: 'blue-t-shirt.pdf',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      document: 'bracelet.pdf',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1005',
      code: 'av2231fwg',
      name: 'Brown Purse',
      description: 'Product Description',
      document: 'brown-purse.pdf',
      price: 120,
      category: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
    },
    {
      id: '1006',
      code: 'bib36pfvm',
      name: 'Chakra Bracelet',
      description: 'Product Description',
      document: 'chakra-bracelet.pdf',
      price: 32,
      category: 'Accessories',
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
    {
      id: '1007',
      code: 'mbvjkgip5',
      name: 'Galaxy Earrings',
      description: 'Product Description',
      document: 'galaxy-earrings.pdf',
      price: 34,
      category: 'Accessories',
      quantity: 23,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1008',
      code: 'vbb124btr',
      name: 'Game Controller',
      description: 'Product Description',
      document: 'game-controller.pdf',
      price: 99,
      category: 'Electronics',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 4,
    },
    {
      id: '1009',
      code: 'cm230f032',
      name: 'Gaming Set',
      description: 'Product Description',
      document: 'gaming-set.pdf',
      price: 299,
      category: 'Electronics',
      quantity: 63,
      inventoryStatus: 'INSTOCK',
      rating: 3,
    },
  ];

  //customers: Customer[] = [];

  selectedProducts: any = [];

  cols: any = [];

  exportColumns: any = [];
  documentos:any=[]
  constructor(private MPVService: MPVService) {
    this.getAllDataMPV();
  }


  getAllDataMPV(){
    this.MPVService.getAllDataMPV().subscribe(
      (data:any)=> { this.documentos = data.data;
        for(let i = 0; i<this.documentos.length;i++){
          if(this.documentos[i]['documentos'].length){
            this.documentos[i]['documentos'] =JSON.parse(this.documentos[i]['documentos']);
          }
          
        }
        //console.log(this.documentos);
      },
      (err: any) => {}
    );
  }

  sendMailCustom(){
    (req: Request) => {
      this.MPVService.sendMailCustom(req);
    }
  }

  enviarCorreo(){
    (req: Request, expe_id: any, content: any, mode: any) => {
      this.MPVService.enviarCorreo(req, expe_id, content, mode);
    }
  }
  
  
  ngOnInit(): void {
    this.cols = [
      { type:'text', field: 'tipo_doc', header: 'Tipo Doc.' },
      { type:'text', field: 'ndocumento', header: 'Nro' },
      { type:'text', field: 'asunto', header: 'Asunto' },
      { type:'json', field: 'documentos', header: 'PDF' },
      { type:'text', field: 'nombres', header: 'Solicitante' },
      { type:'text', field: 'ndoc', header: 'RUC/DNI' },
      { type:'text', field: 'expe_id', header: 'Sisgedo' },
      { type:'text', field: 'created_at', header: 'Fecha' },
      { type:'text', field: 'quantity', header: 'Hora' },
      { type:'text', field: '', header: 'Accion' },
    ];

    this.exportColumns = this.cols.map((col: any) => ({
      title: col.header,
      dataKey: col.field,
    }));

  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'cm');
        (doc as any).autoTable(this.exportColumns, this.getAllDataMPV());
        doc.save('mpvPdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
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
    event.data?.sort((data1, data2) => {
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
}
