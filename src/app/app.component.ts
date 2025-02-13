import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NameGeneratorComponent } from "./name-generator/name-generator.component";
import { NameListComponent } from "./name-list/name-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NameGeneratorComponent, NameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fr-project-1';

  listOfGeneratedNames: string[] = [];  

  addGeneratedNameToList(newName: string){    //newName kommer från  parametern event i HTML som skickades med när metoden kallades
    this.listOfGeneratedNames.push(newName)
    
  }

}
