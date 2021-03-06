import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChildCommService } from './components/child-comm.service';
import { MyCallService } from './services/my-call.service';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { PopListComponent } from './components/pop-list/pop-list.component';
import { JsonTableComponent } from './components/json-table/json-table.component';

import { HttpClientModule } from '@angular/common/http';

import { TabsModule } from 'ngx-bootstrap';
import { PipeSortComponent } from './components/pipe-sort/pipe-sort.component';
import { AscSortPipe } from './pipes/asc-sort.pipe';
import { ActiveFilterComponent } from './components/active-filter/active-filter.component';
import { ActFilterPipe } from './pipes/act-filter.pipe';
import { MyComponentComponent } from './components/my-component/my-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    PopListComponent,
    JsonTableComponent,
    PipeSortComponent,
    AscSortPipe,
    ActiveFilterComponent,
    ActFilterPipe,
    MyComponentComponent
  ],
  imports: [
    TabsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChildCommService, MyCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
