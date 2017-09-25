import { Component, OnInit,Pipe } from '@angular/core';
import { DataTablesService } from './datatable.service';
import { SearchFilter } from './search.component';



@Component({
  selector: 'data-tables',
  templateUrl: './datatable.html'
})
export class DataTable {

  data;
  constructor(private service: DataTablesService) {
    this.service.getData().then((data) => {
      this.data = data;
    });
  }

}