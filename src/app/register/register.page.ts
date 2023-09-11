import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';  


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = '';
  password: string = '';
  usernamePattern = /^[a-zA-Z0-9]{3,8}$/; // Alfanumérico, 3 a 8 caracteres
  passwordPattern = /^[0-9]{4}$/; // Números, 4 dígito
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    const newUser = {
      username: this.username,
      password: this.password,

    };

    if (this.username && this.password && this.username.match(this.usernamePattern) && this.password.match(this.passwordPattern)) {
      this.router.navigate(['/login'], { queryParams: { username: this.username } }), {
        queryParams: {
          username: this.username,
          password: this.password
        }
      };
     
    } else {
      console.log("Los datos ingresados no son válidos.", { queryParams: { username: this.username } });
    }
    

    this.userService.setRegisteredUser(newUser);

    console.log('Datos del nuevo usuario:', newUser);
    // Redirigir al usuario a la página de inicio de sesión.
    
  }

}
