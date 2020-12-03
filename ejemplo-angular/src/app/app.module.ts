import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { OfertasTrabajoComponent } from './ofertas-trabajo/ofertas-trabajo.component';
import { OfertaComponent } from './oferta/oferta.component';
import { FormLoginComponent } from './form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    OfertasTrabajoComponent,
    OfertaComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
