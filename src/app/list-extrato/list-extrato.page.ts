import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-extrato',
  templateUrl: './list-extrato.page.html',
  styleUrls: ['./list-extrato.page.scss'],
  providers:[DatePipe]
})
export class ListExtratoPage implements OnInit {
 extrato: [];
  constructor(private getServices: ProvidersService) { }

  ngOnInit() {
    const user = localStorage.getItem('userid');
    this.mostraExtrato(user);
  }

  mostraExtrato(userid){

  this.getServices.getExtrato().subscribe(res => {
   // eslint-disable-next-line eqeqeq
   this.extrato =  res.filter(dados => dados.iduser == userid);
    });
  }

}
