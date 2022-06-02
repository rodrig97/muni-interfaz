import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-componentes-pdfs',
  templateUrl: './componentes-pdfs.component.html',
  styleUrls: ['./componentes-pdfs.component.scss'],
})
export class ComponentesPdfsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any = [],
    public modalBaseDialogRef: MatDialogRef<ComponentesPdfsComponent>
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {}
}
