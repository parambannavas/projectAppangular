import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { LocalStorageService } from "angular-web-storage";
export interface CollegeData {
  ranking: String;
  college: String;
  district: String;
  courses:String;
}
const key = "Status";
const district: String[] = ['Thiruvananthapuram', '	Kochi', 'Kottayam', 'Thiruvananthapuram', 'Calicut', 'Thiruvananthapuram', 'Kannur'

,'Malappuram', 'Thiruvananthapuram', 'Thrissur ', 'Thiruvananthapuram', 'Kasaragod', 'Thrissur', 'Wayanadu', 'Malappuram','Kochi','Kochi','Kochi','Thrissur','Kottayam'];
const college: String[] = ['	University of Kerala', 'Cochin University of Science and Technology','	Mahatma Gandhi University', '	APJ Abdul Kalam Technological University', 'National Institute of Technology', 'Indian Institute of Space Science and Technology', '	Kannur University', '	University of Calicut',
  'Indian Institute of Science Education and Research', 'Kerala Agricultural University', 'Sree Chitra Thirunal Institute of Medical Sciences and Technology', 'Central University of Kerala', 'Kerala University of Health Sciences', 'Kerala Veterinary and Animal Sciences University', 'Thunchath Ezhuthachan Malayalam University'
,'Kerala University of Fisheries and Ocean Studies','Sree Sankaracharya University of Sanskrit','	The National University of Advanced Legal Studies','Kerala Kalamandalam','	Indian Institute of Information Technology'];
const  courses: String[] = ['Engineering','Medical', 'Management' ,'Ocean Studies' ,'Arts and science','Vetinary' ,'Space science','Research','Linguistic','Agriculture' ,'Law','Arts',"I.T"]
@Component({
  selector: 'app-bestCollege',
  templateUrl: './bestCollege.component.html',
  styleUrls: ['./bestCollege.component.css']
})
export class  BestCollegeComponent implements OnInit {
  
  
  displayedColumns: string[] = ['ranking','college', 'courses','district'];
  dataSource: MatTableDataSource<CollegeData>;

  ranking: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public local: LocalStorageService, private router: Router) {
    
    this.ranking = Array.from({ length: 20 }, (_, k) => getCollege(k + 1));
    // Assign the data to the data source
    this.dataSource = new MatTableDataSource(this.ranking);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.local.get(key) != "Success") {
      this.router.navigate(['']);
    } 
  }
  signout() {
    this.local.remove(key);
    this.router.navigate(['']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

//This function will create employee
function getCollege(Ranking: number): CollegeData {
  const name =
  college[Math.round(Math.random() * (college.length - 1))]   ;

  return {
    ranking : Ranking.toString(),
    college : name,
    district: district[Math.round(Math.random() * (district.length - 1))],
    courses : courses[Math.round(Math.random() * (courses.length - 1))]
  };



}
