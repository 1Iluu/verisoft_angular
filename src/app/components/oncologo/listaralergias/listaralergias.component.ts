import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Alergias } from '../../../models/alergias';
import { AlergiasService } from '../../../services/alergias.service';

export interface PeriodicElement {
  idalergias: number;
  Descripcionalergias: string;
}
@Component({
  selector: 'app-listaralergias',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listaralergias.component.html',
  styleUrl: './listaralergias.component.css'
})
export class ListaralergiasComponent implements OnInit{
  displayedColumns: string[]=
  [
    'id',
    'descripcion'
  ];
  
  dataSource:MatTableDataSource<Alergias> = new MatTableDataSource()
  constructor(private aS:AlergiasService ){}
  ngOnInit(): void {
    this.aS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
}
}