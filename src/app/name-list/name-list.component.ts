import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-name-list',
  imports: [],
  templateUrl: './name-list.component.html',
  styleUrl: './name-list.component.css'
})
export class NameListComponent {

  //ta emot listan av genererade namn från appComponent via @Input


  @Input() listOfGeneratedNames: string[] = []

  

}
