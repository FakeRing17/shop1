import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HelloComponent } from './hello.component';
import { ProducServiceService } from './produc-service.service';
import { ProducComponent } from './produc/produc.component';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, ProducComponent, CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule
  ],
  providers: [ProducServiceService],
  bootstrap: [AppComponent, CardComponent]
})
export class AppModule { }
