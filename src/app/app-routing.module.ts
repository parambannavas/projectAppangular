import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Signin } from './signin/signin.model';
import { AddcollegesComponent } from './addcolleges/addcolleges.component';
import { CollegesComponent } from './colleges/colleges.component';
import { EditComponent } from './edit/edit.component';
import{BestCollegeComponent} from'./bestCollege/bestCollege.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"signin", component:SigninComponent},{path:"signup",component:SignupComponent},{path:"addcolleges",component:AddcollegesComponent},{path:"colleges",component:CollegesComponent},{path:"edit",component:EditComponent},{path:"bestCollege",component:BestCollegeComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
