import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infragistics_project';
  navLinks = [
    {
      name: "Grid 1",
      path: "grid1",
      icon: "unfold_less"
    },
    {
      name: "Grid 2",
      path: "grid2",
      icon: "sort"
    },
    {
      name: "Grid 3",
      path: "grid3",
      icon: "filter_list"
    },
    {
      name: "Grid 4",
      path: "grid4",
      icon: "unfold_less"
    }
  ]
}
