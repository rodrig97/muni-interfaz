import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [

  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatAutocompleteModule
    
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
})

export class MaterialModule { }
