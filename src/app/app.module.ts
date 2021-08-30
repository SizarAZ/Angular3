import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DebtorComponent } from './debtor/debtor.component';
import { LoaninfoComponent } from './loaninfo/loaninfo.component';
import { LoanofferComponent } from './loanoffer/loanoffer.component';
import { ModalComponent } from './modal/modal.component';
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DebtorComponent,
    LoaninfoComponent,
    LoanofferComponent,
    ModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
