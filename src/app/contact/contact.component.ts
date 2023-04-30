import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  display : any;
  center: google.maps.LatLngLiteral = { lat: 40.904, lng: 29.142 };
  zoom = 14;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions:google.maps.LatLngLiteral[]= [{ lat: 40.904, lng: 29.142 }];
 
  ngOnInit(): void {
      
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng!= null)
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.display = event.latLng.toJSON();
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON());
  }
        
}
