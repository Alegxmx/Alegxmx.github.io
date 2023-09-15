import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../services/work_experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent implements OnInit {
	
  constructor(private work_experience: WorkExperience) {}

  workExperiences: any[] = [];

  ngOnInit(): void {
    this.work_experience.getWorkExperience()
    .subscribe( (data: any) => {
      this.workExperiences = data;
	  });
  }
}