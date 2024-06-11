import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Seguro } from '../../../models/seguro';
import { SeguroService } from '../../../services/seguro.service';

export interface PeriodicElement {
  codigo: number;
  Seguro: string;
  descripcion: string;
}


@Component({
  selector: 'app-listarseguros',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarseguros.component.html',
  styleUrl: './listarseguros.component.css'
})
export class ListarsegurosComponent implements OnInit {
  displayedColumns: string[] =
  [
<<<<<<< HEAD:src/app/components/paciente/seguro/listarseguros/listarseguros.component.ts
  'codigo',
  'seguro',
  'descripcion',
  'accion01',
  'accion02'
=======
  'codigo', 
  'seguro', 
  'descripcion'
>>>>>>> parent of 91e569c (Merge branch 'JoseCardenas' into develop):src/app/components/paciente/listarseguros/listarseguros.component.ts
  ];

  dataSource:MatTableDataSource<Seguro> = new MatTableDataSource()
  constructor(private sS:SeguroService ){}
  ngOnInit(): void {
    this.sS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
