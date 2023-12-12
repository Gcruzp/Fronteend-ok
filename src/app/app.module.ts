import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagAPIComponent } from './pag-api/pag-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { CasePipe } from './case.pipe';
import { StreamingComponent } from './streaming/streaming.component';
import { SobreComponent } from './sobre/sobre.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PagAPIComponent,
    CasePipe,
    StreamingComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
