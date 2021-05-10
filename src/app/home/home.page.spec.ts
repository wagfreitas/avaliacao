import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ProvidersService } from '../services/providers.service';


describe('HomePage', () => {
  let component: HomePage;
  let service: ProvidersService;

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
