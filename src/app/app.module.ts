import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';

import { FormsModule } from '@angular/forms';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { CartComponent } from './cart/cart.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
import { InputNumberComponent } from './input-number/input-number.component';

import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-AR');
@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BreweryAboutComponent,
    BreweryBeersComponent,
    CartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
