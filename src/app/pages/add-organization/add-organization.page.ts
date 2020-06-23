import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.page.html',
  styleUrls: ['./add-organization.page.scss'],
})
export class AddOrganizationPage implements OnInit {
  name = '';
  constructor() { }
 
  ngOnInit() {
  }
submit(){
  alert(this.name);
}

}
