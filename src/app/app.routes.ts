import { Routes } from '@angular/router';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
import { NameListComponent } from './name-list/name-list.component';

export const routes: Routes = [
    {path: "name-generator", component: NameGeneratorComponent},
    {path: "name-list", component: NameListComponent}
];
