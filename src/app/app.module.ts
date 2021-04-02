import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioCuentasComponent } from './formulario-cuentas/formulario-cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCuentasComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
