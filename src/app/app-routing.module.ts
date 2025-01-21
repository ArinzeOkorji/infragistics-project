import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagingComponent } from './pages/paging/paging.component';
import { SortingComponent } from './pages/sorting/sorting.component';
import { FilteringComponent } from './pages/filtering/filtering.component';
import { EditingComponent } from './pages/editing/editing.component';

const routes: Routes = [
  {
    path: "grid1",
    loadComponent: ()=> PagingComponent,
  },
  {
    path: "grid2",
    loadComponent: ()=> SortingComponent,
  },
  {
    path: "grid3",
    loadComponent: ()=> FilteringComponent,
  },
  {
    path: "grid4",
    loadComponent: ()=> EditingComponent,
  },
  {
    path: "",
  redirectTo: "grid1",
  pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
