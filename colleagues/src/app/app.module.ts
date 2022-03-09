import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ColleagueCardComponent } from './components/colleague-card/colleague-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ColleagueListComponent,
    ColleagueCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
