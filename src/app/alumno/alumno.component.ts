import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  IsBold: boolean = true;
  IsItalic: boolean = true;

  constructor() { }
  alumnos = [
    {
      nombre: "Sabrina Taramasco",
     cursos: [
       { materia: "Historia del Arte", nota: 5 },
       { materia: "Literatura", nota: 8 },
       { materia: "Ciencias", nota: 6 },
       { materia: "Idiomas", nota: 9 }
      ]
     },
    {
      nombre: "Daniel Martinez",
    cursos: [
    { materia: "Historia del Arte", nota: 3 },
    { materia: "Literatura", nota: 7 },
    { materia: "Ciencias", nota: 10 },
    { materia: "Idiomas", nota: 5 }
  ]
   },
    {
      nombre: "Adriana Sosa",
     cursos: [
       { materia: "Historia del Arte", nota: 9 },
       { materia: "Literatura", nota: 2 },
       { materia: "Ciencias", nota: 8 },
       { materia: "Idiomas", nota: 7 }
      ],
    }
    ]

}

