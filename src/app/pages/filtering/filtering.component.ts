import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxGridModule,IgxGridComponent         }from "igniteui-angular";
import { FormsModule } from "@angular/forms";
import { DATA } from "./data/nwindData";


@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [
    CommonModule,
	FormsModule,
	IgxGridModule
  ],
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1!: IgxGridComponent;

    public data!: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatCurrency(val: string) {
        return '$' + parseInt(val, 10).toFixed(2);
    }

}
