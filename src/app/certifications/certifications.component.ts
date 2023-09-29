import { Component, OnInit } from '@angular/core';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationComponent implements OnInit {

  Certifications: any[] = [];

    constructor(private certificationService: CertificationService) {}
    
  ngOnInit() : void {
    this.certificationService.getCertifications().subscribe((data: any[]) =>  {
      console.log(data);
      alert(data)

      // Asignar los datos al array trabajo
      this.Certifications = data;
  });
}
}