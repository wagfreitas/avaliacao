import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-list-extrato',
  templateUrl: './list-extrato.page.html',
  styleUrls: ['./list-extrato.page.scss'],
})
export class ListExtratoPage implements OnInit {
 extrato: [];
  constructor(private getServices: ProvidersService) { }

  ngOnInit() {
  }
  getExtrato(){
  this.getServices.getExtrato().subscribe(res => {
      this.extrato = res;
      console.log('aqui', res);
    });
  }

}
