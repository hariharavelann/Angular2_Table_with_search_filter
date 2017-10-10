import { Injectable } from '@angular/core';

@Injectable()
export class DataTablesService {

  projectData = [{
    "pid": 1,
    "name": "Gangavaram Port",
    "Subconsultants": [
      {
        "id": 1,
        "name": "ABC Constructions",
        "rating": "5"
      },
      {
        "id": 3,
        "name": "KG Foundations",
        "rating": "5"
      }
    ]
  }];



  dataTableData = [{
    "id": 1,
    "companyname": "ABC Constructions",
    "contactperson": "Sudhakar",
    "email": "Sudhakar@abcconstructions.com",
    "address": "Chennai",
    "rating": "4.66",
    "collapseIcon": "glyphicon glyphicon-chevron-right",
    "display": "hide",
    "projects": [
      {
        "id": 1,
        "name": "Gangavaram Port",
        "rating": "5",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }
        ]
      },
      {
        "id": 2,
        "name": "Durgapur Airport",
        "rating": "4",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      }, {
        "id": 3,
        "name": "Vizag Port",
        "rating": "5",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      }
    ]
  },
  {
    "id": 2,
    "companyname": "SKC Constructions",
    "contactperson": "Kumar",
    "email": "kumar@skcconstructions.com",
    "address": "Chennai",
    "rating": "4",
    "collapseIcon": "glyphicon glyphicon-chevron-right",
    "display": "hide",
    "projects": [
      {
        "id": 1,
        "name": "Vizag Port",
        "rating": "4",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      },
      {
        "id": 2,
        "name": "ECR Extn",
        "rating": "4",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      }
    ]
  },
  {
    "id": 3,
    "companyname": "KG Foundations",
    "contactperson": "Srinivas",
    "email": "srini@kgfoundations.com",
    "address": "Hyderabad",
    "rating": "3.5",
    "collapseIcon": "glyphicon glyphicon-chevron-right",
    "display": "hide",
    "projects": [
      {
        "id": 1,
        "name": "Gangavaram Port",
        "rating": "3",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      },
      {
        "id": 2,
        "name": "Hyderabad Metro",
        "rating": "4",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      }
    ]
  }, {
    "id": 4,
    "companyname": "RG Builders",
    "contactperson": "Rahul",
    "email": "Rahul@rgbuilders.com",
    "address": "Mumbai",
    "rating": "3.5",
    "collapseIcon": "glyphicon glyphicon-chevron-right",
    "display": "hide",
    "projects": [
      {
        "id": 1,
        "name": "Durgapur Airport",
        "rating": "3",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      },
      {
        "id": 2,
        "name": "Hyderabad Metro",
        "rating": "4",
        "collapseIcon": "glyphicon glyphicon-chevron-right",
        "display": "hide",
        "tasks": [
          {
            "id": 1,
            "name": "Task A"
          }, {
            "id": 2,
            "name": "Task B"
          }]
      }
    ]
  }
  ];

  columns = [

    "Company Name",
    "Contact Person",
    "Email",
    "Address",
    "Rating"
  ];

  getProjectData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.projectData);
      }, 2000);
    });
  }



  getColumns(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.columns);
      }, 2000);
    });
  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }
}
