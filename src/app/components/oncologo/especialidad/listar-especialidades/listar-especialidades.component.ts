import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Especialidad } from '../../../../models/especialidad';
import { EspecialidadService } from '../../../../services/especialidad.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-especialidades',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './listar-especialidades.component.html',
  styleUrl: './listar-especialidades.component.css',
})
export class ListarEspecialidadesComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'especialidad',
    'complejidad',
    'acciones',
  ];
  // disableEdit: boolean = false;

  dataSource: MatTableDataSource<Especialidad> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private especialidadService: EspecialidadService) {}

  ngOnInit(): void {
    this.especialidadService.list().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error(error);
        // this.disableEdit = true;
        this.especialidadService.setMockList();
      },
    });

    this.especialidadService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id: number) {
    this.especialidadService.delete(id).subscribe((data) => {
      this.especialidadService.list().subscribe((data) => {
        this.especialidadService.setList(data);
      });
    });
  }
}
