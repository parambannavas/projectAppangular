import { Component, OnInit } from '@angular/core';
import { ICollege} from '../colleges/college.model';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from "angular-web-storage";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const key = "Status";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  CollegeItem = new ICollege(null, null, null, null, null, null);
  registerForm: FormGroup;
  submitted = false;
  id: String;
  data: any = {};
  constructor(private service :MyServiceService, private router: Router, private local: LocalStorageService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    if (this.local.get(key) != "Success") {
      this.router.navigate(['']);
    }

    else {
      this.id = this.service.getId();
      this.service.editCollege(this.id)
        .subscribe((result) => {
          this.data = JSON.parse(JSON.stringify(result));
          if (this.data.Status == "Success") {
            this.CollegeItem = this.data.college;
            this.registerForm = this.formBuilder.group({
              university : [this.CollegeItem.university, Validators.required],
              category   : [this.CollegeItem.category, Validators.required],
              approval   : [this.CollegeItem.approval, Validators.required],
              entrance   : [this.CollegeItem.entrance, Validators.required],
              updated    : [this.CollegeItem.updated, Validators.required],
              number     : [this.CollegeItem.number, Validators.required]
            });
          }
          else {
            alert("Error");
          }
        });




    }
  }
  get f() { return this.registerForm.controls; };
  onUpdate() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.CollegeItem.university  = this.registerForm.get('university').value;
    this.CollegeItem.category    = this.registerForm.get('category').value;
    this.CollegeItem.approval    = this.registerForm.get('approval').value;
    this.CollegeItem.entrance    = this.registerForm.get('entrance').value;
    this.CollegeItem.updated     = this.registerForm.get('updated').value;
    this.CollegeItem.number      = this.registerForm.get('number').value;

    this.service.updateCollege(this.CollegeItem)
      .subscribe((result) => {
        if (JSON.parse(JSON.stringify(result)).Status == "Success") {
          this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
            this.router.navigate(['colleges'])
          });
        }
        else {
          alert("Failed");
        }
      })
  }


}
