import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  txtChildData: any;
  dataReceived: any;
  messageFromParent : any;

 
  constructor() { }

  ngOnInit(): void {
    this.txtChildData = "";
    this.messageFromParent = "";
    if(localStorage.getItem("parentToChild") !== null || localStorage.getItem("parentToChild") !== '') {
      this.messageFromParent = localStorage.getItem("parentToChild");
    }
  }

  sendDataToParent() {
    localStorage.setItem("childToParent",this.txtChildData);
    window.location.reload();
  }

  clearData() {
    localStorage.removeItem("parentToChild");
    window.location.reload();
  }
}
