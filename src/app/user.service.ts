import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registeredUser: any = null;

  constructor() { }

  setRegisteredUser(user: any) {
    this.registeredUser = user;
  }

  // Método para obtener los datos del usuario registrado
  getRegisteredUser() {
    console.log('Datos del usuario registrado en UserService:', this.registeredUser);
    return this.registeredUser;
  }
}
