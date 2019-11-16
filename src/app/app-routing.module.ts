import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonsterDetailComponent} from './components/monster-detail/monster-detail.component'
import {ItemDetailComponent} from './components/item-detail/item-detail.component'
import {SpellDetailComponent} from './components/spell-detail/spell-detail.component' 

const routes: Routes = [
{ path: 'monsters/1', component: MonsterDetailComponent },
{ path: 'spells/1', component: SpellDetailComponent },
{ path: 'items/1', component:ItemDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
