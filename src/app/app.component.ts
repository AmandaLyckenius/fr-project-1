import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NameGeneratorComponent } from "./name-generator/name-generator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NameGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fr-project-1';

  listOfGeneratedNames: string[] = [];  

  addGeneratedNameToList(newName: string){
    this.listOfGeneratedNames.push(newName)
    
  }

}
