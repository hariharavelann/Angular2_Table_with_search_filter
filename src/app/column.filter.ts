import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DataTablesService } from './datatable.service';

@Pipe({
    name: 'columnfilter'
})

@Injectable()
export class ColumnFilter implements PipeTransform {

    transform(columns: any, searchText: any): any {
        if (searchText == null || searchText.length === 0) return columns;
    }
}