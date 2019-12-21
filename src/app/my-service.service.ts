import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  id: String;
  constructor(private http: HttpClient) { }
  signin(user) {
     
    return this.http.post("https://dashboard.heroku.com/apps/projectappbackend/deploy/github/signin", user);
  }
  signup(userData) {
    return this.http.post("https://dashboard.heroku.com/apps/projectappbackend/deploy/github/signup", userData);
  }
  getColleges() {
    return this.http.get("-https://dashboard.heroku.com/apps/projectappbackend/deploy/github/colleges");

  }
  addColleges(item) {
    return this.http.post("https://dashboard.heroku.com/apps/projectappbackend/deploy/github/colleges/add", item);
  }

  deleteCollege(id) {
    return this.http.post("https://dashboard.heroku.com/apps/projectappbackend/deploy/github/colleges/delete", {id:id});
  }

  editCollege(id) {
    return this.http.post("https://dashboard.heroku.com/apps/projectappbackend/deploy/github/colleges/edit", {id:id});
  }

  updateCollege(colleges) {
    return this.http.post("https://dashboard.heroku.com/apps/projectappbackend/deploy/github/colleges/update", colleges);
  }

  setId(id) {
    this.id = id;
  }
 getId(){
   return this.id;
 }
}
