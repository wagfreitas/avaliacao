import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProvidersService } from '../services/providers.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: ProvidersService, private router: Router) {}
  canActivate(): boolean {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl('/login');
    }
    return this.authService.getToken();
  }
}
