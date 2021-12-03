import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftListComponent } from '../components/gift-list/gift-list.component';
import { AddGiftComponent } from '../components/add-gift/add-gift.component';
import { PasswordGuard } from './password.guard';
import { DirtyGuard } from './dirty.guard';

const routes: Routes = [
  { path: 'home', component: GiftListComponent },
  { path: 'add', component: AddGiftComponent, canActivate: [PasswordGuard], canDeactivate: [DirtyGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
