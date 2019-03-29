import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private firebase : AngularFireDatabase) { }
  customer-list : AngularFirelist<any>;
    form = new FormGroup( {
      $key: new FormControl(null),
      fullname: new FormControl('' , Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('',[ Validators.required, Validators.minLength(8)]),
      location: new FormControl(''),
  });

getcustomer(customer){
  this.customerList = this.firebase.list('customers');
  return this.customerList.snapshotChanges();
}
insertCustomer(customer){
  this.customerList.push({
    fullName: CustomerService.fullName,
    email: CustomerService.email,
    mobile: CustomerService.mobile,
    location: CustomerService.location
  })
}
}
