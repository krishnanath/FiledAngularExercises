import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './exercises/typescript/typescript.component';
import { NgrxComponent } from './exercises/ngrx/ngrx.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TypescriptComponent,
    NgrxComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
