import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DataTablesService } from './datatable.service';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilter implements PipeTransform {


  taskData = [
    {
      "id": 1,
      "companyname": "Task A",
      "contactperson": "",
      "email": "",
      "address": "",
      "rating": "",
      "projects": [
        {
          "name": "ABC Constructions",
          "rating": "5"
        },
        {
          "name": "KG Foundations",
          "rating": "5"
        }, {
          "name": "SKC Constructions",
          "rating": "4"
        }, {
          "name": "RG Builders",
          "rating": "4"

        }
      ]
    }, {
      "id": 2,
      "companyname": "Task B",
      "contactperson": "",
      "email": "",
      "address": "",
      "rating": "",
      "projects": [
        {
          "name": "ABC Constructions",
          "rating": "5"
        },
        {
          "name": "KG Foundations",
          "rating": "5"
        }, {
          "name": "SKC Constructions",
          "rating": "4"
        }, {
          "name": "RG Builders",
          "rating": "4"

        }]
    }
  ];

  projectData = [{
    "id": 1,
    "companyname": "Gangavaram Port",
    "contactperson": "",
    "email": "",
    "address": "",
    "rating": "",
    "projects": [
      {
        "name": "ABC Constructions",
        "rating": "5"
      },
      {
        "name": "KG Foundations",
        "rating": "5"
      }
    ]
  }, {
    "id": 2,
    "companyname": "Hyderabad Metro",
    "contactperson": "",
    "email": "",
    "address": "",
    "rating": "",
    "projects": [
      {
        "name": "RG Builders",
        "rating": "5"
      },
      {
        "name": "KG Foundations",
        "rating": "5"
      }
    ]
  }, {
    "id": 3,
    "companyname": "Durgapur Airport",
    "contactperson": "",
    "email": "",
    "address": "",
    "rating": "",
    "projects": [
      {
        "name": "ABC Constructions",
        "rating": "5"
      },
      {
        "name": "RG Builders",
        "rating": "5"
      }
    ]
  },
  {
    "id": 4,
    "companyname": "ECR Extn",
    "contactperson": "",
    "email": "",
    "address": "",
    "rating": "",
    "projects": [
      {
        "name": "SKC Constructions",
        "rating": "4"
      }
    ]
  }, {
    "id": 5,
    "companyname": "Vizag Port",
    "contactperson": "",
    "email": "",
    "address": "",
    "rating": "",
    "projects": [
      {
        "name": "SKC Constructions",
        "rating": "4"
      }, {
        "name": "ABC Constructions",
        "rating": "5"
      }
    ]
  }
  ];



  transform(consultants: any, searchText: any): any {
    if (searchText == null) return consultants;


    var result = consultants.filter(function (consultant) {
      var companyIndex = consultant.companyname.toLowerCase().indexOf(searchText.toLowerCase());

      if (companyIndex > -1) {
        return true;
      }

      return false;
    });

    if (result.length === 0) {
      result = this.projectData.filter(function (project) {

        var projIndex = project.companyname.toLowerCase().indexOf(searchText.toLowerCase());
        if (projIndex > -1) {
          return true;
        }
      });
    }

    if (result.length === 0) {
      result = this.taskData.filter(function (task) {
        var taskIndex = task.companyname.toLowerCase().indexOf(searchText.toLowerCase());
        if (taskIndex > -1) {
          return true;
        }
      });
    }

    return result;
  }
}