import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarEspecialidadesComponent } from './listar-especialidades/listar-especialidades.component';

@Component({
  selector: 'app-especialidad',
  standalone: true,
  imports: [RouterOutlet, ListarEspecialidadesComponent],
  templateUrl: './especialidad.component.html',
  styleUrl: './especialidad.component.css',
})
export class EspecialidadComponent {
  constructor(public route: ActivatedRoute) {}
}
