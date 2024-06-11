import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { TipoTratamiento } from '../../../../models/tipoTratamiento';
import { TipoTratamientoService } from '../../../../services/tipo-tratamiento.service';

@Component({
  selector: 'app-listar-tipos-tratamiento',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './listar-tipos-tratamiento.component.html',
  styleUrl: './listar-tipos-tratamiento.component.css'
})
export class ListarTiposTratamientoComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'nombreTratamiento',
    'acciones'
  ]

  dataSource: MatTableDataSource<TipoTratamiento> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private tipoTratamientoService: TipoTratamientoService) {}

  ngOnInit(): void {
    this.tipoTratamientoService.list().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error(error);
        this.tipoTratamientoService.setMockList();
      },
    });

    this.tipoTratamientoService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id: number) {
    this.tipoTratamientoService.delete(id).subscribe((data) => {
      this.tipoTratamientoService.list().subscribe((data) => {
        this.tipoTratamientoService.setList(data);
      });
    });
  }
}
