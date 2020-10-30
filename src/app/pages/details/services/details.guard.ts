import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable()

//Validar Rotas use CanActivate
export class DetailsGuard implements CanActivate {

  constructor(private router: Router) {
  }

  //localhost:4200/details?lat=32.778&long=86.78
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (route.queryParams.lat && route.queryParams.lon) {
      return true;
    }

    //return '/'; //home
    //this.router.navigate(['']); return false;
    return this.router.createUrlTree(['']);
  }
}
