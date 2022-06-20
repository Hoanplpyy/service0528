import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'shoppingList',
    component: ShoppingListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
