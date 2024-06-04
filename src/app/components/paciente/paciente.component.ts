import { Component, OnInit } from '@angular/core';
import { ListarsegurosComponent } from './listarseguros/listarseguros.component';
import { RouterOutlet,ActivatedRoute } from '@angular/router';
import { ListarcirugiasComponent } from './listarcirugias/listarcirugias.component';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [ListarsegurosComponent,RouterOutlet,
            ListarcirugiasComponent],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent implements OnInit{
  constructor(public route: ActivatedRoute){}
  ngOnInit(): void {
    
  }

}
