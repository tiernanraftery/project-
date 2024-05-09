import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketmasterApiService  {

  constructor(private httpClient:HttpClient) { }

  GetTicketData():Observable<any>{
    return this.httpClient.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=uBU6RC42ILrlMnEIp2Vu9DPXqs0b5Xgh')
  }

  GetEventDetails(eventId:string){
    return this.httpClient.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=uBU6RC42ILrlMnEIp2Vu9DPXqs0b5Xgh')
  }

}