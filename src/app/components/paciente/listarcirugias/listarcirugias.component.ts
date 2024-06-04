import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CirugiasService } from '../../../services/cirugias.service';
import { Cirugias } from '../../../models/cirugias';

export interface PeriodicElement {
  idalergias: number;
  Descripcionalergias: string;
}
@Component({
  selector: 'app-listarcirugias',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarcirugias.component.html',
  styleUrl: './listarcirugias.component.css'
})
export class ListarcirugiasComponent implements OnInit{
  displayedColumns: string[]=
  [
    'id',
    'Descripcioncirugias'
  ];
  
  dataSource:MatTableDataSource<Cirugias> = new MatTableDataSource()
  constructor(private cS:CirugiasService ){}
  ngOnInit(): void {
    this.cS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
}
}