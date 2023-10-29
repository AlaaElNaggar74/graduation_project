import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { HomeComponent } from './user/home/home.component';
import { LandingComponent } from './user/home/landing/landing.component';
import { PractiseComponent } from './user/home/practise/practise.component';
import { PractisedetailsComponent } from './user/home/practisedetails/practisedetails.component';
import { ContractComponent } from './user/home/contract/contract.component';
import { OurteamComponent } from './user/home/ourteam/ourteam.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HomeComponent,
    LandingComponent,
    PractiseComponent,
    PractisedetailsComponent,
    ContractComponent,
    OurteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
