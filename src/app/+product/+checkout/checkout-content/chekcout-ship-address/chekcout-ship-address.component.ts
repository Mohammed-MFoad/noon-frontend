import { IClient } from './../../../../+shared/interfaces/IOrder';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chekcout-ship-address',
  templateUrl: './chekcout-ship-address.component.html',
  styleUrls: ['./chekcout-ship-address.component.scss']
})
export class ChekcoutShipAddressComponent implements OnInit {

  clientInfo: IClient;
  falidAlert: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveClientInfo() {
    const city = (<HTMLInputElement>document.getElementById('city')).value;
    const address = (<HTMLInputElement>document.getElementById('address')).value;
    const mobileNumber = (<HTMLInputElement>document.getElementById('mobile')).value;
    const firstName = (<HTMLInputElement>document.getElementById('firstNamee')).value;
    const lastName = (<HTMLInputElement>document.getElementById('lastNamee')).value;
    console.warn(city + address + mobileNumber + firstName + lastName);

    if (!city || !address || !mobileNumber || !firstName || !lastName) {
      //alert('all fields required');
      this.falidAlert = true;
      return
    }

    this.clientInfo = { city, address, mobileNumber, firstName, lastName }

    localStorage.setItem('clientInfo', JSON.stringify(this.clientInfo));

    this.router.navigate(['checkout/payment']);
  }

}
