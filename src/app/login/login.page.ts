import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder,  FormControl } from '@angular/forms';
import {  NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

email: string;
photo: string;
loginForm: FormGroup;
errorMessage: string;
 validationMessages = {
    cpf: [
      { type: 'required', message: 'CPF é requerido' },
      { type: 'maxlength', message: 'Cpf precisa ter no máximo 11 Digito' }
    ],
    password: [
      { type: 'required', message: 'Senha é requerida.' },
      { type: 'minlength', message: 'Senha deve ter ao menos 5 caracteres.' }
    ]
  };
 users: any;

  constructor(
    public router: Router,
    public providersService: ProvidersService
   ) {

    this.loginForm = new FormGroup({
      cpf: new FormControl('', Validators.compose([
        Validators.maxLength(11),
        Validators.required

      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }


  ngOnInit(): void {

  }

  doLogin(values: any) {
     // eslint-disable-next-line eqeqeq
     const cpf = values.cpf;
     const password = values.password;

     this.providersService.getToken().subscribe(data => {
          console.log('data', data);
          this.users = data.find(x => x.cpf === cpf && x.password === password);
          console.log('users', this.users);
          if(this.users){
              const f = {
                nome: this.users.name,
                token: this.users.apiToken
              };
              console.log('retorno',f);
            localStorage.setItem('token', this.users.apiToken);
            this.router.navigate(['home']);
          }

     });
  }
}
