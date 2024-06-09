import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Seguro } from '../../../../models/seguro';
import { SeguroService } from '../../../../services/seguro.service';


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
  'codigo', 
  'seguro', 
  'descripcion'
  ];

  dataSource:MatTableDataSource<Seguro> = new MatTableDataSource()
  constructor(private sS:SeguroService ){}
  ngOnInit(): void {
    this.sS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
