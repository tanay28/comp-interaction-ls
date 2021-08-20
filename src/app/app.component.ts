import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data : any;
  parentData : string;
  dataReceived: any;
  mySubscription : Subscription;
  
  constructor( ) {
  }

  ngOnInit(): void {
    this.dataReceived = "";
    if(localStorage.getItem('childToParent') !== null || localStorage.getItem('childToParent') !== '') {
      this.dataReceived = localStorage.getItem('childToParent');
    }
    
  }
  sendData() {
    localStorage.setItem("parentToChild",this.data);
    window.location.reload();
  }

  clearData() {
    localStorage.removeItem("childToParent");
    window.location.reload();
  }
}
