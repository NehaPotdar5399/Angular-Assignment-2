import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

import { AuthguardGuard } from '../authguard.guard';
import { AuthGuardGuard } from '../authguard.service';



const routes: Routes = [
  {
  path:'list',
  component:ProductListComponent
  },
  {
    path:'detail/:id',
    component:ProductDetailsComponent
  },
  {
    path:'',
    component:WelcomeScreenComponent
  },
  {
    path:'addProduct',
    canActivate:[AuthGuardGuard],
    component:AddNewProductComponent
  }
];




@NgModule({
  declarations: [
    AddNewProductComponent,
    WelcomeScreenComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    AddNewProductComponent,
    WelcomeScreenComponent,
    ProductDetailsComponent,
    ProductListComponent
  ]
})
export class FeatureModule { }




