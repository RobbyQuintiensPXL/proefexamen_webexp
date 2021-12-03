import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AddGiftComponent } from '../components/add-gift/add-gift.component';

@Injectable({
  providedIn: 'root'
})
export class DirtyGuard implements CanDeactivate<any> {
  canDeactivate(
    component: AddGiftComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.giftForm.dirty) {
      return window.confirm('Ben je zeker dat je deze pagina wil verlaten?');
    }
    return true;
  }
}
