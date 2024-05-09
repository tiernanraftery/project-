
import { Component, OnInit } from '@angular/core';
//add imports
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg } from '@ionic/angular/standalone';
import { TicketmasterApiService } from '../services/ticketmaster-api.service';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton,IonImg],
})
export class Tab1Page implements OnInit {
  // store the tickets and images details fetched from the Ticketmaster API.
  tickets:any = [];
  //images doesnt seem to be working 
  images:any = [];

  constructor(private ticketService:TicketmasterApiService, private router:Router) {

  }

  openTab2Page(){
    this.router.navigate(['/tab2',{item:this.tickets}])
  }


ngOnInit(): void {
  this.ticketService.GetTicketData().subscribe(
    (data)=>{
      this.tickets = data._embedded.events;
    }
  );

  //subscribe from the data of ticketdata
  this.ticketService.GetTicketData().subscribe(
    (data2)=>{
      this.images = data2._embedded.events.images;
    }
  );
}

}
