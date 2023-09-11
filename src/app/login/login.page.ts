import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  // Agrega las validaciones necesarias para los campos
  usernamePattern = /^[a-zA-Z0-9]{3,8}$/; // Alfanumérico, 3 a 8 caracteres
  passwordPattern = /^[0-9]{4}$/; // Números, 4 dígito

  constructor(private router: Router, 
              private userService: UserService,
              private route: ActivatedRoute) { }

  redirectIfValid(): void {
    if (this.username && this.password && this.username.match(this.usernamePattern) && this.password.match(this.passwordPattern)) {
      this.router.navigate(['/login'], { queryParams: { username: this.username } });
    } else {
      console.log("Los datos ingresados no son válidos.", { queryParams: { username: this.username } });
    }
  }

  login() {
    const registeredUser = this.userService.getRegisteredUser();
    console.log('Datos del usuario registrado:', registeredUser);
    console.log('Credenciales ingresadas:', this.username, this.password);

    // Comparar las credenciales ingresadas con los datos del usuario registrado.
    if (
      registeredUser &&
      this.username === registeredUser.username &&
      this.password === registeredUser.password
    ) {
      // Las credenciales coinciden, redirigir a la página de inicio.
      this.router.navigate(['/qr-scanner']);
    } else {
      // Las credenciales no coinciden, muestra un mensaje de error o realiza otra acción.
      console.log("Los datos ingresados no son válidos.")
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.password = params['password'];
    });
  }

}
