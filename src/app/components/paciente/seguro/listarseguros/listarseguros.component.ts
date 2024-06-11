import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Seguro } from '../../../../models/seguro';
import { SeguroService } from '../../../../services/seguro.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


export interface PeriodicElement {
  codigo: number;
  Seguro: string;
  descripcion: string;
}


@Component({
  selector: 'app-listarseguros',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatButtonModule],
  templateUrl: './listarseguros.component.html',
  styleUrl: './listarseguros.component.css'
})
export class ListarsegurosComponent implements OnInit {
  displayedColumns: string[] = 
  [
  'codigo', 
  'seguro', 
  'descripcion',
  'accion01',
  ];

  dataSource:MatTableDataSource<Seguro> = new MatTableDataSource()
  constructor(private sS:SeguroService ){}
  ngOnInit(): void {
    this.sS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
    this.sS.getList().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
