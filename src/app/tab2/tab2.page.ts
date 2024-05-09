import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg,IonCardContent } from '@ionic/angular/standalone';
import { TicketmasterApiService } from '../services/ticketmaster-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
    templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton,IonImg,IonCardContent],
})
export class Tab2Page implements OnInit {
  tickets:any = [];
  venues:any =[];//should get the venue information from the api, thats what im thinking anyways
  event:any;
  constructor(private ticketService:TicketmasterApiService, private router:Router) {


  }

  openTab3Page(){
    this.router.navigate(['/tab3',{item:this.tickets}])
  }


ngOnInit(): void {
  this.ticketService.GetTicketData().subscribe(
    (data)=>{
      this.tickets = data._embedded.events;
    }
  );

  this.ticketService.GetTicketData().subscribe(
    (data)=>{
      this.venues = data._embedded.venues;
    }
  );
  }

  
loadEventDetails(eventId: string) {
  this.ticketService.GetEventDetails(eventId).subscribe((data: any) => {
    this.event = data;
    this.venues = this.extractVenue(data);
  });
}

extractVenue(event: any): string {
  // Extract venue information from event data
  if (event && event._embedded && event._embedded.venues && event._embedded.venues.length > 0) {
    return event._embedded.venues[0].name;
  }
  return 'Venue information not available';
}
}
