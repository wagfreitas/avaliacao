import { Component, OnInit, NgZone } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { DatePipe } from '@angular/common';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-list-extrato',
  templateUrl: './list-extrato.page.html',
  styleUrls: ['./list-extrato.page.scss'],
  providers:[DatePipe]
})
export class ListExtratoPage implements OnInit {
  public lat: any;
  public lng: any;
  endereco: string;
  displayedColumns = ['endereco', 'entrada', 'saida', 'valor', 'acao'];
  extrato: [];
  constructor(private getServices: ProvidersService,
    public nativeGeocoder: NativeGeocoder,
    public ngZone: NgZone) { }

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

  async onRowClicked(row){
    this.endereco = row;
    const  options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(this.endereco, options)
    .then((result: NativeGeocoderResult[]) => {
      this.ngZone.run(() => {
        this.lat = parseFloat(result[0].latitude);
        this.lng = parseFloat(result[0].longitude);
        console.log('latitude', this.lat, 'longitude', this.lng);
      });
    });

  }

}
