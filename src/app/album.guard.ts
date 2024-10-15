import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authService.isAdmin()) {
      return true; // L'utilisateur est un admin, autoriser l'accès
    } else {
      // Rediriger vers une page d'interdiction d'accès si l'utilisateur n'est pas admin
      return this.router.createUrlTree(['forbidden']); // Retourner le UrlTree ici
    }
  }
}
