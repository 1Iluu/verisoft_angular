import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaralergiasComponent } from './listaralergias/listaralergias.component';

@Component({
  selector: 'app-oncologo',
  standalone: true,
  imports: [RouterOutlet, ListaralergiasComponent],
  templateUrl: './oncologo.component.html',
  styleUrl: './oncologo.component.css',
})
export class OncologoComponent {
  constructor(public route: ActivatedRoute) {}
}
