import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component'
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListDetailComponent } from './components/item-list-detail/item-list-detail.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { SpellDetailComponent } from './components/spell-detail/spell-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemListComponent,
    ItemListDetailComponent,
    MonsterDetailComponent,
    SpellDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
