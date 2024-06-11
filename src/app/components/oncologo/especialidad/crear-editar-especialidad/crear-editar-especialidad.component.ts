import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Especialidad } from '../../../../models/especialidad';
import { EspecialidadService } from '../../../../services/especialidad.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-editar-especialidad',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './crear-editar-especialidad.component.html',
  styleUrl: './crear-editar-especialidad.component.css',
})
export class CrearEditarEspecialidadComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  especialidad: Especialidad = new Especialidad();
  id: number = 0;
  edicion: boolean = false;

  listaComplejidades: { value: string; viewValue: string }[] = [
    { value: 'Alta', viewValue: 'Alta' },
    { value: 'Media', viewValue: 'Media' },
    { value: 'Baja', viewValue: 'Baja' },
  ];

  constructor(
    private FormBuilder: FormBuilder,
    private especialidadService: EspecialidadService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data[`id`];
      this.edicion = data[`id`] != null;
      this.init();
    });

    this.form = this.FormBuilder.group({
      nombreEspecialidad: ['', Validators.required],
      complejidad: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  init(): void {
    if (this.edicion) {
      this.especialidadService.listId(this.id).subscribe({
        next: (data) => {
          // this.form = this.FormBuilder.group({
          //   nombreEspecialidad: [data.nombreEspecialidad],
          //   complejidad: [data.complejidad],
          // });

          this.form = new FormGroup({
            nombreEspecialidad: new FormControl(data.nombreEspecialidad),
            complejidad: new FormControl(data.complejidad),
          });
        },
        error: (error) => {
          this.openSnackBar('Error al cargar especialidad.', 'Aceptar');
        },
      });
    }
  }

  aceptar(): void {
    if (this.form.valid) {
      this.especialidad.id = this.id;
      this.especialidad.nombreEspecialidad =
        this.form.value['nombreEspecialidad'];
      this.especialidad.complejidad = this.form.value['complejidad'];

      if (this.edicion) {
        this.especialidadService.update(this.especialidad).subscribe({
          next: (data) => {
            this.especialidadService.list().subscribe((data) => {
              this.especialidadService.setList(data);
              this.openSnackBar('Especialidad actualizada', 'Aceptar');
            });
            this.router.navigate(['/especialidades']);
          },
          error: (error) => {
            this.openSnackBar('Error al actualizar especialidad', 'Aceptar');
          },
        });
      } else {
        this.especialidadService.insert(this.especialidad).subscribe({
          next: (data) => {
            this.especialidadService.list().subscribe((data) => {
              this.especialidadService.setList(data);
              this.openSnackBar('Especialidad creada', 'Aceptar');
            });
            this.router.navigate(['/especialidades']);
          },
          error: (error) => {
            console.error(error);
            this.openSnackBar('Error al crear especialidad.', 'Aceptar');
          },
        });
      }
    }
  }
}
