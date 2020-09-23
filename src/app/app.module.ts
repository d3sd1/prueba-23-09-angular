import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FruitsSectionComponent} from './fruits/fruits-section/fruits-section.component';
import {FruitsService} from './fruits.service';
import {ReactiveFormsModule} from '@angular/forms';
import {FruitListComponent} from './fruits/fruit-list/fruit-list.component';
import {FruitAddComponent} from './fruits/fruit-add/fruit-add.component';
import {FruitsStatisticsComponent} from './fruits/fruits-statistics/fruits-statistics.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MenuComponent} from './menu/menu.component';
import {FruitMenuComponent} from './fruits/fruit-menu/fruit-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    FruitAddComponent,
    FruitsSectionComponent,
    FruitsStatisticsComponent,
    NotFoundComponent,
    MenuComponent,
    FruitMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
