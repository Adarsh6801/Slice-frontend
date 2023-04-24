import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardGuard implements CanActivate {
  canActivate() {
    const token = localStorage.getItem('token_id');
    if(token){
      return true
    }else{
      return false
    }
  }
  
}
