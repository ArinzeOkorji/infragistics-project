import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridComponent,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular";
// import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";
// import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import {athletesData} from "./data/athleteData";

@Component({
  selector: 'app-paging',
  standalone: true,
  imports: [
    CommonModule,
    IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule,
  ],
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
  @ViewChild('grid1', { static: true }) grid1!: IgxGridComponent;
  data: any[] = [];
  
  
  ngOnInit() {
    this.data = athletesData;
  }

}
