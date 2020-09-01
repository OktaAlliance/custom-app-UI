import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entities/student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  submitted = false;
  constructor(private http: HttpClient){

  }

  onSubmit(appname) { 
    this.submitted = true; 
    console.log(this.student);
    this.http.get('http://localhost:3000/okta/checkApp?q=' + appname')
    .subscribe(
      (res: appname) => {console.log(res.appname);}
    );
  }

  ngOnInit() {

  }

}
