import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  bares = [];
  constructor(public firebaseService: FirebaseService) {}


  ngOnInit() {
    this.firebaseService.getBares().subscribe((res) => this.bares = res);
  }

}
