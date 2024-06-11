<<<<<<< HEAD
import { Component } from '@angular/core';
import { ListarsegurosComponent } from './seguro/listarseguros/listarseguros.component';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { ListarcirugiasComponent } from './listarcirugias/listarcirugias.component';
=======
import { Component, OnInit } from '@angular/core';
import { ListarsegurosComponent } from './listarseguros/listarseguros.component';
import { RouterOutlet,ActivatedRoute } from '@angular/router';
>>>>>>> parent of 91e569c (Merge branch 'JoseCardenas' into develop)

@Component({
  selector: 'app-paciente',
  standalone: true,
<<<<<<< HEAD
  imports: [ListarsegurosComponent, RouterOutlet, ListarcirugiasComponent],
=======
  imports: [ListarsegurosComponent,RouterOutlet],
>>>>>>> parent of 91e569c (Merge branch 'JoseCardenas' into develop)
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css',
})
<<<<<<< HEAD
export class PacienteComponent {
  constructor(public route: ActivatedRoute) {}
=======
export class PacienteComponent implements OnInit{
  constructor(public route: ActivatedRoute){}
  ngOnInit(): void {
    
  }

>>>>>>> parent of 91e569c (Merge branch 'JoseCardenas' into develop)
}
