import { ConditionalExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { PideService } from 'src/app/servicios/pide.service'
import { Swal2Service } from 'src/app/servicios/swal2.service';
import { AreaService } from './servicios/areas.service';
import { CargoService } from './servicios/cargos.service';
import { FilesService } from './servicios/files.service';
import { LoginService } from './servicios/auth.service';
import { ProductService } from './sistema/formularios/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mpi-mesa-partes';
  dni = "";
  nombres = "";
  codigo = "";
  username = "";
  password = "";
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  products =[];

  ngOnInit() {
    //this.AreasService.getAllAreas();
    //this.CargosService.getAllCargos();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value)),
    );
  }

  getProductsList(){
    this.ProductService.getAllProducts().subscribe(
      response => this.products = response
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  constructor(private ProductService: ProductService, private AreaService: AreaService, private LoginService: LoginService, private CargoService: CargoService, private FilesService: FilesService,
    private PideService: PideService, private Swal2Service : Swal2Service) {}
}
