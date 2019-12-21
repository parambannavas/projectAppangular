import { Component, OnInit } from '@angular/core';
import { ICollege} from '../colleges/college.model';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from "angular-web-storage";
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
const key = "Status";

@Component({
  selector: 'app-addcolleges',
  templateUrl: './addcolleges.component.html',
  styleUrls: ['./addcolleges.component.css']
})
export class AddcollegesComponent implements OnInit {

  entrances;
  CollegeItem = new ICollege(null,null,null,null,null,null);
  registerForm: FormGroup;
  submitted = false;


  Entrances() {
    var allEntrances = '+2 mark based  ,    KEAM ,    B.Arch,\
    NCHMCT JEE  , NIMCET  ,  NEET  ,  JEE  ,   CAT ,   CUCET , CUSAT  ,   KAU  ,  CLAT  ,  IIST '
    
    
    ;
    this.entrances =  allEntrances.split(/, +/g).map( function (entrance) {
       return {
          value  : entrance,
          display: entrance
       };
    });
  } 
  constructor(private myService: MyServiceService, private router: Router, private local: LocalStorageService, private formBuilder: FormBuilder) { 
      this.Entrances(); 
    
      
    } 
    
    // var allCategories = 'Engg & Technology  ,    Management, 	Architecture & Town Planning,\
    // Pharmacy  , Hotel Management  ,  MCA    ,    Arts & Science   ,  Research  , Agriculture ';

   ngOnInit() {
    if (this.local.get(key) != "Success") {
      this.router.navigate(['']);
    }
    else {
      this.registerForm = this.formBuilder.group({
        number     : ['', Validators.required],
        university : ['', Validators.required],
        category   : ['', Validators.required],
        approval   :new FormControl('', Validators.required),
        entrance   :new FormControl('', Validators.required),
        updated    :new FormControl('', Validators.required)
      });
    }
  }
  status: String;

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.CollegeItem.number   = this.registerForm.get('number').value; 
    this.CollegeItem.university=this.registerForm.get('university').value;
    this.CollegeItem.category=this.registerForm.get('category').value;
    this.CollegeItem.approval=this.registerForm.get('approval').value;
    this.CollegeItem.entrance=this.registerForm.get('entrance').value;
    this.CollegeItem.updated=this.registerForm.get('updated').value;
    

    this.myService.addColleges(this.CollegeItem)
      .subscribe((dataSource) => {
        console.log(JSON.parse(JSON.stringify(dataSource)).Status);
        this.status = JSON.parse(JSON.stringify(dataSource)).Status;
        if (this.status == "Success") {
          this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['colleges']);})
        }
        else {
          alert(this.status);
        }


      });
      
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }



}
