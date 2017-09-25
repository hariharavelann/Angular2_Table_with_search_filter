import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilter implements PipeTransform {
  transform(consultants: any, searchText: any): any {
    if (searchText == null) return consultants;

    return consultants.filter(function (consultant) {
      var companyIndex = consultant.companyname.toLowerCase().indexOf(searchText.toLowerCase());
      if (companyIndex > -1) {
        true;
      }
      var contactIndex = consultant.contactperson.toLowerCase().indexOf(searchText.toLowerCase());
      if (contactIndex > -1) {
        return true;
      }
      var emailIndex = consultant.email.toLowerCase().indexOf(searchText.toLowerCase());
      if (emailIndex > -1) {
        return true;
      }
      var addressIndex = consultant.address.toLowerCase().indexOf(searchText.toLowerCase());
      if (addressIndex > -1) {
        return true;
      }


      var projIndex = -1;
      for(let project of consultant.projects){
        projIndex = project.name.toLowerCase().indexOf(searchText.toLowerCase());
        if (projIndex > -1) {
          return true;
        }
      }

      return false;
    })
  }
}