import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
=======
  imports: [FormsModule,MatFormFieldModule,CommonModule, MatInputModule,MatButtonModule ],
>>>>>>> parent of 91e569c (Merge branch 'JoseCardenas' into develop)
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
<<<<<<< HEAD
  username: string = '';
  password: string = '';
  mensaje: string = '';

  cambiarFormulario() {}
=======
  username: string = ""
  password: string = ""
  mensaje: string = ""
  login() {}
  cambiarFormulario(){}
>>>>>>> parent of 91e569c (Merge branch 'JoseCardenas' into develop)
}
