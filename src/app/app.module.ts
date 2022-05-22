import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardComponent } from './authguard/authguard.component';
const routes: Routes = [
  {
    path:'auth',
   loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'feature',
   loadChildren:()=> import('./feature/feature.module').then(m=>m.FeatureModule),
  },
  {path:'',redirectTo:'auth',pathMatch:'full'}

];


@NgModule({
  declarations: [
    AppComponent,
    AuthguardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }