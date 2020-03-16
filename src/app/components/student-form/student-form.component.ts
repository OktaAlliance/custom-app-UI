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
  student = new Student();

  constructor(private http: HttpClient){

  }

  onSubmit() { 
    this.submitted = true; 
    console.log(this.student);
    this.http.post('http://localhost:3000/okta/createUser' , this.student)
    .subscribe(
      (res: Student) => {console.log(res.firstName);}
    );
  }

  ngOnInit() {

  }

}
