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

  taskData = [{

  }];


  dataTableData = [{
    "id": 1,
    "companyname": "ABC Constructions",
    "contactperson": "Sudhakar",
    "email": "Sudhakar@abcconstructions.com",
    "address": "Chennai",
    "rating": "4.5",
    "projects": [
      {
        "name": "Gangavaram Port",
        "rating": "5"
      },
      {
        "name": "Durgapur Airport",
        "rating": "4"
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
    "projects": [
      {
        "name": "Vizag Port",
        "rating": "4"
      },
      {
        "name": "ECR Toll",
        "rating": "4"
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
    "projects": [
      {
        "name": "Gangavaram Port",
        "rating": "3"
      },
      {
        "name": "Hyd Airport exten",
        "rating": "4"
      }
    ]
  }, {
    "id": 4,
    "companyname": "RG Builders",
    "contactperson": "Rahul",
    "email": "Rahul@rgbuilders.com",
    "address": "Mumbai",
    "rating": "3.5",
    "projects": [
      {

        "name": "Subways",
        "rating": "3"
      },
      {
        "name": "Hyderabad Metro",
        "rating": "4"
      }
    ]
  },{
    "id":5,
    "companyname": "Ashrith Shelters Pvt Ltd",
    "contactperson": "Priya",
    "email": "Priya@ashrith.com",
    "address": "Mumbai",
    "rating": "4.5",
    "projects": [
       {
        
        "name": "Lucknow Metro",
        "rating": "5"
      },
      {
        "name": "Odisha Assembly",
        "rating": "4"
      }
    ]
  },
  {
    "id":6,
    "companyname": "KGH Builders",
    "contactperson": "John",
    "email": "john@kghbuilders.com",
    "address": "Mumbai",
    "rating": "3.5",
    "projects": [
       {
        
        "name": "Subways",
        "rating": "3"
      },
      {
        "name": "Chennai Metro",
        "rating": "4"
      }
    ]
  },{
    "id":7,
    "companyname": "Akmal Builders Pvt Ltd",
    "contactperson": "Akmal",
    "email": "akmal@akbuilders.com",
    "address": "Noida",
    "rating": "4",
    "projects": [
       {
        
        "name": "DLF Towers",
        "rating": "4"
      },
      {
        "name": "Head Quarters",
        "rating": "4"
      }
    ]
  },
  {
    "id":8,
    "companyname": "RTO Builders",
    "contactperson": "Rai ",
    "email": "Rai@rtobuilders.com",
    "address": "Noida",
    "rating": "3.5",
    "projects": [
       {
        
        "name": "J & K Tunnel",
        "rating": "3"
      },
      {
        "name": "Cochin Metro",
        "rating": "4"
      }
    ]
  },{
    "id":9,
    "companyname": "Kamal Builders Pvt Ltd",
    "contactperson": "Rajini",
    "email": "rajini@kamalbuilders.com",
    "address": "Chennai",
    "rating": "5",
    "projects": [
       {
        
        "name": "Chennai Airport",
        "rating": "5"
      },
      {
        "name": "SAIL WB",
        "rating": "5"
      }
    ]
  },
  {
    "id":10,
    "companyname": "B K Jain Foundations",
    "contactperson": "Barkha",
    "email": "barkha@bkjfoundations.com",
    "address": "Jaipur",
    "rating": "3.5",
    "projects": [
       {
        
        "name": "J & K Tunnel",
        "rating": "3"
      },
      {
        "name": "Jaipur Metro",
        "rating": "4"
      }
    ]
  },{
    "id":11,
    "companyname": "Shah Constructions",
    "contactperson": "Anil Chandra",
    "email": "acjain@shahconstructions.com",
    "address": "Ahmedabad",
    "rating": "4.5",
    "projects": [
       {
        
        "name": "Ahmedabad Airport",
        "rating": "4"
      },
      {
        "name": "Statue of unity",
        "rating": "5"
      }
    ]
  },
  {
    "id":12,
    "companyname": "AK Foundations",
    "contactperson": "Jignesh",
    "email": "jignesh@akfoundations.com",
    "address": "Ahmedabad",
    "rating": "4",
    "projects": [
       {
        
        "name": "Ahmedabad Airport",
        "rating": "4"
      },
      {
        "name": "Statue of unity",
        "rating": "4"
      }
    ]
  }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }
}
