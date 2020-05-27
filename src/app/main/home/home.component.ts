import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  index="hola mundo!!!";
  bandera=true;

  heroes=[
    {
      "nombre":"superman",
      "imagen":"https://www.cinepremiere.com.mx/wp-content/uploads/2020/05/BATMAN_AFFLECK.jpg"
    },
    {
      "nombre":"superman",
      "imagen":"https://www.cinepremiere.com.mx/wp-content/uploads/2020/05/BATMAN_AFFLECK.jpg"
    },
    {
      "nombre":"superman",
      "imagen":"https://www.cinepremiere.com.mx/wp-content/uploads/2020/05/BATMAN_AFFLECK.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
