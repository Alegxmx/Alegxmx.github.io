import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interest.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  interests: any[] = [];

    constructor(private interestService: InterestService) {}
    
  ngOnInit() : void {
    this.interestService.getInterest().subscribe((data: any[]) =>  {
      console.log(data);
      alert(data)

      // Asignar los datos al array trabajo
      this.interests = data;
  });
}
}