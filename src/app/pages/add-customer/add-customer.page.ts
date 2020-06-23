import { Component, OnInit } from '@angular/core';
import { Contacts } from '@ionic-native/contacts';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {
  regex = /^[+0-9 ]+$/ ;
  users = [];
  mynumber = '';
  backup = [];
  allContacts = [];
  r = [
    {
      '_objectInstance': {
     
        'displayName': 'Vijay',
        'phoneNumbers': [
          {
            'id': '5',
            'pref': false,
            'value': '6301832161',
            'type': 'mobile'
          }
        ],
        
  
      },
      'rawId': '1'
    },
    {
      '_objectInstance': {
     
        'displayName': 'daddy',
        'phoneNumbers': [
          {
            'id': '5',
            'pref': false,
            'value': '9912939959',
            'type': 'mobile'
          }
        ],
        
  
      },
      'rawId': '4'
    },
    {
      '_objectInstance': {
        'displayName': 'srujana',
        'phoneNumbers': [
          {
            'id': '10',
            'pref': false,
            'value': '9963219564',
            'type': 'mobile'
          }
        ],
      },
      'rawId': '2'
    }
  ];
  x = '';
  mydata = null;
  constructor(private contacts: Contacts, public loadingController: LoadingController) {
this.loadData();
   }
  async  getAllContacts() {
    const loading = await this.loadingController.create();
    loading.present();
    this.contacts.find(['displayName', 'phoneNumbers'], {filter: '', multiple: true})
    .then(data => {
      // tslint:disable-next-line: max-line-length
      this.allContacts = data.filter(x => x.phoneNumbers != null &&  x.displayName != null   );
      this.backup = this.allContacts;
      //this.mydata =  JSON.stringify(this.allContacts);
      loading.dismiss();
  });
}
onSearchTerm(ev: CustomEvent) {
    
  const val = ev.detail.value;
  console.log(val);
  if (val && val.trim() !== '') {
    this.allContacts = this.allContacts.filter(term => {
      return term._objectInstance.displayName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
    });
  } else {
         this.allContacts = this.backup;    }
}

 Contactparser(str) {
  str = str.split(' ').join('');
  str = str.slice(str.length - 10);
  return str ;
}

  ngOnInit() {
  }
  loadData() {
   
    this.getAllContacts();
  
    }

}
