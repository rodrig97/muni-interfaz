import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-dni',
  templateUrl: './dialog-dni.component.html',
  styleUrls: ['./dialog-dni.component.scss'],
})
export class DialogDniComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogDniComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
