import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import{ReactiveFormsModule} from '@angular/forms';
import {AngularWebStorageModule} from 'angular-web-storage';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddcollegesComponent } from './addcolleges/addcolleges.component';
import { CollegesComponent } from './colleges/colleges.component';
import { EditComponent } from './edit/edit.component';
import {RatingModule} from 'ngx-bootstrap';
import {MatButtonModule,MatIconModule,MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatInputModule,MatFormFieldModule} from '@angular/material';
import { BestCollegeComponent } from './bestCollege/bestCollege.component';
import {MatTooltipModule} from '@angular/material';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipe} from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDatepickerModule,MatNativeDateModule, MatSelectModule} from '@angular/material' 
import { MatTableModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material'
import {MatSortModule } from '@angular/material';
import { HttpClient} from '@angular/common/http';
import {MatRadioModule} from '@angular/material'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AddcollegesComponent,
    CollegesComponent,
    EditComponent,
    BestCollegeComponent,
    FilterPipe,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule,
    FormsModule,
    AngularWebStorageModule,
    ReactiveFormsModule,RatingModule,
    MatButtonModule,MatIconModule, MatAutocompleteModule,
    MatInputModule,MatTooltipModule,OrderModule
    ,Ng2SearchPipeModule,NgxPaginationModule ,MatDatepickerModule,MatNativeDateModule,
    MatPaginatorModule,MatTableModule,MatSortModule
    ,MatFormFieldModule,MatCardModule, MatSelectModule,MatRadioModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
