import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: any[] = [];

    constructor(private workexperienceService: SkillService) {}
    
  ngOnInit() : void {
    this.workexperienceService.getSkill().subscribe((data: any[]) =>  {
      console.log(data);
      alert(data)

      // Asignar los datos al array trabajo
      this.skill = data;
  });
}
}