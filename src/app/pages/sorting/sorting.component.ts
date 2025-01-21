import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSortingStrategy, IgxGridComponent, ISortingOptions, SortingDirection } from 'igniteui-angular';
import { DATA } from './data/localData';
import { 
	IgxGridModule,
	IgxIconModule,
	IgxRippleModule,
	IgxInputGroupModule,
	IgxSelectModule,
	IgxSimpleComboModule,
	IgxButtonModule
 } from "igniteui-angular";

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [
    CommonModule,
    IgxGridModule,
    IgxIconModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    IgxButtonModule],
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;
  public data!: any[];
  public sortingTypes: ISortingOptions[] = [
      {
          mode: 'single'
      }, {
          mode: 'multiple'
      }
  ];
  public sortingOptions: ISortingOptions = this.sortingTypes[1];

  constructor() { }

  public ngOnInit(): void {
      this.data = DATA;
  }

  public ngAfterViewInit(): void {
    this.grid1.sortingExpressions = [
        {
            dir: SortingDirection.Asc, fieldName: 'CategoryName',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance()
        }
    ];
}

public formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
}

handleSearchResults(event: KeyboardEvent) {
    event.preventDefault();
}

}
