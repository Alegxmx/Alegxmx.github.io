import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
   constructor(private headerService: HeaderService) {}

   name : string = "Erick Barrena";
   titulos : string = "PhD";
   mision : string = "ser competitivo internacionalmente";
   foto : string = "https://firebasestorage.googleapis.com/v0/b/mycv-codigyx.appspot.com/o/photo_2023-02-02_22-21-48.jpg?alt=media&token=d3e3c558-22be-49d0-bbc5-56f1d4e6a76d";

   ngOnInit(): void {
	 this.headerService.getHeader()
	 .subscribe( (data: any) => {
	   console.log(data);
	   //alert(data);
	   this.name = data.name;
	   this.titulos = data.titulos;
	   this.foto = data.foto;
	   });
   }
}
