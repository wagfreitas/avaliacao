import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder,  FormControl } from '@angular/forms';
import {  NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { ProvidersService} from '../services/providers.service';
import { ToastController } from '@ionic/angular';

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
    public providersService: ProvidersService,
    public toastController: ToastController
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

  async mensagem() {
  const toast = await this.toastController.create({
    message: 'CPF ou Senha incorretos',
    duration: 2000
  });
  toast.present();
  }

  doLogin(values: any) {
     // eslint-disable-next-line eqeqeq
     const cpf = values.cpf;
     const password = values.password;

     this.providersService.login().subscribe(data => {

          this.users = data.find(x => x.cpf === cpf && x.password === password);
          if(this.users){
              const f = {
                nome: this.users.name,
                token: this.users.apiToken
              };
              console.log('retorno',f);
            localStorage.setItem('token', this.users.apiToken);
            localStorage.setItem('userid', this.users.userid);
            this.router.navigate(['home']);
          }else {
             this.mensagem();
          }

     });
  }
}
