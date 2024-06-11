import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarTiposTratamientoComponent } from './listar-tipos-tratamiento/listar-tipos-tratamiento.component';

@Component({
  selector: 'app-tipo-tratamiento',
  standalone: true,
  imports: [RouterOutlet, ListarTiposTratamientoComponent],
  templateUrl: './tipo-tratamiento.component.html',
  styleUrl: './tipo-tratamiento.component.css',
})
export class TipoTratamientoComponent {
  constructor(public route: ActivatedRoute) {}
}
