import { Component } from '@angular/core';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bright = 0.42;
  extrato: Array<any> =  [];
  constructor(private getServices: ProvidersService) {

    }

  goToList(){
    this.getServices.getExtrato().subscribe(res => {
      this.extrato = res;
      console.log('aqui', res);
    });
  }
}
