import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './Components/company-page/company-page.component';
import { HomeComponent } from './Components/home/home.component';
import { MobilePageComponent } from './Components/mobile-page/mobile-page.component';
import { PortfolioPageComponent } from './Components/portfolio-page/portfolio-page.component';
import { ServicePageComponent } from './Components/service-page/service-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-page', component: HomeComponent},
  { path: 'service-page', component: ServicePageComponent },
  { path: 'mobile-page', component: MobilePageComponent },
  { path: 'portfolio-page', component: PortfolioPageComponent },
  { path: 'company-page', component: CompanyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
