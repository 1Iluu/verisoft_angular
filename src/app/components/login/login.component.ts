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
=======
  imports: [FormsModule,MatFormFieldModule,CommonModule, MatInputModule,MatButtonModule,RouterLink ],
>>>>>>> parent of 7391ad8 (fix: files indent)
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
<<<<<<< HEAD
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
=======
  username: string = ""
  password: string = ""
  mensaje: string = ""
  
  cambiarFormulario(){}
>>>>>>> parent of 7391ad8 (fix: files indent)
}
