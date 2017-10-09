import { Component, OnInit, Pipe } from '@angular/core';
import { DataTablesService } from './datatable.service';
import { SearchFilter } from './search.component';
import { ColumnFilter } from './column.filter';



@Component({
  selector: 'data-tables',
  templateUrl: './datatable.html',
  styleUrls: ['./datatable.css']
})
export class DataTable {
  display = "hide";
  collapseIcon = "glyphicon glyphicon-chevron-right";
  data;
  columns;
  constructor(private service: DataTablesService) {
    this.service.getData().then((data) => {
      this.data = data;
    });

    this.service.getColumns().then((columns) => {
      this.columns = columns;
    });

  }

  toggleTaskDisplay(itemId, projectId) {
    console.log(projectId + 'item id ' + itemId);
    var currentState = this.data[itemId - 1].projects[projectId - 1].display;
    var currentIcon = this.data[itemId - 1].projects[projectId - 1].collapseIcon;
    if (currentState === "hide") {
      this.data[itemId - 1].projects[projectId - 1].display = "show";
      this.data[itemId - 1].projects[projectId - 1].collapseIcon = "glyphicon glyphicon-chevron-down";
    }
    else {
      this.data[itemId - 1].projects[projectId - 1].display = "hide";
      this.data[itemId - 1].projects[projectId - 1].collapseIcon = "glyphicon glyphicon-chevron-right";
    }
  }

  toggleDisplay(id) {
    var currentState = this.data[id - 1].display;
    var currentIcon = this.data[id - 1].collapseIcon;
    if (currentState === "hide") {
      this.data[id - 1].display = "show";
      this.data[id - 1].collapseIcon = "glyphicon glyphicon-chevron-down";
    }
    else {
      this.data[id - 1].display = "hide";
      this.data[id - 1].collapseIcon = "glyphicon glyphicon-chevron-right";
      for (var index = 0; index < this.data[id - 1].projects.length; index++) {
        this.data[id - 1].projects[index].display = "hide";
        this.data[id - 1].projects[index].collapseIcon = "glyphicon glyphicon-chevron-right";
      }
    }
  }

}