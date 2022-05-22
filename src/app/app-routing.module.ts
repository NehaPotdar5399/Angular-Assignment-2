import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { AddNewProductComponent } from './feature/add-new-product/add-new-product.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './feature/product-details/product-details.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { WelcomeScreenComponent } from './feature/welcome-screen/welcome-screen.component';


const routes: Routes = [
  {path:'LoginPage', component:LoginpageComponent},
  {path:'',redirectTo:'LoginPage', pathMatch:'full'},
  
  {path:'WelcomeScreen' ,component:WelcomeScreenComponent},
  {path:'',redirectTo:'WelcomeScreen',pathMatch:'full'},
  {path:'ProductList' ,component:ProductListComponent},
  {path:'AddNewProduct' , component:AddNewProductComponent},
  {path:'ProductDetails',component:ProductDetailsComponent},
  {path:'ProductDetails/:id',component:ProductDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
