import { Component, OnInit, NgZone } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { DatePipe } from '@angular/common';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/Geolocation/ngx';

@Component({
  selector: 'app-list-extrato',
  templateUrl: './list-extrato.page.html',
  styleUrls: ['./list-extrato.page.scss'],
  providers:[DatePipe]
})
export class ListExtratoPage implements OnInit {
  public latDest: any;
  public lngDest: any;
  public latCur: any;
  public lngCur: any;
  public endereco: string;
  public position: any;

  displayedColumns = ['endereco', 'entrada', 'saida', 'valor', 'acao'];
  extrato: [];
  constructor(private getServices: ProvidersService,
    public nativeGeocoder: NativeGeocoder,
    public ngZone: NgZone,
    public launchNavigator: LaunchNavigator,
    public geolocation: Geolocation) {

    }

  ngOnInit() {
    const user = localStorage.getItem('userid');
    this.mostraExtrato(user);
    this.getLocation();
  }

  mostraExtrato(userid){

  this.getServices.getExtrato().subscribe(res => {
   // eslint-disable-next-line eqeqeq
   this.extrato =  res.filter(dados => dados.iduser == userid);
    });
  }

 async getLocation(){
    this.position = await this.geolocation.getCurrentPosition();
     this.latCur = this.position.coords.latitude;
     this.lngCur = this.position.coords.longitude;
     console.log(this.latCur, this.lngCur);


  }

  async onRowClicked(row){
    this.endereco = row;


    const optNav: LaunchNavigatorOptions = {
      start: [this.latCur, this.lngCur],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };

    this.launchNavigator.navigate(this.endereco, optNav)
    .then(sucess => alert('Navegador Aberto'),
    error => alert('Erro'));
  }

}
