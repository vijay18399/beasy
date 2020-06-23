import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrganizationPageRoutingModule } from './add-organization-routing.module';

import { AddOrganizationPage } from './add-organization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrganizationPageRoutingModule
  ],
  declarations: [AddOrganizationPage]
})
export class AddOrganizationPageModule {}
