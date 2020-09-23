import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FruitsSectionComponent} from './fruits/fruits-section/fruits-section.component';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MenuComponent} from './menu/menu.component';
import {FruitMenuComponent} from './fruits/fruit-menu/fruit-menu.component';
import {FruitAddComponent} from './fruits/fruit-add/fruit-add.component';
import {FruitListComponent} from './fruits/fruit-list/fruit-list.component';
import {FruitsStatisticsComponent} from './fruits/fruits-statistics/fruits-statistics.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/init'
  },
  {
    path: 'init',
    // pathMatch: 'full',
    component: MenuComponent,
    children: [
      {
        path: 'fruits',
        // pathMatch: 'full',
        component: FruitMenuComponent,
        children: [
          {
            path: 'add',
            component: FruitAddComponent,
          },

          {
            path: 'list',
            component: FruitListComponent,
          },

          {
            path: 'stats',
            component: FruitsStatisticsComponent,
          },
          {
            path: 'section',
            component: FruitsSectionComponent,
          }
        ]
      }
    ]
  },


  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
