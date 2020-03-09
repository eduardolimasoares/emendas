import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ListarEmendasComponent } from './listar-emendas/listar-emendas.component';
import { ApiEmendasService } from './api-emendas.service';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    ListarEmendasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    NgxLoadingModule.forRoot({})
  ],
  providers: [ApiEmendasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
