import { Routes } from '@angular/router';
import { LoaderComponent } from './Loader/loader/loader.component';
import { DataComponent } from './Data/data/data.component';

export const routes: Routes = [
    {path:'load',component:LoaderComponent},
    {path:'data',component:DataComponent}
];
