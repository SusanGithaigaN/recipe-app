import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent {
  collapsed= true;
  // create an object based on the EventEmitter class
  // enable event to be listened to from outside the component
  @Output() featureSelected = new EventEmitter<string>();


  onSelect(feature: string){
    // emit an event once we click a button
    this.featureSelected.emit(feature);
  }
}
