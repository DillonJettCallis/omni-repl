import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ExecutorService } from './executor.service'
import { AppComponent, TextFocus } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFocus
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ExecutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
