import { Component, OnInit, ViewChild  } from '@angular/core';
import { LocalStorageService } from "angular-web-storage";
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { ICollege } from './college.model';
import {  MatTableDataSource} from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
const key = "Status";
export interface ICollege {
        number    :Number,
        university:String,
        category:String,
        approval:String,
        entrance:String,
        updated:String,
}

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {
 

 displayedColumns: any[] = ['number','category','university', 'approval', 'entrance','updated','actions'];
  dataSource:any = new MatTableDataSource([]);
  


  constructor(public local: LocalStorageService, private router: Router, private myService: MyServiceService) {
  
  }
  signout() {
    this.local.remove(key);
    this.router.navigate(['']);
  }
  ngOnInit() {
    if (this.local.get(key) != "Success") {
      this.router.navigate(['']);
    } else {
      
      this.myService.getColleges()
        .subscribe((result) => { this.dataSource = JSON.parse(JSON.stringify(result)).colleges ;
          
        });
        
      
    }

  }

  Status: String;
  colleges: ICollege[];
  edit:string;
  max:Number=5;
  p:Number;
  editClick(id){
    
    this.myService.setId(id);
    this.router.navigate(['edit']);
  }

  deleteClick(id){
    this.myService.deleteCollege(id)
    .subscribe((result)=>{
      if(JSON.parse(JSON.stringify(result)).Status=="Success"){
      
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['colleges'])});
      }
      else{
        alert("Error");
      }
    })
  }

 


}





