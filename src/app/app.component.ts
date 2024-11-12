import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponent } from "./Data/data/data.component";
import { LoaderComponent } from "./Loader/loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lazyLoad';

  isLoading =true;

  constructor(){
    setTimeout (()=>{
      this.isLoading = false
    },3000)
  }
}
