import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class OlvidoPage implements OnInit {
  username: string = '';
  newPassword: string = '';
  usernamePattern = /^[a-zA-Z0-9]{3,8}$/; // Alfanumérico, 3 a 8 caracteres
  passwordPattern = /^[0-9]{4}$/; // Números, 4 dígitos

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.queryParams['username'] || '';

  }

  recoverPassword() {
    if (this.username && this.newPassword && this.username.match(this.usernamePattern) && this.newPassword.match(this.passwordPattern)) {
      // Aquí puedes implementar la lógica para recuperar la contraseña.
      // Esto podría involucrar enviar una solicitud al servidor o actualizar la contraseña en la base de datos.
      // Una vez que se complete la recuperación, puedes redirigir al usuario a la página de inicio de sesión.
      this.router.navigate(['/login']);
    } else {
      console.log("Los datos ingresados no son válidos.");
    }
  }
}
