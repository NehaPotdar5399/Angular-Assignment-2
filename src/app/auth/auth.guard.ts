import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		throw new Error("Method not implemented.");
	}
// 	constructor(
// 		private authService: AuthService,
// 		private router: Router) { }
// 	canActivate(
// 		// route: ActivatedRouteSnapshot,
// 		// state: RouterStateSnapshot): boolean | Promise<boolean> {
// 		// // var isAuthenticated = this.authService.getAuthStatus();
// 		// if (!isAuthenticated) {
// 		// 	this.router.navigate(['/login']);
// 		// }
// 		// return isAuthenticated;
// 	}
}
