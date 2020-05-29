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
      "nombre":"batman",
      "imagen":"https://www.cinepremiere.com.mx/wp-content/uploads/2020/05/BATMAN_AFFLECK.jpg",
      "descripcion":"Puro rico con aparaticos",
      "link":"https://www.dccomics.com/characters/batman"
    },
    {
      "nombre":"superman",
      "imagen":"https://hipertextual.com/files/2020/05/hipertextual-henry-cavill-podria-volver-interpretar-superman-2020064819.jpg",
      "descripcion":"un alien bien mamado",
      "link":"https://www.dccomics.com/characters/superman"
    },
    {
      "nombre":"jesus",
      "imagen":"https://thumbs.dreamstime.com/z/jesus-superhero-portrait-123157680.jpg",
      "descripcion":"aceptalo, el mejor :3",
      "link":"https://es.wikipedia.org/wiki/Jes%C3%BAs_de_Nazaret"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
