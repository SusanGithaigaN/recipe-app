import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // store feature which should be displayed(navigation)
  loadedFeature = 'recipe'
  // decode where to navigate to
  onNavigate(feature: string){
    this.loadedFeature = feature
  }
}
