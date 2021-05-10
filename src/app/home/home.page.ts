import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { Brightness } from '@ionic-native/brightness/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  valueMax  = 1;
  valueCur = 0.5;
  atualVal: number;
  extrato: Array<any> =  [];
  constructor(private getServices: ProvidersService,
    private bright: Brightness,
    private router: Router) {
      this.getBrightness();
    }

  ngOnInit(){
    this.getServices.getExtrato().subscribe(res => {
      console.log(res);
    });
    this.setBrightness();
    this.getBrightness();
  }

  setBrightness(){
    this.bright.setBrightness(this.valueMax);
  }

  currentBrightness(){
    this.bright.setBrightness(this.valueCur);
  }

  getBrightness(){
   this.bright.getBrightness().then(val =>{
       this.atualVal = val;
       console.log('brilho atual', val);
    });
  }

  logOut(){
    localStorage.removeItem('token');
  }


  goToList(){
    this.currentBrightness();
    this.router.navigate(['extrato']);
  }
}
