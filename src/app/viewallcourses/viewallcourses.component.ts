import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcourses',
  templateUrl: './viewallcourses.component.html',
  styleUrls: ['./viewallcourses.component.css']
})
export class ViewallcoursesComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
this.myapi.viewCourse().subscribe(
  (data)=>{
    this.courseData=data
  }
)

  }

courseData:any = []

  ngOnInit(): void {
  }

}
