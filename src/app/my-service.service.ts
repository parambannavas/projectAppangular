import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  id: String;
  constructor(private http: HttpClient) { }
  signin(user) {
     
    return this.http.post("https://projectappbackend.herokuapp.com/signin", user);
  }
  signup(userData) {
    return this.http.post("https://projectappbackend.herokuapp.com/signup", userData);
  }
  getColleges() {
    return this.http.get("https://projectappbackend.herokuapp.com/colleges");

  }
  addColleges(item) {
    return this.http.post("https://projectappbackend.herokuapp.com/colleges/add", item);
  }

  deleteCollege(id) {
    return this.http.post("https://projectappbackend.herokuapp.com/colleges/delete", {id:id});
  }

  editCollege(id) {
    return this.http.post("https://projectappbackend.herokuapp.com/colleges/edit", {id:id});
  }

  updateCollege(colleges) {
    return this.http.post("https://projectappbackend.herokuapp.com/colleges/update", colleges);
  }

  setId(id) {
    this.id = id;
  }
 getId(){
   return this.id;
 }
}
