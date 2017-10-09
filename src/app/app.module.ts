import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';
import { DataTable } from './datatable.component';
import { DataTablesService } from './datatable.service';
import { SearchFilter } from './search.component';
import { ColumnFilter } from './column.filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, DataTable, SearchFilter,ColumnFilter
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DataTablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
